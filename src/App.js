import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import ProtectedRoute from './ProtectedRoute'
import { useStore } from './Store'
import Fallback from './Components/etc/Fallback'
const Signin = React.lazy(() => import('./Components/Account/Signin'))
const Signup = React.lazy(() => import('./Components/Account/Signup'))
const ForgotPassword = React.lazy(() =>
   import('./Components/Account/ForgotPassword')
)
const Listings = React.lazy(() => import('./Components/Listing/Listings'))
const Error = React.lazy(() => import('./Components/etc/Error'))
const Post = React.lazy(() => import('./Components/PostListing/Post'))
const ListingDetail = React.lazy(() =>
   import('./Components/Listing/ListingDetail')
)
const Messages = React.lazy(() => import('./Components/Messages/Messages'))
const FAQs = React.lazy(() => import('./Components/FAQs&Guidelines/FAQs'))
const Admin = React.lazy(() => import('./Components/Admin/Admin'))

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
      // <div>
      //    <h1>Maps Integration</h1>
      //    <GoogleMap />
      // </div>
      <Router>
         <Suspense fallback={<Fallback />}>
            <ThemeProvider theme={theme}>
               <Switch>
                  <Route path="/" exact component={Signin} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/forgotpassword" component={ForgotPassword} />
                  {/* <Route path="/admin" component={Admin} /> */}
                  <ProtectedRoute
                     path="/admin"
                     exact
                     component={Admin}
                     isAuth={isAuthenticated}
                  />
                  <ProtectedRoute
                     path="/listings"
                     exact
                     component={Listings}
                     isAuth={isAuthenticated}
                  />
                  <ProtectedRoute
                     path="/listings/post"
                     component={Post}
                     isAuth={isAuthenticated}
                  />
                  <ProtectedRoute
                     path="/listings/item"
                     component={ListingDetail}
                     isAuth={isAuthenticated}
                  />
                  <ProtectedRoute
                     path="/messages"
                     component={Messages}
                     isAuth={isAuthenticated}
                  />
                  <ProtectedRoute
                     path="/faqs"
                     component={FAQs}
                     isAuth={isAuthenticated}
                  />
                  <Route path="" component={Error} />
               </Switch>
            </ThemeProvider>
         </Suspense>
      </Router>
   )
}

export default App
