import React, { forwardRef } from 'react'
import { Grid, Typography, useTheme, Theme } from '@material-ui/core'

import { Actions } from './Actions'

export const Approach = forwardRef<HTMLElement>((_, ref) => {
  const theme = useTheme<Theme>()

  return (
    <>
      <section className="approach" ref={ref}>
        <Grid container spacing={6} alignItems="center">
          <Grid item sm={7}>
            <div className="image">
              <img src="/images/about.jpg" />
            </div>
          </Grid>

          <Grid item sm={5}>
            <Grid item>
              <Typography variant="h4" component="h2" gutterBottom>
                My approach
              </Typography>
              <Typography variant="body1" paragraph>
                As I move more deeply into my knowledge as a teacher, my
                approach is to provide a supportive and safe environment for
                everyone who wants to practice yoga and meditation.
              </Typography>
              <Typography variant="body1" paragraph>
                The aim is for you to be able to go within yourself, explore
                your body and soul, and find your true path. My role is to be
                your guide, share my knowledge and provide an uplifting
                experience.
              </Typography>
              <Actions sm={6} />
            </Grid>
          </Grid>
        </Grid>
      </section>

      <style jsx>{`
        .approach {
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
