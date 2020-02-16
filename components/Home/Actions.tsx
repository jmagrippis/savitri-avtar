import React from 'react'
import Link from 'next/link'
import { Grid, Button, useTheme, Theme } from '@material-ui/core'

type Props = {
  sm: 5 | 6
}

export const Actions = ({ sm }: Props) => {
  const theme = useTheme<Theme>()

  return (
    <>
      <div className="container">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={sm}>
            <Link href="/book">
              <Button
                variant="contained"
                color="secondary"
                size="large"
                fullWidth
              >
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
              href="mailto:savitriavtar@gmail.com?subject=Private Kundalini Yoga Sessions"
              target="_blank"
            >
              Contact
            </Button>
          </Grid>
        </Grid>
      </div>
      <style jsx>{`
        .container {
          padding: ${theme.spacing(2)}px;
        }
      `}</style>
    </>
  )
}
