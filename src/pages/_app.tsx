import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app'
import type { AppProps } from 'next/app'

import { Roboto } from 'next/font/google'

import { CartProvider } from 'use-shopping-cart'
import { Header } from '@/components/Header'

globalStyles()

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.STRIPE_PUBLIC_KEY}
      successUrl={`${process.env.NEXT_URL}/success`}
      cancelUrl={`${process.env.NEXT_URL}/`}
      currency="BRL"
      shouldPersist
    >
      <Container className={roboto.className}>
        <Header />
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
