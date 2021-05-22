import React, { useState, useEffect } from 'react'
import {
   makeStyles,
   Accordion,
   AccordionSummary,
   AccordionDetails,
   Checkbox,
   FormControlLabel,
   Typography,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { usePostStore } from './Post'

const useStyles = makeStyles({
   root: {
      width: '100%',
      alignSelf: 'center',
   },
   text_bold: {
      fontWeight: 'bold',
   },
   container__description: {
      margin: '10px 0px 20px 0px',
   },
})

const guidelines = [
   {
      name: 'guidelines1',
      label: 'Guidelines 1',
      description: 'Guidelines 1 desc',
   },
   {
      name: 'guidelines2',
      label: 'Guidelines 2',
      description: 'Guidelines 2 desc',
   },
   {
      name: 'guidelines3',
      label: 'Guidelines 3',
      description: 'Guidelines 3 desc',
   },
]
// returns the guidelines when donating
function Guidelines() {
   const classes = useStyles()
   const checkedGuidelines = usePostStore((state) => state.checkedGuidelines)
   const setCheckedGuidelines = usePostStore(
      (state) => state.setCheckedGuidelines
   )
   const [isChecked, setIsChecked] = useState({
      guidelines1: checkedGuidelines[0],
      guidelines2: checkedGuidelines[1],
      guidelines3: checkedGuidelines[2],
   })

   const handleSingleCheck = (e) => {
      setIsChecked({ ...isChecked, [e.target.name]: e.target.checked })
   }

   const handleUpdateAllCheck = () => {
      setCheckedGuidelines(Object.values(isChecked))
   }

   const guidelinesArray = guidelines.map((guideline) => (
      <AccordionItem
         key={guideline.label}
         guideline={guideline}
         checked={isChecked[guideline.name]}
         handleChange={handleSingleCheck}
      />
   ))

   if (isChecked)
      return (
         <div className={classes.root}>
            <Typography
               variant="h5"
               component="h3"
               className={classes.text_bold}
            >
               Guidelines for Donating
            </Typography>
            <div className={classes.container__description}>
               <Typography variant="body1" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                  quis non euismod faucibus a eu cum pharetra elementum. Congue
                  placerat vitae ultrices quis elit aliquam. Gravida a etiam sed
                  aliquam mauris.
               </Typography>
            </div>
            <form onBlur={handleUpdateAllCheck}>{guidelinesArray}</form>
         </div>
      )
}
function AccordionItem(props) {
   const { name, label, description } = props.guideline
   const { checked, handleChange } = props
   return (
      <Accordion>
         <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            id="guidelinesHeader"
         >
            <FormControlLabel
               aria-label="Acknowledge"
               onClick={(event) => event.stopPropagation()}
               onFocus={(event) => event.stopPropagation()}
               control={
                  <Checkbox
                     name={name}
                     color="primary"
                     checked={checked}
                     onChange={handleChange}
                  />
               }
               label={label}
            />
         </AccordionSummary>
         <AccordionDetails>
            <Typography color="textSecondary">{description}</Typography>
         </AccordionDetails>
      </Accordion>
   )
}

export default Guidelines
