import React, { forwardRef } from 'react'
import { Grid, Typography, useTheme, Theme } from '@material-ui/core'

export const About = forwardRef<HTMLElement>((_, ref) => {
  const theme = useTheme<Theme>()

  return (
    <>
      <section className="about" ref={ref}>
        <Grid container spacing={6} alignItems="center">
          <Grid item sm={7}>
            <div className="image">
              <img src="/about.jpg" />
            </div>
          </Grid>

          <Grid item sm={5}>
            <Grid item>
              <Typography variant="h4" component="h2" gutterBottom>
                About Me
              </Typography>
              <Typography variant="body1" paragraph>
                I am an International KRI certified Kundalini Yoga teacher and a
                licensed IKYTA Teacher for Children. My passion for yoga started
                in 2010 when I first practiced Sivananda Yoga. Several years
                later I discovered <strong>Kundalini Yoga</strong> and
                immediately experienced how its techniques impacted positively
                all aspects of my life.
              </Typography>
              <Typography variant="body1" paragraph>
                The transformation was so significant that I decided to take the
                Level 1 teacher training at the Sahej Academy and later, in
                order to deepen my knowledge of yoga and meditation, enrolled
                into Level 2: the advanced training for Kundalini Yoga teachers.
                I was blessed to train with some of the best teachers in the UK
                and direct students of <strong>Yogi Bhajan</strong>, the Master
                of Kundalini Yoga from India.
              </Typography>
              <Typography variant="body1" paragraph>
                For the last four years yoga, both teaching and practicing, has
                been an integral part of my life, and I am very grateful that I
                can share this wonderful technology with you.
              </Typography>
              <Typography variant="body1" paragraph>
                Amongst my other passions are teaching yoga to children, the
                practice of Numerology (a system for revealing one’s strengths
                and challenges that can show the true path), and playing the
                Gong.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </section>

      <style jsx>{`
        .about {
          flex: 1 0;
          display: flex;
          align-items: center;
          padding: ${theme.spacing(6)}px 0;
        }

        .image img {
          border-radius: 8px;
          width: 100%;
        }
      `}</style>
    </>
  )
})
