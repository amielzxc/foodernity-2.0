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
    marginTop: theme.spacing(0.6),
  },
  container__messageItem: {
    display: "flex",
    margin: theme.spacing(3.5, 0),
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
      <MessageItem avatar="FB" name="Fhillip Bagsic" />
      <MessageItem avatar="AM" name="Amiel Morilla" />
      <MessageItem avatar="KD" name="Kenneth Dela Cruz" />
      <MessageItem avatar="CP" name="Carl Daniel Patio" />
    </LeftDrawer>
  );
}
export function MessagesDrawerResponsive() {
  return (
    <DialogDrawer buttonName="MESSAGES" dialogTitle="Messages">
      <MessageItem avatar="FB" name="Fhillip Bagsic" />
      <MessageItem avatar="AM" name="Amiel Morilla" />
      <MessageItem avatar="KD" name="Kenneth Dela Cruz" />
      <MessageItem avatar="CP" name="Carl Daniel Patio" />
    </DialogDrawer>
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

function MessageItem(props) {
  const { avatar, name } = props;
  const classes = useStyles();
  return (
    <div className={classes.container__messageItem}>
      <Avatar className={classes.avatar__message}>{avatar}</Avatar>
      <div style={{ width: "10px" }} />
      <div className={classes.container__messageNameDesc}>
        <Typography variant="body1" className={classes.text_bold}>
          {name}
        </Typography>
        <Typography variant="body2">New Message</Typography>
      </div>
    </div>
  );
}
