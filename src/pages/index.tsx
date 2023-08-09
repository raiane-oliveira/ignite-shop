import { HomeContainer, Product } from '@/styles/pages/home'
import { useKeenSlider } from 'keen-slider/react'

import Link from 'next/link'
import Image from 'next/image'

import Stripe from 'stripe'

import { stripe } from '@/lib/stripe'
import { GetStaticProps } from 'next'

import 'keen-slider/keen-slider.min.css'
import Head from 'next/head'
import { useShoppingCart } from 'use-shopping-cart'
import { priceFormatter } from '@/utils/format-price'
import { Cart } from '@/components/Cart'
import { Product as ProductShoppingCart } from 'use-shopping-cart/core'

interface Product {
  id: string
  name: string
  imageUrl: string
  price: number
  currency: string
  sku: string
  price_id: string
}

interface HomeProps {
  products: Product[]
}

export default function Home({ products }: HomeProps) {
  const { addItem, cartDetails } = useShoppingCart()

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.8,
      spacing: 48,
    },
  })

  const productsInCart: ProductShoppingCart[] = Object.values(cartDetails)

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          const productInCart = productsInCart.find(
            (productCart) => productCart.id === product.id,
          )

          return (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} alt="" width={520} height={480} />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{priceFormatter.format(product.price)}</span>
                  </div>

                  <Cart.Root>
                    <Cart.Trigger
                      green
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      onClick={(e: any) => {
                        e.preventDefault()
                        addItem(product)
                      }}
                    >
                      {productInCart?.quantity >= 1 && (
                        <Cart.Amount amount={productInCart.quantity} />
                      )}
                    </Cart.Trigger>
                  </Cart.Root>
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100,
      currency: price.currency,
      sku: product.id,
      price_id: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
