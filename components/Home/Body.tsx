import React from 'react'
import { Container, Grid, IconButton, Theme } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import { useTheme } from '@material-ui/styles'
import { Hero } from './Hero'
import { About } from './About'

export const Body = () => {
  const theme = useTheme<Theme>()

  return (
    <>
      <Container>
        <main className="page">
          <Hero />

          <div className="next-section">
            <Grid container direction="column" alignItems="center">
              <IconButton color="primary" aria-label="next page" component="a">
                <KeyboardArrowDownIcon href="#about" />
              </IconButton>
            </Grid>
          </div>
        </main>

        <div className="page">
          <About />

          <div className="next-section">
            <Grid container direction="column" alignItems="center">
              <IconButton
                color="primary"
                aria-label="next page"
                component="span"
              >
                <KeyboardArrowDownIcon />
              </IconButton>
            </Grid>
          </div>
        </div>
      </Container>

      <style jsx>{`
        .page {
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .next-section {
          padding: ${theme.spacing(1)}px;
        }
      `}</style>
    </>
  )
}
