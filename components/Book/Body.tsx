import React from 'react'
import { Container, Typography } from '@material-ui/core'

import { Pricing } from './Pricing'

export const Body = () => (
  <>
    <Container>
      <main className="page">
        <Typography variant="h2" component="h1" gutterBottom>
          Book a session
        </Typography>
        <Pricing />
      </main>
    </Container>

    <style jsx>{`
      .page {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    `}</style>
  </>
)
