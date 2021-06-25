import React, { useState } from 'react'

import {
   makeStyles,
   Typography,
   Divider,
   Stepper,
   Step,
   StepLabel,
   StepContent,
   Button,
   Snackbar,
} from '@material-ui/core'
import { usePostStore } from '../../store/PostStore'
import LeftDrawer from '../shared/LeftDrawer'
import DialogDrawer from '../shared/DialogDrawer'
import MuiAlert from '@material-ui/lab/Alert'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
import moment from 'moment'

const useStyles = makeStyles((theme) => ({
   root: {
      width: '100%',
      zIndex: '0',
   },
   button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
   },

   container__actions: {
      marginBottom: theme.spacing(2),
   },
   divider__margin: {
      margin: '20px 0',
   },
   title: {
      fontWeight: 'bold',
      marginTop: '5px',
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
}))

// returns a left drawer that is used to display the stepper
// this drawer uses the left drawer component in Common folder
export default function StepperDrawer() {
   const classes = useStyles()

   return (
      <>
         <LeftDrawer>
            <Title />
            <Divider className={classes.divider__margin} />
            <VerticalStepper />
         </LeftDrawer>
         <DialogDrawer buttonName="Steps">
            <Title />
            <Divider className={classes.divider__margin} />
            <VerticalStepper />
         </DialogDrawer>
      </>
   )
}

// returns the title of the left drawer
function Title() {
   const classes = useStyles()
   return (
      <div>
         <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h2"
         >
            Post a Donation
         </Typography>
      </div>
   )
}
// returns title steps of of the donation process
function getSteps() {
   return ['Donating Guidelines', 'Donation Details', 'Post Donation']
}
// returns steps description of the donation process
function getStepContent(step) {
   switch (step) {
      case 0:
         return `Acknowledgement of guidelines for the compliance of food safety and security.`
      case 1:
         return 'Details of the donations including the item details and pickup details'
      case 2:
         return `Preview to show what your donation looks like. Do double check the details you included before posting.`
      default:
         return 'Unknown step'
   }
}
// returns the vertical stepper itself
function VerticalStepper() {
   const checkedGuidelines = usePostStore((state) => state.checkedGuidelines)
   const [displayAlert1, setDisplayAlert1] = useState(false)
   const [displayAlert2, setDisplayAlert2] = useState(false)
   const current = usePostStore((state) => state.current)
   const classes = useStyles()
   const setNext = usePostStore((state) => state.setNext)
   const setBack = usePostStore((state) => state.setBack)

   const donationImage = usePostStore((state) => state.donationImage) // null
   const donationName = usePostStore((state) => state.donationName) // ''
   const donationNotes = usePostStore((state) => state.donationNotes) // ''
   // const donationRecipient = usePostStore((state) => state.donationRecipient) // ''
   const donationCategory = usePostStore((state) => state.donationCategory) // ''
   const donationExpiry = usePostStore((state) => state.donationExpiry) // ''
   const pickupDate = usePostStore((state) => state.pickupDate)
   const pickupLocation = usePostStore((state) => state.pickupLocation) // null
   const pickupLocationCoordinate = usePostStore(
      (state) => state.pickupLocationCoordinate
   ) // null
   const donationQuantity = usePostStore((state) => state.donationQuantity)

   const history = useHistory()

   const arr = [
      donationImage,
      donationName,
      donationQuantity,
      donationCategory,
      pickupLocation,
   ]

   const [activeStep, setActiveStep] = useState(current)
   const steps = getSteps()

   const checkRecipient = (donationQuantity) => {
      if (donationQuantity > 15) {
         return 'foodbank'
      } else {
         return 'individual'
      }
   }

   const handleNext = () => {
      if (current === 0) {
         if (!checkedGuidelines.includes(false)) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1)
            setNext()
            setDisplayAlert1(false)
         } else {
            setDisplayAlert1(true)
         }
      } else if (current === 1) {
         if (arr.includes(null) || arr.includes('')) {
            setDisplayAlert2(true)
         } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1)
            setNext()
            setDisplayAlert2(false)
         }
      } else if (current === 2) {
         // console.log('save to db')
         const formData = new FormData()
         formData.append('file', donationImage)
         formData.append('upload_preset', 'kbusolgc')
         Axios.post(
            'https://api.cloudinary.com/v1_1/dy5g3pexw/image/upload',
            formData
         ).then(async (response, err) => {
            if (!err) {
               console.log(response.data.secure_url)

               const obj = {
                  listingOwnerID: localStorage.getItem('token'),
                  listingType: 'Donate',
                  postDate: moment(new Date()).format('MM/DD/YYYY'),
                  postTime: moment(new Date()).format('HH:mm'),
                  donationName: donationName,
                  donationNotes: donationNotes,
                  donationCategory: donationCategory,
                  donationQuantity: donationQuantity,
                  donationRecipient: checkRecipient(donationQuantity),
                  donationExpiry: moment(donationExpiry).format('MM/DD/YYYY'),
                  pickupDate: moment(pickupDate).format('MM/DD/YYYY'),
                  pickupLocation: pickupLocation,
                  pickupLocationCoordinate: pickupLocationCoordinate,
                  donationImage: response.data.secure_url,
               }

               Axios.post('http://localhost:3001/listingItem/post', obj).then(
                  (response, err) => {
                     if (err) {
                        console.log('error: ' + err)
                     }
                  }
               )
               console.log('Donation successfully posted')
               history.replace('/donations')
            } else {
               console.log(err)
            }
         })
      }
   }

   const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1)
      setBack()
   }

   const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
         return
      }
      setDisplayAlert1(false)
      setDisplayAlert2(false)
   }

   return (
      <div className={classes.root}>
         <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
               <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                     <Typography>{getStepContent(index)}</Typography>
                     <div className={classes.container__actions}>
                        <div>
                           <Button
                              disabled={activeStep === 0}
                              onClick={handleBack}
                              className={classes.button}
                           >
                              Back
                           </Button>
                           <Button
                              style={{ marginTop: '8px', marginRight: '8px' }}
                              variant="contained"
                              color={
                                 activeStep === steps.length - 1
                                    ? 'default'
                                    : 'primary'
                              }
                              onClick={handleNext}
                              className={
                                 activeStep === steps.length - 1
                                    ? classes.button_green
                                    : null
                              }
                           >
                              {activeStep === steps.length - 1
                                 ? 'Post'
                                 : 'Next'}
                           </Button>
                        </div>
                     </div>
                  </StepContent>
               </Step>
            ))}
         </Stepper>
         <StepOneAlert open={displayAlert1} close={handleClose} />
         <StepTwoAlert open={displayAlert2} close={handleClose} />
      </div>
   )
}

function Alert(props) {
   return <MuiAlert elevation={6} variant="filled" {...props} />
}

function StepOneAlert(props) {
   const { close, open } = props
   const message = 'You should acknowledge the guidelines first.'

   return (
      <>
         <Snackbar open={open} autoHideDuration={2000} onClose={close}>
            <Alert onClose={close} severity="error">
               {message}
            </Alert>
         </Snackbar>
      </>
   )
}

function StepTwoAlert(props) {
   const { close, open } = props
   const message = 'You need to fill up details first.'

   return (
      <>
         <Snackbar open={open} autoHideDuration={2000} onClose={close}>
            <Alert onClose={close} severity="warning">
               {message}
            </Alert>
         </Snackbar>
      </>
   )
}
