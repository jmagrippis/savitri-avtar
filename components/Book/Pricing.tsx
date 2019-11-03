import React from 'react'
import { Grid, useTheme, Theme } from '@material-ui/core'

import { Item } from './Item'

export const Pricing = () => {
  const theme = useTheme<Theme>()

  return (
    <>
      <section>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} sm={4}>
            <Item
              id="privateSingle"
              name="Private"
              price="£150"
              description="Lorem olor, sit amet consectetur adipisicing elit me consequatur ipsa exercitation"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Item
              id="packageFourX"
              name="4x Package"
              price="£125"
              per="class"
              description="Commit to 4 classes and get 25% off amet consectetur adipisicing amet consectetur adipisicing"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Item
              id="privatePlusOne"
              name="Private +1"
              price="£100"
              per="person"
              description="Practice with a friend amet consectetur adipisicing amet consectetur adipisicing amet consectetur adipisicing"
            />
          </Grid>
        </Grid>
      </section>
      <style jsx>{`
        .pricing {
          width: 100%;
          padding: ${theme.spacing(12)}px 0;
        }
      `}</style>
    </>
  )
}
