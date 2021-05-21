import React from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
    //position: 'absolute',
    backgroundSize: "cover",
    backgroundAttachment: "scroll",
  },
  icon__location: {
    color: "#E35141",
    marginLeft: "-6px",
    marginRight: "3px",
    width: "18px",
  },
});
// returns a listing card
function ListingItem(props) {
  const classes = useStyles();
  const { listingImage, listingName, distance, postTime } = props;
  return (
    <Grid item xs={6} sm={4} md={4} lg={3} xl={2}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={listingImage}
            title={listingName}
          />
          <CardContent>
            <Typography variant="h6" component="h4" noWrap>
              {listingName}
            </Typography>
            <Grid container alignItems="center">
              <LocationOnIcon
                fontSize="small"
                className={classes.icon__location}
              />
              <Typography
                variant="body1"
                color="textSecondary"
                component="p"
                noWrap
              >
                {distance}
              </Typography>
            </Grid>
            <Typography variant="body2" color="textSecondary" component="p">
              Posted {postTime}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
export default ListingItem;
