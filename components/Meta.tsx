import * as React from 'react'
import Head from 'next/head'

type Props = {
  title: string
}

export const Meta = ({ title }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Change your life with Kundalini Yoga, with me as your guide"
      />
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Alef|Libre+Baskerville&display=swap"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.css"
      />
    </Head>
    <style jsx global>{`
      html,
      body {
        height: 100%;
      }

      body > div {
        min-height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      body {
        font-family: 'Alef', sans-serif;
        line-height: 1.3;
        font-size: 100%;
      }

      @media (min-width: 768px) {
        body {
          font-size: 112.5%;
        }
      }

      // reset button styles
      button {
        cursor: pointer;
        border: none;
        margin: 0;
        padding: 0;
        width: auto;
        overflow: visible;

        background: transparent;

        color: inherit;
        font: inherit;

        line-height: normal;

        -webkit-font-smoothing: inherit;
        -moz-osx-font-smoothing: inherit;

        -webkit-appearance: none;
      }

      button::-moz-focus-inner {
        border: 0;
        padding: 0;
      }
    `}</style>
  </>
)
