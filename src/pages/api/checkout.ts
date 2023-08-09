import { stripe } from '@/lib/stripe'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { cartItems } = req.body

  // O next permite que essa rota seja acessada
  // por qualquer método HTTP: GET, PUT, DELETE, POST
  // Isso serve como prevenção
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed',
    })
  }

  if (cartItems.length <= 0) {
    return res.status(400).json({
      error: 'Price not found',
    })
  }

  const lineItems = cartItems.map((item) => {
    return {
      price: item.priceId,
      quantity: item.quantity,
    }
  })

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: lineItems,
    success_url: successUrl,
    cancel_url: cancelUrl,
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
