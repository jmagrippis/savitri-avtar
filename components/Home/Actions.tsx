import React from 'react'
import Link from 'next/link'
import { Grid, Button } from '@material-ui/core'

type Props = {
  sm: 5 | 6
}

export const Actions = ({ sm }: Props) => (
  <Grid container spacing={3}>
    <Grid item xs={12} sm={sm}>
      <Link href="/book">
        <Button variant="contained" color="secondary" size="large" fullWidth>
          Book a session
        </Button>
      </Link>
    </Grid>
    <Grid item xs={12} sm={sm}>
      <Button
        variant="outlined"
        color="secondary"
        size="large"
        fullWidth
        href="mailto:savitriavtar@gmail.com"
        target="_blank"
      >
        Contact
      </Button>
    </Grid>
  </Grid>
)