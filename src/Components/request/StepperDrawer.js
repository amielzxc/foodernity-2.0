import { useState } from 'react'
import LeftDrawer from '../shared/LeftDrawer'
import DialogDrawer from '../shared/DialogDrawer'
import {
   Button,
   Divider,
   makeStyles,
   Snackbar,
   Step,
   StepContent,
   StepLabel,
   Stepper,
   Typography,
} from '@material-ui/core'
import { useRequestStore } from '../../store/RequestStore'
import MuiAlert from '@material-ui/lab/Alert'
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
            Request a Donation
         </Typography>
      </div>
   )
}
// returns title steps of of the donation process
function getSteps() {
   return ['Requesting Guidelines', 'Request Details']
}
// returns steps description of the donation process
function getStepContent(step) {
   switch (step) {
      case 0:
         return `Acknowledgement of guidelines for the compliance of food safety and security.`
      case 1:
         return 'Details of the donations including the item details and pickup details'
      default:
         return 'Unknown step'
   }
}
// returns the vertical stepper itself
function VerticalStepper() {
   const classes = useStyles()
   const checkedGuidelines = useRequestStore((state) => state.checkedGuidelines)
   const [displayAlert1, setDisplayAlert1] = useState(false)
   const [displayAlert2, setDisplayAlert2] = useState(false)
   const current = useRequestStore((state) => state.current)
   const setNext = useRequestStore((state) => state.setNext)
   const setBack = useRequestStore((state) => state.setBack)

   const requestImage = useRequestStore((state) => state.requestImage)
   const requestName = useRequestStore((state) => state.requestName)
   const requestNotes = useRequestStore((state) => state.requestNotes)
   const requestQuantity = useRequestStore((state) => state.requestQuantity)
   const pickupLocation = useRequestStore((state) => state.pickupLocation)

   const arr = [
      requestImage,
      requestName,
      requestNotes,
      requestQuantity,
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
            console.log(arr)
            setDisplayAlert2(true)
         } else {
            console.log('print')
         }
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
                              className={
                                 activeStep === steps.length - 1
                                    ? classes.button_green
                                    : null
                              }
                              onClick={handleNext}
                              // className={classes.button}
                           >
                              {activeStep === steps.length - 1
                                 ? 'Request'
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
