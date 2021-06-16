import { Helmet } from 'react-helmet'
import { useTheme, useMediaQuery, CssBaseline } from '@material-ui/core'
import StepperDrawer from '../components/post/StepperDrawer'
import StyledAppBar from '../components/shared/StyledAppBar'
import PostContainer from '../components/post/PostContainer'

export default function Post() {
   const theme = useTheme()
   const responsive = useMediaQuery(theme.breakpoints.down('sm'))

   return (
      <>
         <Helmet>
            <title>Post Donation | Foodernity</title>
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
            <PostContainer />
         </div>
      </>
   )
}
