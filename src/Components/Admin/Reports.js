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
} from '../../Components/Common/MockData'
import Piechart from './Piechart'
import HorizontalBarChart from './HorizontalBarChart'
import { Avatar, Card, CardContent, Typography } from '@material-ui/core'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import BusinessIcon from '@material-ui/icons/Business'
import GroupIcon from '@material-ui/icons/Group'
import { Icon } from '@iconify/react'
import bxsDonateHeart from '@iconify-icons/bx/bxs-donate-heart'
import WebIcon from '@material-ui/icons/Web'

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
      backgroundColor: 'transparent',
   },
   appbar: {
      color: 'black',
      backgroundColor: 'transparent',
   },
   icon__avatar_small: {
      width: theme.spacing(5),
      height: theme.spacing(5),
   },
   icon__avatar_large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
   },
}))

function Reports() {
   const classes = useStyles()

   return (
      <div className={classes.root}>
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
            <Grid item xs={12} sm={6} md={3}>
               <RegisteredUsers />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
               <RegisteredPartners />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
               <RegisteredDonors />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
               <SiteCount />
            </Grid>

            <Grid item xs={12} sm={6} lg={4} xl={3}>
               <DonationsPosted />
            </Grid>
            <Grid item xs={12} sm={6} lg={4} xl={3}>
               <DonationsClaimed />
            </Grid>
            <Grid item xs={12} sm={6} lg={4} xl={3}>
               <DonationsSpoiled />
            </Grid>
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
      </div>
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

function DonationsPosted() {
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
                     Donations Posted
                  </Typography>
                  <Typography color="textPrimary" variant="h5">
                     1903
                  </Typography>
               </Grid>
               <Grid item>
                  <Avatar
                     className={classes.icon__avatar_large}
                     style={{
                        backgroundColor: '#FF7043',
                     }}
                  >
                     <FastfoodIcon />
                  </Avatar>
               </Grid>
            </Grid>
         </CardContent>
      </Card>
   )
}

function DonationsClaimed() {
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
                     Donations Claimed
                  </Typography>
                  <Typography color="textPrimary" variant="h5">
                     1741
                  </Typography>
               </Grid>
               <Grid item>
                  <Avatar
                     className={classes.icon__avatar_large}
                     style={{
                        backgroundColor: '#66BB6A',
                     }}
                  >
                     <FastfoodIcon />
                  </Avatar>
               </Grid>
            </Grid>
         </CardContent>
      </Card>
   )
}

function DonationsSpoiled() {
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
                     Donations Spoiled
                  </Typography>
                  <Typography color="textPrimary" variant="h5">
                     162
                  </Typography>
               </Grid>
               <Grid item>
                  <Avatar
                     className={classes.icon__avatar_large}
                     style={{
                        backgroundColor: '#E35141',
                     }}
                  >
                     <FastfoodIcon />
                  </Avatar>
               </Grid>
            </Grid>
         </CardContent>
      </Card>
   )
}

function RegisteredUsers() {
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
                  <Typography
                     color="textSecondary"
                     gutterBottom
                     variant="body1"
                  >
                     Registered Users
                  </Typography>
                  <Typography color="textPrimary" variant="h6">
                     810
                  </Typography>
               </Grid>
               <Grid item>
                  <Avatar
                     className={classes.icon__avatar_small}
                     style={{
                        backgroundColor: '#42A5F5',
                     }}
                  >
                     <GroupIcon />
                  </Avatar>
               </Grid>
            </Grid>
         </CardContent>
      </Card>
   )
}

function RegisteredPartners() {
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
                  <Typography
                     color="textSecondary"
                     gutterBottom
                     variant="body1"
                  >
                     Registered Partners
                  </Typography>
                  <Typography color="textPrimary" variant="h6">
                     203
                  </Typography>
               </Grid>
               <Grid item>
                  <Avatar
                     className={classes.icon__avatar_small}
                     style={{
                        backgroundColor: '#AB47BC',
                     }}
                  >
                     <BusinessIcon />
                  </Avatar>
               </Grid>
            </Grid>
         </CardContent>
      </Card>
   )
}

function RegisteredDonors() {
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
                  <Typography
                     color="textSecondary"
                     gutterBottom
                     variant="body1"
                  >
                     Users who Donated
                  </Typography>
                  <Typography color="textPrimary" variant="h6">
                     637
                  </Typography>
               </Grid>
               <Grid item>
                  <Avatar
                     className={classes.icon__avatar_small}
                     style={{
                        backgroundColor: '#FFEE58',
                     }}
                  >
                     <Icon icon={bxsDonateHeart} />
                  </Avatar>
               </Grid>
            </Grid>
         </CardContent>
      </Card>
   )
}

function SiteCount() {
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
                  <Typography
                     color="textSecondary"
                     gutterBottom
                     variant="body1"
                  >
                     Site Count
                  </Typography>
                  <Typography color="textPrimary" variant="h6">
                     1560
                  </Typography>
               </Grid>
               <Grid item>
                  <Avatar
                     className={classes.icon__avatar_small}
                     style={{
                        backgroundColor: '#FF9100',
                     }}
                  >
                     <WebIcon />
                  </Avatar>
               </Grid>
            </Grid>
         </CardContent>
      </Card>
   )
}
export default Reports
