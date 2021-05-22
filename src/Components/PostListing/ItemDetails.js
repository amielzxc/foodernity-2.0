import React from 'react'
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
} from '@material-ui/core'
import { Controller, useForm } from 'react-hook-form'
import InfoIcon from '@material-ui/icons/Info'
import DateFnsUtils from '@date-io/date-fns'
import {
   MuiPickersUtilsProvider,
   KeyboardDatePicker,
} from '@material-ui/pickers'

import { usePostStore } from './Post'

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

   const checkedGuidelines = usePostStore((state) => state.checkedGuidelines)
   const classes = useStyles()
   const recipientHelper = 'this is recipient helper'

   const setDonationName = usePostStore((state) => state.setDonationName)
   const setDonationCategory = usePostStore(
      (state) => state.setDonationCategory
   )
   const setDonationNotes = usePostStore((state) => state.setDonationNotes)
   const setDonationRecipient = usePostStore(
      (state) => state.setDonationRecipient
   )
   const setDonationExpiry = usePostStore((state) => state.setDonationExpiry)

   const onSubmit = (data) => {
      setDonationName(data.donationName)
      setDonationRecipient(data.donationRecipient)
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
         <Paper elevation={2} className={classes.container}>
            <form onBlur={handleSubmit(onSubmit)}>
               <Photos />
               <Divider className={classes.divider_margin} />
               <Grid container item spacing={2}>
                  <Grid item xs={12} sm={6}>
                     <DonationName control={control} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <DonationRecipientHelper
                        control={control}
                        message={recipientHelper}
                     />
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
// returns component that allows user to add photos
function Photos() {
   const classes = useStyles()
   const image = [
      'https://i.pinimg.com/originals/3a/01/1d/3a011d76e93823db300009c39a039af4.jpg',
      'https://www.newsgra.ph/wp-content/uploads/2016/07/Pancit-Canton.jpg',
      'https://cf.shopee.ph/file/43293b7a4630b8d2332ed4c2a8d9e9fd',
      'https://pbs.twimg.com/media/EVjO5EMUYAAfKYM.jpg',
   ]

   return (
      <>
         <div className={classes.container__inputHelper}>
            <Typography
               variant="body1"
               component="p"
               className={classes.text_bold}
            >
               Photos &nbsp;
            </Typography>
            <Typography variant="caption" component="p">
               You can add up to 4 photos
            </Typography>
         </div>
         <Grid container>
            <Grid item xs={6}>
               <img
                  className={classes.image__donation}
                  src={image[0]}
                  alt="map"
               />
            </Grid>
            <Grid item xs={6}>
               <img
                  className={classes.image__donation}
                  src={image[1]}
                  alt="map"
               />
            </Grid>
            <Grid item xs={6}>
               <img
                  className={classes.image__donation}
                  src={image[2]}
                  alt="map"
               />
            </Grid>
            <Grid item xs={6}>
               <img
                  className={classes.image__donation}
                  src={image[3]}
                  alt="map"
               />
            </Grid>
         </Grid>
      </>
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
         render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
               autoFocus
               margin="normal"
               type="text"
               variant="outlined"
               id="donationName"
               label="Donation Name"
               required
               fullWidth
               value={value}
               onChange={onChange}
               error={!!error}
               helperText={error ? error.message : null}
            />
         )}
      />
   )
}

// returns input field for the reciepient along with helper
function DonationRecipientHelper(props) {
   const classes = useStyles()
   return (
      <div className={classes.container__inputHelper}>
         <DonationRecipient control={props.control} />
         <Helper message={props.message} />
      </div>
   )
}

// returns select field for the recipient of the donation
function DonationRecipient(props) {
   const theme = useTheme()
   //  used to determine whether the page should use components intended for responsive layout
   const responsiveLayout = useMediaQuery(theme.breakpoints.down('xs'))
   const donationRecipient = usePostStore((state) => state.donationRecipient)

   return (
      <FormControl
         variant="outlined"
         fullWidth
         required
         margin={responsiveLayout ? 'none' : 'normal'}
      >
         <InputLabel id="donationRecipient">Recipient</InputLabel>
         <Controller
            name="donationRecipient"
            control={props.control}
            defaultValue={donationRecipient}
            rules={{ required: 'Recipient required' }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
               <Select
                  defaultValue={value ? value : ''}
                  labelId="donationRecipient"
                  //id="demo-simple-select-outlined"
                  value={value}
                  onChange={onChange}
                  label="Recipient"
               >
                  <MenuItem value="">
                     <em>None</em>
                  </MenuItem>
                  <MenuItem value={'All'}>All</MenuItem>
                  <MenuItem value={'Food Banks'}>Food Banks</MenuItem>
                  <MenuItem value={'Community Pantries'}>
                     Community Pantries
                  </MenuItem>
                  <MenuItem value={'Individuals'}>Individuals</MenuItem>
               </Select>
            )}
         />
      </FormControl>
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
            render={({ field: { onChange, value }, fieldState: { error } }) => (
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
                  <MenuItem value={'Category 1'}>Category 1</MenuItem>
                  <MenuItem value={'Category 2'}>Category 2</MenuItem>
                  <MenuItem value={'Category 3'}>Category 3</MenuItem>
                  <MenuItem value={'Category 4'}>Category 4</MenuItem>
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
         render={({ field: { onChange, value }, fieldState: { error } }) => (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
               <KeyboardDatePicker
                  minDate={value}
                  autoOk
                  fullWidth
                  inputVariant="outlined"
                  label="Expiry Date"
                  format="MM/dd/yyyy"
                  value={value}
                  InputAdornmentProps={{ position: 'end' }}
                  onChange={onChange}
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
         render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
               margin="normal"
               variant="outlined"
               fullWidth
               id="donationNotes"
               label="Donation Notes"
               multiline
               rows={4}
               value={value}
               onChange={onChange}
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
