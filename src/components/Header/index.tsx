import Link from 'next/link'
import Image from 'next/image'

import logoImg from '@/assets/logoImg.svg'

import { Cart } from '../Cart'
import { useShoppingCart } from 'use-shopping-cart'
import { HeaderContainer } from './styles'

export function Header() {
  const { cartCount } = useShoppingCart()

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      <Cart.Root>
        <Cart.Trigger>
          {cartCount >= 1 && <Cart.Amount amount={cartCount} />}
        </Cart.Trigger>

        <Cart.List />
      </Cart.Root>
    </HeaderContainer>
  )
}
