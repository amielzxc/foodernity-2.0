import {
   CssBaseline,
   Grid,
   makeStyles,
   TextField,
   Toolbar,
   Typography,
   useMediaQuery,
   useTheme,
   Button,
} from '@material-ui/core'

import { useState } from 'react'
import { NavBar, Menu } from './NavBar'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import ScheduleIcon from '@material-ui/icons/Schedule'
import EmailRoundedIcon from '@material-ui/icons/EmailRounded'
import CallRoundedIcon from '@material-ui/icons/CallRounded'
import Footer from './Footer'

function ContactUs() {
   const [openMenu, setOpenMenu] = useState(false)
   return (
      <Grid container justify="center">
         <CssBaseline />
         <NavBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
         <Toolbar />
         {openMenu && <Menu />}
         <Form />
         <Footer />
      </Grid>
   )
}

function Form() {
   const classes = useStyles()
   const theme = useTheme()
   const sm = useMediaQuery(theme.breakpoints.down('sm'))
   const xs = useMediaQuery(theme.breakpoints.only('xs'))

   return (
      <Grid
         container
         item
         xs={12}
         justify="center"
         alignItems="center"
         style={{ height: '94vh', marginBottom: '5rem' }}
      >
         <Grid item xs={false} md={1} />
         <Grid item xs={11} md={5}>
            <Typography
               component="h1"
               style={{
                  textAlign: sm ? 'center' : 'left',
                  fontFamily: 'Inter',
                  fontWeight: '800',
                  marginBottom: '1.5rem',
                  marginTop: '3rem',
               }}
               variant={xs ? 'h4' : 'h3'}
            >
               Thank you for your interest in joining us!
            </Typography>
            <Typography
               variant="h5"
               style={{
                  textAlign: sm ? 'center' : 'left',
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  marginBottom: '1rem',
                  display: 'block',
               }}
            >
               Here, we value everyone who share the same goals with us — to
               reduce food waste, help achieve zero hunger, and strenghten
               communities. As long as we help one another in achieving these
               goals through our shared commitments, we can transform our world
               into a better place.
            </Typography>
            <Typography
               variant="h5"
               style={{
                  textAlign: sm ? 'center' : 'left',
                  fontFamily: 'Inter',
                  fontWeight: '600',
                  marginTop: sm ? '3rem' : '7rem',
                  color: '#66BB6A',
               }}
            >
               You can also reach to us directly
            </Typography>
            <Information />
         </Grid>
         <Grid item xs={false} md={1} />
         <Grid item xs={9} sm={6} md={4}>
            <form>
               <Typography
                  variant="h6"
                  style={{
                     textAlign: sm ? 'center' : 'left',
                     fontFamily: 'Inter',
                     fontWeight: '600',
                     marginBottom: '.1rem',
                     marginTop: '3rem',
                  }}
               >
                  Your Organization
               </Typography>
               <Typography
                  variant="body1"
                  style={{
                     fontFamily: 'Inter',
                     marginBottom: '.5rem',
                     textAlign: sm ? 'center' : 'left',
                  }}
               >
                  or your charity, insitution, you name it!
               </Typography>
               <TextField
                  variant="standard"
                  fullWidth
                  placeholder="Foodernity"
               />
               <Typography
                  variant="h6"
                  style={{
                     textAlign: sm ? 'center' : 'left',
                     fontFamily: 'Inter',
                     fontWeight: '600',
                     marginBottom: '.5rem',
                     marginTop: '2rem',
                  }}
               >
                  Email Address
               </Typography>
               <TextField
                  variant="standard"
                  fullWidth
                  placeholder="foodernity@gmail.com"
               />
               <Typography
                  variant="h6"
                  style={{
                     textAlign: sm ? 'center' : 'left',
                     fontFamily: 'Inter',
                     fontWeight: '600',
                     marginBottom: '.5rem',
                     marginTop: '2rem',
                  }}
               >
                  Contact Number
               </Typography>
               <TextField
                  variant="standard"
                  fullWidth
                  placeholder="09591248192"
               />
               <Typography
                  variant="h6"
                  style={{
                     textAlign: sm ? 'center' : 'left',
                     fontFamily: 'Inter',
                     fontWeight: '600',
                     marginBottom: '.1rem',
                     marginTop: '2rem',
                  }}
               >
                  Questions or comments
               </Typography>
               <Typography
                  variant="body2"
                  style={{
                     fontFamily: 'Inter',
                     marginBottom: '1rem',
                     textAlign: sm ? 'center' : 'left',
                  }}
               >
                  (optional)
               </Typography>
               <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="Some comments or questions that you might want to add"
                  multiline
                  rows={3}
               />
               <Button
                  variant="contained"
                  disableElevation
                  disableRipple
                  className={classes.button_green}
                  fullWidth
               >
                  Submit
               </Button>
            </form>
            <Typography
               variant="body2"
               style={{
                  fontFamily: 'Inter',
                  textAlign: sm ? 'center' : 'left',
                  color: '#898989',
                  marginBottom: sm ? '3rem' : '0',
               }}
            >
               Rest assured the information you will send us will be held
               confidential and securely. You can read our Privacy and Policy.
            </Typography>
         </Grid>
         <Grid item xs={false} md={1} />
      </Grid>
   )
}

function Information() {
   const classes = useStyles()

   return (
      <address>
         <div style={{ display: 'flex', margin: '1rem 0 .2rem 0' }}>
            <LocationOnIcon className={classes.icon__color_green} />
            <Typography variant="body1" style={{ fontFamily: 'Inter' }}>
               551 M.F. Jhocson St, Sampaloc, Manila, 1008 Metro Manila
            </Typography>
         </div>
         <div style={{ display: 'flex', margin: '.5rem 0 .2rem 0' }}>
            <ScheduleIcon className={classes.icon__color_green} />
            <Typography variant="body1" style={{ fontFamily: 'Inter' }}>
               8am - 6pm
            </Typography>
         </div>
         <div style={{ display: 'flex', margin: '.5rem 0 .2rem 0' }}>
            <EmailRoundedIcon className={classes.icon__color_green} />
            <Typography variant="body1" style={{ fontFamily: 'Inter' }}>
               foodernity@gmail.com
            </Typography>
         </div>
         <div style={{ display: 'flex', margin: '.5rem 0 .2rem 0' }}>
            <CallRoundedIcon className={classes.icon__color_green} />
            <Typography variant="body1" style={{ fontFamily: 'Inter' }}>
               +63287121900
            </Typography>
         </div>
      </address>
   )
}

const useStyles = makeStyles((theme) => ({
   icon__color_green: {
      color: '#66BB6A',
      fontSize: '1.8rem',
      marginRight: '1rem',
   },
   button_green: {
      margin: '1.3rem 0',
      fontFamily: 'Inter',
      fontWeight: '600',
      padding: theme.spacing(1.5, 3),
      color: 'white',
      backgroundColor: '#66BB6A',
      '&:hover': {
         backgroundColor: '#5DAC61',
         // Reset on touch devices, it doesn't add specificity
         '@media (hover: none)': {
            backgroundColor: '#66BB6A',
         },
      },
   },
}))
export default ContactUs
