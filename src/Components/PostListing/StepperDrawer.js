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
import { usePostStore } from './Post'
import LeftDrawer from '../Common/LeftDrawer'
import DialogDrawer from '../Common/DialogDrawer'
import MuiAlert from '@material-ui/lab/Alert'
const useStyles = makeStyles((theme) => ({
   root: {
      width: '100%',
   },
   button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
   },
   container__drawer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px',
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
   button__green: {
      backgroundColor: '#66BB6A',
   },
}))

// returns a left drawer that is used to display the stepper
// this drawer uses the left drawer component in Common folder
export function StepperDrawer() {
   const classes = useStyles()
   return (
      <LeftDrawer>
         <Title />
         <Divider className={classes.divider__margin} />
         <VerticalStepper />
      </LeftDrawer>
   )
}
// returns a dialog drawer when the page reaches responsive layout
// this drawer uses dialog drawer component in Common folder
export function StepperDrawerResponsive() {
   const classes = useStyles()
   return (
      <>
         <div className={classes.container__drawer}>
            <Title />
            <DialogDrawer buttonName="Steps" dialogTitle="Steps on Donating">
               <VerticalStepper />
            </DialogDrawer>
         </div>
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
   const donationRecipient = usePostStore((state) => state.donationRecipient) // ''
   const donationCategory = usePostStore((state) => state.donationCategory) // ''
   const pickupLocation = usePostStore((state) => state.pickupLocation) // null

   const arr = [
      donationImage,
      donationName,
      donationRecipient,
      donationCategory,
      pickupLocation,
   ]

   const [activeStep, setActiveStep] = useState(current)
   const steps = getSteps()

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
         console.log('save to db')
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
                              variant="contained"
                              color="primary"
                              onClick={handleNext}
                              className={classes.button}
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
