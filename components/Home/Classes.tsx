import React, { forwardRef } from 'react'
import { Grid, Typography, useTheme, Theme } from '@material-ui/core'

export const Classes = forwardRef<HTMLElement>((_, ref) => {
  const theme = useTheme<Theme>()

  return (
    <>
      <section className="classes" ref={ref}>
        <Grid container spacing={6} alignItems="center">
          <Grid item sm={7}>
            <div className="image">
              <img src="/images/private-sessions.jpg" />
            </div>
          </Grid>

          <Grid item sm={5}>
            <Grid item>
              <Typography variant="h4" component="h2" gutterBottom>
                Private Sessions
              </Typography>
              <Typography
                variant="h5"
                component="h3"
                color="primary"
                gutterBottom
              >
                Bring more happiness to your life
              </Typography>
              <Typography variant="body1" paragraph>
                If you feel stuck and you need a change, or you feel that you
                live someone else’s life and you want to find your own path and
                happiness, and you are ready to commit,{' '}
                <strong>private Kundalini Yoga sessions</strong> are for you.
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
            </Grid>
          </Grid>
        </Grid>
      </section>

      <style jsx>{`
        .classes {
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
