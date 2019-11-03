const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

declare global {
  interface Window {
    Stripe?: any
  }
}

export const checkout = async (itemId: string) => {
  const response = await fetch(`/api/checkout?itemId=${itemId}`)
  if (!response.ok) return

  const session = await response.json()

  while (!window.Stripe) {
    console.log('Stripe not yet loaded')
    await sleep(1000)
  }
  const stripe = new window.Stripe(process.env.STRIPE_PUB)

  const { error } = await stripe.redirectToCheckout({
    sessionId: session.id,
  })

  if (!error) return

  console.log(error)
}
