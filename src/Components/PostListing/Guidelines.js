import React, { useState } from 'react'
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
      label: 'I acknowledge that I am donating consumables which are the following:',
      description: '',
   },
   {
      name: 'guidelines2',
      label: 'I acknowledge that I practice safe food handling practices',
      description: 'Guidelines 2 desc',
   },
   {
      name: 'guidelines3',
      label: 'I acknowledge that I am not donating consumables which are the following:',
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
                  Before proceeding to donate, you must adhere to the guidelines
                  first to protect you and the safety of others as well. The
                  guidelines to acknowledge are as follows:
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
            <div>
               <div>
                  <Typography style={{ fontWeight: 'bold' }}>
                     Home-Prepared Foods
                  </Typography>
                  <Typography>
                     Most homeprepared foods are not allowed to accept or serve
                     most types of homeprepared foods. However, homemade baked
                     goods that do not need refrigeration to remain safe (such
                     as cookies, cakes, fruit pies, and breads) may be received
                     from DONORS.
                  </Typography>
               </div>
               <br />
               <div>
                  <Typography style={{ fontWeight: 'bold' }}>
                     Commercially Packaged Foods Not Needing Refrigeration
                  </Typography>
                  <Typography>
                     The donation of commercially canned, boxed, and otherwise
                     packaged foods is encouraged.
                  </Typography>
               </div>
               <br />
               <div>
                  <Typography style={{ fontWeight: 'bold' }}>
                     Fresh Produce Donations
                  </Typography>
                  <Typography>
                     Food donations may include fresh produce, including
                     home-grown fruits and vegetables. Fresh produce should be
                     protected from contamination and receive final preparation,
                     such as washing and cutting, in a DONOR KITCHEN or licensed
                     kitchen.
                  </Typography>
               </div>
               <br />
               <div>
                  <Typography style={{ fontWeight: 'bold' }}>
                     Food Prepared in a DONOR KITCHEN
                  </Typography>
                  <Typography>
                     Except for baked goods (such as bread, cookies, and fruit
                     pies), DONATED FOOD DISTRIBUTING ORGANIZATIONS may not
                     accept foods prepared in a home kitchen. Instead, foods for
                     donation should be prepared in either a DONOR KITCHEN or a
                     commercial food establishment, such as a restaurant.
                  </Typography>
               </div>
               <br />
               <div>
                  <Typography style={{ fontWeight: 'bold' }}>
                     Food Donation by Licensed Food Establishments
                  </Typography>
                  <Typography>
                     Licensed food establishments are encouraged to donate
                     surplus foods to DONATED FOOD DISTRIBUTING ORGANIZATIONS.
                     Because licensed food establishments have commercial-grade
                     equipment, unlike many DONOR KITCHENS, these may safely
                     include foods that have gone through typical multiple food
                     preparation steps and handled with the same consideration
                     for safety as the food sold to customers.
                  </Typography>
               </div>
            </div>
         </AccordionDetails>
      </Accordion>
   )
}

export default Guidelines
