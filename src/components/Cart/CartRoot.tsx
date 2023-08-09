import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function CartRoot({ children }: Props) {
  return <Dialog.Root modal={false}>{children}</Dialog.Root>
}
