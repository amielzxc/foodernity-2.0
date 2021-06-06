import React, { useState, useEffect } from 'react'
import LeftDrawer from '../Common/LeftDrawer'
import {
   Avatar,
   Divider,
   Typography,
   makeStyles,
   ButtonGroup,
   Button,
} from '@material-ui/core'
import DialogDrawer from '../Common/DialogDrawer'
import { useMessageStore } from './Messages'
import {
   MyDonationsData,
   MyRequestedData,
} from '../../Components/Common/MockData'
const useStyles = makeStyles((theme) => ({
   divider_margin: {
      margin: theme.spacing(2.5, 0),
   },
   text_bold: {
      fontWeight: 'bold',
   },
   title: {
      fontWeight: 'bold',
      marginTop: theme.spacing(0.6),
   },
   container__messageItem: {
      display: 'flex',
      margin: theme.spacing(1, 0),
      alignItems: 'center',
      cursor: 'pointer',
   },
   avatar__message: {
      width: '50px',
      height: '50px',
   },
   container__messageNameDesc: {
      display: 'flex',
      flexDirection: 'column',
   },
}))
export function MessagesDrawer() {
   const filterButton = useMessageStore((state) => state.filterButton)
   const [messageItems, setMessageItems] = useState(null)

   useEffect(() => {
      if (filterButton === 'My Donations') {
         setMessageItems(
            MyDonationsData.map((donation) => (
               <MessageItem
                  key={donation.messageID}
                  id={donation.messageID}
                  name={donation.donationName}
                  image={donation.imgLoc}
               />
            ))
         )
      } else if (filterButton === 'My Requested') {
         setMessageItems(
            MyRequestedData.map((donation) => (
               <MessageItem
                  key={donation.messageID}
                  id={donation.messageID}
                  name={donation.donationName}
                  image={donation.imgLoc}
               />
            ))
         )
      }
   }, [filterButton])

   const classes = useStyles()
   return (
      <LeftDrawer>
         <Title />
         <Divider className={classes.divider_margin} />
         <DonationButtons />
         {messageItems}
      </LeftDrawer>
   )
}
export function MessagesDrawerResponsive() {
   const filterButton = useMessageStore((state) => state.filterButton)
   const [messageItems, setMessageItems] = useState(null)

   useEffect(() => {
      if (filterButton === 'My Donations') {
         setMessageItems(
            MyDonationsData.map((donation) => (
               <MessageItem
                  key={donation.messageID}
                  id={donation.messageID}
                  name={donation.donationName}
                  image={donation.imgLoc}
               />
            ))
         )
      } else if (filterButton === 'My Requested') {
         setMessageItems(
            MyRequestedData.map((donation) => (
               <MessageItem
                  key={donation.messageID}
                  id={donation.messageID}
                  name={donation.donationName}
                  image={donation.imgLoc}
               />
            ))
         )
      }
   }, [filterButton])

   return (
      <DialogDrawer buttonName="MESSAGES" dialogTitle="Messages">
         <DonationButtons />
         {messageItems}
      </DialogDrawer>
   )
}
// returns the title of the left drawer
function Title() {
   const classes = useStyles()
   return (
      <div>
         <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h2"
         >
            Messages
         </Typography>
      </div>
   )
}

function DonationButtons() {
   const filterButton = useMessageStore((state) => state.filterButton)
   const setFilterButton = useMessageStore((state) => state.setFilterButton)

   return (
      <ButtonGroup>
         <Button
            variant={filterButton === 'My Donations' ? 'contained' : 'outlined'}
            color="primary"
            disableElevation
            fullWidth
            onClick={
               filterButton !== 'My Donations'
                  ? () => {
                       setFilterButton('My Donations')
                    }
                  : null
            }
         >
            My Donations
         </Button>
         <Button
            variant={filterButton === 'My Requested' ? 'contained' : 'outlined'}
            color="primary"
            disableElevation
            fullWidth
            onClick={
               filterButton !== 'My Requested'
                  ? () => {
                       setFilterButton('My Requested')
                    }
                  : null
            }
         >
            My Requested
         </Button>
      </ButtonGroup>
   )
}
function MessageItem(props) {
   const { id, image, name } = props
   const setDonationID = useMessageStore((state) => state.setDonationID)
   const classes = useStyles()

   const handleClick = () => {
      setDonationID(parseInt(id))
   }
   return (
      <div className={classes.container__messageItem} onClick={handleClick}>
         <Avatar className={classes.avatar__message} src={image} />
         <div style={{ width: '10px' }} />
         <div className={classes.container__messageNameDesc}>
            <Typography variant="body1" className={classes.text_bold} noWrap>
               {name}
            </Typography>
            <Typography variant="body2">New Message</Typography>
         </div>
      </div>
   )
}
