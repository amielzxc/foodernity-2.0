import { Helmet } from 'react-helmet'
import StyledAppBar from '../Common/StyledAppBar'

import {
   useMediaQuery,
   makeStyles,
   useTheme,
   CssBaseline,
} from '@material-ui/core'
import { NavigationDrawer } from './NavigationDrawer'
import AccountsContainer from './AccountsContainer'

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
   },
}))
function Accounts() {
   const classes = useStyles()
   const theme = useTheme()
   //  used to determine whether the page should use components intended for responsive layout
   const responsiveLayout = useMediaQuery(theme.breakpoints.down('sm'))

   return (
      <>
         <Helmet>
            <title>Account | Foodernity</title>
         </Helmet>
         <div className={classes.root}>
            <CssBaseline />
            <StyledAppBar />
            {!responsiveLayout && <NavigationDrawer />}
            <AccountsContainer />
         </div>
      </>
   )
}

export default Accounts
