import { Grid, makeStyles, Chip, Paper, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import EventAvailableIcon from '@material-ui/icons/EventAvailable'
import ScheduleIcon from '@material-ui/icons/Schedule'

import { usePostStore } from './Post'
import MapPreview from './MapPreview'

const useStyles = makeStyles((theme) => ({
   container: {
      maxWidth: '700px',
      height: '100%',
      padding: theme.spacing(1, 3),
   },
   container__paper: {
      padding: theme.spacing(2.5),
   },
   text_bold: {
      fontWeight: 'bold',
   },
   title: {
      fontWeight: 'bold',
      marginBottom: '10px',
   },
   image__mainPreview: {
      width: '100%',
      height: '450px',
      borderRadius: theme.spacing(0.5),
   },
   container__subImages: {
      display: 'flex',
      justifyContent: 'flex-start',
      width: '100%',
      height: '100px',
   },
   image__subImage: {
      width: '25%',
      padding: '3px',
      cursor: 'pointer',
   },
   image__sub: {
      width: '100%',
      height: '100%',
      borderRadius: theme.spacing(0.5),
   },
   container__distanceAway: {
      display: 'flex',
      margin: '10px 0',
   },
   container__chipCategory: {
      display: 'flex',
      margin: '10px 0',
   },
   container__donationNotes: {
      margin: '10px 0',
   },
   container__pickup: {
      display: 'flex',
      alignItems: 'center',
      margin: '15px 0',
   },
   icon_pickup: {
      marginRight: theme.spacing(0.5),
   },
   icon__location_green: {
      color: '#66BB6A',
   },
   text__address_highlighted: {
      fontWeight: 'bold',
      color: '#2196F3',
   },
   icon__date_orange: {
      color: '#FFA726',
   },
   icon__time_purple: {
      color: '#AB47BC',
   },
}))
// returns the donation's photos and details
function DonationPreview() {
   return (
      <Grid container justify="center">
         <DonationImages />
         <DonationDetails />
      </Grid>
   )
}
// returns the photos of the donation
function DonationImages(props) {
   const classes = useStyles()
   const image = [
      'https://i.pinimg.com/originals/3a/01/1d/3a011d76e93823db300009c39a039af4.jpg',
      'https://www.newsgra.ph/wp-content/uploads/2016/07/Pancit-Canton.jpg',
      'https://cf.shopee.ph/file/43293b7a4630b8d2332ed4c2a8d9e9fd',
      'https://pbs.twimg.com/media/EVjO5EMUYAAfKYM.jpg',
   ]

   const [index, setIndex] = useState(0)

   const handleChangeImage = (index) => {
      setIndex(index)
   }

   return (
      <Grid
         container
         item
         xs={12}
         lg={6}
         direction="column"
         className={classes.container}
      >
         <Typography variant="h6" className={classes.title}>
            Donation Images
         </Typography>
         <Paper elevation={2} className={classes.container__paper}>
            <img
               src={image[index]}
               alt="pancit canton"
               className={classes.image__mainPreview}
            />
            <div className={classes.container__subImages}>
               <div
                  className={classes.image__subImage}
                  onClick={() => {
                     handleChangeImage(0)
                  }}
               >
                  <img
                     src={image[0]}
                     alt="donation-image1"
                     className={classes.image__sub}
                  />
               </div>
               <div
                  className={classes.image__subImage}
                  onClick={() => {
                     handleChangeImage(1)
                  }}
               >
                  <img
                     src={image[1]}
                     alt="donation-image2"
                     className={classes.image__sub}
                  />
               </div>
               <div
                  className={classes.image__subImage}
                  onClick={() => {
                     handleChangeImage(2)
                  }}
               >
                  <img
                     src={image[2]}
                     alt="donation-image3"
                     className={classes.image__sub}
                  />
               </div>
               <div
                  className={classes.image__subImage}
                  onClick={() => {
                     handleChangeImage(3)
                  }}
               >
                  <img
                     src={image[3]}
                     alt="donation-image4"
                     className={classes.image__sub}
                  />
               </div>
            </div>
         </Paper>
      </Grid>
   )
}

// returns the details of the donation, has multiple child components
function DonationDetails(props) {
   const donationName = usePostStore((state) => state.donationName)
   const donationNotes = usePostStore((state) => state.donationNotes)

   const classes = useStyles()
   return (
      <Grid
         container
         item
         xs={12}
         lg={6}
         direction="column"
         className={classes.container}
      >
         <Typography variant="h6" className={classes.title}>
            Item Details
         </Typography>
         <Paper elevation={2} className={classes.container__paper}>
            <Typography variant="h5" className={classes.text_bold}>
               {donationName}
            </Typography>
            <DistanceFromDonee />
            <ChipCategory />
            <ExpiryDate />
            <DonationNotes donationNotes={donationNotes} />
            <MapPreview />
            <Pickup />
         </Paper>
      </Grid>
   )
}

function DistanceFromDonee() {
   const classes = useStyles()
   return (
      <div className={classes.container__distanceAway}>
         <LocationOnIcon color="secondary" />
         <Typography>3 kilometers away</Typography>
      </div>
   )
}
// returns the food category of the donation
function ChipCategory() {
   const donationCategory = usePostStore((state) => state.donationCategory)
   const classes = useStyles()
   return (
      <div className={classes.container__chipCategory}>
         <Chip label={donationCategory} color="primary" />
      </div>
   )
}
// returns the expiry date of the donation
function ExpiryDate() {
   const donationExpiry = usePostStore((state) => state.donationExpiry)

   let date = Date.parse(donationExpiry)
   let newDate = new Date(date)

   const classes = useStyles()
   return (
      <div style={{ margin: '5px 0' }}>
         <Typography>
            The expiry date is on{' '}
            <span className={classes.text_bold}>{`${MonthToWord(
               newDate.getMonth()
            )} ${newDate.getDate()}, ${newDate.getFullYear()}`}</span>
            .
         </Typography>
      </div>
   )
}

function DonationNotes(props) {
   const { donationNotes } = props
   const classes = useStyles()
   return (
      <div className={classes.container__donationNotes}>
         <Typography variant="h6" className={classes.text_bold}>
            Donation Notes
         </Typography>
         <Typography>
            {donationNotes === '' ? <em>none</em> : donationNotes}
         </Typography>
      </div>
   )
}
// returns pickup details - the pickup location, date, and time
function Pickup() {
   const classes = useStyles()
   const pickupLocation = usePostStore((state) => state.pickupLocation)
   const pickupTime = usePostStore((state) => state.pickupTime)
   const pickupDate = usePostStore((state) => state.pickupDate)

   let date = Date.parse(pickupDate)
   let newDate = new Date(date)

   let time = Date.parse(pickupTime)
   let newTime = new Date(time)

   return (
      <>
         <div className={classes.container__pickup}>
            <LocationOnIcon
               className={`${classes.icon_pickup} ${classes.icon__location_green}`}
            />
            <Typography>
               Pick up location is around{' '}
               <span className={classes.text__address_highlighted}>
                  {' '}
                  {pickupLocation}
               </span>
               .
            </Typography>
         </div>
         <div className={classes.container__pickup}>
            <EventAvailableIcon
               className={`${classes.icon_pickup} ${classes.icon__date_orange}`}
            />
            <Typography>
               Pick up date is on{' '}
               <span className={classes.text_bold}>
                  {' '}
                  {`${MonthToWord(
                     newDate.getMonth()
                  )} ${newDate.getDate()}, ${newDate.getFullYear()}`}
               </span>
               .
            </Typography>
         </div>
         <div className={classes.container__pickup}>
            <ScheduleIcon
               className={`${classes.icon_pickup} ${classes.icon__time_purple}`}
            />
            <Typography>
               Pick up time is at{' '}
               <span className={classes.text_bold}>
                  {' '}
                  {convertTime(newTime.getHours(), newTime.getMinutes())}
               </span>
               .
            </Typography>
         </div>
      </>
   )
}

function convertTime(a, b) {
   let hour
   let minute
   let day

   if (a === 0) {
      hour = 12
      day = 'AM'
   } else if (a === 12) {
      hour = 12
      day = 'PM'
   } else if (a > 12) {
      hour = a - 12
      day = 'PM'
   } else {
      hour = a
      day = 'AM'
   }

   if (b < 10) {
      minute = '0' + b.toString()
   } else {
      minute = b
   }

   return `${hour}:${minute}${day}`
}

function MonthToWord(month) {
   const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
   ]

   return months[month]
}

export default DonationPreview
