import LeftDrawer from "../Common/LeftDrawer";
import { Dialog, Grid, makeStyles, Typography } from "@material-ui/core";
import { Icon } from "@iconify/react";
import BookRoundedIcon from "@material-ui/icons/BookRounded";
import faqIcon from "@iconify/icons-wpf/faq";
import DialogDrawer from "../Common/DialogDrawer";

const useStyles = makeStyles((theme) => ({
  drawer__container_responsive: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  text_bold: {
    fontWeight: "bold",
  },
  title__responsive: {
    margin: theme.spacing(0.5, 0),
  },
  title: {
    fontWeight: "bold",
    marginTop: theme.spacing(0.6),
  },
  text__subtitle: {
    margin: theme.spacing(2, 0),
  },
  icon__faq: {
    color: "#2196F3",
    marginRight: theme.spacing(1),
  },
  icon__guidelines: {
    color: "#2196F3",
    marginTop: "-3px",
    marginRight: theme.spacing(0.5),
  },
}));
export function TopicsDrawer() {
  return (
    <LeftDrawer>
      <TitleFaq />
      <Subtitle subtitle="How to upload a donation?" />
      <Subtitle subtitle="How to request for a donation?" />
      <Subtitle subtitle="How can I claim the donation?" />
      <Subtitle subtitle="What items can I post?" />
      <TitleGuidelines />
      <Subtitle subtitle="Donor Guidelines" />
      <Subtitle subtitle="Foodbanks Guidelines" />
      <Subtitle subtitle="Process" />
    </LeftDrawer>
  );
}

export function TopicsDrawerResponsive() {
  const classes = useStyles();
  return (
    <div className={classes.drawer__container_responsive}>
      <TitleResponsive />
      <DialogDrawer buttonName="Browse" dialogTitle="Topics">
        <TitleFaq />
        <Subtitle subtitle="How to upload a donation?" />
        <Subtitle subtitle="How to request for a donation?" />
        <Subtitle subtitle="How can i claim the donation?" />
        <Subtitle subtitle="What items can I post?" />
        <TitleGuidelines />
        <Subtitle subtitle="Donor Guidelines" />
        <Subtitle subtitle="Foodbanks Guidelines" />
        <Subtitle subtitle="Process" />
      </DialogDrawer>
    </div>
  );
}
// returns the title of the left drawer

function TitleFaq() {
  const classes = useStyles();
  return (
    <Grid container direction="row" alignItems="center">
      <Icon icon={faqIcon} width="25px" className={classes.icon__faq} />
      <Title title="Frequently Asked Questions" />
    </Grid>
  );
}

function TitleGuidelines() {
  const classes = useStyles();
  return (
    <Grid container direction="row" alignItems="center">
      <BookRoundedIcon className={classes.icon__guidelines} />
      <Title title="Guidelines" />
    </Grid>
  );
}
function Title(props) {
  const classes = useStyles();

  return (
    <div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h6"
        component="h2"
        color="primary"
      >
        {props.title}
      </Typography>
    </div>
  );
}
// returns the title of the left drawer
function TitleResponsive() {
  const title = "FAQs & Guidelines";
  const classes = useStyles();
  return (
    <div>
      <Typography
        className={`${classes.title__responsive} ${classes.text_bold}`}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {title}
      </Typography>
    </div>
  );
}
function Subtitle(props) {
  const classes = useStyles();

  return (
    <Typography className={classes.text__subtitle}>{props.subtitle}</Typography>
  );
}
