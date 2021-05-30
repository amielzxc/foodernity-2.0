import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import ProtectedRoute from './ProtectedRoute'
import { useStore } from './Store'
import Fallback from './Components/etc/Fallback'
import Accounts from './Components/Accounts/Accounts'
import DonationStatus from './Components/Accounts/DonationStatus'
import ListingDetail from './Components/Listing/ListingDetail'

const Signin = React.lazy(() => import('./Components/Account/Signin'))
const Signup = React.lazy(() => import('./Components/Account/Signup'))
const ForgotPassword = React.lazy(() =>
   import('./Components/Account/ForgotPassword')
)
const Listings = React.lazy(() => import('./Components/Listing/Listings'))
const Error = React.lazy(() => import('./Components/etc/Error'))
const Post = React.lazy(() => import('./Components/PostListing/Post'))
// const ListingDetail = React.lazy(() =>
//    import('./Components/Listing/ListingDetail')
// )
const Messages = React.lazy(() => import('./Components/Messages/Messages'))
const FAQs = React.lazy(() => import('./Components/FAQs&Guidelines/FAQs'))

const theme = createMuiTheme({
   palette: {
      primary: {
         main: '#2196F3',
      },
      default: '#FFFFFF',
   },
})

const App = () => {
   const isAuthenticated = useStore((state) => state.isAuthenticated)
   return (
      <Router>
         <Suspense fallback={<Fallback />}>
            <ThemeProvider theme={theme}>
               <Switch>
                  <Route path="/" exact component={Signin} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/forgotpassword" component={ForgotPassword} />
                  <Route path="/listings" exact>
                     <Listings />
                  </Route>
                  <Route path="/post">
                     <Post />
                  </Route>
                  <Route path="/messages">
                     <Messages />
                  </Route>
                  <Route path="/faqs">
                     <FAQs />
                  </Route>
                  <Route path="/account">
                     <Accounts />
                  </Route>
                  <Route path="/donationstatus">
                     <DonationStatus />
                  </Route>
                  <Route path="/listingdetail">
                     <ListingDetail />
                  </Route>
                  <Route path="" component={Error} />
               </Switch>
            </ThemeProvider>
         </Suspense>
      </Router>
   )
}

export default App
