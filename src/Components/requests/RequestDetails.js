import React, { useState } from 'react'
import {
   Avatar,
   Box,
   Button,
   ButtonGroup,
   Chip,
   CssBaseline,
   Divider,
   Grid,
   LinearProgress,
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
import LocationOnIcon from '@material-ui/icons/LocationOn'
import LocationPreview from '../shared/LocationPreview'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import { useMessageStore } from '../../store/MessageStore'
import Message from '../shared/Message'

export default function RequestDetails() {
   const theme = useTheme()
   const responsive = useMediaQuery(theme.breakpoints.down('sm'))
   return (
      <>
         <Helmet>
            <title>Requested Details | Foodernity</title>
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
            <DetailsContainer />
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
            <Divider className={classes.divider_margin} />
            <RequestorAvatar />
            {/* <Divider className={classes.divider_margin} /> */}
            {/* <DonationProgess /> */}
            {/* <Divider className={classes.divider_margin} /> */}
            {/* <Grid container spacing={1}>
               <Grid item xs={6}>
                  <QuantityInput />
               </Grid>
               <Grid item xs={6}>
                  <DonationExpiry />
               </Grid>
               <Grid item xs={12}>
                  <Typography variant="caption">
                     * always put the earliest expiry date
                  </Typography>
               </Grid>
            </Grid> */}
            <Divider className={classes.divider_margin} />
            <DonateButton />
            <MessageButton />
            {/* <ReportButton /> */}
         </LeftDrawer>
         <DialogDrawer buttonName="FILTER">
            <Title />
            <Divider className={classes.divider_margin} />
            <RequestorAvatar />
            <Divider className={classes.divider_margin} />
            <DonationProgess />
            <Divider className={classes.divider_margin} />
            <Grid container spacing={1}>
               <Grid item xs={6}>
                  <QuantityInput />
               </Grid>
               <Grid item xs={6}>
                  <DonationExpiry />
               </Grid>
               <Grid item xs={12}>
                  <Typography variant="caption">
                     * always put the earliest expiry date
                  </Typography>
               </Grid>
            </Grid>
            <Divider className={classes.divider_margin} />
            <DonateButton />
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
            Request Details
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
               Donee Name •{' '}
               <span style={{ fontWeight: '300', fontSize: '13px' }}>
                  {' '}
                  Posted 3h ago
               </span>
            </Typography>
         </div>
      </div>
   )
}

function DonationProgess(props) {
   const classes = useStyles()
   return (
      <Box>
         <Typography variant="body1" className={classes.text_bold}>
            Still needs donations
         </Typography>
         <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
               <LinearProgress variant="determinate" value={50} />
            </Box>
            <Box width="50px">
               <Typography
                  variant="body2"
                  color="textSecondary"
               >{` ${5} / 10`}</Typography>
            </Box>
         </Box>
      </Box>
   )
}

function QuantityInput(props) {
   const [quantity, setQuantity] = useState(0)
   const handleAdd = () => {
      if (quantity < 5) {
         setQuantity(quantity + 1)
      }
   }

   const handleSubtract = () => {
      if (quantity > 0) {
         setQuantity(quantity - 1)
      }
   }

   return (
      <ButtonGroup size="large" fullWidth style={{ height: '100%' }}>
         {quantity > 0 && <Button onClick={handleSubtract}>-</Button>}
         {quantity > 0 && <Button disabled>{quantity}</Button>}
         {quantity < 5 && <Button onClick={handleAdd}>+</Button>}
      </ButtonGroup>
   )
}

// returns input field for expiry date of the donation
function DonationExpiry(props) {
   const [selectedDate, handleDateChange] = useState(new Date())

   return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
         <DatePicker
            disablePast
            autoOk
            inputVariant="outlined"
            label="Expiry Date"
            format="L"
            value={selectedDate}
            onChange={handleDateChange}
            InputProps={{ readOnly: true }}
         />
      </MuiPickersUtilsProvider>
   )
}
function DonateButton() {
   const classes = useStyles()

   return (
      <Button variant="contained" fullWidth className={classes.button_green}>
         Donate 10 pieces
      </Button>
   )
}

function MessageButton() {
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

function DetailsContainer() {
   const classes = useStyles()
   const theme = useTheme()
   const responsive = useMediaQuery(theme.breakpoints.only('xs'))
   return (
      <MainContainer>
         <Paper style={{ margin: responsive ? '0' : '2rem', padding: '1rem' }}>
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
                        src="https://c1.staticflickr.com/5/4158/33593402264_bedafb79d1_c.jpg"
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
                     <Typography variant="h6" className={classes.text_bold}>
                        Lucky Me Pancit Canton Noodles
                     </Typography>
                  </Grid>
                  <Grid item xs={12}>
                     <Box display="flex">
                        <LocationOnIcon color="secondary" />
                        <Typography>3 kilometers away</Typography>
                     </Box>
                  </Grid>
                  <Grid item xs={12}>
                     <Box display="flex">
                        <Chip label="Instant Noodles" color="primary" />
                     </Box>
                  </Grid>
                  <Grid item xs={12}>
                     <Typography>
                        <span className={classes.text_bold}>
                           Total quantity needed:{' '}
                        </span>{' '}
                        <span style={{ fontSize: '14px' }}>10 pieces</span>
                     </Typography>
                  </Grid>
                  <Grid item xs={12}>
                     <Typography className={classes.text_bold}>
                        Request Notes
                     </Typography>
                     <Typography variant="body2">
                        i need 10 pieces of pancit canton noodles for my food
                        program. any flavor
                     </Typography>
                  </Grid>
                  <Grid item xs={12}>
                     <Divider className={classes.divider_margin} />
                  </Grid>
                  <Grid item xs={12}>
                     <LocationPreview lat={14.6043164} lng={120.9946287} />
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
                           National University-Manila
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
                           July 03, 2021
                        </Typography>
                     </Grid>
                  </Grid>
               </Grid>
            </Grid>
         </Paper>
      </MainContainer>
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
