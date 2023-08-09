import * as Dialog from '@radix-ui/react-dialog'
import { ShoppingCartButton, StyledCartTriggerVariants } from './styles'
import { Bag } from '@phosphor-icons/react'
import { ComponentProps, ReactNode } from 'react'

interface CartTriggerProps
  extends StyledCartTriggerVariants,
    Omit<ComponentProps<'button'>, 'ref'> {
  children: ReactNode
}

export function CartTrigger({ children, ...props }: CartTriggerProps) {
  return (
    <Dialog.Trigger asChild>
      <ShoppingCartButton {...props}>
        <Bag />

        {children}
      </ShoppingCartButton>
    </Dialog.Trigger>
  )
}
