import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'

import {
  ButtonCheckoutCart,
  CartCheckoutContainer,
  CartDetailsPrice,
  CloseShoppingCartList,
  DescriptionProductCart,
  ImgContainerProduct,
  ProductCart,
  ProductCartContainer,
  ShoppingCartListContainer,
} from './styles'

import { useShoppingCart } from 'use-shopping-cart'
import { Product } from 'use-shopping-cart/core'
import { X } from '@phosphor-icons/react'
import { priceFormatter } from '@/utils/format-price'
import { useState } from 'react'
import axios from 'axios'

export function CartList() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)
  const { cartCount, cartDetails, totalPrice, removeItem, clearCart } =
    useShoppingCart()

  const products: Product[] = Object.values(cartDetails)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const lineItems = products.map((product) => {
        return {
          priceId: product.price_id,
          quantity: product.quantity,
        }
      })

      const response = await axios.post('/api/checkout', {
        cartItems: lineItems,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl

      clearCart()
    } catch (err) {
      alert('Falha ao redirecionar para o checkout!')
      setIsCreatingCheckoutSession(false)
    }
  }

  return (
    <Dialog.Portal forceMount>
      <ShoppingCartListContainer>
        <CloseShoppingCartList>
          <X weight="bold" />
        </CloseShoppingCartList>

        <Dialog.Title>Sacola de Compras</Dialog.Title>

        <ProductCartContainer>
          {products.map((product) => (
            <ProductCart key={product.id}>
              <ImgContainerProduct>
                <Image src={product.imageUrl} alt="" width={95} height={95} />
              </ImgContainerProduct>

              <div>
                <DescriptionProductCart>{product.name}</DescriptionProductCart>

                <DescriptionProductCart price>
                  {priceFormatter.format(product.price)}
                </DescriptionProductCart>

                <button onClick={() => removeItem(product.id)} type="button">
                  Remover
                </button>
              </div>
            </ProductCart>
          ))}
        </ProductCartContainer>

        <CartCheckoutContainer>
          <CartDetailsPrice>
            <span>Quantidade</span>
            <span className="text-right">
              {cartCount} {cartCount <= 1 ? 'item' : 'itens'}
            </span>

            <strong>Valor total</strong>
            <strong className="text-right">
              {priceFormatter.format(totalPrice)}
            </strong>
          </CartDetailsPrice>

          <ButtonCheckoutCart
            onClick={handleBuyProduct}
            disabled={cartCount <= 0 || isCreatingCheckoutSession}
          >
            Finalizar compra
          </ButtonCheckoutCart>
        </CartCheckoutContainer>
      </ShoppingCartListContainer>
    </Dialog.Portal>
  )
}
