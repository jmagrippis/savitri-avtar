import React from 'react'
import { Container, Typography } from '@material-ui/core'
import { useSpring, animated } from 'react-spring'

import { Pricing } from './Pricing'
import { slideIn } from '../animations'

export const Body = () => {
  const style = useSpring(slideIn)

  return (
    <>
      <Container>
        <animated.div style={style}>
          <main className="page">
            <Typography variant="h2" component="h1" gutterBottom>
              Book a session
            </Typography>
            <Pricing />
          </main>
        </animated.div>
      </Container>

      <style jsx>{`
        .page {
          min-height: calc(100vh - 64px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  )
}
