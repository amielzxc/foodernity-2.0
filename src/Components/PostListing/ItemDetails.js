import React, { Fragment, useState } from 'react'
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
   FormHelperText,
   Tooltip,
   Input,
   Chip,
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
import image from '../Listing/pickup_map.png'
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
   const checkedGuidelines = usePostStore((state) => state.checkedGuidelines)
   console.log(checkedGuidelines)
   const { handleSubmit, control } = useForm()

   const classes = useStyles()
   const recipientHelper = 'this is recipient helper'

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
            <Photos />
            <Divider className={classes.divider_margin} />
            <DonationName control={control} />
            <Grid container item spacing={2}>
               <Grid item xs={12} sm={6}>
                  <DonationQuantity control={control} />
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
                  <DonationCategory />
               </Grid>
               <Grid item xs={12} sm={6}>
                  <DonationExpiryHelper message={recipientHelper} />
               </Grid>
            </Grid>
            <DonationNotes />
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
            <Grid item xs={6} md={3}>
               <img
                  className={classes.image__donation}
                  src={image[0]}
                  alt="map"
               />
            </Grid>
            <Grid item xs={6} md={3}>
               <img
                  className={classes.image__donation}
                  src={image[1]}
                  alt="map"
               />
            </Grid>
            <Grid item xs={6} md={3}>
               <img
                  className={classes.image__donation}
                  src={image[2]}
                  alt="map"
               />
            </Grid>
            <Grid item xs={6} md={3}>
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
   return (
      <Controller
         name="donationItem"
         control={props.control}
         defaultValue=""
         rules={{ required: 'Donation item required' }}
         render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
               margin="normal"
               type="text"
               variant="outlined"
               id="donationItem"
               label="Donation Item"
               //autoFocus
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
// returns input field for the quantity of donation
function DonationQuantity(props) {
   return (
      <Controller
         name="donationQuantity"
         control={props.control}
         defaultValue=""
         rules={{ required: 'Quantity required' }}
         render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl variant="outlined" fullWidth required margin="normal">
               <InputLabel id="donationQuantity">Quantity</InputLabel>
               <Select
                  labelId="donationQuantity"
                  //id="demo-simple-select-outlined"
                  //value={age}
                  //onChange={handleChange}
                  label="Quantity"
               >
                  <MenuItem value="">
                     <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
               </Select>
               <FormHelperText>{error ? error.message : null}</FormHelperText>
            </FormControl>
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

   return (
      <Controller
         name="donationRecipient"
         control={props.control}
         defaultValue=""
         rules={{ required: 'Recipient required' }}
         render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl
               variant="outlined"
               fullWidth
               required
               margin={responsiveLayout ? 'none' : 'normal'}
            >
               <InputLabel id="donationRecipient">Recipient</InputLabel>
               <Select
                  labelId="donationRecipient"
                  //id="demo-simple-select-outlined"
                  //value={age}
                  //onChange={handleChange}
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
               <FormHelperText>{error ? error.message : null}</FormHelperText>
            </FormControl>
         )}
      />
   )
}
// returns select field that allows donor to choose the donation's food category
function DonationCategory() {
   const categories = ['Categ 1', 'Categ 2', 'Categ 3', 'Categ 4', 'Categ 5']
   const [personName, setPersonName] = useState([])
   const handleChange = (event) => {
      setPersonName(event.target.value)
   }

   return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
         <div style={{ width: '95%' }}>
            <FormControl fullWidth>
               <InputLabel id="donationCategory">Category(s)</InputLabel>
               <Select
                  labelId="donationCategory"
                  //id="demo-mutiple-chip"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<Input id="category" />}
                  renderValue={(selected) => (
                     <div
                        style={{
                           display: 'flex',
                           flexWrap: 'wrap',
                        }}
                     >
                        {selected.map((value) => (
                           <Chip
                              key={value}
                              label={value}
                              color="primary"
                              style={{ margin: '2px' }}
                           />
                        ))}
                     </div>
                  )}
               >
                  {categories.map((category) => (
                     <MenuItem key={category} value={category}>
                        {category}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>
         </div>
      </div>
   )
}

function DonationExpiryHelper(props) {
   const classes = useStyles()
   return (
      <div className={classes.container__inputHelper}>
         <DonationExpiry control={props.control} />
         <Helper message={props.message} />
      </div>
   )
}
// returns input field for expiry date of the donation
function DonationExpiry() {
   const theme = useTheme()
   //  used to determine whether the page should use components intended for responsive layout
   const responsiveLayout = useMediaQuery(theme.breakpoints.down('xs'))
   const minDate = new Date()
   minDate.setDate(minDate.getDate() + 7)
   const [selectedDate, handleDateChange] = useState(minDate)

   return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
         <KeyboardDatePicker
            margin={responsiveLayout ? 'normal' : 'none'}
            minDate={selectedDate}
            autoOk
            fullWidth
            inputVariant="outlined"
            label="Expiry Date"
            format="MM/dd/yyyy"
            value={selectedDate}
            InputAdornmentProps={{ position: 'end' }}
            onChange={(date) => handleDateChange(date)}
         />
      </MuiPickersUtilsProvider>
   )
}
// returns multiline input field for the donation notes
function DonationNotes() {
   return (
      <TextField
         margin="normal"
         fullWidth
         id="donationNotes"
         label="Donation Notes"
         multiline
         rows={4}
         variant="outlined"
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
