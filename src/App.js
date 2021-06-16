import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import theme from './theme/index'

import LandingPage from './pages/LandingPage'
import Error404 from './components/shared/Error404'

const OurGoal = lazy(() => import('./components/landingpage/OurGoal'))
const GetInvolved = lazy(() => import('./components/landingpage/GetInvolved'))
const ContactUs = lazy(() => import('./components/landingpage/ContactUs'))
const Signin = lazy(() => import('./pages/Signin'))
const Signup = lazy(() => import('./pages/Signup'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const Donations = lazy(() => import('./pages/Donations'))
const DonationDetails = lazy(() =>
   import('./components/donations/DonationDetails')
)
const Post = lazy(() => import('./pages/Post'))
const Requests = lazy(() => import('./pages/Requests'))
const RequestDetails = lazy(() =>
   import('./components/requests/RequestDetails')
)
const Request = lazy(() => import('./pages/Request'))
const FAQs = lazy(() => import('./pages/FAQs'))
const Account = lazy(() => import('./pages/Account'))
const Admin = lazy(() => import('./pages/Admin'))
export default function App() {
   return (
      <Router>
         <Suspense fallback={<div />}>
            <ThemeProvider theme={theme}>
               <Switch>
                  <Route path="/" exact component={LandingPage} />
                  <Route path="/ourgoal" component={OurGoal} />
                  <Route path="/getinvolved" component={GetInvolved} />
                  <Route path="/contactus" component={ContactUs} />

                  <Route path="/signin" component={Signin} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/forgotpassword" component={ForgotPassword} />

                  <Route path="/donations" component={Donations} exact />
                  <Route
                     path="/donations/item/:id"
                     component={DonationDetails}
                  />
                  <Route path="/postdonation" component={Post} />

                  <Route path="/requests" component={Requests} exact />
                  <Route path="/requests/item/:id" component={RequestDetails} />
                  <Route path="/requestdonation" component={Request} />

                  <Route path="/faqsguidelines" component={FAQs} />

                  <Route path="/account" component={Account} />

                  <Route path="/admin" component={Admin} />
                  <Route path="" component={Error404} />
               </Switch>
            </ThemeProvider>
         </Suspense>
      </Router>
   )
}
