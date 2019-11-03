import React from 'react'

import { Meta } from '../Meta'
import { App } from '../App'
import { Body } from './Body'
import { Footer } from '../Footer'

const Book = () => (
  <>
    <Meta title="Private Kundalini Yoga London - Savitri Avtar Kaur" />
    <App>
      <Body />
    </App>
    <Footer />
    <script defer src="https://js.stripe.com/v3/" />
  </>
)

export default Book
