import { Grid, Typography } from '@material-ui/core'
import { Route, Switch, useRouteMatch } from 'react-router'
import MainContainer from '../shared/MainContainer'
import Monitor from './Monitor'
import Reports from './Reports'
import Users from './Users'

export default function AdminContainer() {
   let { path } = useRouteMatch()

   return (
      <MainContainer>
         <Switch>
            <Route path="/admin" exact>
               <Reports />
            </Route>
            <Route path={`${path}/monitor`}>
               <Monitor />
            </Route>
            {/* <Route path={`${path}/reporteddonations`}>
               <Typography>Reported donation</Typography>
            </Route> */}
            <Route path={`${path}/users`}>
               <Users />
            </Route>
         </Switch>
      </MainContainer>
   )
}
