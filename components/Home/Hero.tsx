import React from 'react'
import { useSpring, animated } from 'react-spring'
import { Grid, Typography } from '@material-ui/core'

import { Actions } from './Actions'
import { slideIn } from '../animations'

export const Hero = () => {
  const style = useSpring(slideIn)

  return (
    <>
      <section className="hero">
        <animated.div style={style}>
          <Grid container spacing={3} alignItems="center">
            <Grid item sm={5}>
              <Grid
                container
                spacing={1}
                direction="column"
                alignItems="center"
              >
                <Grid item>
                  <div className="hero-image">
                    <img src="/logo.png" />
                  </div>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h2"
                    component="h1"
                    style={{ fontFamily: 'Alef, sans-serif' }}
                  >
                    Savitri Avtar
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h5" component="h2">
                    Kundalini Yoga
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={7}>
              <Grid container spacing={6} direction="column">
                <Grid item>
                  <Typography variant="h4" component="p">
                    Private Kundalini Yoga sessions tailored around your needs
                  </Typography>
                </Grid>

                <Grid item>
                  <Actions sm={5} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </animated.div>
      </section>

      <style jsx>{`
        .hero {
          flex: 1 0;
          display: flex;
          align-items: center;
        }

        .hero-image {
          text-align: center;
        }

        .hero-image img {
          width: 40%;
        }
      `}</style>
    </>
  )
}
