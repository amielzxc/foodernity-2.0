import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import StyledAppBar from "../Common/StyledAppBar";
import {
  Avatar,
  Button,
  Chip,
  Divider,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  withStyles,
} from "@material-ui/core";
import LeftDrawer from "../Common/LeftDrawer";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { deepOrange } from "@material-ui/core/colors";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import MainContainer from "../Common/MainContainer";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import ScheduleIcon from "@material-ui/icons/Schedule";
import MapImage from "./pickup_map.png";
import DialogDrawer from "../Common/DialogDrawer";

// returns a page that displays the details of the donation when user clicks on a donation listing
export default function ListingDetail() {
  const classes = useStyles();
  const theme = useTheme();
  // decides what screen size should be considered as a responsive layout - below 960px
  const responsiveLayout = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      <CssBaseline />
      <StyledAppBar />
      {responsiveLayout ? null : <ActionDrawer />}
      <MainContainer>
        {responsiveLayout ? <ActionDrawerResponsive /> : null}
        <Grid container justify="center">
          <DonationImages />
          <DonationDetails />
        </Grid>
      </MainContainer>
    </div>
  );
}
// returns a left drawer that allows user to view the donor's name, message the donor, and request the listing
function ActionDrawer() {
  const classes = useStyles();
  return (
    <LeftDrawer>
      <BackButton />
      <Typography>
        Listed <span className={classes.text_bold}>2h ago</span> by
      </Typography>
      <DonorAvatar />
      <Divider className={classes.divider_margin} />
      <SendMessageButton />
      <RequestButton />
      <div className={classes.button__report}>
        <ReportButton />
      </div>
    </LeftDrawer>
  );
}
// returns a dialog drawer that displays when the screen reaches responsive layout
function ActionDrawerResponsive() {
  const classes = useStyles();

  return (
    <div className={classes.container__drawer_responsive}>
      <BackButton />
      <DialogDrawer buttonName="actions" dialogTitle="Action Filters">
        <Typography>Filter</Typography>
      </DialogDrawer>
    </div>
  );
}
// returns a return to listings button
function BackButton() {
  return (
    <Button variant="text" startIcon={<ArrowBackIcon />} size="small">
      Back to listings
    </Button>
  );
}
// returns the donor's avatar and name
function DonorAvatar() {
  const classes = useStyles();
  return (
    <div className={classes.container__avatar}>
      <Avatar className={classes.avatar__color}>FB</Avatar>
      <Typography variant="body1" component="p">
        Fhillip Bagsic
      </Typography>
    </div>
  );
}
// returns button that allows user to message the donor. redirects to message page
function SendMessageButton() {
  return (
    <Button
      color="primary"
      variant="outlined"
      fullWidth
      startIcon={<ChatBubbleIcon />}
    >
      Send a message
    </Button>
  );
}
// returns a button that allows user to request the listing
function RequestButton() {
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

  return <StyledButton fullWidth>Request this Listing</StyledButton>;
}
// returns a button that allows user to report what the user thinks is deemed to be reported
function ReportButton() {
  return (
    <Button color="secondary" variant="outlined" fullWidth>
      Seeing something you don't like?
    </Button>
  );
}
// returns the photos of the donation
function DonationImages(props) {
  const classes = useStyles();
  const image = [
    "http://cdn.shopify.com/s/files/1/2713/3026/products/lucky-me-pancit-canton-chilli-mansi-instant-noodles-60g-65-p_600x.jpg?v=1545281033",
    "https://www.sarisaristore.se/637-large_default/lucky-me-pancit-canton.jpg",
    "https://cdn.shopify.com/s/files/1/0338/0694/2253/products/LuckyMePancitCantonSweetSpicy2.12oz_Front_ade288b8-bf42-4de6-ae27-e794a40b6b8a_758x659.jpg?v=1585674364",
    "https://i.imgur.com/4UuWKk4.png",
  ];

  const [index, setIndex] = useState(0);

  const handleChangeImage = (index) => {
    setIndex(index);
  };

  return (
    <Grid
      container
      item
      xs={12}
      lg={6}
      direction="column"
      className={classes.container}
    >
      <Typography variant="h6" className={classes.container__title}>
        Donation Images
      </Typography>
      <Paper className={classes.container__paper}>
        <img
          src={image[index]}
          alt="pancit canton"
          className={classes.image__mainPreview}
        />
        <div className={classes.container__subImages}>
          <div
            className={classes.image__subImage}
            onClick={() => {
              handleChangeImage(0);
            }}
          >
            <img
              src={image[0]}
              alt="donation-image1"
              className={classes.image__sub}
            />
          </div>
          <div
            className={classes.image__subImage}
            onClick={() => {
              handleChangeImage(1);
            }}
          >
            <img
              src={image[1]}
              alt="donation-image2"
              className={classes.image__sub}
            />
          </div>
          <div
            className={classes.image__subImage}
            onClick={() => {
              handleChangeImage(2);
            }}
          >
            <img
              src={image[2]}
              alt="donation-image3"
              className={classes.image__sub}
            />
          </div>
          <div
            className={classes.image__subImage}
            onClick={() => {
              handleChangeImage(3);
            }}
          >
            <img
              src={image[3]}
              alt="donation-image4"
              className={classes.image__sub}
            />
          </div>
        </div>
      </Paper>
    </Grid>
  );
}
// returns the details of the donation, has multiple child components
function DonationDetails(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      item
      xs={12}
      lg={6}
      direction="column"
      className={classes.container}
    >
      <Typography variant="h6" className={classes.container__title}>
        Item Details
      </Typography>
      <Paper className={classes.container__paper}>
        <Typography variant="h6" className={classes.text_bold}>
          Lucky Me Pancit Canton Noodles
        </Typography>
        <DistanceFromDonee />
        <ChipCategory />
        <DonationQuantity />
        <DonationExpiry />
        <DonationNotes />
        <Map />
        <Pickup />
      </Paper>
    </Grid>
  );
}
// returns the distance from the user
function DistanceFromDonee() {
  const classes = useStyles();

  return (
    <div className={classes.container__distanceAway}>
      <LocationOnIcon color="secondary" />
      <Typography>3 kilometers away</Typography>
    </div>
  );
}
// returns the food category of the donation
function ChipCategory() {
  const classes = useStyles();

  return (
    <div className={classes.container__chipCategory}>
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
    <Typography>
      <span className={classes.text_bold}>Quantity:</span> 5 pieces
    </Typography>
  );
}
// returns the expiry date of the donation
function DonationExpiry() {
  const classes = useStyles();

  return (
    <div style={{ margin: "5px 0" }}>
      <Typography>
        The expiry date is on{" "}
        <span className={classes.text_bold}>June 07, 2021</span>. Exactly 2
        weeks and 3 days from now.
      </Typography>
    </div>
  );
}
function DonationNotes() {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.text_bold}>Donation Notes</Typography>
      <Typography>
        If you are interested, text me on my number 09123456789 or message me
        instead here.
      </Typography>
    </>
  );
}
// returns a map that shows approximate pickup location
function Map() {
  const classes = useStyles();

  return (
    //<div style={{width: '100%', height: '150px'}}>
    <img className={classes.image__map} src={MapImage} alt="map" />
    //</div>
  );
}
// returns pickup details - the pickup location, date, and time
function Pickup() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container__pickup}>
        <LocationOnIcon
          className={`${classes.icon_pickup} ${classes.icon__location_green}`}
        />
        <Typography>
          Pick up location is around{" "}
          <span className={classes.text__address_highlighted}>
            {" "}
            Jhocson St., Sampaloc, Manila
          </span>
          .
        </Typography>
      </div>
      <div className={classes.container__pickup}>
        <EventAvailableIcon
          className={`${classes.icon_pickup} ${classes.icon__date_orange}`}
        />
        <Typography>
          Pick up date is on{" "}
          <span className={classes.text_bold}> June 06, 2021</span>.
        </Typography>
      </div>
      <div className={classes.container__pickup}>
        <ScheduleIcon
          className={`${classes.icon_pickup} ${classes.icon__time_purple}`}
        />
        <Typography>
          Pick up time is in the afternoon,{" "}
          <span className={classes.text_bold}> between 12pm to 5pm</span>.
        </Typography>
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  container: {
    maxWidth: "700px",
    height: "100%",
    padding: theme.spacing(1, 3),
  },
  container__paper: {
    padding: theme.spacing(2.5),
  },
  container__title: {
    fontWeight: "bold",
    marginBottom: "10px",
  },
  text_bold: {
    fontWeight: "bold",
  },
  divider_margin: {
    margin: theme.spacing(2.5, 0),
  },
  button__report: {
    position: "absolute",
    bottom: "15px",
  },
  container__drawer_responsive: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  container__avatar: {
    display: "flex",
    alignItems: "center",
  },
  avatar__color: {
    backgroundColor: deepOrange[500],
    marginRight: "10px",
  },
  image__mainPreview: {
    width: "100%",
    height: "450px",
  },
  container__subImages: {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    height: "100px",
  },
  image__subImage: {
    width: "25%",
    padding: "3px",
    cursor: "pointer",
  },
  image__sub: {
    width: "100%",
    height: "100%",
    borderRadius: theme.spacing(0.5),
  },
  container__distanceAway: {
    display: "flex",
    margin: "5px 0",
  },
  container__chipCategory: {
    display: "flex",
    margin: "10px 0",
  },
  image__map: {
    height: "200px",
    width: "100%",
  },
  container__pickup: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0",
  },
  icon_pickup: {
    marginRight: theme.spacing(0.5),
  },
  icon__location_green: {
    color: "#66BB6A",
  },
  text__address_highlighted: {
    fontWeight: "bold",
    color: "#2196F3",
  },
  icon__date_orange: {
    color: "#FFA726",
  },
  icon__time_purple: {
    color: "#AB47BC",
  },
}));
