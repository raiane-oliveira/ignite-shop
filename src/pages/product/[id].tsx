import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'
import Image from 'next/image'

import { GetStaticPaths, GetStaticProps } from 'next'
import { stripe } from '@/lib/stripe'

import Stripe from 'stripe'
import axios from 'axios'
import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Loading } from '@/components/Loading'
import { Container } from '@/styles/pages/app'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    priceId: string
    quantity: number
  }
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const { isFallback } = useRouter()

  if (isFallback) {
    return <Loading />
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        cartItems: [product],
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      alert('Falha ao redirecionar para o checkout!')
      setIsCreatingCheckoutSession(false)
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button
            disabled={isCreatingCheckoutSession}
            onClick={handleBuyProduct}
          >
            Comprar agora
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_OLwkumWjSvEh09' } }],
    fallback: true,
  }
}

// O 1 parâmetro do Generic de GetStaticProps é a tipagem de props
// O segundo é a tipagem dos nossos params
export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
    // Não precisamos mais colocar 'data.' pois estamos requisitando
    // um único produto
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format((price.unit_amount as number) / 100),
        description: product.description,
        priceId: price.id,
        quantity: 1,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
