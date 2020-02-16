import React, { forwardRef } from 'react'
import Link from 'next/link'
import { Grid, Typography, Button, useTheme, Theme } from '@material-ui/core'

export const About = forwardRef<HTMLElement>((_, ref) => {
  const theme = useTheme<Theme>()

  return (
    <>
      <section className="about" ref={ref}>
        <Grid container spacing={6} alignItems="center">
          <Grid item sm={7}>
            <div className="image">
              <img src="/images/about.jpg" />
            </div>
          </Grid>

          <Grid item sm={5}>
            <Grid item>
              <Typography variant="h4" component="h2" gutterBottom>
                About Me
              </Typography>
              <Typography variant="body1" paragraph>
                I am an International KRI certified Kundalini Yoga teacher and a
                licensed IKYTA Teacher for Children.
              </Typography>
              <Typography variant="body1" paragraph>
                I specialise on working with people who want to regain balance
                after experiencing stress, anxiety, inner emptiness or emotional
                burnouts. I help them achieve change through yoga and
                meditation.
              </Typography>
              <Typography variant="body1" paragraph>
                My passion for yoga started in 2010 when I first practiced
                Sivananda Yoga. Several years later I discovered{' '}
                <strong>Kundalini Yoga</strong> and immediately experienced how
                its techniques impacted positively all aspects of my life.
              </Typography>
            </Grid>

            <Grid item>
              <Link href="/about-me">
                <Button variant="outlined" color="secondary" size="large">
                  Read more
                </Button>
              </Link>
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
