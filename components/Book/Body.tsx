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
              <strong>1.</strong> Before we meet for the first session we’ll
              schedule a brief phone, Skype or Zoom consultation. We’ll discuss
              the details to make sure we are the right fit.
            </Typography>

            <Typography variant="h5" component="p" paragraph>
              <strong>2.</strong> Next, we do an introductory session to get to
              know each other and assess what you are looking for in a yoga
              practice.
            </Typography>

            <Typography variant="h5" component="p" paragraph>
              <strong>3.</strong> After that we create a plan to work together
              once, twice or three times per week. All sessions are going to be
              tailored around your needs, goals and schedule.
            </Typography>

            <Typography variant="h5" component="p" paragraph>
              <strong>
                I ask for a commitment for at least three months to start.
              </strong>
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
                For more information please read{' '}
                <Link href="/faq">
                  <a>the FAQ section</a>
                </Link>
                .
              </Typography>
            </div>

            <Typography variant="h5" component="p" paragraph>
              You may <a href="tel:+447481471596">call me</a>, or{' '}
              <a href="savitriavtar@gmail.com">email me</a> to make
              arrangements, or with your questions.
            </Typography>
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
