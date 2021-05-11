import React, { useState } from "react"
import {
   makeStyles,
   Typography,
   Divider,
   Stepper,
   Step,
   StepLabel,
   StepContent,
   Button,
} from "@material-ui/core"
import { useStepperStore } from "./Post"
import LeftDrawer from "../Common/LeftDrawer"
import DialogDrawer from "../Common/DialogDrawer"

const useStyles = makeStyles((theme) => ({
   root: {
      width: "100%",
   },
   button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
   },
   actionsContainer: {
      marginBottom: theme.spacing(2),
   },
   resetContainer: {
      padding: theme.spacing(3),
   },
}))
// returns a left drawer that is used to display the stepper
// this drawer uses the left drawer component in Common folder
export function StepperDrawer() {
   return (
      <LeftDrawer>
         <Title />
         <Divider style={{ margin: "20px 0" }} />
         <VerticalStepper />
      </LeftDrawer>
   )
}
// returns a dialog drawer when the page reaches responsive layout
// this drawer uses dialog drawer component in Common folder
export function StepperDrawerResponsive() {
   return (
      <>
         <div
            style={{
               display: "flex",
               justifyContent: "space-between",
               marginBottom: "10px",
            }}
         >
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
   return (
      <div>
         <Typography
            style={{ fontWeight: "bold", marginTop: "5px" }}
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
   return ["Donating Guidelines", "Donation Details", "Post Donation"]
}
// returns steps description of the donation process
function getStepContent(step) {
   switch (step) {
      case 0:
         return `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`
      case 1:
         return "An ad group contains one or more ads which target a shared set of keywords."
      case 2:
         return `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`
      default:
         return "Unknown step"
   }
}
// returns the vertical stepper itself
function VerticalStepper() {
   const setNext = useStepperStore((state) => state.setNext)
   const setBack = useStepperStore((state) => state.setBack)

   const classes = useStyles()
   const [activeStep, setActiveStep] = useState(0)
   const steps = getSteps()

   const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
      setNext()
   }

   const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1)
      setBack()
   }

   const handleReset = () => {
      setActiveStep(0)
   }

   return (
      <div className={classes.root}>
         <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
               <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                     <Typography>{getStepContent(index)}</Typography>
                     <div className={classes.actionsContainer}>
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
                                 ? "Post"
                                 : "Next"}
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
