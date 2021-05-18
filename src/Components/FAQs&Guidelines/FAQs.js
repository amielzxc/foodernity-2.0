import React from "react";
import { Helmet } from "react-helmet";
import StyledAppBar from "../Common/StyledAppBar";
import {
  useMediaQuery,
  makeStyles,
  useTheme,
  CssBaseline,
} from "@material-ui/core";
import { TopicsDrawer } from "./TopicsDrawer";
import FAQsContainer from "./FAQsContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));
// the container for the whole page
function FAQs() {
  const classes = useStyles();
  const theme = useTheme();
  //  used to determine whether the page should use components intended for responsive layout
  const responsiveLayout = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Helmet>
        <title>FAQs &amp; Guidelines | Foodernity</title>
      </Helmet>
      <div className={classes.root}>
        <CssBaseline />
        <StyledAppBar />
        {/* displays whether the left drawer should be displayed or not depending on the variable */}
        {responsiveLayout ? null : <TopicsDrawer />}
        <FAQsContainer />
      </div>
    </>
  );
}

export default FAQs;
