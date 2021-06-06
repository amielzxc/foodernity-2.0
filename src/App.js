import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import shadows from './Components/utils/shadows'
import Fallback from './Components/etc/Fallback'
import Accounts from './Components/Accounts/Accounts'
import DonationStatus from './Components/Accounts/DonationStatus'

import LandingPage from './Components/LandingPage/LandingPage'

const AboutUs = lazy(() => import('./Components/LandingPage/AboutUs'))
const GetInvolved = lazy(() => import('./Components/LandingPage/GetInvolved'))
const OurGoal = lazy(() => import('./Components/LandingPage/OurGoal'))
const ContactUs = lazy(() => import('./Components/LandingPage/ContactUs'))
const Signin = lazy(() => import('./Components/Account/Signin'))
const Signup = lazy(() => import('./Components/Account/Signup'))
const ForgotPassword = lazy(() => import('./Components/Account/ForgotPassword'))
const Listings = lazy(() => import('./Components/Listing/Listings'))
const Error = lazy(() => import('./Components/etc/Error'))
const Post = lazy(() => import('./Components/PostListing/Post'))
const ListingDetail = lazy(() => import('./Components/Listing/ListingDetail'))
const Messages = lazy(() => import('./Components/Messages/Messages'))
const FAQs = lazy(() => import('./Components/FAQs&Guidelines/FAQs'))
const Admin = lazy(() => import('./Components/Admin/Admin'))
const theme = createMuiTheme({
   palette: {
      primary: {
         main: '#2196F3',
      },
      default: '#FFFFFF',
   },
   shadows,
})

const App = () => {
   return (
      <Router>
         <Suspense fallback={<Fallback />}>
            <ThemeProvider theme={theme}>
               <Switch>
                  <Route path="/" exact>
                     <LandingPage />
                  </Route>
                  <Route path="/aboutus">
                     <AboutUs />
                  </Route>
                  <Route path="/ourgoal">
                     <OurGoal />
                  </Route>
                  <Route path="/getinvolved">
                     <GetInvolved />
                  </Route>
                  <Route path="/contactus">
                     <ContactUs />
                  </Route>
                  <Route path="/signin">
                     <Signin />
                  </Route>
                  <Route path="/signup">
                     <Signup />
                  </Route>
                  <Route path="/forgotpassword">
                     <ForgotPassword />
                  </Route>
                  <Route path="/listings" exact>
                     <Listings />
                  </Route>
                  <Route path="/listings/:listingId">
                     <ListingDetail />
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
                  <Route path="/admin">
                     <Admin />
                  </Route>

                  <Route path="" component={Error} />
               </Switch>
            </ThemeProvider>
         </Suspense>
      </Router>
   )
}

export default App
