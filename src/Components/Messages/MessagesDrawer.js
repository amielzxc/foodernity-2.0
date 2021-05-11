import LeftDrawer from "../Common/LeftDrawer";
import { Avatar, Divider, Typography, makeStyles } from "@material-ui/core";
import DialogDrawer from "../Common/DialogDrawer";

const useStyles = makeStyles((theme) => ({
  divider_margin: {
    margin: theme.spacing(2.5, 0),
  },
  text_bold: {
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    marginTop: "5px",
  },
  container__messageItem: {
    display: "flex",
    margin: "20px 0",
    alignItems: "center",
  },
  avatar__message: {
    width: "50px",
    height: "50px",
  },
  container__messageNameDesc: {
    display: "flex",
    flexDirection: "column",
  },
}));
export function MessagesDrawer() {
  const classes = useStyles();
  return (
    <LeftDrawer>
      <Title />
      <Divider className={classes.divider_margin} />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
    </LeftDrawer>
  );
}
export function MessagesDrawerResponsive() {
  return (
    <DialogDrawer buttonName="MESSAGES" dialogTitle="Messages"></DialogDrawer>
  );
}
// returns the title of the left drawer
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
        Messages
      </Typography>
    </div>
  );
}

function MessageItem() {
  const classes = useStyles();
  return (
    <div className={classes.container__messageItem}>
      <Avatar className={classes.avatar__message}>FB</Avatar>
      <div style={{ width: "10px" }} />
      <div className={classes.container__messageNameDesc}>
        <Typography variant="body1" className={classes.text_bold}>
          Fhillip Bagsic
        </Typography>
        <Typography variant="body2">New Message</Typography>
      </div>
    </div>
  );
}
