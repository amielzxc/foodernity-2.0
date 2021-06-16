import { Route, Switch, useRouteMatch } from 'react-router'
import MainContainer from '../shared/MainContainer'
import Posted from './Posted'
import Received from './Received'
import Requested from './Requested'
import ScrollTop from '../shared/ScrollTop'
import Profile from './Profile'
import EditProfile from './EditProfile'
export default function AccountContainer() {
   let { path } = useRouteMatch()

   return (
      <MainContainer>
         <Switch>
            <Route path={`${path}/`} exact component={Posted} />
            <Route path={`${path}/receiveddonations`} component={Received} />
            <Route path={`${path}/requesteddonations`} component={Requested} />
            <Route path={`${path}/myprofile`} component={Profile} />
            <Route path={`${path}/editprofile`} component={EditProfile} />
         </Switch>
         <ScrollTop />
      </MainContainer>
   )
}
