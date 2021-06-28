import { useState } from 'react'
import MomentUtils from '@date-io/moment'
import { Dialog, InputAdornment } from '@material-ui/core'
import { DialogContent } from '@material-ui/core'
import {
   Grid,
   Typography,
   makeStyles,
   Button,
   Box,
   TextField,
   RadioGroup,
   FormControlLabel,
   Radio,
   DialogActions,
   DialogTitle,
} from '@material-ui/core'
import {
   MuiPickersUtilsProvider,
   KeyboardDatePicker,
} from '@material-ui/pickers'
import { Divider } from '@material-ui/core'
import GoogleMap from '../post/GoogleMap'

export default function DonationForm(props) {
   const classes = useStyles()
   const [expiryDate, onExpiryChange] = useState(new Date())
   const [pickupDate, onPickupChange] = useState(new Date())
   const { open, handleClose } = props
   const [value, setValue] = useState('')

   const handleChange = (event) => {
      setValue(event.target.value)
   }
   return (
      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="sm">
         <DialogTitle>Donation Details</DialogTitle>
         <DialogContent>
            <Grid container spacing={2}>
               <Grid container item xs={12} justify="center">
                  <Button color="primary" variant="contained">
                     Upload image
                  </Button>
               </Grid>
               <Grid item xs={6}>
                  <TextField
                     variant="outlined"
                     label="Donation Name"
                     fullWidth
                     // margin="normal"
                     required
                  />
               </Grid>
               <Grid item xs={6}>
                  <TextField
                     variant="outlined"
                     label="Quantity"
                     fullWidth
                     required
                     InputProps={{
                        endAdornment: <InputAdornment>piece(s)</InputAdornment>,
                     }}
                  />
               </Grid>
               <Grid item xs={6}>
                  <TextField
                     disabled
                     value="Canned Goods"
                     variant="outlined"
                     label="Category"
                     fullWidth
                     required
                  />
               </Grid>
               <Grid item xs={6}>
                  <MuiPickersUtilsProvider utils={MomentUtils}>
                     <KeyboardDatePicker
                        disablePast
                        autoOk
                        fullWidth
                        inputVariant="outlined"
                        label="Expiry Date"
                        format="L"
                        value={expiryDate}
                        InputAdornmentProps={{ position: 'end' }}
                        onChange={onExpiryChange}
                        InputProps={{ readOnly: true }}
                     />
                  </MuiPickersUtilsProvider>
               </Grid>
               <Grid item xs={12}>
                  <TextField
                     variant="outlined"
                     fullWidth
                     id="donationNotes"
                     label="Donation Notes"
                     multiline
                     rows={4}
                     required
                     placeholder="e.g., instructions"
                  />
               </Grid>
               <Grid item xs={12}>
                  <Divider />
               </Grid>
               {/* </Grid>
               <Grid container item xs={12} md={6}> */}
               <Grid item xs={12}>
                  <Typography variant="body1" className={classes.text_bold}>
                     How do you want your donation to be claimed?
                  </Typography>
               </Grid>
               <Grid item xs={12}>
                  <RadioGroup value={value} onChange={handleChange}>
                     <FormControlLabel
                        value="Pickup"
                        control={<Radio />}
                        label="Pickup"
                     />
                     <FormControlLabel
                        value="Deliver"
                        control={<Radio />}
                        label="Deliver"
                     />
                  </RadioGroup>
                  <Box display={value === 'Pickup' ? 'block' : 'none'}>
                     <GoogleMap />
                  </Box>
                  <Box display={value === 'Deliver' ? 'block' : 'none'}>
                     <Typography>
                        The address for deliver is{' '}
                        <span style={{ color: '#2196F3' }}>
                           National University-Manila, M.F. Jhocson Street,
                           Sampaloc, Manila, Metro Manila
                        </span>
                     </Typography>
                  </Box>
               </Grid>
               <Grid item xs={12}>
                  <Typography variant="body1" className={classes.text_bold}>
                     Pick up date
                  </Typography>
                  <MuiPickersUtilsProvider utils={MomentUtils}>
                     <KeyboardDatePicker
                        disablePast
                        margin="normal"
                        autoOk
                        fullWidth
                        inputVariant="outlined"
                        format="L"
                        value={pickupDate}
                        InputAdornmentProps={{ position: 'end' }}
                        onChange={onPickupChange}
                        InputProps={{ readOnly: true }}
                     />
                  </MuiPickersUtilsProvider>
               </Grid>
            </Grid>
            {/* </Grid> */}
         </DialogContent>
         <DialogActions>
            <Button color="primary" variant="contained">
               Donate
            </Button>
         </DialogActions>
      </Dialog>
   )
}

const useStyles = makeStyles((theme) => ({
   media: {
      // backgroundColor: 'grey',
      zIndex: 1,
      backgroundSize: 'contain',
      height: 500,
      backdropFilter: 'blur(10px)',
      // paddingTop: '56.25%', // 16:9
   },
   text_bold: {
      fontWeight: 'bold',
   },
}))
