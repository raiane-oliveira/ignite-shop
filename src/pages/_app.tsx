import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'
import type { AppProps } from 'next/app'

import logoImg from '@/assets/logoImg.svg'
import Image from 'next/image'
import Link from 'next/link'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
