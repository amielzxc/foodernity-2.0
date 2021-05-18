import {
  IconButton,
  TextField,
  useMediaQuery,
  useTheme,
  makeStyles,
  Grid,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import MainContainer from "../Common/MainContainer";
import { MessagesDrawerResponsive } from "./MessagesDrawer";
import { RequestDrawerResponsive } from "./RequestDrawer";

const useStyles = makeStyles((theme) => ({
  container__responsive: {
    display: "flex",
    justifyContent: "space-between",
  },
  container__sender: {
    maxWidth: "400px",
    backgroundColor: "#42A5F5",
    padding: "10px",
    margin: "1px",
    borderRadius: "2px 10px 10px 10px",
  },
  text__sender: {
    margin: "0",
    color: "white",
  },
  container__receiver: {
    maxWidth: "400px",
    backgroundColor: "white",
    padding: "10px",
    margin: "1px",
    borderRadius: "10px 2px 10px 10px",
  },
  text__receiver: {
    margin: "0",
    color: "black",
  },
}));

function MessageContainer() {
  const receivermessage1 = "Hello!";
  const receivermessage2 = "Ano oras pwede makuha yung pagkain?";
  const sendermessage1 = "Hi";
  const sendermessage2 = "Mga 10 ganon";
  const receivermessage3 = "Ok thanks, yung address ba malapit sa mineski?";
  const sendermessage3 = "oo";
  const receivermessage4 = "ahhhhh";
  const receivermessage5 = "Siguro nandyan na ko mga 4:30pm";
  const sendermessage4 =
    "Sige. I-text mo nalang ako 09123456789 number ko globe yan";
  const receivermessage6 = "Ok salamat";

  const classes = useStyles();
  const theme = useTheme();
  const responsiveLayout = useMediaQuery(theme.breakpoints.down("sm"));
  const responsiveLayout2 = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <MainContainer>
      <div className={classes.container__responsive}>
        {responsiveLayout ? <MessagesDrawerResponsive /> : null}
        {responsiveLayout2 ? <RequestDrawerResponsive /> : null}
      </div>
      <div
        style={{
          height: "82%",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        <ReceiverMessage message={receivermessage6} />
        <ReceiverMessage message={receivermessage5} />
        <SenderMessage message={sendermessage4} />
        <SenderMessage message={sendermessage3} />
        <ReceiverMessage message={receivermessage4} />
        <SenderMessage message={sendermessage2} />
        <ReceiverMessage message={receivermessage3} />
        <ReceiverMessage message={receivermessage2} />
        <SenderMessage message={sendermessage1} />
        <ReceiverMessage message={receivermessage1} />
        <ReceiverMessage message={receivermessage6} />
        <ReceiverMessage message={receivermessage5} />
        <SenderMessage message={sendermessage4} />
        <SenderMessage message={sendermessage3} />
        <ReceiverMessage message={receivermessage4} />
        <SenderMessage message={sendermessage2} />
        <ReceiverMessage message={receivermessage3} />
        <ReceiverMessage message={receivermessage2} />
        <SenderMessage message={sendermessage1} />
        <ReceiverMessage message={receivermessage1} />
      </div>
      <div style={{ height: "8%", marginTop: "15px" }}>
        <MessageInput />
      </div>
    </MainContainer>
  );
}

function ReceiverMessage(props) {
  const classes = useStyles();
  return (
    <Grid container justify="flex-start">
      <div className={classes.container__receiver}>
        <p className={classes.text__receiver}>{props.message}</p>
      </div>
    </Grid>
  );
}
function SenderMessage(props) {
  const classes = useStyles();
  return (
    <Grid container justify="flex-end">
      <div className={classes.container__sender}>
        <p className={classes.text__sender}>{props.message}</p>
      </div>
    </Grid>
  );
}

function MessageInput() {
  return (
    <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
      <TextField label="Send message..." variant="outlined" fullWidth />
      <IconButton>
        <SendIcon color="primary" />
      </IconButton>
    </div>
  );
}

export default MessageContainer;
