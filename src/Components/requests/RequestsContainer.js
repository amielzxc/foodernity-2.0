import { Grid, Typography, Button } from '@material-ui/core'
import MainContainer from '../shared/MainContainer'
import { data } from '../../__mock__/requestData'
import RequestItem from './RequestItem'
import ScrollTop from '../shared/ScrollTop'
import { Link } from 'react-router-dom'
export default function RequestsContainer() {
   return (
      <MainContainer>
         <Grid container spacing={2}>
            <Grid container item xs={12} justify="space-between">
               <Typography variant="h6" component="h3">
                  Requested donations near you
               </Typography>
               <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/requestdonation"
               >
                  Request a Donation
               </Button>
            </Grid>
            {data.map((item) => (
               <RequestItem
                  key={item.requestID}
                  requestID={item.requestID}
                  imgLoc={item.imgLoc}
                  requestName={item.requestName}
                  distance={item.distance}
                  postTime={item.postTime}
                  max={item.max}
               />
            ))}
         </Grid>
         <ScrollTop />
      </MainContainer>
   )
}
