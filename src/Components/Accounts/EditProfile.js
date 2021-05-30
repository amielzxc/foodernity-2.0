import {
   makeStyles,
   Typography,
   Grid,
   TextField,
   Button,
} from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'

function EditProfile() {
   const { handleSubmit, control } = useForm()
   function onSubmit(data) {
      console.log(data)
   }

   return (
      <>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'column',
               }}
            >
               <Title title="Edit Profile" />
               <UploadImage />
               <Grid
                  container
                  item
                  xs={12}
                  sm={10}
                  md={8}
                  style={{ alignSelf: 'center' }}
                  spacing={2}
               >
                  <FirstNameInput control={control} />
                  <LastNameInput control={control} />
                  <EmailInput control={control} />
                  <CurrentPasswordInput control={control} />
                  <NewPasswordInput control={control} />
               </Grid>
               <Grid container>
                  <CancelChangesButton />
                  <SaveChangesButton />
               </Grid>
            </div>
         </form>
      </>
   )
}
function Title(props) {
   const classes = useStyles()

   return (
      <div>
         <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h2"
         >
            {props.title}
         </Typography>
      </div>
   )
}

function UploadImage() {
   const profilePicture =
      'https://www.incimages.com/uploaded_files/image/1920x1080/getty_513189787_110007.jpg'

   return (
      <div
         style={{
            alignSelf: 'center',
            display: 'flex',
            flexDirection: 'column',
         }}
      >
         <img
            style={{
               alignSelf: 'center',
               width: '150px',
               height: '150px',
               borderRadius: '75px',
               border: '2px solid white',
               boxShadow: '0px 0px 5px 5px #ECECEC',
               marginTop: '1rem',
               marginBottom: '1rem',
            }}
            src={profilePicture}
            alt="profile"
         />
         <Button
            variant="contained"
            color="primary"
            style={{ marginBottom: '3rem' }}
         >
            Upload new Image
         </Button>
      </div>
   )
}

// returns first name input field
function FirstNameInput(props) {
   return (
      <>
         {/* <Typography>First Name</Typography> */}
         <Grid item xs={12} md={6}>
            <Controller
               name="firstName"
               control={props.control}
               defaultValue="Fhillip"
               rules={{ required: 'First name required' }}
               render={({
                  field: { onChange, value },
                  fieldState: { error },
               }) => (
                  <TextField
                     type="text"
                     autoComplete="fname"
                     variant="outlined"
                     id="firstName"
                     label="First Name"
                     required
                     fullWidth
                     value={value}
                     onChange={onChange}
                     error={!!error}
                     helperText={error && error.message}
                  />
               )}
            />
         </Grid>
      </>
   )
}

// returns last name input field
function LastNameInput(props) {
   return (
      <>
         <Grid item xs={12} md={6}>
            <Controller
               name="lastName"
               control={props.control}
               defaultValue="Bagsic"
               rules={{ required: 'Last name required' }}
               render={({
                  field: { onChange, value },
                  fieldState: { error },
               }) => (
                  <TextField
                     type="text"
                     autoComplete="lname"
                     variant="outlined"
                     id="lastName"
                     label="Last Name"
                     required
                     fullWidth
                     value={value}
                     onChange={onChange}
                     error={!!error}
                     helperText={error && error.message}
                  />
               )}
            />
         </Grid>
      </>
   )
}

// returns email input field
function EmailInput(props) {
   return (
      <Grid item xs={12}>
         <Controller
            name="contactNumber"
            control={props.control}
            defaultValue="fhillipbagsic@gmail.com"
            rules={{ required: 'Email required' }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
               <TextField
                  type="email"
                  autoComplete="email"
                  variant="outlined"
                  id="email"
                  label="Email Address"
                  required
                  fullWidth
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error && error.message}
               />
            )}
         />
      </Grid>
   )
}

// returns password input field
function CurrentPasswordInput(props) {
   return (
      <Grid item xs={12}>
         <Controller
            name="currentPassword"
            control={props.control}
            defaultValue=""
            //rules={{ required: 'Password required' }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
               <TextField
                  type="password"
                  variant="outlined"
                  id="currentPassword"
                  label="Current Password"
                  fullWidth
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error && error.message}
               />
            )}
         />
      </Grid>
   )
}

// returns confirm password input field
function NewPasswordInput(props) {
   return (
      <Grid item xs={12}>
         <Controller
            name="newPassword"
            control={props.control}
            defaultValue=""
            // rules={{ required: 'Password required' }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
               <TextField
                  type="password"
                  variant="outlined"
                  id="newPassword"
                  label="New Password"
                  fullWidth
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error && error.message}
               />
            )}
         />
      </Grid>
   )
}

// returns sign up button
function SaveChangesButton() {
   return (
      <Button
         type="submit"
         variant="contained"
         color="primary"
         style={{ margin: '2rem auto 0 auto' }}
      >
         Save changes
      </Button>
   )
}

function CancelChangesButton() {
   return (
      <Button
         type="reset"
         variant="outlined"
         color="primary"
         style={{ margin: '2rem auto 0 auto' }}
      >
         Cancel changes
      </Button>
   )
}
const useStyles = makeStyles((theme) => ({
   title: {
      fontWeight: 'bold',
      marginTop: theme.spacing(0.6),
   },
}))
export default EditProfile
