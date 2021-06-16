import { createMuiTheme } from '@material-ui/core'
import { shadows } from './shadows'

const theme = createMuiTheme({
   palette: {
      primary: {
         main: '#2196F3',
      },
      default: '#FFFFFF',
   },
   shadows,
})

export default theme
