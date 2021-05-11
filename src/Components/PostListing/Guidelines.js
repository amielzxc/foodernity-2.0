import React, { useState } from "react";
import {
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
  root: {
    width: "100%",
    alignSelf: "center",
  },
  text_bold: {
    fontWeight: "bold",
  },
  container__description: {
    margin: "10px 0px 20px 0px",
  },
});

const guidelines = [
  {
    label: "Guidelines 1",
    description: "Guidelines 1 desc",
  },
  {
    label: "Guidelines 2",
    description: "Guidelines 2 desc",
  },
  {
    label: "Guidelines 3",
    description: "Guidelines 3 desc",
  },
];
// returns the guidelines when donating
function Guidelines() {
  const classes = useStyles();
  const [isChecked, setIsChecked] = useState([false, false, false]);

  const guidelinesArray = guidelines.map((guideline) => (
    <AccordionItem key={guideline.label} guideline={guideline} />
  ));
  return (
    <div className={classes.root}>
      <Typography variant="h5" component="h3" className={classes.text_bold}>
        Guidelines for Donating
      </Typography>
      <div className={classes.container__description}>
        <Typography variant="body1" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam quis non
          euismod faucibus a eu cum pharetra elementum. Congue placerat vitae
          ultrices quis elit aliquam. Gravida a etiam sed aliquam mauris.
        </Typography>
      </div>
      {guidelinesArray}
    </div>
  );
}
function AccordionItem(props) {
  console.log(props.guideline.label);
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-label="Expand"
        id="guidelinesHeader"
      >
        <FormControlLabel
          aria-label="Acknowledge"
          onClick={(event) => event.stopPropagation()}
          onFocus={(event) => event.stopPropagation()}
          control={<Checkbox color="primary" />}
          label={props.guideline.label}
        />
      </AccordionSummary>
      <AccordionDetails>
        <Typography color="textSecondary">
          {props.guideline.description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Guidelines;
