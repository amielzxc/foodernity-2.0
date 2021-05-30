import { useTheme, useMediaQuery } from '@material-ui/core'
import { Route, Switch, useRouteMatch } from 'react-router'
import MainContainer from '../Common/MainContainer'
import { NavigationDrawerResponsive } from './NavigationDrawer'
import MyDonations from './MyDonations'
import RequestedDonations from './RequestedDonations'
import MyProfile from './MyProfile'
import EditProfile from './EditProfile'
import Privacy from './Privacy'
function AccountsContainer() {
   const theme = useTheme()
   //  used to determine whether the page should use components intended for responsive layout
   const responsiveLayout = useMediaQuery(theme.breakpoints.down('sm'))

   let { path } = useRouteMatch()

   return (
      <MainContainer>
         {/* displays whether the topics drawer dialog should be displayed or not depending on the variable */}
         {responsiveLayout && <NavigationDrawerResponsive />}
         <Switch>
            <Route path={`${path}/mydonations`}>
               <MyDonations />
            </Route>
            <Route path={`${path}/requesteddonations`}>
               <RequestedDonations />
            </Route>
            <Route path={`${path}/myprofile`}>
               <MyProfile />
            </Route>
            <Route path={`${path}/editprofile`}>
               <EditProfile />
            </Route>
            <Route path={`${path}/dataprivacy`}>
               <Privacy />
            </Route>
         </Switch>
      </MainContainer>
   )
}

export default AccountsContainer
