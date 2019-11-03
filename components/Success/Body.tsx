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
              payment sorted
            </Typography>
            <Typography variant="h2" component="h2" gutterBottom>
              🙏🏼 sat nam 🙏🏼
            </Typography>
            <Typography variant="body1" paragraph>
              I will be in touch via email to make arrangements.
            </Typography>
            <Typography variant="body1" paragraph>
              No funds will be taken until then.
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              href="mailto:savitriavtar@gmail.com"
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
