import React, { useRef } from 'react'
import { Container } from '@material-ui/core'

import { Hero } from './Hero'
import { About } from './About'
import { Yoga } from './Yoga'
import { ScrollToRef } from '../ScrollToRef/ScrollToRef'
import { Classes } from './Classes'
import { Approach } from './Approach'

export const Body = () => {
  const aboutRef = useRef(null)
  const approachRef = useRef(null)
  const yogaRef = useRef(null)
  const classesRef = useRef(null)

  return (
    <>
      <Container>
        <main className="page">
          <Hero />
          <ScrollToRef target={classesRef} />
        </main>

        <div className="page">
          <Classes ref={classesRef} />
          <ScrollToRef target={yogaRef} />
        </div>

        <div className="page">
          <Yoga ref={yogaRef} />
          <ScrollToRef target={aboutRef} />
        </div>

        <div className="page">
          <About ref={aboutRef} />
          <ScrollToRef target={approachRef} />
        </div>

        <div className="page">
          <Approach ref={approachRef} />
        </div>
      </Container>

      <style jsx>{`
        .page {
          min-height: calc(100vh - 64px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  )
}
