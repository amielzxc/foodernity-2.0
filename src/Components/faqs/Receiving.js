import { Grid, Typography, Box, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import receive1 from '../../assets/faqs/receive1.png'
import receive2 from '../../assets/faqs/receive2.png'
import post3 from '../../assets/faqs/post3.png'

export default function Receiving() {
   const classes = useStyles()
   return (
      <Grid container spacing={5} justify="center">
         <Grid item xs={12}>
            <Typography variant="h4" className={classes.text_bold} gutterBottom>
               🤔 How to Receive a Donation?
            </Typography>
            <Typography variant="h6">
               A step-by-step guide on how to receive a donation.
            </Typography>
         </Grid>
         <Grid item xs={12}>
            <Divider />
         </Grid>
         <Grid item xs={12}>
            <Typography variant="h5" className={classes.text_bold} gutterBottom>
               1️⃣ Step 1
            </Typography>
            <Typography>
               Browse through the available donations. You can use the filters
               to sort out your preferences.
            </Typography>
         </Grid>
         <Grid item xs={10}>
            <Box boxShadow={3} borderRadius={10}>
               <img
                  src={receive1}
                  alt="posting-step-1"
                  style={{
                     width: '100%',
                     height: 'auto',
                  }}
               />
            </Box>
         </Grid>
         <Grid item xs={12}>
            <Divider />
         </Grid>
         <Grid item xs={12}>
            <Typography variant="h5" className={classes.text_bold} gutterBottom>
               2️⃣ Step 2
            </Typography>
            <Typography>
               Once you have chosen a donation that you want to receive, you can
               now receive the donation by clicking the button. Be sure that you
               are available on the pickup date and accessible to the location.
            </Typography>
         </Grid>
         <Grid item xs={10}>
            <Box boxShadow={3} borderRadius={10}>
               <img
                  src={receive2}
                  alt="posting-step-1"
                  style={{
                     width: '100%',
                     height: 'auto',
                  }}
               />
            </Box>
         </Grid>
         <Grid item xs={12}>
            <Divider />
         </Grid>
         <Grid item xs={12}>
            <Typography variant="h5" className={classes.text_bold} gutterBottom>
               3 Step 3
            </Typography>
            <Typography>Instructions</Typography>
         </Grid>
         <Grid item xs={10}>
            <Box boxShadow={3} borderRadius={10}>
               <img
                  src={post3}
                  alt="posting-step-1"
                  style={{
                     width: '100%',
                     height: 'auto',
                  }}
               />
            </Box>
         </Grid>
      </Grid>
   )
}

const useStyles = makeStyles((theme) => ({
   text_bold: {
      fontWeight: 'bold',
   },
}))
