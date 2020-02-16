import React from 'react'
import { Container, Typography, Button } from '@material-ui/core'
import { useSpring, animated } from 'react-spring'

import { slideIn } from '../animations'

export const Body = () => {
  const style = useSpring(slideIn)

  return (
    <>
      <Container>
        <animated.div style={style}>
          <main className="page">
            <Typography variant="h3" component="h1" gutterBottom>
              payment cancelled
            </Typography>
            <Typography variant="body1" paragraph>
              Apologies for any inconvenience caused.
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              href="mailto:savitriavtar@gmail.com?subject=Private Kundalini Yoga Sessions"
              target="_blank"
            >
              Contact me directly
            </Button>
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
          text-align: center;
        }
      `}</style>
    </>
  )
}
