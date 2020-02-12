import React from 'react'
import { Grid, useTheme, Theme } from '@material-ui/core'

import { Item } from './Item'

export const Pricing = () => {
  const theme = useTheme<Theme>()

  return (
    <>
      <section className="pricing">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} sm={4}>
            <Item
              id="privateSingle"
              name="Private"
              price="£119"
              description="Chose this option to experience Kundalini yoga without further commitments."
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Item
              id="packageFiveX"
              name="5x Package"
              price="£99"
              per="session"
              description="Commit to 5 sessions of Kundalini yoga and save £100 versus buying them individually."
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Item
              id="privatePlusOne"
              name="Private +1"
              price="£89"
              per="person"
              description="Practice with your partner or bring a friend. Share the experience and effect of Kundalini yoga, at a lower cost per person."
            />
          </Grid>
        </Grid>
      </section>
      <style jsx>{`
        .pricing {
          padding: ${theme.spacing(3)}px;
        }
      `}</style>
    </>
  )
}
