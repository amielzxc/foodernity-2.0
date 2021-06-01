import {
   Grid,
   CssBaseline,
   Paper,
   Typography,
   TextField,
   Button,
   makeStyles,
} from '@material-ui/core'
import { Icon } from '@iconify/react'
import googleIcon from '@iconify-icons/flat-color-icons/google'
import { useForm, Controller } from 'react-hook-form'
import BackgroundImage from './signup-backgroundimage.png'
import Axios from 'axios'

const useStyles = makeStyles((theme) => ({
   root: {
      background: `url(${BackgroundImage})  no-repeat center center fixed`,
      backgroundSize: 'cover',
   },
   container: {
      margin: theme.spacing(5, 0),
      paddingTop: theme.spacing(5),
      paddingLeft: theme.spacing(12),
      paddingRight: theme.spacing(12),
      [theme.breakpoints.down('md')]: {
         padding: theme.spacing(5),
      },
      [theme.breakpoints.only('xs')]: {
         margin: theme.spacing(3),
      },
   },
   title: {
      color: '#2196F3',
      fontWeight: 'bold',
      marginBottom: theme.spacing(5),
      textAlign: 'center',
   },
   text: {
      color: '#8B8B8B',
      textAlign: 'center',
   },
   text_highlighted: {
      color: '#2196F3',
      textAlign: 'center',
      fontWeight: 'bold',
   },
   text__fullName: {
      margin: '0',
   },
   text__agreement: {
      margin: theme.spacing(4),
   },
   text__or: {
      margin: theme.spacing(2.5, 0),
   },
   button__google: {
      marginBottom: theme.spacing(5),
   },
}))

function Signup() {
   const { handleSubmit, control } = useForm()
   const classes = useStyles()
   function onSubmit(data) {
      console.log(data)

      if (data.password !== data.confirmPassword) {
         console.log("password and confirm password didn't match")
      } else {
         const obj = {
            email: data.emailAddress,
            password: data.password,
            firstname: data.firstName,
            surname: data.lastName,
            dateOfReg: `${
               new Date().getMonth() + 1
            }/${new Date().getDate()}/${new Date().getFullYear()}`,
            userType: 'individual',
            userStatus: 'active',
         }

         console.log(obj)
         Axios.post('http://localhost:3001/user/add', obj).then((err, res) => {
            if (err) {
            } else {
            }
         })
      }
   }

   return (
      <Grid container className={classes.root} alignItems="center">
         <CssBaseline />
         <Grid item xs={false} sm={2} lg={3} />
         <Grid container item xs={12} sm={8} lg={6}>
            <Paper className={classes.container}>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <Typography
                     variant="h3"
                     className={`${classes.text_highlighted} ${classes.title}`}
                  >
                     Create an Account
                  </Typography>
                  <Grid
                     container
                     item
                     xs={12}
                     className={classes.text__fullName}
                     spacing={2}
                  >
                     <FirstNameInput control={control} />
                     <LastNameInput control={control} />
                     <EmailInput control={control} />
                     <PasswordInput control={control} />
                     <ConfirmPasswordInput control={control} />
                  </Grid>
                  <Agreement
                     agreement={`${classes.text} ${classes.text__agreement}`}
                     link={classes.text_highlighted}
                  />
                  <SignUpButton />
                  <Typography
                     variant="body1"
                     className={`${classes.text} ${classes.text__or}`}
                  >
                     or
                  </Typography>
                  <GoogleSignUpButton className={classes.button__google} />
                  <Typography className={classes.text}>
                     Already have an account?{' '}
                     <span className={classes.text_highlighted}>
                        Sign in here
                     </span>
                  </Typography>
                  <br />
               </form>
            </Paper>
         </Grid>
         <Grid item xs={false} md={2} lg={3} />
      </Grid>
   )
}
// returns first name input field
function FirstNameInput(props) {
   return (
      <Grid item xs={12} md={6}>
         <Controller
            name="firstName"
            control={props.control}
            defaultValue=""
            rules={{ required: 'First name required' }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
               <TextField
                  type="text"
                  autoComplete="fname"
                  variant="outlined"
                  id="firstName"
                  label="First Name"
                  autoFocus
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
// returns last name input field
function LastNameInput(props) {
   return (
      <Grid item xs={12} md={6}>
         <Controller
            name="lastName"
            control={props.control}
            defaultValue=""
            rules={{ required: 'Last name required' }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
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
   )
}
// returns contact number input field
function EmailInput(props) {
   return (
      <Grid item xs={12}>
         <Controller
            name="emailAddress"
            control={props.control}
            defaultValue=""
            rules={{ required: 'Email required' }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
               <TextField
                  type="email"
                  autoComplete="email"
                  variant="outlined"
                  id="emailAddress"
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
function PasswordInput(props) {
   return (
      <Grid item xs={12}>
         <Controller
            name="password"
            control={props.control}
            defaultValue=""
            rules={{ required: 'Password required' }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
               <TextField
                  type="password"
                  variant="outlined"
                  id="password"
                  label="Password"
                  required
                  fullWidth
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={
                     error ? error.message : 'Must be at least 8 characters'
                  }
               />
            )}
         />
      </Grid>
   )
}
// returns confirm password input field
function ConfirmPasswordInput(props) {
   return (
      <Grid item xs={12}>
         <Controller
            name="confirmPassword"
            control={props.control}
            defaultValue=""
            rules={{ required: 'Password required' }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
               <TextField
                  type="password"
                  variant="outlined"
                  id="confirmPassword"
                  label="Confirm Password"
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
// returns agreement links
function Agreement(props) {
   return (
      <Typography className={props.agreement}>
         By creating an account, you accept our{' '}
         <span className={props.link}>Terms of Service</span>,
         <span className={props.link}> Privacy Policy</span>, and our default{' '}
         <span className={props.link}>Notification Settings</span>.
      </Typography>
   )
}
// returns sign up button
function SignUpButton() {
   return (
      <Button
         type="submit"
         variant="contained"
         color="primary"
         fullWidth
         size="large"
      >
         SIGN UP
      </Button>
   )
}
// returns google sign up button
function GoogleSignUpButton(props) {
   return (
      <Button
         variant="outlined"
         color="primary"
         fullWidth
         className={props.className}
         size="large"
         startIcon={<Icon icon={googleIcon} />}
      >
         SIGN UP WITH GOOGLE
      </Button>
   )
}

export default Signup
