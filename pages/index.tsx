import React from 'react'
import { useSpring, animated } from 'react-spring'

import { Meta } from '../components/Meta'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { PrimaryButton } from '../components/PrimaryButton'

const slideIn = {
  opacity: 1,
  transform: 'translate3d(0, 0, 0)',
  from: { opacity: 0, transform: 'translate3d(0, 50%, 0)' },
}

const Home = () => {
  const style = useSpring(slideIn)

  return (
    <>
      <Meta title="Savitri Avtar Kaur - Kundalini Yoga" />
      <div className="container">
        <Header />

        <animated.div style={style}>
          <main className="hero">
            <h1 className="title">Savitri Avtar Kaur</h1>
            <div className="callout">
              Private Kundalini Yoga classes tailored around your needs. Regain
              balance, find peace, re-energise your body and allow the flow of
              life to come in. You are in the right place.
            </div>
            <PrimaryButton>Book a session</PrimaryButton>
          </main>
        </animated.div>

        <Footer />
      </div>

      <style jsx>{`
        .container {
          flex: 1 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          padding: 1rem;
          font-size: 4.25vw;
        }

        .hero {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .title {
          font-size: 9vw;
          margin-bottom: 1rem;
        }

        .callout {
          font-family: 'Libre Baskerville', serif;
          margin-bottom: 2rem;
        }

        @media (min-width: 768px) {
          .title {
            font-size: 6vw;
          }

          .container {
            font-size: 2.25vw;
            padding: 1rem 2rem;
          }
        }
      `}</style>
    </>
  )
}

export default Home
