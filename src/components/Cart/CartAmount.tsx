import { CartNumberProducts } from './styles'

interface AmountIndicatorProps {
  amount: number
}

export function CartAmount({ amount, ...props }: AmountIndicatorProps) {
  return (
    <CartNumberProducts {...props}>
      <div>{amount}</div>
    </CartNumberProducts>
  )
}
