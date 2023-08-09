import { stripe } from '@/lib/stripe'
import {
  ImageBg,
  ImageContainer,
  SuccessContainer,
} from '@/styles/pages/success'
import { GetServerSideProps } from 'next'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'

interface SuccessProps {
  customerName: string
  products: {
    name: string
    imageUrl: string
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ImageContainer>
          {products.map((product) => {
            return (
              <ImageBg key={product.imageUrl}>
                <Image src={product.imageUrl} alt="" width={130} height={130} />
              </ImageBg>
            )
          })}
        </ImageContainer>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>,{' '}
          {products.length === 1 ? (
            <>
              sua <strong>{products[0].name}</strong> já está a caminho da sua
              casa.
            </>
          ) : (
            `sua compra de ${products.length} camisetas já está a caminho da sua casa.`
          )}
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false, // Falso pois não é sempre que entrarmos na rota que ela será redirecionada
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details.name
  const products = session.line_items.data.map((product) => {
    const productPriceInfo = product.price.product as Stripe.Product

    return {
      name: productPriceInfo.name,
      imageUrl: productPriceInfo.images[0],
    }
  })

  return {
    props: {
      customerName,
      products,
    },
  }
}
