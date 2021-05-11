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

const useStyles = makeStyles((theme) => ({}));

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

  const theme = useTheme();
  const responsiveLayout = useMediaQuery(theme.breakpoints.down("sm"));
  const responsiveLayout2 = useMediaQuery(theme.breakpoints.down("md"));
  return (
    //<div style={{ height: "100vh", width: "100%" }}>
    <MainContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        {responsiveLayout ? <MessagesDrawerResponsive /> : null}
        {responsiveLayout2 ? <RequestDrawerResponsive /> : null}
      </div>
      <ReceiverMessage message={receivermessage1} />
      <ReceiverMessage message={receivermessage2} />
      <SenderMessage message={sendermessage1} />
      <SenderMessage message={sendermessage2} />
      <ReceiverMessage message={receivermessage3} />
      <SenderMessage message={sendermessage3} />
      <ReceiverMessage message={receivermessage4} />
      <ReceiverMessage message={receivermessage5} />
      <SenderMessage message={sendermessage4} />
      <ReceiverMessage message={receivermessage6} />
      <MessageInput />
    </MainContainer>
    //</div>
  );
}
function ReceiverMessage(props) {
  return (
    <Grid container justify="flex-start">
      <div
        style={{
          maxWidth: "400px",
          backgroundColor: "white",
          padding: "10px",
          margin: "1px",
          borderRadius: "10px 2px 10px 10px",
        }}
      >
        <p style={{ margin: "0", color: "black" }}>{props.message}</p>
      </div>
    </Grid>
  );
}
function SenderMessage(props) {
  return (
    <Grid container justify="flex-end">
      <div
        style={{
          maxWidth: "400px",
          backgroundColor: "#42A5F5",
          padding: "10px",
          margin: "1px",
          borderRadius: "2px 10px 10px 10px",
        }}
      >
        <p style={{ margin: "0", color: "white" }}>{props.message}</p>
      </div>
    </Grid>
  );
}

function MessageInput() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <TextField label="Send message..." variant="outlined" fullWidth />
      <IconButton>
        <SendIcon />
      </IconButton>
    </div>
  );
}

export default MessageContainer;
