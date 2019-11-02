import React, { useRef } from 'react'
import { Container, Theme } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'

import { Hero } from './Hero'
import { About } from './About'
import { Yoga } from './Yoga'
import { ScrollToRef } from '../ScrollToRef/ScrollToRef'
import { Classes } from './Classes'

export const Body = () => {
  const theme = useTheme<Theme>()
  const aboutRef = useRef(null)
  const yogaRef = useRef(null)
  const classesRef = useRef(null)

  return (
    <>
      <Container>
        <main className="page">
          <Hero />
          <ScrollToRef target={aboutRef} />
        </main>

        <div className="page">
          <About ref={aboutRef} />
          <ScrollToRef target={yogaRef} />
        </div>

        <div className="page">
          <Yoga ref={yogaRef} />
          <ScrollToRef target={classesRef} />
        </div>

        <div className="page">
          <Classes ref={classesRef} />
        </div>
      </Container>

      <style jsx>{`
        .page {
          min-height: 100vh;
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
