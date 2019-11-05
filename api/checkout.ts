import { NowRequest, NowResponse } from '@now/node'

import { stripe } from './_stripe'
import { items } from './_items'

const checkoutHandler = async (req: NowRequest, res: NowResponse) => {
  const {
    query: { itemId },
    headers: { host },
  } = req

  if (!itemId) {
    res.status(400)
    res.end('bad item id')
    return
  }

  const root = `${
    process.env.NODE_ENV === 'production' ? 'https://' : 'http://'
  }${host}`

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [items[itemId as string]],
    payment_intent_data: {
      capture_method: 'manual',
    },
    success_url: `${root}/book/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${root}/book/cancelled`,
  })

  res.status(201)
  res.json(session)
}

export default checkoutHandler
