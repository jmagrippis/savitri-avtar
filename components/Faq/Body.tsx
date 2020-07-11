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
            <Typography variant="h2" component="h1" gutterBottom>
              Frequently Asked Questions
            </Typography>

            <div>
              <Typography variant="h5" component="h2" paragraph>
                How do online sessions work?
              </Typography>
              <Typography variant="body1" paragraph>
                Online sessions are held via Zoom. Before the practice I’ll send
                you the unique link and the password via email for you to be
                able to access the session at the agreed time.
              </Typography>
              <Typography variant="body1" paragraph>
                You would need to make sure you have some space at your home or
                location to practice yoga, ideally in a quiet environment where
                you wouldn’t be disturbed or distracted during the meditation.
              </Typography>

              <Typography variant="h5" component="h2" paragraph>
                What to expect in a session?
              </Typography>
              <Typography variant="body1" paragraph>
                Each session is built around your needs. Kundalini Yoga can be
                physical, spiritual, meditative or simply fun. Everything
                depends on what you want to achieve and how committed you are.
                Each session will be adapted to your own goals, level of
                preparation and other particular needs you may have at each
                given moment of time. We all have busy lives, and sometimes your
                levels of energy may vary.
              </Typography>

              <Typography variant="h5" component="h2" paragraph>
                How long are the sessions?
              </Typography>
              <Typography variant="body1" paragraph>
                The duration of each session is between 1 hour - 1 hour 15
                minutes according to your goals and your lifestyle. Some of my
                students have strict schedules and one hour is the maximum time
                they can spare. Others have more flexible timings, and
                occasionally I can extend the practice to 1 hour 15 minutes
                depending on the kriya or meditation chosen for the session.
              </Typography>

              <Typography variant="h5" component="h2" paragraph>
                What’s the level of experience I need?
              </Typography>
              <Typography variant="body1" paragraph>
                You do not need to have any previous experience of yoga. We will
                take it from where you are at the moment and build it gradually
                from there.
              </Typography>

              <Typography variant="h5" component="h2" paragraph>
                What to wear?
              </Typography>
              <Typography variant="body1" paragraph>
                You can wear loose comfortable clothes, preferably made of
                cotton. It will allow your body to move freely and your skin to
                breath.
              </Typography>

              <Typography variant="h5" component="h2" paragraph>
                What to have for the class?
              </Typography>
              <Typography variant="body1" paragraph>
                Mat, bottle of water, blanket and a cushion for you to sit
                comfortably during the session or meditation.
              </Typography>
            </div>

            <Typography variant="h5" component="h2" paragraph>
              Was your question not answered?
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
        }
      `}</style>
    </>
  )
}
