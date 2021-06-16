import { CssBaseline, useMediaQuery, useTheme } from '@material-ui/core'
import { Helmet } from 'react-helmet'
import { FilterDrawer } from '../components/requests/FilterDrawer'
import RequestsContainer from '../components/requests/RequestsContainer'
import StyledAppBar from '../components/shared/StyledAppBar'

export default function Requests() {
   const theme = useTheme()
   const responsive = useMediaQuery(theme.breakpoints.down('sm'))
   return (
      <>
         <Helmet>
            <title>Requests | Foodernity</title>
         </Helmet>
         <div
            style={{
               display: 'flex',
               flexDirection: responsive ? 'column' : 'row',
            }}
         >
            <CssBaseline />
            <StyledAppBar />
            <FilterDrawer />
            <RequestsContainer />
         </div>
      </>
   )
}
