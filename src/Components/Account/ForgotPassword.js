import {
  Grid,
  CssBaseline,
  Paper,
  Typography,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import BackgroundImage from "./signup-backgroundimage.png";
import Recaptcha from "./recaptcha_img.png";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${BackgroundImage})  no-repeat center center fixed`,
    backgroundSize: "cover",
    height: "100vh",
  },
  title: {
    color: "#2196F3",
    fontWeight: "bold",
    marginBottom: theme.spacing(4),
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: theme.spacing(3),
  },
  container: {
    margin: "0 auto",
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(12),
    paddingRight: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(5),
    },
    [theme.breakpoints.only("xs")]: {
      margin: theme.spacing(3),
    },
  },
  recaptcha: {
    textAlign: "center",
    margin: theme.spacing(5, 0),
  },
  button__send: {
    margin: theme.spacing(3, 0),
  },
  button__signin: {
    marginBottom: theme.spacing(5),
  },
}));

function ForgotPassword() {
  const { handleSubmit, control } = useForm();
  const classes = useStyles();
  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Grid container className={classes.root} alignItems="center">
      <CssBaseline />
      <Grid item xs={false} sm={2} />
      <Grid item container xs={12} sm={8}>
        <Paper className={classes.container}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h3" className={classes.title}>
              Forgot Password
            </Typography>
            <Typography variant="body1" className={classes.description}>
              Enter your registered email address and you will receive a
              password resend link.
            </Typography>
            <ContactNumberField control={control} />
            <Captcha className={classes.recaptcha} image={Recaptcha} />
            <SendButton className={classes.button__send} />
            <SignInButton className={classes.button__signin} />
            <br />
          </form>
        </Paper>
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
  );
}
// returns the contact number field
function ContactNumberField(props) {
  return (
    <Controller
      name="contactNumber"
      control={props.control}
      defaultValue=""
      rules={{ required: "Contact number required" }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          type="tel"
          autoComplete="tel"
          variant="outlined"
          id="contactNumber"
          label="Contact Number"
          autoFocus
          required
          fullWidth
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
        />
      )}
    />
  );
}
// returns captcha image placeholder
function Captcha(props) {
  return (
    <div className={props.className}>
      <img src={props.image} alt="recaptcha" />
    </div>
  );
}
// returns send email/reset link button
function SendButton(props) {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      fullWidth
      size="large"
      className={props.className}
    >
      SEND PASSWORD RESET LINK
    </Button>
  );
}
// returns sign in button which redirects to signin page
function SignInButton(props) {
  return (
    <Button
      variant="outlined"
      color="primary"
      fullWidth
      className={props.className}
      size="large"
    >
      BACK TO SIGN IN
    </Button>
  );
}
export default ForgotPassword;
