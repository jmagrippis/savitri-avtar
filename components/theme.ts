import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import cyan from '@material-ui/core/colors/cyan'
import deepOrange from '@material-ui/core/colors/deepOrange'

export const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: cyan,
      secondary: deepOrange,
    },
    typography: {
      fontFamily: 'Libre Baskerville, serif',
    },
  })
)
