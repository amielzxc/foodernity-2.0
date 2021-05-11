import { Grid, makeStyles, Chip, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import ScheduleIcon from "@material-ui/icons/Schedule";
import MapImage from "../Listing/pickup_map.png";

const useStyles = makeStyles((theme) => ({
  details: {
    maxWidth: "700px",
    height: "100%",
    padding: theme.spacing(1, 3),
  },
  paper: {
    padding: theme.spacing(2.5),
  },
}));
// returns the donation's photos and details
function DonationPreview() {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <DonationImages className={classes.details} paper={classes.paper} />
      <DonationDetails className={classes.details} paper={classes.paper} />
    </Grid>
  );
}
// returns the photos of the donation
function DonationImages(props) {
  const [image, setImage] = useState([
    "http://cdn.shopify.com/s/files/1/2713/3026/products/lucky-me-pancit-canton-chilli-mansi-instant-noodles-60g-65-p_600x.jpg?v=1545281033",
    "https://www.sarisaristore.se/637-large_default/lucky-me-pancit-canton.jpg",
    "https://cdn.shopify.com/s/files/1/0338/0694/2253/products/LuckyMePancitCantonSweetSpicy2.12oz_Front_ade288b8-bf42-4de6-ae27-e794a40b6b8a_758x659.jpg?v=1585674364",
    "https://i.imgur.com/4UuWKk4.png",
  ]);

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
      className={props.className}
    >
      <Typography
        variant="h6"
        style={{ fontWeight: "bold", marginBottom: "10px" }}
      >
        Donation Images
      </Typography>
      <Paper className={props.paper}>
        <img
          src={image[index]}
          alt="pancit canton"
          style={{
            width: "100%",
            height: "450px",
          }}
        />
        <div
          style={{
            display: "flex",
            // flexWrap: "wrap",
            // flexDirection: "row",
            justifyContent: "flex-start",
            width: "100%",
            height: "100px",
          }}
        >
          <div
            onClick={() => {
              handleChangeImage(0);
            }}
            style={{
              width: "25%",
              backgroundColor: "red",
              padding: "3px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            <img
              src={image[0]}
              alt="donation-image1"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "5px",
              }}
            />
          </div>
          <div
            style={{
              width: "25%",
              backgroundColor: "red",
              padding: "3px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => {
              handleChangeImage(1);
            }}
          >
            <img
              src={image[1]}
              alt="donation-image2"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div
            style={{
              width: "25%",
              backgroundColor: "red",
              padding: "3px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => {
              handleChangeImage(2);
            }}
          >
            <img
              src={image[2]}
              alt="donation-image3"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div
            style={{
              width: "25%",
              backgroundColor: "red",
              padding: "3px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => {
              handleChangeImage(3);
            }}
          >
            <img
              src={image[3]}
              alt="donation-image4"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          {/* <div style={{ width: "25%", height: "100px" }}>
                  <img src={image[0]} alt="donation-image1" />
               </div>
               <div style={{ width: "25%" }}>
                  <img src={image[1]} alt="donation-image2" />
               </div>
               <div style={{ width: "25%" }}>
                  <img src={image[2]} alt="donation-image3" />
               </div>
               <div style={{ width: "25%" }}>
                  <img src={image[3]} alt="donation-image4" />
               </div> */}
        </div>
      </Paper>
    </Grid>
  );
}

// returns the details of the donation, has multiple child components
function DonationDetails(props) {
  return (
    <Grid
      container
      item
      xs={12}
      lg={6}
      direction="column"
      className={props.className}
    >
      <Typography
        variant="h6"
        style={{ fontWeight: "bold", marginBottom: "10px" }}
      >
        Item Details
      </Typography>
      <Paper className={props.paper}>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          Lucky Me Pancit Canton Noodles
        </Typography>
        <DistanceFromDonee />
        <ChipCategory />
        <Typography>
          <span style={{ fontWeight: "bold" }}>Quantity:</span> 5 pieces
        </Typography>
        <ExpiryDate />
        <Typography style={{ fontWeight: "bold" }}>Donation Notes</Typography>
        <Typography>
          If you are interested, text me on my number 09123456789 or message me
          instead here.
        </Typography>
        <Map />
        <Pickup />
      </Paper>
    </Grid>
  );
}

function DistanceFromDonee() {
  return (
    <div style={{ display: "flex", margin: "5px 0" }}>
      <LocationOnIcon color="secondary" />
      <Typography>3 kilometers away</Typography>
    </div>
  );
}
// returns the food category of the donation
function ChipCategory() {
  return (
    <div style={{ display: "flex", margin: "10px 0" }}>
      <Chip label="Instant Noodles" color="primary" />
      <div style={{ width: "5px" }} />
      <Chip label="Canned Goods" color="primary" />
    </div>
  );
}
// returns the expiry date of the donation
function ExpiryDate() {
  return (
    <div style={{ margin: "5px 0" }}>
      <Typography>
        The expiry date is on{" "}
        <span style={{ fontWeight: "bold" }}>June 07, 2021</span>. Exactly 2
        weeks and 3 days from now.
      </Typography>
    </div>
  );
}
// returns a map that shows approximate pickup location
function Map() {
  return (
    //<div style={{width: '100%', height: '150px'}}>
    <img style={{ height: "200px", width: "100%" }} src={MapImage} alt="map" />
    //</div>
  );
}
// returns pickup details - the pickup location, date, and time
function Pickup() {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
        <LocationOnIcon style={{ color: "#66BB6A" }} />
        <Typography>
          Pick up location is around{" "}
          <span style={{ fontWeight: "bold", color: "#2196F3" }}>
            {" "}
            Jhocson St., Sampaloc, Manila
          </span>
          .
        </Typography>
      </div>
      <div style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
        <EventAvailableIcon style={{ color: "#FFA726" }} />
        <Typography>
          Pick up date is on{" "}
          <span style={{ fontWeight: "bold" }}> June 06, 2021</span>.
        </Typography>
      </div>
      <div style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
        <ScheduleIcon style={{ color: "#AB47BC" }} />
        <Typography>
          Pick up time is in the afternoon,{" "}
          <span style={{ fontWeight: "bold" }}> between 12pm to 5pm</span>.
        </Typography>
      </div>
    </>
  );
}

export default DonationPreview;
