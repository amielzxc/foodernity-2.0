import { Grid, Typography, Box, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import post1 from '../../assets/faqs/post1.png'
import post2 from '../../assets/faqs/post2.png'
import post3 from '../../assets/faqs/post3.png'
import post4 from '../../assets/faqs/post4.png'

const steps = [
   {
      step: '1️⃣',
      instruction:
         "On the navigation bar, press the donations and choose 'Post a Donation'.",
      image: post1,
   },
   {
      step: '2️⃣',
      instruction: 'instruct 2',
      image: post2,
   },
   {
      step: '3️⃣',
      instruction:
         'After acknowledging the guidelines, upload the image of the food that you want to donate and fill up the necessary details of your donation',
      image: post3,
   },
   {
      step: '4️⃣',
      instruction:
         'Once you have filled up the necessary details, double check your details to avoid errors. If everything is correct, you can now post the donation.',
      image: post4,
   },
]

export default function Posting() {
   const classes = useStyles()

   return (
      <Grid container spacing={5} justify="center">
         <Grid item xs={12}>
            <Typography variant="h4" className={classes.text_bold} gutterBottom>
               💡 How to Post a Donation?
            </Typography>
            <Typography variant="h6">
               A step-by-step guide on how to post a donation.
            </Typography>
         </Grid>
         {steps.map((step) => (
            <Item
               step={step.step}
               instruction={step.instruction}
               image={step.image}
            />
         ))}
      </Grid>
   )
}

function Item(props) {
   const classes = useStyles()
   const { step, instruction, image } = props

   return (
      <>
         <Grid item xs={12}>
            <Divider />
         </Grid>
         <Grid item xs={12}>
            <Typography variant="h5" className={classes.text_bold} gutterBottom>
               {step}
            </Typography>
            <Typography>{instruction}</Typography>
         </Grid>
         <Grid item xs={10}>
            <Box boxShadow={3} borderRadius={10}>
               <img
                  src={image}
                  alt="posting-step-4"
                  style={{
                     width: '100%',
                     height: 'auto',
                  }}
               />
            </Box>
         </Grid>
      </>
   )
}

const useStyles = makeStyles((theme) => ({
   text_bold: {
      fontWeight: 'bold',
   },
}))
