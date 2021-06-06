import React, { useState } from 'react'
import {
   Button,
   CssBaseline,
   Grid,
   makeStyles,
   Toolbar,
   Typography,
   useMediaQuery,
   useTheme,
} from '@material-ui/core'
import phoneMockup from './phone_mockup.png'
import deviceMockup from './device_mockup.png'
import waste from './waste.png'
import hunger from './hunger.png'
import community from './community.png'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { Link } from 'react-router-dom'
import { NavBar, Menu } from './NavBar'
import Footer from './Footer'
function LandingPage() {
   const [openMenu, setOpenMenu] = useState(false)
   return (
      <Grid container justify="center">
         <CssBaseline />
         <NavBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
         <Toolbar />
         {openMenu && <Menu />}
         <Hero />
         <Goal />
         <RequestingSteps />
         <DonatingSteps />
         <Partner />
         <Footer />
      </Grid>
   )
}

function Hero() {
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
         style={{ padding: '3rem 0', height: sm ? 'auto' : '94vh' }}
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
               <div
                  style={{
                     position: 'absolute',
                     top: -100,
                     zIndex: -1,
                     left: -200,
                     height: '400px',
                     width: '400px',
                     borderRadius: '350px',
                     backgroundColor: '#C8E6C9',
                  }}
               />
            </Grid>

            <Grid item>
               <div
                  style={{
                     position: 'absolute',
                     top: -70,
                     zIndex: -1,
                     right: 500,
                     height: '200px',
                     width: '200px',
                     borderRadius: '350px',
                     backgroundColor: '#BBDEFB',
                     overflowX: 'hidden',
                     overflowY: 'hidden',
                  }}
               />
            </Grid>

            <Grid item>
               <div
                  style={{
                     position: 'absolute',
                     bottom: -120,
                     zIndex: -1,
                     left: 200,
                     height: '200px',
                     width: '200px',
                     borderRadius: '350px',
                     backgroundColor: '#BBDEFB',
                     overflowX: 'hidden',
                     overflowY: 'hidden',
                  }}
               />
            </Grid>

            <Grid item>
               <div
                  style={{
                     position: 'absolute',
                     bottom: -200,
                     zIndex: -1,
                     right: 0,
                     height: '400px',
                     width: '400px',
                     borderRadius: '400px',
                     backgroundColor: '#C8E6C9',
                     overflowX: 'hidden',
                     overflowY: 'hidden',
                  }}
               />
            </Grid>

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
                  Join the #1 local free food sharing app
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
                  Fight waste. Help your neighbors. Save our planet. Feel
                  Amazing!
               </Typography>
            </Grid>
            <Grid container item xs={12} justify={sm ? 'center' : 'flex-start'}>
               <Button
                  variant="contained"
                  disableElevation
                  disableRipple
                  className={classes.button_green}
                  style={{ margin: sm ? '1.5rem' : '0' }}
               >
                  Download now
               </Button>
            </Grid>
         </Grid>
         <Grid item xs={false} lg={1} />
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

function Goal() {
   const classes = useStyles()
   return (
      <Grid
         container
         item
         justify="center"
         xs={12}
         style={{ backgroundColor: 'black', marginBottom: '3rem' }}
      >
         <Grid item>
            <Typography
               variant="h5"
               style={{
                  marginTop: '3rem',
                  color: '#66BB6A',
                  fontFamily: 'Inter',
                  fontWeight: '700',
               }}
            >
               OUR GOAL
            </Typography>
         </Grid>
         <Grid item xs={12} />
         <Grid item xs={10}>
            <Typography
               variant="h4"
               style={{
                  textAlign: 'center',
                  marginTop: '3rem',
                  color: 'white',
                  fontFamily: 'Inter',
                  fontWeight: '700',
                  marginBottom: '4rem',
               }}
            >
               Why Recognizing Food Insecurity Matters to Us
            </Typography>
         </Grid>
         <Grid item xs={12} />
         <Grid container item xs={11} spacing={5} justify="center">
            <Grid
               container
               direction="column"
               alignItems="center"
               item
               xs={12}
               sm={10}
               md={6}
               lg={4}
            >
               <img
                  src={waste}
                  alt="food-waste"
                  style={{ width: '150px', height: '150px' }}
               />

               <Typography
                  variant="h5"
                  style={{
                     color: 'white',
                     textAlign: 'center',
                     fontFamily: 'Inter',
                     margin: '1rem 0',
                  }}
               >
                  Reduce Food Waste
               </Typography>
               <Typography
                  style={{
                     color: 'white',
                     fontFamily: 'Inter',
                     textAlign: 'center',
                     fontWeight: '300',
                  }}
               >
                  Excess supply resources brings opportunity to hungry people.
               </Typography>
            </Grid>
            <Grid
               container
               direction="column"
               alignItems="center"
               item
               xs={12}
               sm={10}
               md={6}
               lg={4}
            >
               <img
                  src={hunger}
                  alt="food-waste"
                  style={{ width: '150px', height: '150px' }}
               />
               <Typography
                  variant="h5"
                  style={{
                     color: 'white',
                     textAlign: 'center',
                     fontFamily: 'Inter',
                     margin: '1rem 0',
                  }}
               >
                  End Hunger. Help Poverty
               </Typography>
               <Typography
                  style={{
                     color: 'white',
                     fontFamily: 'Inter',
                     textAlign: 'center',
                     fontWeight: '300',
                  }}
               >
                  Hunger is caused by poverty, but if we all work together, we
                  can make a world where no one sleeps hungry.
               </Typography>
            </Grid>
            <Grid
               container
               direction="column"
               alignItems="center"
               item
               xs={12}
               sm={10}
               md={6}
               lg={4}
            >
               <img
                  src={community}
                  alt="food-waste"
                  style={{ width: '150px', height: '150px' }}
               />
               <Typography
                  variant="h5"
                  style={{
                     color: 'white',
                     textAlign: 'center',
                     fontFamily: 'Inter',
                     margin: '1rem 0',
                  }}
               >
                  Build Community Connection
               </Typography>
               <Typography
                  style={{
                     color: 'white',
                     fontFamily: 'Inter',
                     textAlign: 'center',
                     fontWeight: '300',
                  }}
               >
                  Connecting people with food, organizations serving the
                  community.
               </Typography>
            </Grid>
         </Grid>
         <Grid
            item
            container
            xs={12}
            justify="center"
            style={{ marginTop: '5rem', marginBottom: '5rem' }}
         >
            <Button
               component={Link}
               to="/ourgoal"
               variant="contained"
               endIcon={<ChevronRightIcon />}
               disableElevation
               disableRipple
               className={classes.button_green}
            >
               View our goal
            </Button>
         </Grid>
      </Grid>
   )
}

function RequestingSteps() {
   const theme = useTheme()
   const sm = useMediaQuery(theme.breakpoints.down('sm'))

   return (
      <Grid
         container
         item
         xs={12}
         spacing={10}
         style={{ marginBottom: '5rem' }}
      >
         <Grid container item xs={12} md={5} justify="center">
            <Grid item>
               <Typography
                  variant="h4"
                  style={{
                     fontFamily: 'Inter',
                     fontWeight: '800',
                     textAlign: sm ? 'center' : 'left',
                  }}
               >
                  Requesting donations is an easy step.
               </Typography>
               <Grid item>
                  <img
                     src={deviceMockup}
                     alt="device-mockup"
                     style={{ width: '100%', marginTop: '2rem' }}
                  />
               </Grid>
            </Grid>
         </Grid>
         <Grid container item xs={12} md={7}>
            <Grid item>
               <div
                  style={{
                     backgroundColor: '#66BB6A',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     width: '4rem',
                     height: '4rem',
                     borderRadius: '2rem',
                     marginBottom: '1rem',
                  }}
               >
                  <Typography
                     variant="h4"
                     style={{
                        fontFamily: 'Inter',
                        fontWeight: '800',
                        display: 'inline-block',
                        color: 'white',
                     }}
                  >
                     1
                  </Typography>
               </div>
               <Typography
                  variant="h5"
                  style={{ fontFamily: 'Inter', fontWeight: '600' }}
               >
                  Browse for available donations
               </Typography>
               <Typography style={{ fontFamily: 'Inter', fontWeight: '400' }}>
                  You can browse through the donations around your community.
                  You can even set filters too, to match the preferences you
                  like.
               </Typography>
            </Grid>
            <Grid item>
               <div
                  style={{
                     backgroundColor: '#66BB6A',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     width: '4rem',
                     height: '4rem',
                     borderRadius: '2rem',
                     marginBottom: '1rem',
                     marginTop: sm ? '2rem' : '0',
                  }}
               >
                  <Typography
                     variant="h4"
                     style={{
                        fontFamily: 'Inter',
                        fontWeight: '800',
                        display: 'inline-block',
                        color: 'white',
                     }}
                  >
                     2
                  </Typography>
               </div>
               <Typography
                  variant="h5"
                  style={{ fontFamily: 'Inter', fontWeight: '600' }}
               >
                  Request the donation you want
               </Typography>
               <Typography style={{ fontFamily: 'Inter', fontWeight: '400' }}>
                  Once you have requested a donation, you can message the donor
                  to talk about further arrangements on claiming the donation.
               </Typography>
            </Grid>
            <Grid item>
               <div
                  style={{
                     backgroundColor: '#66BB6A',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     width: '4rem',
                     height: '4rem',
                     borderRadius: '2rem',
                     marginBottom: '1rem',
                     marginTop: sm ? '2rem' : '0',
                  }}
               >
                  <Typography
                     variant="h4"
                     style={{
                        fontFamily: 'Inter',
                        fontWeight: '800',
                        display: 'inline-block',
                        color: 'white',
                     }}
                  >
                     3
                  </Typography>
               </div>
               <Typography
                  variant="h5"
                  style={{ fontFamily: 'Inter', fontWeight: '600' }}
               >
                  Get the donation
               </Typography>
               <Typography style={{ fontFamily: 'Inter', fontWeight: '400' }}>
                  After setting up your arrangement between the donor, you can
                  now get your donation either by pickup or meetup according to
                  the arrangement. Do not forget to practice safety protocols!
               </Typography>
            </Grid>
         </Grid>
      </Grid>
   )
}

function DonatingSteps() {
   const theme = useTheme()
   const sm = useMediaQuery(theme.breakpoints.down('sm'))

   return (
      <Grid
         container
         item
         xs={12}
         spacing={10}
         direction={sm ? 'column-reverse' : 'row'}
         style={{ marginBottom: '5rem' }}
      >
         <Grid container item xs={12} md={7}>
            <Grid item>
               <div
                  style={{
                     backgroundColor: '#66BB6A',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     width: '4rem',
                     height: '4rem',
                     borderRadius: '2rem',
                     marginBottom: '1rem',
                  }}
               >
                  <Typography
                     variant="h4"
                     style={{
                        fontFamily: 'Inter',
                        fontWeight: '800',
                        display: 'inline-block',
                        color: 'white',
                     }}
                  >
                     1
                  </Typography>
               </div>
               <Typography
                  variant="h5"
                  style={{
                     fontFamily: 'Inter',
                     fontWeight: '600',
                  }}
               >
                  Acknowledge the donating guidelines
               </Typography>
               <Typography
                  style={{
                     fontFamily: 'Inter',
                     fontWeight: '400',
                  }}
               >
                  To protect the safety of everyone, several guidelines are
                  implem
               </Typography>
            </Grid>
            <Grid item>
               <div
                  style={{
                     backgroundColor: '#66BB6A',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     width: '4rem',
                     height: '4rem',
                     borderRadius: '2rem',
                     marginBottom: '1rem',
                     marginTop: sm ? '2rem' : '0',
                  }}
               >
                  <Typography
                     variant="h4"
                     style={{
                        fontFamily: 'Inter',
                        fontWeight: '800',
                        display: 'inline-block',
                        color: 'white',
                     }}
                  >
                     2
                  </Typography>
               </div>
               <Typography
                  variant="h5"
                  style={{ fontFamily: 'Inter', fontWeight: '600' }}
               >
                  Fill up the donation details
               </Typography>
               <Typography style={{ fontFamily: 'Inter', fontWeight: '400' }}>
                  Simply fill up the name, category, expiry date, and an
                  optional notes of your donation. You can also set the pickup
                  location, date, and time for your own convenience.
               </Typography>
            </Grid>
            <Grid item>
               <div
                  style={{
                     backgroundColor: '#66BB6A',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     width: '4rem',
                     height: '4rem',
                     borderRadius: '2rem',
                     marginBottom: '1rem',
                     marginTop: sm ? '2rem' : '0',
                  }}
               >
                  <Typography
                     variant="h4"
                     style={{
                        fontFamily: 'Inter',
                        fontWeight: '800',
                        display: 'inline-block',
                        color: 'white',
                     }}
                  >
                     3
                  </Typography>
               </div>
               <Typography
                  variant="h5"
                  style={{ fontFamily: 'Inter', fontWeight: '600' }}
               >
                  Post it right away
               </Typography>
               <Typography style={{ fontFamily: 'Inter', fontWeight: '400' }}>
                  You can get to take a look at what your donation looks like to
                  others. This helps confirm if there are incorrect details. If
                  everything is right, all it takes is to post it and everything
                  is done!
               </Typography>
            </Grid>
         </Grid>
         <Grid container item xs={12} md={5} justify="center">
            <Grid item>
               <Typography
                  variant="h4"
                  style={{
                     fontFamily: 'Inter',
                     fontWeight: '800',
                     textAlign: sm ? 'center' : 'left',
                  }}
               >
                  ...so does sharing a donation.
               </Typography>
               <Grid item>
                  <img
                     src={deviceMockup}
                     alt="device-mockup"
                     style={{ width: '100%', marginTop: '2rem' }}
                  />
               </Grid>
            </Grid>
         </Grid>
      </Grid>
   )
}

function Partner() {
   const classes = useStyles()
   return (
      <Grid
         container
         justify="center"
         item
         xs={12}
         style={{
            backgroundColor: '#66BB6A',
            padding: '5rem 0 5rem 0',
         }}
      >
         <Grid item xs={12}>
            <Typography
               variant="h4"
               style={{
                  textAlign: 'center',
                  fontFamily: 'Inter',
                  fontWeight: '800',
                  color: 'white',
                  marginBottom: '2rem',
               }}
            >
               Become a Food Bank Partner!
            </Typography>
         </Grid>
         <Grid item xs={8}>
            <Typography
               variant="body1"
               style={{
                  fontFamily: 'Inter',
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: '300',
               }}
            >
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
               urna nec adipiscing netus suspendisse eget elit dictum congue.
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
               urna nec adipiscing netus suspendisse eget elit dictum congue.
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
               urna nec adipiscing netus suspendisse eget elit dictum congue.
            </Typography>
         </Grid>
         <Grid
            container
            item
            xs={12}
            justify="center"
            style={{ marginTop: '4.5rem' }}
         >
            <Button
               component={Link}
               to="/contactus"
               variant="contained"
               className={classes.button_white}
               disableElevation
               disableRipple
            >
               Contact Us
            </Button>
         </Grid>
      </Grid>
   )
}

const useStyles = makeStyles((theme) => ({
   button_green: {
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

export default LandingPage
