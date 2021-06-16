import { Switch, useRouteMatch, Route } from 'react-router-dom'
import MainContainer from '../shared/MainContainer'

import Food from './Food'

import Posting from './Posting'
import PostingGuidelines from './PostingGuidelines'
import Receiving from './Receiving'
import ReceivingGuidelines from './ReceivingGuidelines'
import Requesting from './Requesting'
import RequestingGuidelines from './RequestingGuidelines'

export default function TopicContainer() {
   let { path } = useRouteMatch()
   return (
      <MainContainer>
         <Switch>
            <Route path={`${path}/`} exact component={Posting} />
            <Route
               path={`${path}/receiving-a-donation`}
               component={Receiving}
            />
            <Route
               path={`${path}/requesting-a-donation`}
               component={Requesting}
            />
            <Route path={`${path}/food-donation`} component={Food} />

            <Route
               path={`${path}/posting-guidelines`}
               component={PostingGuidelines}
            />
            <Route
               path={`${path}/receiving-guidelines`}
               component={ReceivingGuidelines}
            />
            <Route
               path={`${path}/requesting-guidelines`}
               component={RequestingGuidelines}
            />
         </Switch>
      </MainContainer>
   )
}
