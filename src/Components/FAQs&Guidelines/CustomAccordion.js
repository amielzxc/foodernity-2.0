import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function CustomAccordion(props) {
  const classes = useStyles();
  const data = props.guidelines;
  const guidelinesArray = data.map((guideline) => (
    <AccordionItem key={guideline.key} guideline={guideline} />
  ));

  return <div className={classes.root}>{guidelinesArray}</div>;
}

function AccordionItem(props) {
  const classes = useStyles();
  const { summary, description } = props.guideline;
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{summary}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">{description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
