import React from "react";
import { makeStyles, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: "100vh",
  },
}));
// returns a container used to display main contents of the page
function MainContainer(props) {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Toolbar />
      {props.children}
    </main>
  );
}

export default MainContainer;
