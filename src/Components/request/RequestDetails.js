import MomentUtils from '@date-io/moment'
import {
   Divider,
   FormControl,
   Grid,
   InputAdornment,
   InputLabel,
   makeStyles,
   MenuItem,
   Paper,
   Select,
   TextField,
   Typography,
   useMediaQuery,
   useTheme,
} from '@material-ui/core'
import {
   KeyboardDatePicker,
   MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import { Controller, useForm } from 'react-hook-form'
import { useRequestStore } from '../../store/RequestStore'
import GoogleMap from './GoogleMap'
import UploadImage from './UploadImage'
export default function RequestDetails() {
   const classes = useStyles()
   const { handleSubmit, control } = useForm()

   const setRequestName = useRequestStore((state) => state.setRequestName)
   const setRequestQuantity = useRequestStore(
      (state) => state.setRequestQuantity
   )
   const setRequestCategory = useRequestStore(
      (state) => state.setRequestCategory
   )
   const setRequestNotes = useRequestStore((state) => state.setRequestNotes)
   const setPickupDate = useRequestStore((state) => state.setPickupDate)
   const onSubmit = (data) => {
      console.log(data)
      setRequestName(data.requestName)
      setRequestQuantity(data.requestQuantity)
      setRequestCategory(data.requestCategory)
      setRequestNotes(data.requestNotes)
      setPickupDate(data.pickupDate)
   }
   return (
      <Grid container>
         <Grid
            container
            item
            xs={12}
            lg={6}
            direction="column"
            className={classes.root}
         >
            <Typography variant="h6" className={classes.title}>
               Request Details
            </Typography>
            <Paper className={classes.container}>
               <form onBlur={handleSubmit(onSubmit)}>
                  <UploadImage />
                  <Divider className={classes.divider_margin} />
                  <Grid item xs={12}>
                     <RequestName control={control} />
                  </Grid>
                  <Grid container item spacing={2}>
                     <Grid item xs={12} sm={6}>
                        <RequestQuantity control={control} />
                     </Grid>
                     <Grid item xs={12} sm={6}>
                        <RequestCategory control={control} />
                     </Grid>
                  </Grid>
                  <RequestNotes control={control} />
               </form>
            </Paper>
         </Grid>
         <Grid
            container
            item
            xs={12}
            lg={6}
            direction="column"
            className={classes.root}
         >
            <Typography variant="h6" className={classes.title}>
               Pickup Details
            </Typography>
            <Paper className={classes.container}>
               <GoogleMap />
               <Divider className={classes.divider_margin} />
               <form onBlur={handleSubmit(onSubmit)}>
                  <PickupDate control={control} />
               </form>
            </Paper>
         </Grid>
      </Grid>
   )
}

// returns input field for the donation's name
function RequestName(props) {
   const requestName = useRequestStore((state) => state.requestName)

   return (
      <Controller
         name="requestName"
         control={props.control}
         defaultValue={requestName}
         rules={{ required: 'Request Name required' }}
         render={({ field: { onChange, value } }) => (
            <TextField
               margin="normal"
               type="text"
               variant="outlined"
               id="requestName"
               label="What are you requesting?"
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
function RequestQuantity(props) {
   const requestQuantity = useRequestStore((state) => state.requestQuantity)

   return (
      <Controller
         name="requestQuantity"
         control={props.control}
         defaultValue={requestQuantity}
         rules={{ required: 'Request Quantity required' }}
         render={({ field: { onChange, value } }) => (
            <TextField
               margin="normal"
               type="text"
               variant="outlined"
               id="requestQuantity"
               label="Quantity"
               helperText="max of 10 pieces"
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
   )
}

// returns select field that allows donor to choose the donation's food category
function RequestCategory(props) {
   const requestCategory = useRequestStore((state) => state.requestCategory)
   const theme = useTheme()
   const responsiveLayout = useMediaQuery(theme.breakpoints.down('xs'))

   return (
      <FormControl variant="outlined" fullWidth required margin="normal">
         <InputLabel id="requestCategory">Category</InputLabel>
         <Controller
            name="requestCategory"
            control={props.control}
            defaultValue={requestCategory}
            rules={{ required: 'Category required' }}
            render={({ field: { onChange, value } }) => (
               <Select
                  defaultValue={value ? value : ''}
                  labelId="requestCategory"
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

// returns multiline input field for the donation notes
function RequestNotes(props) {
   const requestNotes = useRequestStore((state) => state.requestNotes)

   return (
      <Controller
         name="requestNotes"
         control={props.control}
         defaultValue={requestNotes}
         render={({ field: { onChange, value } }) => (
            <TextField
               margin="normal"
               variant="outlined"
               fullWidth
               id="requestNotes"
               label="Request Notes"
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

function PickupDate(props) {
   const classes = useStyles()
   const pickupDate = useRequestStore((state) => state.pickupDate)

   return (
      <>
         <Typography variant="body1" className={classes.text_bold}>
            Pick up date
         </Typography>
         <Controller
            name="pickupDate"
            control={props.control}
            defaultValue={pickupDate}
            rules={{ required: 'Pickup Date required' }}
            render={({ field: { onChange, value } }) => (
               <MuiPickersUtilsProvider utils={MomentUtils}>
                  <KeyboardDatePicker
                     disablePast
                     margin="normal"
                     autoOk
                     fullWidth
                     inputVariant="outlined"
                     format="L"
                     value={value}
                     InputAdornmentProps={{ position: 'end' }}
                     onChange={onChange}
                     InputProps={{ readOnly: true }}
                  />
               </MuiPickersUtilsProvider>
            )}
         />
      </>
   )
}

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
