import React, { useState } from 'react'
import {
   Grid,
   makeStyles,
   Typography,
   Paper,
   Divider,
   TextField,
   MenuItem,
   FormControl,
   InputLabel,
   Select,
   Tooltip,
   useTheme,
   useMediaQuery,
   Input,
   OutlinedInput,
   InputAdornment,
} from '@material-ui/core'
import { Controller, useForm } from 'react-hook-form'
import InfoIcon from '@material-ui/icons/Info'
import MomentUtils from '@date-io/moment'
import {
   MuiPickersUtilsProvider,
   KeyboardDatePicker,
} from '@material-ui/pickers'

import { usePostStore } from '../../store/PostStore'
import UploadImage from './UploadImage'

const useStyles = makeStyles((theme) => ({
   root: {
      maxWidth: '700px',
      height: '100%',
      padding: theme.spacing(1, 3),
   },
   container: {
      padding: theme.spacing(2.5),
   },
   text_bold: {
      fontWeight: 'bold',
   },
   title: {
      fontWeight: 'bold',
      marginBottom: '10px',
   },
   divider_margin: {
      margin: '20px 0',
   },
   icon__helper: {
      width: '17px',
      color: '#ACACAC',
      marginLeft: '5px',
   },
   image__donation: {
      width: '90%',
      height: '100px',
   },
   container__inputHelper: {
      display: 'flex',
      alignItems: 'center',
   },
}))
// returns the donation details fields to be filled up by the user
function ItemDetails() {
   const { handleSubmit, control } = useForm()
   const classes = useStyles()
   const recipientHelper = 'this is recipient helper'

   const setDonationName = usePostStore((state) => state.setDonationName)
   const setDonationCategory = usePostStore(
      (state) => state.setDonationCategory
   )
   const setDonationNotes = usePostStore((state) => state.setDonationNotes)
   const setDonationQuantity = usePostStore(
      (state) => state.setDonationQuantity
   )
   const setDonationExpiry = usePostStore((state) => state.setDonationExpiry)

   const onSubmit = (data) => {
      setDonationName(data.donationName)
      setDonationQuantity(data.donationQuantity)
      setDonationCategory(data.donationCategory)
      setDonationNotes(data.donationNotes)
      setDonationExpiry(data.donationExpiry)
   }

   return (
      <Grid
         container
         className={classes.root}
         item
         xs={12}
         lg={6}
         direction="column"
      >
         <Typography variant="h6" className={classes.title}>
            Item Details
         </Typography>
         <Paper className={classes.container}>
            <form onBlur={handleSubmit(onSubmit)}>
               <UploadImage />
               <Divider className={classes.divider_margin} />
               <Grid container item spacing={2}>
                  <Grid item xs={12} sm={6}>
                     <DonationName control={control} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <DonationQuantity control={control} />
                  </Grid>
               </Grid>
               <Grid container item spacing={2}>
                  <Grid item xs={12} sm={6}>
                     <DonationCategory control={control} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <div className={classes.container__inputHelper}>
                        <DonationExpiry control={control} />
                        <Helper message={'a'} />
                     </div>
                  </Grid>
               </Grid>
               <DonationNotes control={control} />
            </form>
         </Paper>
      </Grid>
   )
}
// returns input field for the donation's name
function DonationName(props) {
   const donationName = usePostStore((state) => state.donationName)

   return (
      <Controller
         name="donationName"
         control={props.control}
         defaultValue={donationName}
         rules={{ required: 'Donation Name required' }}
         render={({ field: { onChange, value } }) => (
            <TextField
               margin="normal"
               type="text"
               variant="outlined"
               id="donationName"
               label="Donation Name"
               required
               fullWidth
               value={value}
               onChange={onChange}
            />
         )}
      />
   )
}

// returns select field for the recipient of the donation
function DonationQuantity(props) {
   const theme = useTheme()
   //  used to determine whether the page should use components intended for responsive layout
   const responsiveLayout = useMediaQuery(theme.breakpoints.down('xs'))
   const donationQuantity = usePostStore((state) => state.donationQuantity)

   return (
      <Controller
         name="donationQuantity"
         control={props.control}
         defaultValue={donationQuantity}
         rules={{ required: 'Donation Quantity required' }}
         render={({ field: { onChange, value } }) => (
            <TextField
               margin={responsiveLayout ? 'none' : 'normal'}
               type="text"
               variant="outlined"
               id="donationQuantity"
               label="Quantity"
               required
               fullWidth
               value={value}
               onChange={onChange}
               InputProps={{
                  endAdornment: <InputAdornment>piece(s)</InputAdornment>,
               }}
            />
         )}
      />

      // <FormControl
      //    variant="outlined"
      //    fullWidth
      //    required
      //    margin={responsiveLayout ? 'none' : 'normal'}
      // >
      //    <InputLabel id="donationRecipient">Recipient</InputLabel>
      //    <Controller
      //       name="donationRecipient"
      //       control={props.control}
      //       defaultValue={donationRecipient}
      //       rules={{ required: 'Recipient required' }}
      //       render={({ field: { onChange, value } }) => (
      //          <Select
      //             defaultValue={value ? value : ''}
      //             labelId="donationRecipient"
      //             //id="demo-simple-select-outlined"
      //             value={value}
      //             onChange={onChange}
      //             label="Recipient"
      //          >
      //             <MenuItem value="">
      //                <em>None</em>
      //             </MenuItem>
      //             {/* <MenuItem value={'All'}>All</MenuItem> */}
      //             <MenuItem value={'Food Banks'}>Food Banks</MenuItem>
      //             {/* <MenuItem value={'Community Pantries'}>
      //                Community Pantries
      //             </MenuItem> */}
      //             <MenuItem value={'Individuals'}>Individuals</MenuItem>
      //          </Select>
      //       )}
      //    />
      // </FormControl>
   )
}
// returns select field that allows donor to choose the donation's food category
function DonationCategory(props) {
   const donationCategory = usePostStore((state) => state.donationCategory)
   const theme = useTheme()
   const responsiveLayout = useMediaQuery(theme.breakpoints.down('xs'))

   return (
      <FormControl
         variant="outlined"
         fullWidth
         required
         margin={responsiveLayout ? 'normal' : 'none'}
      >
         <InputLabel id="donationCategory">Category</InputLabel>
         <Controller
            name="donationCategory"
            control={props.control}
            defaultValue={donationCategory}
            rules={{ required: 'Category required' }}
            render={({ field: { onChange, value } }) => (
               <Select
                  defaultValue={value ? value : ''}
                  labelId="donationRecipient"
                  //id="demo-simple-select-outlined"
                  value={value}
                  onChange={onChange}
                  label="Category"
               >
                  <MenuItem value="">
                     <em>None</em>
                  </MenuItem>
                  <MenuItem value={'Canned Goods'}>Canned Goods</MenuItem>
                  <MenuItem value={'Instant Noodles'}>Instant Noodles</MenuItem>
                  <MenuItem value={'Biscuits'}>Biscuits</MenuItem>
                  <MenuItem value={'Beverages'}>Beverages</MenuItem>
                  <MenuItem value={'Others'}>Others</MenuItem>
               </Select>
            )}
         />
      </FormControl>
   )
}

// returns input field for expiry date of the donation
function DonationExpiry(props) {
   const donationExpiry = usePostStore((state) => state.donationExpiry)

   return (
      <Controller
         name="donationExpiry"
         control={props.control}
         defaultValue={donationExpiry}
         rules={{ required: 'Donation Expiry required' }}
         render={({ field: { onChange, value } }) => (
            <MuiPickersUtilsProvider utils={MomentUtils}>
               <KeyboardDatePicker
                  disablePast
                  autoOk
                  fullWidth
                  inputVariant="outlined"
                  label="Expiry Date"
                  format="L"
                  value={value}
                  InputAdornmentProps={{ position: 'end' }}
                  onChange={onChange}
                  InputProps={{ readOnly: true }}
               />
            </MuiPickersUtilsProvider>
         )}
      />
   )
}
// returns multiline input field for the donation notes
function DonationNotes(props) {
   const donationNotes = usePostStore((state) => state.donationNotes)

   return (
      <Controller
         name="donationNotes"
         control={props.control}
         defaultValue={donationNotes}
         render={({ field: { onChange, value } }) => (
            <TextField
               margin="normal"
               variant="outlined"
               fullWidth
               id="donationNotes"
               label="Donation Notes"
               multiline
               rows={4}
               value={value}
               required
               onChange={onChange}
               placeholder="e.g., instructions"
            />
         )}
      />
   )
}
// returns a tooltip that helps user understand what the context is all about
function Helper(props) {
   const classes = useStyles()
   const message = props.message
   return (
      <Tooltip title={message} arrow placement="right">
         <InfoIcon className={classes.icon__helper} />
      </Tooltip>
   )
}
export default ItemDetails
