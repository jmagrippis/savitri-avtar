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
                Lorem olor, sit amet consectetur adipisicing elit.Saepe m
                consequatur ipsa exercitationem <strong>nisi vitae</strong> do m
                harum voluptate adipisci eligendi sed, obcaecati, a quaerat.
                Vitae, quos itaque.
              </Typography>
              <Typography variant="body1" paragraph>
                ipsum dolor, sit amet consectetur adipisicing elit.culpa eum
                onsequatur ipsa exercitationem nisi aboriosam harum voluptate
                adipisci eligendi sed, obcaecati, a quaerat.Vitae, quos itaque.
              </Typography>
              <Typography variant="body1" paragraph>
                ipsum dolor, sit amet consectetur adipisicing elit.culpa eum
                onsequatur ipsa exercitationem nisi aboriosam harum voluptate
                adipisci eligendi sed, obcaecati, a quaerat.Vitae, quos itaque.
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
