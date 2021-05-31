import { Box, makeStyles, Typography, Grid } from '@material-ui/core'
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded'
import dummychart from './dummychart.png'
import { Icon } from '@iconify/react'
import bxsDonateHeart from '@iconify-icons/bx/bxs-donate-heart'

function MyProfile() {
   const classes = useStyles()

   return (
      <div className={classes.root}>
         <div className={classes.background} />
         <UserInformation />
         <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
               <UserStatistics />
            </Grid>
            <Grid item xs={12} lg={8}>
               <DonationStatistics />
            </Grid>
         </Grid>
      </div>
   )
}

function UserInformation() {
   const classes = useStyles()
   const dateOfReg = 'March 16, 2020'
   const email = 'fhillipbagsic@gmail.com'
   const profilePicture =
      'https://www.incimages.com/uploaded_files/image/1920x1080/getty_513189787_110007.jpg'

   return (
      <>
         <img
            src={profilePicture}
            alt="profile"
            className={classes.image__profile}
         />
         <div className={classes.text__profile_description}>
            <Typography variant="h5" className={classes.text_bold}>
               Fhillip Bagsic
            </Typography>
            <Typography variant="body1" className={classes.text_light}>
               Member since {dateOfReg}
            </Typography>
            <Typography variant="body1" className={classes.text_light}>
               {email}
            </Typography>
         </div>
      </>
   )
}

function UserStatistics() {
   const classes = useStyles()
   const rating = '4.9'
   const totalDonations = '35'
   const totalDonationsReceived = '10'

   return (
      <Box boxShadow={1} borderRadius="5px">
         <div className={classes.container__statistics}>
            <div className={classes.container__statistics_item}>
               <StarRateRoundedIcon className={classes.icon__rating} />
               <div>
                  <Typography variant="body1" className={classes.text__grey}>
                     My Rating
                  </Typography>
                  <Typography variant="body1" className={classes.text_bold}>
                     {rating}
                  </Typography>
               </div>
            </div>
            <div className={classes.container__statistics_item}>
               <Icon
                  icon={bxsDonateHeart}
                  className={classes.icon__donations_total}
               />

               <div>
                  <Typography variant="body1" className={classes.text__grey}>
                     Total Donations Given
                  </Typography>
                  <Typography variant="body1" className={classes.text_bold}>
                     {totalDonations}
                  </Typography>
               </div>
            </div>
            <div className={classes.container__statistics_item}>
               <Icon
                  icon={bxsDonateHeart}
                  className={classes.icon__donations_received}
               />
               <div>
                  <Typography variant="body1" className={classes.text__grey}>
                     Total Donations Received
                  </Typography>
                  <Typography variant="body1" className={classes.text_bold}>
                     {totalDonationsReceived}
                  </Typography>
               </div>
            </div>
            {/* <div className={classes.container__statistics_item}>
               <StarRateRoundedIcon className={classes.icon__rating} />
               <div>
                  <Typography variant="body1" className={classes.text__grey}>
                     My Rating
                  </Typography>
                  <Typography variant="body1" className={classes.text_bold}>
                     4.9
                  </Typography>
               </div>
            </div> */}
         </div>
      </Box>
   )
}

function DonationStatistics() {
   const classes = useStyles()
   return (
      <Box boxShadow={1} borderRadius="5px" padding="15px">
         <Typography variant="h6" className={classes.text_bold}>
            My most donated places
         </Typography>
         <Typography className={classes.text_light}>🇵🇭 Philippines</Typography>
         <img
            alt="chart"
            src={dummychart}
            style={{ width: '100%', marginTop: '1rem' }}
         />
      </Box>
   )
}
const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
      flexDirection: 'column',
   },
   background: {
      width: '100%',
      height: '140px',
      backgroundImage: 'linear-gradient(to right, #2196F3 , #66BB6A)',
      borderRadius: '5px',
   },
   image__profile: {
      width: '150px',
      height: '150px',
      borderRadius: '75px',
      alignSelf: 'center',
      marginTop: '-5rem',
      marginBottom: '1rem',
      border: '2px solid white',
      //boxShadow: '0px 0px 5px 5px #ECECEC',
   },
   text__profile_description: {
      alignSelf: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: theme.spacing(2),
   },
   container__statistics: {
      borderRadius: '5px',
      display: 'flex',
      padding: '15px 15px 0 15px',
      backgroundColor: 'white',
      flexDirection: 'row',
      flexWrap: 'wrap',
   },
   container__statistics_item: {
      borderRadius: '5px',
      display: 'flex',
      backgroundColor: '#F3F3F3',
      alignItems: 'center',
      marginBottom: '15px',
      padding: '5px',
      width: '100%',
   },
   icon__rating: {
      color: '#F6BE4F',
      fontSize: '60px',
   },
   icon__donations_total: {
      fontSize: '45px',
      color: '#2196F3',

      margin: theme.spacing(1, 1),
   },
   icon__donations_received: {
      color: '#66BB6A',
      fontSize: '45px',
      margin: theme.spacing(1, 1),
   },
   text__grey: {
      color: '#5F5F5F',
   },
   text_bold: {
      fontWeight: 'bold',
      letterSpacing: '.5px',
   },
   text_light: {
      fontWeight: '300',
      letterSpacing: '.3px',
   },
}))

export default MyProfile
