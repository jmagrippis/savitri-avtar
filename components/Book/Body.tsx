import React from 'react'
import {
  Container,
  Typography,
  useTheme,
  Theme,
  Button,
} from '@material-ui/core'
import Link from 'next/link'
import { useSpring, animated } from 'react-spring'

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

            <Typography
              variant="h4"
              component="h2"
              color="primary"
              gutterBottom
            >
              How does it work?
            </Typography>

            <Typography variant="h5" component="p" paragraph>
              Before the first yoga session we’ll schedule a brief Zoom or Skype
              consultation when we will discuss your goals for the practice and
              what results you would like to receive.
            </Typography>

            <Typography variant="h5" component="p" paragraph>
              Kundalini yoga is closely connected to a type of Numerology, so I
              may ask you to tell me your date of birth in order to understand
              what are your natural gifts, how yoga can highlight them, and what
              areas you may need to work on.
            </Typography>

            <Typography variant="h5" component="p" paragraph>
              If we are the right fit, we'll do the first yoga session, decide
              how often we wish to work together and I’ll design a special
              program that will help you achieve positive results not only in
              your yoga practice but also in life.
            </Typography>

            <Typography variant="h5" component="p" paragraph>
              The success of my students is my success!
            </Typography>

            <Button
              variant="contained"
              color="secondary"
              size="large"
              href="mailto:savitriavtar@gmail.com?subject=Private Kundalini Yoga Sessions"
              target="_blank"
            >
              Contact me
            </Button>

            <div className="faq">
              <Typography variant="h5" component="p" paragraph>
                For more information please{' '}
                <Link href="/faq">
                  <a>read the FAQ section</a>
                </Link>
                .
              </Typography>
              <Typography variant="h5" component="p" paragraph>
                If some of your questions weren’t answered you may{' '}
                <a href="tel:+447481471596">call me</a> or{' '}
                <a href="savitriavtar@gmail.com">email me</a> directly.
              </Typography>
            </div>
          </main>
        </animated.div>
      </Container>

      <style jsx>{`
        .page {
          min-height: calc(100vh - 64px);
          padding-top: 64px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .page a {
          font-weight: bolder;
          color: ${theme.palette.primary.main};
        }

        .faq {
          margin-top: ${theme.spacing(3)}px;
        }
      `}</style>
    </>
  )
}
