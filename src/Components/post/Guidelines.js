import React, { useState } from 'react'
import {
   makeStyles,
   Accordion,
   AccordionSummary,
   AccordionDetails,
   Checkbox,
   FormControlLabel,
   Typography,
   Grid,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { usePostStore } from '../../store/PostStore'

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
      label: 'I acknowledge that I am donating foods that are in the following:',
   },
   {
      name: 'guidelines2',
      label: 'I acknowledge that I am not donating foods that are in the following:',
   },
   {
      name: 'guidelines3',
      label: 'I acknowledge that I practice safe food handling practices',
   },
]
// returns the guidelines when donating
export default function Guidelines() {
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
               Guidelines for Posting Donations
            </Typography>
            <div className={classes.container__description}>
               <Typography variant="body1" component="p">
                  Before proceeding to post a donation, you must adhere to the
                  guidelines first to protect you and the safety of others as
                  well. The guidelines to acknowledge are as follows:
               </Typography>
            </div>
            <form onBlur={handleUpdateAllCheck}>{guidelinesArray}</form>
         </div>
      )
}

function AccordionItem(props) {
   const { name, label } = props.guideline
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
            <GuidelinesDescription name={name} />
         </AccordionDetails>
      </Accordion>
   )
}

function GuidelinesDescription(props) {
   const classes = useStyles()
   const { name } = props
   if (name === 'guidelines1') {
      return (
         <Grid container direction="column" spacing={1}>
            <Grid item>
               <Typography
                  variant="h6"
                  className={classes.text_bold}
               ></Typography>
               <Typography>
                  <span className={classes.text_bold}>Canned Goods</span> —
                  Canned fruits and vegetables, milks and sauces, meat and fish,
                  soups, and the likes
               </Typography>
            </Grid>
            <Grid item>
               <Typography>
                  <span className={classes.text_bold}>Instant Noodles</span> —
                  Instant noodles such as soup noodles, friend noodles,
                  non-fried noodles, and the likes
               </Typography>
            </Grid>
            <Grid item>
               <Typography>
                  <span className={classes.text_bold}>
                     Snacks &amp; Biscuits
                  </span>{' '}
                  — Any kinds of snacks and biscuits
               </Typography>
            </Grid>
            <Grid item>
               <Typography>
                  <span className={classes.text_bold}>Beverages</span> — Water,
                  tea, coffee, soft drinks, juice drinks (alcoholic are
                  prohibited)
               </Typography>
            </Grid>
            <Grid item>
               <Typography>
                  <span className={classes.text_bold}>Others</span> — Other
                  non-perishable foods that don't require refrigeration (e.g.,
                  condiments)
               </Typography>
            </Grid>
         </Grid>
      )
   } else if (name === 'guidelines2') {
      return (
         <>
            <Grid container direction="column" spacing={1}>
               <Grid item>
                  <Typography
                     variant="h6"
                     className={classes.text_bold}
                  ></Typography>
                  <Typography>
                     <span className={classes.text_bold}>
                        Home-cooked foods
                     </span>{' '}
                     — Foods prepared, cooked, cooled, or reheated at home.
                  </Typography>
               </Grid>
               <Grid item>
                  <Typography>
                     <span className={classes.text_bold}>Expired foods</span> —
                     Foods that are past a “use by / consume by” date.
                  </Typography>
               </Grid>
               <Grid item>
                  <Typography>
                     <span className={classes.text_bold}>
                        Foods in containers
                     </span>{' '}
                     — Foods taken out of their original packaging and placed
                     into containers.
                  </Typography>
               </Grid>
               <Grid item>
                  <Typography>
                     <span className={classes.text_bold}>Opened foods</span> —
                     Foods in opened or torn containers exposing the food to
                     potential contamination.
                  </Typography>
               </Grid>
               <Grid item>
                  <Typography>
                     <span className={classes.text_bold}>Raw foods</span> —
                     Meat, beef, pork, poultry, and the likes.
                  </Typography>
               </Grid>
               <Grid item>
                  <Typography>
                     <span className={classes.text_bold}>Others</span> — Other
                     perishables such as fruits, vegetables, dairy products,
                     eggs, meat, poultry, and seafood.
                  </Typography>
               </Grid>
            </Grid>
         </>
      )
   } else if (name === 'guidelines3') {
      return (
         <>
            <Grid container direction="column" spacing={1}>
               <Grid item>
                  <Typography>
                     • Donated foods may be stored in a private home away from
                     pests, pets, and household chemicals.
                  </Typography>
               </Grid>
               <Grid item>
                  <Typography>
                     • Packaged food should be donated in its original, unopened
                     packaging with ingredient labels.
                  </Typography>
               </Grid>
               <Grid item>
                  <Typography>
                     • Check canned goods for damage. Can damage is shown by
                     swelling, leakage, punctures, holes, fractures, extensive
                     deep rusting, or crushing or denting severe enough to
                     prevent normal stacking or opening with a manual,
                     wheel-type can opener.
                  </Typography>
               </Grid>
               <Grid item>
                  <Typography>•</Typography>
               </Grid>
            </Grid>
         </>
      )
   }
}
