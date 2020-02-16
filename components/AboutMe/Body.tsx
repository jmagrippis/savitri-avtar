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
              About Me
            </Typography>

            <div>
              <Typography variant="body1" paragraph>
                I am an International KRI certified Kundalini Yoga teacher and a
                licensed IKYTA Teacher for children.
              </Typography>
              <Typography variant="body1" paragraph>
                I specialise on working with people who want to regain balance
                after experiencing stress, anxiety, inner emptiness or emotional
                burn outs and want to change through the practice of yoga and
                meditation.
              </Typography>
              <Typography variant="body1" paragraph>
                My passion for yoga started in 2010 when I first practiced
                Sivananda Yoga. Several years later I discovered Kundalini Yoga
                and immediately experienced how its techniques impacted
                positively all aspects of my life.
              </Typography>
              <Typography variant="body1" paragraph>
                The transformation was so significant that I decided to take the
                Level 1 teacher training at the Sahej Academy and later, in
                order to deepen my knowledge of yoga and meditation, enrolled
                into Level 2: the advanced training for Kundalini Yoga teachers.
              </Typography>
              <Typography variant="body1" paragraph>
                I was blessed to train with some of the best teachers in the UK
                and direct students of Yogi Bhajan, the Master of Kundalini Yoga
                from India.
              </Typography>
              <Typography variant="body1" paragraph>
                For the last four years yoga, both teaching and practicing, has
                been an integral part of my life, and I am very grateful I can
                share this wonderful technology with you. Amongst my other
                passions are teaching yoga to children, the practice of
                Numerology (a system for revealing one’s strengths and
                challenges that can show the true path), and playing the Gong.
              </Typography>
            </div>

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
        }
      `}</style>
    </>
  )
}
