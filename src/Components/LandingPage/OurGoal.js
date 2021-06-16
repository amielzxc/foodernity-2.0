import {
   CssBaseline,
   Grid,
   Hidden,
   Toolbar,
   Typography,
   useMediaQuery,
   useTheme,
} from '@material-ui/core'
import { useState } from 'react'
import { NavBar, Menu } from './NavBar'
import waste from '../../assets/landingpage/waste.png'
import hunger from '../../assets/landingpage/hunger.png'
import community from '../../assets/landingpage/community.png'
import planet from '../../assets/landingpage/planet-earth.png'
import Footer from './Footer'
import { Helmet } from 'react-helmet'

function OurGoal() {
   const [openMenu, setOpenMenu] = useState(false)
   return (
      <>
         <Helmet>
            <title>Our Goal | Foodernity</title>
         </Helmet>
         <Grid container justify="center">
            <CssBaseline />
            <NavBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
            <Toolbar />
            {openMenu && <Menu />}
            <Overview />
            <GoalOne />
            <GoalTwo />
            <GoalThree />
            <Footer />
         </Grid>
      </>
   )
}

function Overview() {
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
         direction={sm ? 'column-reverse' : 'row'}
         style={{ padding: '3rem 0', height: sm ? 'auto' : '94vh' }}
      >
         <Grid item xs={false} md={1} />
         <Grid container item xs={11} md={7}>
            <Grid item>
               <Hidden smDown>
                  <div
                     style={{
                        marginLeft: '-1rem',
                        marginTop: '3rem',
                        position: 'absolute',
                        width: '315px',
                        height: '40px',
                        // top: '200',
                        // left: '100',
                        background: '#7BDB80',
                        zIndex: '-1',
                     }}
                  />
               </Hidden>
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
                  Our Mission, Goals, &amp; Values
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
                  }}
               >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                  viverra arcu, amet lobortis donec nibh. Feugiat nisl quis
                  velit pharetra mattis.
               </Typography>
            </Grid>

            <Grid
               container
               item
               xs={12}
               spacing={3}
               justify={sm ? 'center' : 'flex-start'}
            >
               <Grid item xs={12} sm={6} md={6} lg={4}>
                  <Typography
                     variant="h5"
                     style={{
                        fontFamily: 'Inter',
                        color: '#66BB6A',
                        fontWeight: '600',
                        textAlign: sm ? 'center' : 'start',
                     }}
                  >
                     Mission
                  </Typography>
                  <Typography
                     variant="h6"
                     style={{
                        fontFamily: 'Inter',
                        fontWeight: '400',
                        textAlign: sm ? 'center' : 'start',
                     }}
                  >
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Diam quisque habitasse
                  </Typography>
               </Grid>
               <Grid item xs={12} sm={6} md={6} lg={4}>
                  <Typography
                     item
                     xs={4}
                     variant="h5"
                     style={{
                        fontFamily: 'Inter',
                        color: '#66BB6A',
                        fontWeight: '600',
                        textAlign: sm ? 'center' : 'start',
                     }}
                  >
                     Goals
                  </Typography>
                  <Typography
                     variant="h6"
                     style={{
                        fontFamily: 'Inter',
                        fontWeight: '400',
                        textAlign: sm ? 'center' : 'start',
                     }}
                  >
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Diam quisque habitasse
                  </Typography>
               </Grid>
               <Grid item xs={12} sm={6} md={6} lg={4}>
                  <Typography
                     variant="h5"
                     style={{
                        fontFamily: 'Inter',
                        color: '#66BB6A',
                        fontWeight: '600',
                        textAlign: sm ? 'center' : 'start',
                     }}
                  >
                     Values
                  </Typography>
                  <Typography
                     variant="h6"
                     style={{
                        fontFamily: 'Inter',
                        fontWeight: '400',
                        textAlign: sm ? 'center' : 'start',
                     }}
                  >
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Diam quisque habitasse
                  </Typography>
               </Grid>
            </Grid>
         </Grid>
         {/* <Grid item xs={false} md={1} /> */}
         <Grid container item xs={12} md={4} justify="center">
            <img
               src={planet}
               alt="phone-mockup"
               style={{
                  marginLeft: '1rem',
                  marginTop: xs ? '1rem' : 'none',
                  width: sm ? '200px' : '350px',
               }}
            />
         </Grid>
      </Grid>
   )
}

function GoalOne() {
   const theme = useTheme()
   const sm = useMediaQuery(theme.breakpoints.down('sm'))
   const md = useMediaQuery(theme.breakpoints.down('md'))
   return (
      <Grid
         container
         item
         xs={12}
         justify="center"
         style={{ margin: sm ? '2rem 0' : '5rem 0' }}
      >
         <Grid item xs={false} md={1} />
         <Grid container item xs={12} md={4} justify="center">
            <img
               src={waste}
               alt="food-waste"
               style={{
                  width: sm ? '200px' : '300px',
                  marginBottom: sm ? '2rem' : '0',
               }}
            />
         </Grid>
         <Grid item xs={false} md={1} />
         <Grid
            container
            item
            xs={11}
            md={5}
            justify="center"
            alignItems="center"
         >
            <Typography
               variant={md ? 'h4' : 'h3'}
               style={{
                  fontFamily: 'Inter',
                  fontWeight: '700',
                  textAlign: sm ? 'center' : 'start',
                  marginBottom: sm ? '2rem' : 0,
               }}
            >
               To reduce food waste in the country
            </Typography>
            <Typography
               variant="h5"
               style={{
                  textAlign: sm ? 'center' : 'left',
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  marginBottom: '1rem',
               }}
            >
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
               viverra arcu, amet lobortis donec nibh. Feugiat nisl quis velit
               pharetra mattis nisl.
            </Typography>
         </Grid>

         <Grid item xs={false} md={1} />
      </Grid>
   )
}

function GoalTwo() {
   const theme = useTheme()
   const sm = useMediaQuery(theme.breakpoints.down('sm'))
   const md = useMediaQuery(theme.breakpoints.down('md'))
   return (
      <Grid
         container
         item
         xs={12}
         justify="center"
         direction={sm ? 'column-reverse' : 'row'}
         style={{ margin: sm ? '2rem 0' : '5rem 0' }}
      >
         <Grid item xs={false} md={1} />
         <Grid
            container
            item
            xs={12}
            md={5}
            justify="center"
            alignItems="center"
         >
            <Typography
               variant={md ? 'h4' : 'h3'}
               style={{
                  fontFamily: 'Inter',
                  fontWeight: '700',
                  textAlign: sm ? 'center' : 'start',
                  marginBottom: sm ? '2rem' : 0,
               }}
            >
               To help achieve zero hunger
            </Typography>
            <Typography
               variant="h5"
               style={{
                  textAlign: sm ? 'center' : 'left',
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  marginBottom: '1rem',
               }}
            >
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
               viverra arcu, amet lobortis donec nibh. Feugiat nisl quis velit
               pharetra mattis nisl.
            </Typography>
         </Grid>
         <Grid item xs={false} md={1} />
         <Grid container item xs={12} md={4} justify="center">
            <img
               src={hunger}
               alt="food-waste"
               style={{ width: sm ? '200px' : '300px' }}
            />
         </Grid>
         <Grid item xs={false} md={1} />
      </Grid>
   )
}

function GoalThree() {
   const theme = useTheme()
   const sm = useMediaQuery(theme.breakpoints.down('sm'))
   const md = useMediaQuery(theme.breakpoints.down('md'))
   return (
      <Grid
         container
         item
         xs={12}
         justify="center"
         style={{ margin: sm ? '2rem 0' : '5rem 0' }}
      >
         <Grid item xs={false} md={1} />
         <Grid container item xs={12} md={4} justify="center">
            <img
               src={community}
               alt="food-waste"
               style={{
                  width: sm ? '200px' : '300px',
                  marginBottom: sm ? '2rem' : '0',
               }}
            />
         </Grid>
         <Grid item xs={false} md={1} />
         <Grid
            container
            item
            xs={11}
            md={5}
            justify="center"
            alignItems="center"
         >
            <Typography
               variant={md ? 'h4' : 'h3'}
               style={{
                  fontFamily: 'Inter',
                  fontWeight: '700',
                  textAlign: sm ? 'center' : 'start',
                  marginBottom: sm ? '2rem' : 0,
               }}
            >
               To strenghten communities through food sharing
            </Typography>
            <Typography
               variant="h5"
               style={{
                  textAlign: sm ? 'center' : 'left',
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  marginBottom: '1rem',
               }}
            >
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
               viverra arcu, amet lobortis donec nibh. Feugiat nisl quis velit
               pharetra mattis nisl.
            </Typography>
         </Grid>

         <Grid item xs={false} md={1} />
      </Grid>
   )
}
export default OurGoal
