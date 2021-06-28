import { CssBaseline, useMediaQuery, useTheme } from '@material-ui/core'
import { Helmet } from 'react-helmet'
import StyledAppBar from '../components/shared/StyledAppBar'
import RequestContainer from '../components/callfordonation/RequestContainer'

export default function CallForDonations() {
   const theme = useTheme()
   const responsive = useMediaQuery(theme.breakpoints.down('sm'))

   return (
      <>
         <Helmet>
            <title>Call for Donations | Foodernity</title>
         </Helmet>
         <div
            style={{
               display: 'flex',
               flexDirection: responsive ? 'column' : 'row',
            }}
         >
            <CssBaseline />
            <StyledAppBar />
            <RequestContainer />
         </div>
      </>
   )
}
