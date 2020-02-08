import * as React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@material-ui/core/styles'

import { theme } from './theme'
import { Header } from './Header'

export const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Header />
    <Component {...pageProps} />
  </ThemeProvider>
)
