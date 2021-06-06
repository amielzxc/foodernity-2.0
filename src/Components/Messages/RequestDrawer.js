import React, { useEffect, useState } from 'react'
import {
   makeStyles,
   Drawer,
   Toolbar,
   Typography,
   Divider,
   Chip,
   Button,
   withStyles,
   Avatar,
} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import EventAvailableIcon from '@material-ui/icons/EventAvailable'
import ScheduleIcon from '@material-ui/icons/Schedule'
import DialogDrawer from '../Common/DialogDrawer'
import { deepOrange } from '@material-ui/core/colors'
import { useMessageStore } from './Messages'
import { DonationsData } from '../../Components/Common/MockData'

const drawerWidth = 350

const useStyles = makeStyles((theme) => ({
   drawer: {
      width: drawerWidth,
      flexShrink: 0,
   },
   drawer__paper: {
      width: drawerWidth,
      padding: theme.spacing(2.5, 2),
   },
   drawer__container: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'auto',
      height: '100%',
      '&::-webkit-scrollbar': {
         display: 'none',
      },
   },
   divider_margin: {
      margin: theme.spacing(2.5, 0),
   },
   text_bold: {
      fontWeight: 'bold',
   },
   text_link: {
      color: '#2196F3',
   },
   title: {
      fontWeight: 'bold',
      margin: theme.spacing(0.5, 0),
   },
   container__avatar: {
      display: 'flex',
      alignItems: 'center',
   },
   avatar__color: {
      backgroundColor: deepOrange[500],
      marginRight: '10px',
   },
   container__donationDetails: {
      height: '70%',
      overflowY: 'auto',
   },
   container__distance: {
      display: 'flex',
      margin: theme.spacing(0.5, 0),
   },
   container__category: {
      display: 'flex',
      margin: theme.spacing(1, 0),
      overflowX: 'auto',
   },
   container__quantity: {
      margin: theme.spacing(0.5, 0),
   },
   container__expiry: {
      margin: theme.spacing(0.5, 0),
   },
   container__notes: {
      margin: theme.spacing(0.6, 0),
   },
   container__pickup: {
      display: 'flex',
      alignItems: 'center',
      margin: theme.spacing(1, 0),
   },
   icon__location: {
      color: '#66BB6A',
      marginRight: theme.spacing(0.5),
   },
   icon__date: {
      color: '#FFA726',
      marginRight: theme.spacing(0.5),
   },
   icon__time: {
      color: '#AB47BC',
      marginRight: theme.spacing(0.5),
   },
}))
//returns a drawer that is placed on the left side of the website.
export function RequestDrawer() {
   const donationID = useMessageStore((state) => state.donationID)
   const donationDetails = useMessageStore((state) => state.donationDetails)
   const setDonationDetails = useMessageStore(
      (state) => state.setDonationDetails
   )

   useEffect(() => {
      if (donationID) {
         setDonationDetails(
            DonationsData.filter((data) => data.donationID === donationID)
         )
      }
   }, [donationID, setDonationDetails])

   if (donationDetails) {
      console.log(donationDetails)
   }
   const classes = useStyles()

   return (
      <Drawer
         anchor="right"
         className={classes.drawer}
         variant="permanent"
         classes={{
            paper: classes.drawer__paper,
         }}
      >
         <Toolbar />
         {donationDetails ? (
            <div className={classes.drawer__container}>
               <Title status={donationDetails[0].status} />
               <Divider className={classes.divider_margin} />
               <div className={classes.container__donationDetails}>
                  <UserName
                     donorName={donationDetails[0].donorName}
                     doneeName={donationDetails[0].doneeName}
                  />
                  <Divider className={classes.divider_margin} />
                  <DonationName
                     donationName={donationDetails[0].donationName}
                  />
                  <ChipCategory
                     donationCategory={donationDetails[0].donationCategory}
                  />
                  <DonationExpiry
                     donationExpiry={donationDetails[0].donationExpiry}
                  />
                  <DonationNotes
                     donationNote={donationDetails[0].donationNote}
                  />
                  <DonationPickupDetails
                     pickupLoc={donationDetails[0].pickupLoc}
                     pickupDate={donationDetails[0].pickupDate}
                     pickupTime={donationDetails[0].pickupTime}
                  />
               </div>

               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'column',
                     marginTop: 'auto',
                  }}
               >
                  <DonationActions status={donationDetails[0].status} />
               </div>
            </div>
         ) : // <Typography
         //    className={classes.title}
         //    gutterBottom
         //    variant="h5"
         //    component="h2"
         // >
         //    Donation Details
         // </Typography>
         null}
      </Drawer>
   )
}
export function RequestDrawerResponsive() {
   const donationID = useMessageStore((state) => state.donationID)
   const donationDetails = useMessageStore((state) => state.donationDetails)
   const setDonationDetails = useMessageStore(
      (state) => state.setDonationDetails
   )
   console.log(donationDetails)

   useEffect(() => {
      if (donationID) {
         setDonationDetails(
            DonationsData.filter((data) => data.donationID === donationID)
         )
      }
   }, [donationID, setDonationDetails])

   const classes = useStyles()
   return (
      <DialogDrawer buttonName="DONATION DETAILS">
         {donationDetails ? (
            <div className={classes.drawer__container}>
               <Title status={donationDetails[0].status} />
               <Divider className={classes.divider_margin} />
               <div className={classes.container__donationDetails}>
                  <UserName
                     donorName={donationDetails[0].donorName}
                     doneeName={donationDetails[0].doneeName}
                  />
                  <Divider className={classes.divider_margin} />
                  <DonationName
                     donationName={donationDetails[0].donationName}
                  />
                  <ChipCategory
                     donationCategory={donationDetails[0].donationCategory}
                  />
                  <DonationExpiry
                     donationExpiry={donationDetails[0].donationExpiry}
                  />
                  <DonationNotes
                     donationNote={donationDetails[0].donationNote}
                  />
                  <DonationPickupDetails
                     pickupLoc={donationDetails[0].pickupLoc}
                     pickupDate={donationDetails[0].pickupDate}
                     pickupTime={donationDetails[0].pickupTime}
                  />
               </div>

               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'column',
                     marginTop: 'auto',
                  }}
               >
                  <DonationActions status={donationDetails[0].status} />
               </div>
            </div>
         ) : // <Typography
         //    className={classes.title}
         //    gutterBottom
         //    variant="h5"
         //    component="h2"
         // >
         //    Donation Details
         // </Typography>
         null}
      </DialogDrawer>
   )
}
// returns the title of the right drawer
function Title(props) {
   const { status } = props
   let title
   const classes = useStyles()

   if (status === 'Requested') {
      title = 'Donation Request'
   } else if (status === 'Ongoing') {
      title = 'Donation Ongoing'
   } else {
      title = 'Donation Claimed'
   }

   return (
      <div>
         <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h2"
         >
            {title}
         </Typography>
      </div>
   )
}

function UserName(props) {
   const { donorName, doneeName } = props
   const filterButton = useMessageStore((state) => state.filterButton)
   const classes = useStyles()

   return (
      <>
         <Typography>
            {filterButton === 'My Donations' ? 'Requested By' : 'Listed By'}
         </Typography>
         <div className={classes.container__avatar}>
            <Avatar className={classes.avatar__color}>FB</Avatar>
            <Typography variant="body1" component="p">
               {filterButton === 'My Donations' ? doneeName : donorName}
            </Typography>
         </div>
      </>
   )
}

function DonationName(props) {
   const classes = useStyles()
   return (
      <Typography variant="h6" className={classes.text_bold}>
         {props.donationName}
      </Typography>
   )
}

// returns the food category of the donation
function ChipCategory(props) {
   const classes = useStyles()
   return (
      <div className={classes.container__category}>
         <Chip label={props.donationCategory} color="primary" />
      </div>
   )
}

function DonationExpiry(props) {
   const classes = useStyles()
   return (
      <div className={classes.container__expiry}>
         <Typography>
            <span className={classes.text_bold}>Expiry date:</span>{' '}
            {props.donationExpiry}
         </Typography>
      </div>
   )
}
function DonationNotes(props) {
   const classes = useStyles()
   return (
      <div className={classes.container__notes}>
         <Typography className={classes.text_bold}>Donation Notes</Typography>
         <Typography>{props.donationNote}</Typography>
      </div>
   )
}

// returns pickup details - the pickup location, date, and time
function DonationPickupDetails(props) {
   const { pickupLoc, pickupDate, pickupTime } = props
   const classes = useStyles()
   return (
      <>
         <div className={classes.container__pickup}>
            <LocationOnIcon className={classes.icon__location} />
            <Typography>
               <span className={`${classes.text_bold} ${classes.text_link}`}>
                  {pickupLoc}
               </span>
            </Typography>
         </div>
         <div className={classes.container__pickup}>
            <EventAvailableIcon className={`${classes.icon__date}`} />
            <Typography>{pickupDate}</Typography>
         </div>
         <div className={classes.container__pickup}>
            <ScheduleIcon className={classes.icon__time} />
            <Typography>{pickupTime}</Typography>
         </div>
      </>
   )
}

function DonationActions(props) {
   const classes = useStyles()
   const filterButton = useMessageStore((state) => state.filterButton)
   const { status } = props

   if (filterButton === 'My Donations' && status === 'Requested') {
      return (
         <>
            <Divider className={classes.divider_margin} />
            <ApproveButton />
            <DeclineButton />
         </>
      )
   } else if (filterButton === 'My Requested' && status === 'Requested') {
      return (
         <>
            <Divider className={classes.divider_margin} />
            <CancelButton />
         </>
      )
   } else {
      return null
   }
}
function CancelButton() {
   return (
      <Button color="secondary" variant="outlined" fullWidth>
         Cancel my Request
      </Button>
   )
}
function DeclineButton() {
   return (
      <Button color="secondary" variant="outlined" fullWidth>
         Decline Request
      </Button>
   )
}
function ApproveButton() {
   const StyledButton = withStyles({
      root: {
         backgroundColor: '#66BB6A',
         color: 'white',
         marginBottom: '.5rem',
         '&:hover': {
            backgroundColor: '#60B064',
         },
      },
   })(Button)
   return <StyledButton fullWidth>Approve Request</StyledButton>
}
