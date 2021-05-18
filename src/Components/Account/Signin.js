import {
  Grid,
  CssBaseline,
  TextField,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Icon } from "@iconify/react";
import googleIcon from "@iconify-icons/flat-color-icons/google";
import BackgroundImage from "./signin-background.png";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  container__main: {
    height: "100vh",
  },
  container__left: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "cover",
  },
  heading: {
    marginLeft: theme.spacing(5),
    fontWeight: "bold",
    color: "white",
  },
  slogan: {
    marginLeft: theme.spacing(5),
    marginBottom: theme.spacing(3),
    fontWeight: "500",
    color: "white",
  },
  container__form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(5, 10),

    [theme.breakpoints.only("sm")]: {
      margin: theme.spacing(5, 17),
    },
    [theme.breakpoints.only("xs")]: {
      margin: theme.spacing(5, 5),
    },
  },
  title: {
    color: "#2196F3",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(12),
      marginTop: theme.spacing(5),
    },
    fontWeight: "bold",
    textAlign: "center",
  },
  form: {
    width: "100%",
    maxWidth: "600px",
  },
  button__signin: {
    marginTop: theme.spacing(4),
  },
  text: {
    color: "#8B8B8B",
    textAlign: "center",
  },
  text__or: {
    margin: theme.spacing(2.5, 0),
  },
  text__register: {
    marginTop: theme.spacing(10),
  },
  text__register_signup: {
    color: "#2196F3",
    fontWeight: "bold",
  },
  text__forgotpassword: {
    color: "#2196F3",
    fontWeight: "bold",
    textAlign: "center",
  },
}));

function Signin() {
  const { handleSubmit, control } = useForm();
  const classes = useStyles();
  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Grid container className={classes.container__main} component="main">
      <CssBaseline />
      <Grid
        container
        item
        xs={false}
        md={5}
        lg={6}
        className={classes.container__left}
        direction="column"
      >
        <Grid item xs={1} />
        <Grid item>
          <Typography variant="h2" className={classes.heading} component="p">
            Foodernity.
          </Typography>
          <Typography variant="h6" className={classes.slogan}>
            Magbigay ayon sa kakayahan, <br /> Kumuha batay sa pangangailangan
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12} md={7} lg={6} direction="column">
        <div className={classes.container__form}>
          <Typography variant="h2" className={classes.title}>
            Sign In to Continue
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <ContactNumberInput control={control} />
            <PasswordInput control={control} />
            <SignInButton className={classes.button__signin} />
            <Typography
              variant="body1"
              className={`${classes.text} ${classes.text__or}`}
            >
              or
            </Typography>
            <GoogleSignInButton />
            <Typography
              variant="body1"
              className={`${classes.text} ${classes.text__register}`}
            >
              Dont have an account?
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <span className={classes.text__register_signup}>
                  {" "}
                  Sign up here
                </span>
              </Link>
            </Typography>
            <Link to="/forgotpassword" style={{ textDecoration: "none" }}>
              <Typography
                variant="body1"
                className={classes.text__forgotpassword}
              >
                Forgot password?
              </Typography>
            </Link>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
// returns the contact number input field
function ContactNumberInput(props) {
  return (
    <Controller
      name="contact"
      control={props.control}
      defaultValue=""
      rules={{ required: "Contact number required" }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          type="tel"
          variant="outlined"
          id="contact"
          label="Contact Number"
          autoComplete="tel"
          margin="normal"
          autoFocus
          fullWidth
          required
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
        />
      )}
    />
  );
}
// returns the password input field
function PasswordInput(props) {
  return (
    <Controller
      name="password"
      control={props.control}
      defaultValue=""
      rules={{ required: "Password required" }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          type="password"
          variant="outlined"
          id="password"
          label="Password"
          margin="normal"
          fullWidth
          required
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
        />
      )}
    />
  );
}
// returns the sign in button
function SignInButton(props) {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      className={props.className}
      fullWidth
      size="large"
    >
      SIGN IN
    </Button>
  );
}
// returns the google sign in button
function GoogleSignInButton() {
  return (
    <Button
      variant="outlined"
      color="primary"
      fullWidth
      size="large"
      startIcon={<Icon icon={googleIcon} />}
    >
      SIGN IN WITH GOOGLE
    </Button>
  );
}

export default Signin;
