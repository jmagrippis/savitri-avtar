import React, { forwardRef } from 'react'
import { Grid, Typography, useTheme, Theme } from '@material-ui/core'
import { Actions } from './Actions'

export const Classes = forwardRef<HTMLElement>((_, ref) => {
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
                Private Yoga Sessions
              </Typography>
              <Typography variant="body1" paragraph>
                If you feel stuck and you need a change, or you feel that you
                live someone else&#39;s life and you want to find your own path
                and happiness, and you are ready to commit, private Kundalini
                Yoga sessions are for you.
              </Typography>

              <Typography variant="body1" paragraph>
                Each session is built around your needs and goals, at the
                perfect time and place for you. Many people choose the privacy
                of their own home.
              </Typography>
              <Typography variant="body1" paragraph>
                In private sessions we work on regaining balance, finding peace,
                re-energising the body and clearing the mind from worries,
                stress and anxiety.
              </Typography>
              <Typography variant="body1" paragraph>
                You are in the right place.
              </Typography>
              <Typography variant="body1" paragraph>
                Sat Nam.
              </Typography>
              <Actions sm={6} />
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
