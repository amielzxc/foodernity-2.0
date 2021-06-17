import React from 'react'
import { Button, Divider, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
   locationsRankingData,
   totalDonationsPerCategoryData,
   mostClaimedCategoryData,
   mostSpoiledCategoryData,
   totalDonorsPerLocationData,
   totalUsersPerLocationData,
} from '../../__mock__/ReportsData'

import Piechart from '../shared/Piechart'
import HorizontalBarChart from '../shared/HorizontalBarChart'
import { Avatar, Card, CardContent, Typography } from '@material-ui/core'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import BusinessIcon from '@material-ui/icons/Business'
import GroupIcon from '@material-ui/icons/Group'
import WebIcon from '@material-ui/icons/Web'

const useStyles = makeStyles((theme) => ({
   icon__avatar_small: {
      width: theme.spacing(5),
      height: theme.spacing(5),
   },
   icon__avatar_large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
   },
}))

const smallCards = [
   {
      title: 'Registered Users',
      count: '810',
      color: '#42A5F5',
      icon: <GroupIcon />,
   },
   {
      title: 'Registered Partners',
      count: '203',
      color: '#AB47BC',
      icon: <BusinessIcon />,
   },
   {
      title: 'Site Count',
      count: '1560',
      color: '#FF9100',
      icon: <WebIcon />,
   },
]

const largeCards = [
   {
      title: 'Donations Posted',
      count: '1903',
      color: '#FF7043',
      icon: <FastfoodIcon />,
   },
   {
      title: 'Donations Claimed',
      count: '1741',
      color: '#66BB6A',
      icon: <FastfoodIcon />,
   },
   {
      title: 'Donations Spoiled',
      count: '162',
      color: '#E35141',
      icon: <FastfoodIcon />,
   },
]

function Reports() {
   return (
      <Grid container spacing={4} justify="center">
         <Grid
            container
            item
            xs={12}
            justify="space-between"
            alignItems="center"
         >
            <Grid item>
               <Typography variant="h4" style={{ fontWeight: 'bold' }}>
                  Reports
               </Typography>
               <Typography>as of May 31, 2021</Typography>
            </Grid>
            <Grid item>
               <Button variant="contained" color="primary">
                  Generate PDF
               </Button>
            </Grid>
         </Grid>
         {smallCards.map((card) => (
            <Grid item xs={12} sm={4} xl={3}>
               <LargeCard
                  title={card.title}
                  count={card.count}
                  color={card.color}
                  icon={card.icon}
               />
            </Grid>
         ))}

         {largeCards.map((card) => (
            <Grid item xs={12} sm={6} lg={4} xl={3}>
               <LargeCard
                  title={card.title}
                  count={card.count}
                  color={card.color}
                  icon={card.icon}
               />
            </Grid>
         ))}

         <Grid item xs={12}>
            <Divider />
         </Grid>
         <Grid item xs={12} md={8}>
            <LocationsRanking />
         </Grid>
         <Grid item xs={12} md={4}>
            <TotalDonationsPerCategory />
         </Grid>
         <Grid item xs={12} md={6}>
            <MostClaimedCategory />
         </Grid>
         <Grid item xs={12} md={6}>
            <MostSpoiledCategory />
         </Grid>
         <Grid item xs={12} md={6}>
            <TotalDonorsPerLocation />
         </Grid>
         <Grid item xs={12} md={6}>
            <TotalUsersPerLocation />
         </Grid>
      </Grid>
   )
}

function TotalDonationsPerCategory() {
   return (
      <Piechart
         data={totalDonationsPerCategoryData}
         chartLabel="Total donations per category"
      />
   )
}
function MostClaimedCategory() {
   return (
      <Piechart
         data={mostClaimedCategoryData}
         chartLabel="Categories with most claimed donations"
      />
   )
}
function MostSpoiledCategory() {
   return (
      <Piechart
         data={mostSpoiledCategoryData}
         chartLabel="Categories with most spoiled donations"
      />
   )
}
function LocationsRanking() {
   return (
      <HorizontalBarChart
         data={locationsRankingData}
         chartLabel="Locations with most donations"
         index="y"
      />
   )
}

function TotalDonorsPerLocation() {
   return (
      <HorizontalBarChart
         data={totalDonorsPerLocationData}
         chartLabel="Total donors per location"
         index="x"
      />
   )
}

function TotalUsersPerLocation() {
   return (
      <HorizontalBarChart
         data={totalUsersPerLocationData}
         chartLabel="Total users per location"
         index="x"
      />
   )
}

function LargeCard(props) {
   const { title, count, color, icon } = props
   const classes = useStyles()

   return (
      <Card>
         <CardContent>
            <Grid
               container
               spacing={3}
               component="div"
               display="flex"
               justify="space-between"
            >
               <Grid item>
                  <Typography color="textSecondary" gutterBottom variant="h6">
                     {title}
                  </Typography>
                  <Typography color="textPrimary" variant="h5">
                     {count}
                  </Typography>
               </Grid>
               <Grid item>
                  <Avatar
                     className={classes.icon__avatar_large}
                     style={{
                        backgroundColor: color,
                     }}
                  >
                     {icon}
                  </Avatar>
               </Grid>
            </Grid>
         </CardContent>
      </Card>
   )
}

// function SmallCard(props) {
//    const { title, count, color, icon } = props
//    const classes = useStyles()

//    return (
//       <Card>
//          <CardContent>
//             <Grid
//                container
//                spacing={3}
//                component="div"
//                display="flex"
//                justify="space-between"
//             >
//                <Grid item>
//                   <Typography
//                      color="textSecondary"
//                      gutterBottom
//                      variant="body2"
//                   >
//                      {title}
//                   </Typography>
//                   <Typography color="textPrimary" variant="h6">
//                      {count}
//                   </Typography>
//                </Grid>
//                <Grid item>
//                   <Avatar
//                      className={classes.icon__avatar_small}
//                      style={{
//                         backgroundColor: color,
//                      }}
//                   >
//                      {icon}
//                   </Avatar>
//                </Grid>
//             </Grid>
//          </CardContent>
//       </Card>
//    )
// }

export default Reports
