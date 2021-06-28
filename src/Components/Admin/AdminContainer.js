import { Route, Switch, useRouteMatch } from 'react-router'
import Donations from './Donations'
import MainContainer from '../shared/MainContainer'
import CallForDonations from './CallForDonations'
import Inventory from './Inventory'
import Records from './Records'
export default function AdminContainer() {
   let { path } = useRouteMatch()

   return (
      <MainContainer>
         <Switch>
            <Route path={`${path}/donations`} component={Donations} />
            <Route
               path={`${path}/callfordonations`}
               component={CallForDonations}
            />
            <Route path={`${path}/inventory`} component={Inventory} />
            <Route path={`${path}/records`} component={Records} />
         </Switch>
      </MainContainer>
   )
}
