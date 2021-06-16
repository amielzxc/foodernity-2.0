import React from 'react'
import { Grid, makeStyles, Paper, Typography, Divider } from '@material-ui/core'
import { Controller, useForm } from 'react-hook-form'
import MomentUtils from '@date-io/moment'
import {
   MuiPickersUtilsProvider,
   KeyboardDatePicker,
} from '@material-ui/pickers'
import { usePostStore } from '../../store/PostStore'
import GoogleMap from './GoogleMap'

const useStyles = makeStyles((theme) => ({
   root: {
      maxWidth: '700px',
      height: '100%',
      padding: theme.spacing(1, 3),
   },
   container: {
      padding: theme.spacing(2.5),
      minWidth: '400px',
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
   image__map: {
      height: '250px',
      width: '100%',
      marginBottom: '10px',
   },
   container__location: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '20px',
   },
   container__time: {
      marginTop: '15px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
   },
   text__or: {
      color: '#8B8B8B',
   },
   icon__helper: {
      width: '17px',
      color: '#ACACAC',
      marginLeft: '5px',
   },
}))
// returns pickup details to be filled up by the user
export default function PickupDetails() {
   const { handleSubmit, control } = useForm()
   const classes = useStyles()
   const setPickupDate = usePostStore((state) => state.setPickupDate)

   const onSubmit = (data) => {
      setPickupDate(data.pickupDate)
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
            Pickup Details
         </Typography>
         <Paper elevation={2} className={classes.container}>
            <GoogleMap />
            <Divider className={classes.divider_margin} />
            <form onBlur={handleSubmit(onSubmit)}>
               <PickupDate control={control} />
               <Grid container item spacing={2}>
                  <Grid item xs={12} sm={6}>
                     {/* <PickupDate control={control} /> */}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     {/* <PickupTime control={control} /> */}
                  </Grid>
               </Grid>
            </form>
         </Paper>
      </Grid>
   )
}

function MonthToWord(month) {
   const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
   ]

   return months[month]
}
// return input field for the pickup date
function PickupDate(props) {
   const classes = useStyles()
   const pickupDate = usePostStore((state) => state.pickupDate)

   let date = Date.parse(pickupDate)
   let newDate = new Date(date)

   console.log(
      `${MonthToWord(
         newDate.getMonth()
      )} ${newDate.getDate()}, ${newDate.getFullYear()}`
   )

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

// // returns input field for the pickup time
// function PickupTime(props) {
//    const classes = useStyles()
//    const pickupTime = usePostStore((state) => state.pickupTime)

//    return (
//       <>
//          <Typography variant="body1" className={classes.text_bold}>
//             Pick up time
//          </Typography>
//          <Controller
//             name="pickupTime"
//             control={props.control}
//             defaultValue={pickupTime}
//             rules={{ required: 'Pickup Time required' }}
//             render={({ field: { onChange, value } }) => (
//                <MuiPickersUtilsProvider utils={MomentUtils}>
//                   <KeyboardTimePicker
//                      margin="normal"
//                      inputVariant="outlined"
//                      fullWidth
//                      value={value}
//                      onChange={onChange}
//                      InputProps={{ readOnly: true }}
//                      keyboardIcon={<ScheduleIcon />}
//                   />
//                </MuiPickersUtilsProvider>
//             )}
//          />
//       </>
//    )
// }
