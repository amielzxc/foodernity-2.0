import React from "react";
import {
  makeStyles,
  Drawer,
  Toolbar,
  Typography,
  Divider,
  Chip,
  Button,
  withStyles,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import ScheduleIcon from "@material-ui/icons/Schedule";
import DialogDrawer from "../Common/DialogDrawer";

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawer__paper: {
    width: drawerWidth,
    padding: theme.spacing(2.5, 2),
  },
  drawer__container: {
    overflow: "auto",
    height: "100%",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  divider_margin: {
    margin: theme.spacing(2.5, 0),
  },
  text_bold: {
    fontWeight: "bold",
  },
  text_link: {
    color: "#2196F3",
  },
  title: {
    fontWeight: "bold",
    margin: theme.spacing(0.5, 0),
  },
  container__donationDetails: {
    height: "70%",
    overflowY: "auto",
  },
  container__distance: {
    display: "flex",
    margin: theme.spacing(0.5, 0),
  },
  container__category: {
    display: "flex",
    margin: theme.spacing(1, 0),
    overflowX: "auto",
  },
  container__quantity: {
    margin: theme.spacing(0.5, 0),
  },
  container__expiry: {
    margin: theme.spacing(0.5, 0),
  },
  container__notes: {
    margin: theme.spacing(0.6, 0),
  },
  container__pickup: {
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(1, 0),
  },
  icon__location: {
    color: "#66BB6A",
    marginRight: theme.spacing(0.5),
  },
  icon__date: {
    color: "#FFA726",
    marginRight: theme.spacing(0.5),
  },
  icon__time: {
    color: "#AB47BC",
    marginRight: theme.spacing(0.5),
  },
}));
//returns a drawer that is placed on the left side of the website.
export function RequestDrawer() {
  const classes = useStyles();

  return (
    <Drawer
      anchor="right"
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawer__paper,
      }}
    >
      <Toolbar />
      <div className={classes.drawer__container}>
        <Title />
        <Divider className={classes.divider_margin} />
        <div className={classes.container__donationDetails}>
          <DonationName />
          <DistanceFromDonee />
          <ChipCategory />
          <DonationQuantity />
          <DonationExpiry />
          <DonationNotes />
          <DonationPickupDetails />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Divider className={classes.divider_margin} />
          {/* <CancelButton /> */}
          <DeclineButton />
          <ApproveButton />
        </div>
      </div>
    </Drawer>
  );
}
export function RequestDrawerResponsive() {
  const classes = useStyles();
  return (
    <DialogDrawer buttonName="DONATION REQUEST" dialogTitle="Donation Request">
      <DonationName />
      <DistanceFromDonee />
      <ChipCategory />
      <DonationQuantity />
      <DonationExpiry />
      <DonationNotes />
      <DonationPickupDetails />
      <Divider className={classes.divider_margin} />
      <DeclineButton />
      <ApproveButton />
    </DialogDrawer>
  );
}
// returns the title of the right drawer
function Title() {
  const classes = useStyles();
  return (
    <div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        Donation Request
      </Typography>
    </div>
  );
}

function DonationName() {
  const classes = useStyles();
  return (
    <Typography variant="h6" className={classes.text_bold}>
      Lucky Me Pancit Canton Noodles
    </Typography>
  );
}

// returns the distance from the user
function DistanceFromDonee() {
  const classes = useStyles();
  return (
    <div className={classes.container__distance}>
      <LocationOnIcon color="secondary" />
      <Typography>3 kilometers away</Typography>
    </div>
  );
}
// returns the food category of the donation
function ChipCategory() {
  const classes = useStyles();
  return (
    <div className={classes.container__category}>
      <Chip label="Instant Noodles" color="primary" />
      <div style={{ width: "5px" }} />
      <Chip label="Canned Goods" color="primary" />
    </div>
  );
}
// returns the quantity of the donation
function DonationQuantity() {
  const classes = useStyles();
  return (
    <div className={classes.container__quantity}>
      <Typography>
        <span className={classes.text_bold}>Quantity:</span> 5 pieces
      </Typography>
    </div>
  );
}
function DonationExpiry() {
  const classes = useStyles();
  return (
    <div className={classes.container__expiry}>
      <Typography>
        <span className={classes.text_bold}>Expiry date:</span> June 07, 2021
      </Typography>
    </div>
  );
}
function DonationNotes() {
  const classes = useStyles();
  return (
    <div className={classes.container__notes}>
      <Typography className={classes.text_bold}>Donation Notes</Typography>
      <Typography>
        If you are interested, text me on my number 09123456789 or message me
        instead here.
      </Typography>
    </div>
  );
}

// returns pickup details - the pickup location, date, and time
function DonationPickupDetails() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container__pickup}>
        <LocationOnIcon className={classes.icon__location} />
        <Typography>
          <span className={`${classes.text_bold} ${classes.text_link}`}>
            Jhocson St., Sampaloc, Manila
          </span>
        </Typography>
      </div>
      <div className={classes.container__pickup}>
        <EventAvailableIcon className={`${classes.icon__date}`} />
        <Typography>June 06, 2021</Typography>
      </div>
      <div className={classes.container__pickup}>
        <ScheduleIcon className={classes.icon__time} />
        <Typography>between 12pm to 5pm</Typography>
      </div>
    </>
  );
}
function CancelButton() {
  return (
    <Button color="secondary" variant="outlined" fullWidth>
      Cancel my Request
    </Button>
  );
}
function DeclineButton() {
  return (
    <Button color="secondary" variant="outlined" fullWidth>
      Decline Request
    </Button>
  );
}
function ApproveButton() {
  const StyledButton = withStyles({
    root: {
      backgroundColor: "#66BB6A",
      color: "white",
      marginTop: "10px",
      "&:hover": {
        backgroundColor: "#60B064",
      },
    },
  })(Button);
  return <StyledButton fullWidth>Approve Request</StyledButton>;
}
