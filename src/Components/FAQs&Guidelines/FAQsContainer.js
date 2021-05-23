import {
   Typography,
   useMediaQuery,
   useTheme,
   makeStyles,
   Grid,
} from '@material-ui/core'
import MainContainer from '../Common/MainContainer'
import { TopicsDrawerResponsive } from './TopicsDrawer'
import CustomAccordion from './CustomAccordion'
import {
   postingGuidelines,
   pickupDonorGuidelines,
   requestingGuidelines,
   pickupDoneeGuidelines,
} from '../Common/Constants'

const useStyles = makeStyles((theme) => ({
   text_bold: {
      fontWeight: 'bold',
   },
   container__description: {
      margin: theme.spacing(2.0, 0),
   },
   text__accordion: {
      marginTop: theme.spacing(3.0),
      marginBottom: theme.spacing(1.5),
   },
}))
// the container for the whole page
function FAQsContainer() {
   const theme = useTheme()
   //  used to determine whether the page should use components intended for responsive layout
   const responsiveLayout = useMediaQuery(theme.breakpoints.down('sm'))
   return (
      <MainContainer>
         {/* displays whether the topics drawer dialog should be displayed or not depending on the variable */}
         {responsiveLayout ? <TopicsDrawerResponsive /> : null}
         <DonorGuidelines />
         <DoneeGuidelines />
      </MainContainer>
   )
}

// returns a container that displays the process of uploading donation
// function UploadProcess() {
//   return <h1>a</h1>;
// }

// returns a container that displays the guidelines for donor
function DonorGuidelines() {
   const postingGuidelinesData = postingGuidelines
   const pickupGuidelinesData = pickupDonorGuidelines
   const classes = useStyles()
   return (
      <>
         <Typography variant="h5" component="h3" className={classes.text_bold}>
            Guidelines for Donor
         </Typography>
         <div className={classes.container__description}>
            <Typography variant="body1" component="p">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
               quis non euismod faucibus a eu cum pharetra elementum. Congue
               placerat vitae ultrices quis elit aliquam. Gravida a etiam sed
               aliquam mauris.
            </Typography>
         </div>
         <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
               <Typography
                  variant="h6"
                  className={`${classes.text_bold} ${classes.text__accordion}`}
               >
                  Guidelines for Posting Donation
               </Typography>
               <CustomAccordion guidelines={postingGuidelinesData} />
            </Grid>
            <Grid item xs={12} lg={6}>
               <Typography
                  variant="h6"
                  className={`${classes.text_bold} ${classes.text__accordion}`}
               >
                  Guidelines for Picking Up Donations
               </Typography>
               <CustomAccordion guidelines={pickupGuidelinesData} />
            </Grid>
         </Grid>
      </>
   )
}

function DoneeGuidelines() {
   const classes = useStyles()
   const receivingGuidelinesData = requestingGuidelines
   const pickupGuidelinesData = pickupDoneeGuidelines
   return (
      <>
         <Typography variant="h5" component="h3" className={classes.text_bold}>
            Guidelines for Beneficiary
         </Typography>
         <div className={classes.container__description}>
            <Typography variant="body1" component="p">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
               quis non euismod faucibus a eu cum pharetra elementum. Congue
               placerat vitae ultrices quis elit aliquam. Gravida a etiam sed
               aliquam mauris.
            </Typography>
         </div>
         <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
               <Typography
                  variant="h6"
                  className={`${classes.text_bold} ${classes.text__accordion}`}
               >
                  Guidelines for Receiving Donation
               </Typography>
               <CustomAccordion guidelines={receivingGuidelinesData} />
            </Grid>
            <Grid item xs={12} lg={6}>
               <Typography
                  variant="h6"
                  className={`${classes.text_bold} ${classes.text__accordion}`}
               >
                  Guidelines for Picking Up Donations
               </Typography>
               <CustomAccordion guidelines={pickupGuidelinesData} />
            </Grid>
         </Grid>
      </>
   )
}
export default FAQsContainer
