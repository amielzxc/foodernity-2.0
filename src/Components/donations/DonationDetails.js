import React, { useState, useEffect } from 'react'
import {
   Avatar,
   Box,
   Button,
   Chip,
   CssBaseline,
   Divider,
   Grid,
   makeStyles,
   Paper,
   Typography,
   useMediaQuery,
   useTheme,
} from '@material-ui/core'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import { Helmet } from 'react-helmet'
import DialogDrawer from '../shared/DialogDrawer'
import LeftDrawer from '../shared/LeftDrawer'
import StyledAppBar from '../shared/StyledAppBar'
import { deepOrange } from '@material-ui/core/colors'
import MainContainer from '../shared/MainContainer'
import LocationPreview from '../shared/LocationPreview'
// import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
// import MomentUtils from '@date-io/moment'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
import { useMessageStore } from '../../store/MessageStore'
import Message from '../shared/Message'

export default function DonationDetails() {
   const theme = useTheme()
   const responsive = useMediaQuery(theme.breakpoints.down('sm'))
   const { id } = useParams()

   return (
      <>
         <Helmet>
            <title>Donation Details | Foodernity</title>
         </Helmet>
         <div
            style={{
               display: 'flex',
               flexDirection: responsive ? 'column' : 'row',
            }}
         >
            <CssBaseline />
            <StyledAppBar />
            <ActionDrawer />
            <DetailsContainer id={id} />
            <Message />
         </div>
      </>
   )
}

function ActionDrawer() {
   const classes = useStyles()
   return (
      <>
         <LeftDrawer>
            <Title />
            <Divider className={classes.divider_margin1} />
            <RequestorAvatar />
            {/* <Divider className={classes.divider_margin1} /> */}
            {/* <DonationProgess /> */}
            {/* <Divider className={classes.divider_margin1} /> */}
            {/* <Grid container spacing={1} justify="center">
               <Grid item xs={5}>
                  <QuantityInput />
               </Grid>

               <Grid item xs={12}>
                  <Typography variant="caption">
                     * max of 10 quantity can only be received
                  </Typography>
               </Grid>
            </Grid> */}
            <Divider className={classes.divider_margin1} />
            <ReceiveButton />
            <MessageButton />
            {/* <ReportButton /> */}
         </LeftDrawer>
         <DialogDrawer buttonName="FILTER">
            <Title />
            <Divider className={classes.divider_margin1} />
            <RequestorAvatar />
            <Divider className={classes.divider_margin1} />
            {/* <DonationProgess /> */}
            {/* <Divider className={classes.divider_margin1} /> */}
            {/* <Grid container spacing={1} justify="center">
               <Grid item xs={5}>
                  <QuantityInput />
               </Grid>

               <Grid item xs={12}>
                  <Typography variant="caption">
                     * max of 10 quantity can only be received
                  </Typography>
               </Grid>
            </Grid> */}
            {/* <Divider className={classes.divider_margin1} /> */}
            <ReceiveButton />
            <MessageButton />
            {/* <ReportButton /> */}
         </DialogDrawer>
      </>
   )
}

function Title() {
   const classes = useStyles()
   return (
      <div>
         <Typography
            className={`${classes.title} ${classes.text_bold}`}
            gutterBottom
            variant="h5"
            component="h2"
         >
            Donation Details
         </Typography>
      </div>
   )
}

// returns the requestor's avatar and name
function RequestorAvatar() {
   const classes = useStyles()
   return (
      <div className={classes.container__avatar}>
         <Avatar className={classes.avatar__color}>FB</Avatar>
         <div>
            <Typography
               variant="body1"
               component="p"
               className={classes.text_bold}
            >
               Fhillip Bagsic
            </Typography>
            <Typography variant="body2">
               Donor Name •{' '}
               <span style={{ fontWeight: '300', fontSize: '13px' }}>
                  {' '}
                  Posted 3h ago
               </span>
            </Typography>
         </div>
      </div>
   )
}

// function DonationProgess(props) {
//    const classes = useStyles()
//    return (
//       <Box>
//          <Typography variant="body1" className={classes.text_bold}>
//             Remaining quantity left
//          </Typography>
//          <Box display="flex" alignItems="center">
//             <Box width="100%" mr={1}>
//                <LinearProgress variant="determinate" value={72} />
//             </Box>
//             <Box width="80px">
//                <Typography
//                   variant="body2"
//                   color="textSecondary"
//                >{` 72 / 100`}</Typography>
//             </Box>
//          </Box>
//       </Box>
//    )
// }

// function QuantityInput(props) {
//    const [quantity, setQuantity] = useState(0)
//    const handleAdd = () => {
//       if (quantity < 10) {
//          setQuantity(quantity + 1)
//       }
//    }

//    const handleSubtract = () => {
//       if (quantity > 0) {
//          setQuantity(quantity - 1)
//       }
//    }

//    return (
//       <ButtonGroup size="large" fullWidth style={{ height: '100%' }}>
//          {quantity > 0 && <Button onClick={handleSubtract}>-</Button>}
//          {quantity > 0 && <Button disabled>{quantity}</Button>}
//          {quantity < 10 && <Button onClick={handleAdd}>+</Button>}
//       </ButtonGroup>
//    )
// }

// returns input field for expiry date of the donation
// function DonationExpiry(props) {
//    const [selectedDate, handleDateChange] = useState(new Date())

//    return (
//       <MuiPickersUtilsProvider utils={MomentUtils}>
//          <DatePicker
//             disablePast
//             autoOk
//             inputVariant="outlined"
//             label="Expiry Date"
//             format="L"
//             value={selectedDate}
//             onChange={handleDateChange}
//             InputProps={{ readOnly: true }}
//          />
//       </MuiPickersUtilsProvider>
//    )
// }

function ReceiveButton() {
   const classes = useStyles()

   return (
      <Button variant="contained" fullWidth className={classes.button_green}>
         Receive the donation
      </Button>
   )
}

function MessageButton() {
   const classes = useStyles()
   const setOpenMessage = useMessageStore((state) => state.setOpenMessage)

   return (
      <Button
         variant="outlined"
         color="primary"
         fullWidth
         startIcon={<ChatBubbleIcon />}
         style={{ marginTop: '1rem' }}
         onClick={() => {
            setOpenMessage(true)
         }}
      >
         Message Donor
      </Button>
   )
}

// returns a button that allows user to report what the user thinks is deemed to be reported
// function ReportButton(props) {
//    const { handleOpen } = props
//    const classes = useStyles()
//    return (
//       <Button
//          onClick={handleOpen}
//          color="secondary"
//          variant="outlined"
//          fullWidth
//          className={classes.button__report}
//       >
//          See something wrong?
//       </Button>
//    )
// }

function DetailsContainer({ id }) {
   const classes = useStyles()
   const theme = useTheme()
   const responsive = useMediaQuery(theme.breakpoints.only('xs'))

   const [donationDetails, setDonationDetails] = useState(null)
   useEffect(() => {
      const num = Number(id)
      Axios.post(`http://localhost:3001/listingItem/get/${num}`).then(
         (response) => {
            console.log(response.data)
            setDonationDetails(response.data)
         }
      )
   }, [])

   return (
      <>
         {donationDetails !== null && (
            <MainContainer>
               <Paper
                  style={{
                     margin: responsive ? '0' : '2rem 2rem',
                     padding: '1rem',
                  }}
               >
                  <Grid container spacing={1} justify="center">
                     <Grid
                        container
                        item
                        xs={12}
                        lg={6}
                        justify="center"
                        alignItems="center"
                        // style={{ backgroundColor: 'red' }}
                     >
                        <div
                           style={{
                              borderRadius: '5px',
                              // backgroundColor: 'grey',
                              width: '80%',
                              height: '100%',
                              display: 'flex',
                              justifyContent: 'center',
                           }}
                        >
                           <img
                              src={donationDetails[0].imgLoc}
                              alt="donation"
                              style={{
                                 maxWidth: '100%',

                                 height: '100%',
                                 objectFit: 'contain',
                              }}
                           />
                        </div>
                     </Grid>
                     <Grid container item xs={12} lg={6} spacing={1}>
                        <Grid item>
                           <Typography
                              variant="h6"
                              className={classes.text_bold}
                           >
                              {donationDetails[0].donationName}
                           </Typography>
                        </Grid>
                        {/* <Grid item xs={12}>
                  <Box display="flex">
                     <LocationOnIcon color="secondary" />
                     <Typography>3 kilometers away</Typography>
                  </Box>
               </Grid> */}
                        <Grid item xs={12} style={{ margin: '5px 0' }}>
                           <Box display="flex">
                              <Chip
                                 label={donationDetails[0].donationCategory}
                                 color="primary"
                              />
                           </Box>
                        </Grid>

                        <Grid item xs={6}>
                           <Typography
                              className={classes.text_bold}
                              style={{ textAlign: 'center' }}
                           >
                              Total quantity
                           </Typography>

                           <Typography
                              variant="body2"
                              style={{ textAlign: 'center' }}
                           >
                              {donationDetails[0].donationQuantity} pieces
                           </Typography>
                        </Grid>
                        <Grid item xs={6}>
                           <Typography
                              className={classes.text_bold}
                              style={{ textAlign: 'center' }}
                           >
                              Expiry Date
                           </Typography>
                           <Typography
                              variant="body2"
                              style={{ textAlign: 'center' }}
                           >
                              {donationDetails[0].donationExpiry}
                           </Typography>
                        </Grid>
                        <Grid item xs={12}>
                           <Typography className={classes.text_bold}>
                              Donation Notes
                           </Typography>
                           <Typography variant="body2">
                              {donationDetails[0].donationNote}
                           </Typography>
                        </Grid>
                        <Grid item xs={12}>
                           <Divider className={classes.divider_margin} />
                        </Grid>
                        <Grid item xs={12}>
                           <LocationPreview
                              lat={donationDetails[0].lat}
                              lng={donationDetails[0].lng}
                           />
                        </Grid>
                        <Grid item xs={12}>
                           <Divider className={classes.divider_margin} />
                        </Grid>
                        <Grid container item xs={12}>
                           <Grid item xs={6}>
                              <Typography
                                 className={classes.text_bold}
                                 style={{ textAlign: 'center' }}
                              >
                                 Pickup location
                              </Typography>
                              <Typography
                                 variant="body2"
                                 style={{ textAlign: 'center' }}
                              >
                                 {donationDetails[0].pickupLoc}
                              </Typography>
                           </Grid>
                           <Grid item xs={6}>
                              <Typography
                                 className={classes.text_bold}
                                 style={{ textAlign: 'center' }}
                              >
                                 Pickup date
                              </Typography>
                              <Typography
                                 variant="body2"
                                 style={{ textAlign: 'center' }}
                              >
                                 {donationDetails[0].pickupDate}
                              </Typography>
                           </Grid>
                        </Grid>
                     </Grid>
                  </Grid>
               </Paper>
            </MainContainer>
         )}
      </>
   )
}

const useStyles = makeStyles((theme) => ({
   text_bold: {
      fontWeight: 'bold',
   },
   title: {
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
   divider_margin: {
      margin: theme.spacing(1.5, 0),
   },
   divider_margin1: {
      margin: theme.spacing(2.5, 0),
   },
   button_green: {
      color: 'white',
      backgroundColor: '#66BB6A',
      '&:hover': {
         backgroundColor: '#57A05A',
         // Reset on touch devices, it doesn't add specificity
         '@media (hover: none)': {
            backgroundColor: '#66BB6A',
         },
      },
   },
   button__report: {
      marginTop: 'auto',
   },
}))
