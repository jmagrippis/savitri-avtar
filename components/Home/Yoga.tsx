import React, { forwardRef } from 'react'
import { Grid, Typography, useTheme, Theme } from '@material-ui/core'

export const Yoga = forwardRef<HTMLElement>((_, ref) => {
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
                Kundalini Yoga
              </Typography>
              <Typography variant="body1" paragraph>
                Kundalini Yoga as taught by Yogi Bhajan is a powerful technology
                that consists of asanas, breathing techniques, mudras (hand
                positions), bhandas (locks in the body), mantras and meditation.
                The purpose of Kundalini Yoga is to achieve alignment between
                soul, body and mind so the person can be “happy, holy and
                healthy” as Yogi Bhajan used to say. If done regularly Kundalini
                Yoga brings positive changes to one’s life because it affects
                not only the physical body but also the consciousness.  
              </Typography>
              <Typography variant="body1" paragraph>
                There are many different types of Kundalini Yoga class, some
                quite physical, others more meditative yet they all move energy
                in the body, release tension and allow the flow of life to come
                in.
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
          padding: ${theme.spacing(3)}px;
        }

        .image img {
          border-radius: 8px;
          width: 100%;
        }
      `}</style>
    </>
  )
})
