import React from 'react'
import { Container, Typography, useTheme, Theme } from '@material-ui/core'
import { useSpring, animated } from 'react-spring'

import { Pricing } from './Pricing'
import { slideIn } from '../animations'

export const Body = () => {
  const style = useSpring(slideIn)
  const theme = useTheme<Theme>()

  return (
    <>
      <Container>
        <animated.div style={style}>
          <main className="page">
            <Typography variant="h2" component="h1" gutterBottom>
              Book a session
            </Typography>

            <Typography variant="body1" paragraph>
              Before the first session we can schedule a call or a short 20
              minutes meeting where we can get to know each other and you can
              let me know about your goals for the practice.
            </Typography>
            <Typography variant="h5" component="p" paragraph>
              You may <a href="tel:+447481471596">call me</a>, or{' '}
              <a href="savitriavtar@gmail.com">email me</a> to make
              arrangements, or with your questions.
            </Typography>
            <Typography variant="body1" paragraph>
              If you prefer to book a session directly and meet for the
              practice, it is also possible. Just press the book button below
              for the package you wish to purchase and I will contact you to
              arrange the time and place.
            </Typography>
            <Typography variant="body1" paragraph>
              The money will not be withdrawn from your account immediately;
              they will be reserved but taken only after we have agreed on the
              specifics for the session (time and place).
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

        .page a {
          font-weight: bolder;
          color: ${theme.palette.primary.main};
        }
      `}</style>
    </>
  )
}
