import { Route, Switch } from 'react-router'
import { CssBaseline, useMediaQuery, useTheme } from '@material-ui/core'
import { Helmet } from 'react-helmet'
import StyledAppBar from '../components/shared/StyledAppBar'
import TopicDrawer from '../components/faqs/TopicDrawer'
import TopicContainer from '../components/faqs/TopicContainer'

export default function FAQs() {
   const theme = useTheme()
   const responsive = useMediaQuery(theme.breakpoints.down('sm'))

   return (
      <>
         <Helmet>
            <title>FAQs &amp; Guidelines | Foodernity</title>
         </Helmet>
         <div
            style={{
               display: 'flex',
               flexDirection: responsive ? 'column' : 'row',
            }}
         >
            <CssBaseline />
            <StyledAppBar />
            <TopicDrawer />
            <TopicContainer />
         </div>
      </>
   )
}
