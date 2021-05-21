import React, { useState } from "react";
import {
  Grid,
  makeStyles,
  Paper,
  Typography,
  Tooltip,
  TextField,
  Divider,
  ButtonGroup,
  Button,
  IconButton,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import { Controller, useForm } from "react-hook-form";
import MapImage from "../Listing/pickup_map.png";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "700px",
    height: "100%",
    padding: theme.spacing(1, 3),
  },
  container: {
    padding: theme.spacing(2.5),
  },
  text_bold: {
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "10px",
  },
  divider_margin: {
    margin: "20px 0",
  },
  image__map: {
    height: "170px",
    width: "100%",
    marginBottom: "10px",
  },
  container__location: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  container__time: {
    marginTop: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  text__or: {
    color: "#8B8B8B",
  },
  icon__helper: {
    width: "17px",
    color: "#ACACAC",
    marginLeft: "5px",
  },
}));
// returns pickup details to be filled up by the user
function PickupDetails() {
  const { handleSubmit, control } = useForm();
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      item
      xs={12}
      md={8}
      lg={6}
      direction="column"
    >
      <Typography variant="h6" className={classes.title}>
        Pickup Details
      </Typography>
      <Paper className={classes.container}>
        <Map />
        <PickupLocation control={control} />
        <Divider className={classes.divider_margin} />
        <PickupDate />
        <Divider className={classes.divider_margin} />
        <PickupTime />
      </Paper>
    </Grid>
  );
}
function Map() {
  const classes = useStyles();
  return <img className={classes.image__map} src={MapImage} alt="map" />;
}
// returns input field for the pickup location
function PickupLocation(props) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container__location}>
        <div>
          <Typography variant="body1" style={{ fontWeight: "bold" }}>
            Pick up location
          </Typography>
        </div>
        <IconButton size="small">
          <GpsFixedIcon color="primary" fontSize="small" />
        </IconButton>
      </div>
      <Controller
        name="pickupLocation"
        control={props.control}
        defaultValue=""
        rules={{ required: "Pick up location required" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            type="text"
            variant="outlined"
            id="pickupLocation"
            label="Enter a place"
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
      <Typography color="primary" variant="body2" component="p">
        Browse suggested pick up locations near you
      </Typography>
    </>
  );
}
// return input field for the pickup date
function PickupDate() {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <>
      <Typography variant="body1" className={classes.text_bold}>
        Pick up date
      </Typography>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          autoOk
          fullWidth
          inputVariant="outlined"
          format="MM/dd/yyyy"
          value={selectedDate}
          InputAdornmentProps={{ position: "end" }}
          onChange={(date) => handleDateChange(date)}
        />
      </MuiPickersUtilsProvider>
    </>
  );
}
// returns input field for the pickup time
function PickupTime() {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());
  const helperMessage = "helperMessage";
  return (
    <>
      <Typography variant="body1" className={classes.text_bold}>
        Pick up time
      </Typography>
      <div className={classes.container__time}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <ButtonGroup>
            <Button variant="contained" color="primary" disableElevation>
              Morning
            </Button>
            <Button variant="outlined" color="primary">
              Afternoon
            </Button>
            <Button variant="outlined" color="primary">
              Evening
            </Button>
          </ButtonGroup>
          <Helper message={helperMessage} />
        </div>
        <p className={classes.text__or}>or</p>
      </div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardTimePicker
          inputVariant="outlined"
          fullWidth
          //margin="normal"
          mask="__:__ _M"
          placeholder="08:00 AM"
          value={selectedDate}
          onChange={(date) => handleDateChange(date)}
        />
      </MuiPickersUtilsProvider>
    </>
  );
}
// returns a tooltip that helps user understand what the context is all about
function Helper(props) {
  const classes = useStyles();
  const message = props.message;
  return (
    <Tooltip title={message} arrow placement="right">
      <InfoIcon className={classes.icon__helper} />
    </Tooltip>
  );
}
export default PickupDetails;
