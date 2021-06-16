import { CssBaseline, useMediaQuery, useTheme } from '@material-ui/core'
import { Helmet } from 'react-helmet'
import RequestContainer from '../components/request/RequestContainer'
import StepperDrawer from '../components/request/StepperDrawer'
import StyledAppBar from '../components/shared/StyledAppBar'

export default function Request() {
   const theme = useTheme()
   const responsive = useMediaQuery(theme.breakpoints.down('sm'))

   return (
      <>
         <Helmet>
            <title>Request Donation | Foodernity</title>
         </Helmet>
         <div
            style={{
               display: 'flex',
               flexDirection: responsive ? 'column' : 'row',
            }}
         >
            <CssBaseline />
            <StyledAppBar />
            <StepperDrawer />
            <RequestContainer />
         </div>
      </>
   )
}
