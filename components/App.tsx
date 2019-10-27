import * as React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import { theme } from './theme'

type Props = {
  children: React.ReactNode
}

export const App = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
