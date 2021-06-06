import {
   CssBaseline,
   Grid,
   Toolbar,
   makeStyles,
   useTheme,
   useMediaQuery,
   Typography,
   Button,
} from '@material-ui/core'
import { useState } from 'react'
import { NavBar, Menu } from './NavBar'
import phoneMockup from './phone_mockup.png'
import laptopMockup from './laptop_mockup.png'
import foodBank from './food-bank.png'
import gpbadge from './gpbadge.png'
import apbadge from './apbadge.png'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function GetInvolved() {
   const [openMenu, setOpenMenu] = useState(false)
   return (
      <Grid container justify="center">
         <CssBaseline />
         <NavBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
         <Toolbar />
         {openMenu && <Menu />}
         <DownloadMobile />
         <ContinueWeb />
         <Partnership />
         <Footer />
      </Grid>
   )
}

function DownloadMobile() {
   const theme = useTheme()
   const sm = useMediaQuery(theme.breakpoints.down('sm'))
   const xs = useMediaQuery(theme.breakpoints.only('xs'))
   return (
      <Grid
         container
         item
         xs={12}
         alignItems="center"
         justify="center"
         style={{ padding: '3rem 0' }}
      >
         <Grid item xs={false} md={1} />
         <Grid
            container
            item
            xs={11}
            md={6}
            justify={sm ? 'center' : 'flex-start'}
         >
            <Grid item>
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
                  Share and request donations right at your fingertips.
               </Typography>
            </Grid>

            <Grid item>
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
                  Instantly share as well as request for donations around you.
                  Help make your community a sustainable place where no one gets
                  left behind.
               </Typography>
            </Grid>
            <Grid container item xs={12} justify={sm ? 'center' : 'flex-start'}>
               <img
                  src={gpbadge}
                  alt="download-googleplaystore"
                  style={{ marginRight: '.5rem' }}
               />
               <img src={apbadge} alt="download-applestore" />
            </Grid>
         </Grid>
         <Grid item xs={false} md={1} />
         <Grid container item xs={12} md={4} justify="center">
            <img
               src={phoneMockup}
               alt="phone-mockup"
               style={{ marginLeft: '1rem', marginTop: xs ? '1rem' : 'none' }}
            />
         </Grid>
      </Grid>
   )
}

function ContinueWeb() {
   const classes = useStyles()
   const theme = useTheme()
   const sm = useMediaQuery(theme.breakpoints.down('sm'))
   const xs = useMediaQuery(theme.breakpoints.only('xs'))
   return (
      <Grid
         container
         item
         xs={12}
         alignItems="center"
         justify="center"
         style={{ padding: '7rem 0' }}
      >
         <Grid
            container
            item
            xs={12}
            md={5}
            justify={sm ? 'center' : 'flex-end'}
         >
            <img
               src={laptopMockup}
               alt="phone-mockup"
               style={{ marginTop: xs ? '1rem' : 'none', width: '90%' }}
            />
         </Grid>
         <Grid item xs={false} md={1} />
         <Grid
            container
            item
            xs={11}
            md={5}
            justify={sm ? 'center' : 'flex-start'}
         >
            <Grid item>
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
                  You can share and request on the web too.
               </Typography>
            </Grid>

            <Grid item>
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
                  What our mobile can do can also be done on our web
                  application. We prioritizes our users, and making a website
                  for them is one of it.
               </Typography>
            </Grid>
            <Grid container item xs={12} justify={sm ? 'center' : 'flex-start'}>
               <Button
                  variant="contained"
                  disableElevation
                  disableRipple
                  className={classes.button_green}
                  component={Link}
                  to="/signup"
               >
                  Sign up
               </Button>

               <Button
                  variant="contained"
                  disableElevation
                  disableRipple
                  className={classes.button_green}
                  component={Link}
                  to="/signin"
               >
                  Sign in
               </Button>
            </Grid>
         </Grid>
         <Grid item xs={false} md={1} />
      </Grid>
   )
}

function Partnership() {
   const classes = useStyles()
   const theme = useTheme()
   const sm = useMediaQuery(theme.breakpoints.down('sm'))
   const xs = useMediaQuery(theme.breakpoints.only('xs'))
   return (
      <Grid
         container
         item
         xs={12}
         alignItems="center"
         justify="center"
         style={{ padding: '3rem 0', marginBottom: '10rem' }}
         direction={sm ? 'column-reverse' : 'row'}
      >
         <Grid item xs={false} md={1} />
         <Grid
            container
            item
            xs={11}
            md={6}
            justify={sm ? 'center' : 'flex-start'}
         >
            <Grid item>
               <Typography
                  component="h1"
                  style={{
                     textAlign: sm ? 'center' : 'left',
                     fontFamily: 'Inter',
                     fontWeight: '800',
                     marginBottom: '1.5rem',
                     marginTop: '3rem',
                  }}
                  variant={xs ? 'h3' : 'h2'}
               >
                  We are open for partnerships as well.
               </Typography>
            </Grid>

            <Grid item>
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
                  Food banks, charities, and other institutions that provide for
                  the poor are so much welcomed to be included in our goal. We
                  connect you to the donors who wants to donate to the
                  organizations, by providing a platform that helps you
                  communicate and make arrangements with one another.
               </Typography>
            </Grid>
            <Grid container item xs={12} justify={sm ? 'center' : 'flex-start'}>
               <Button
                  variant="contained"
                  disableElevation
                  disableRipple
                  className={classes.button_green}
               >
                  Contact Us
               </Button>
            </Grid>
         </Grid>
         <Grid item xs={false} md={1} />
         <Grid
            container
            item
            xs={12}
            md={4}
            justify={sm ? 'center' : 'flex-start'}
         >
            <img
               src={foodBank}
               alt="phone-mockup"
               style={{
                  marginLeft: '1rem',
                  marginTop: xs ? '1rem' : 'none',
                  width: '300px',
               }}
            />
         </Grid>
      </Grid>
   )
}

const useStyles = makeStyles((theme) => ({
   button_green: {
      marginRight: '.5rem',
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

   button_white: {
      fontFamily: 'Inter',
      fontWeight: '600',
      padding: theme.spacing(1.5, 3),
      color: 'black',
      backgroundColor: 'white',
      '&:hover': {
         backgroundColor: '#E5E5E5',
         // Reset on touch devices, it doesn't add specificity
         '@media (hover: none)': {
            backgroundColor: 'white',
         },
      },
   },
}))
export default GetInvolved
