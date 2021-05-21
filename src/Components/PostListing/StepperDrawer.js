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
} from '@material-ui/core'
import { usePostStore } from './Post'
import LeftDrawer from '../Common/LeftDrawer'
import DialogDrawer from '../Common/DialogDrawer'

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
         return `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`
      case 1:
         return 'An ad group contains one or more ads which target a shared set of keywords.'
      case 2:
         return `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`
      default:
         return 'Unknown step'
   }
}
// returns the vertical stepper itself
function VerticalStepper() {
   const current = usePostStore((state) => state.current)
   const classes = useStyles()
   const setNext = usePostStore((state) => state.setNext)
   const setBack = usePostStore((state) => state.setBack)

   const [activeStep, setActiveStep] = useState(current)
   const steps = getSteps()

   const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
      setNext()
   }

   const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1)
      setBack()
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
      </div>
   )
}
