import React from "react";
import {
  Slide,
  Button,
  Dialog,
  DialogTitle,
  List,
  DialogContent,
} from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
/*
returns a dialog that is used as a replacement for the left drawer (e.g., filter drawer, steps drawer)
when the website should use responsive layout
 */
function DialogDrawer(props) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="text" color="primary" onClick={handleClickOpen}>
        {props.buttonName}
      </Button>
      <Dialog
        fullWidth
        maxWidth="xs"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle id="filter-dialog">{props.dialogTitle}</DialogTitle>
        <DialogContent>
          <List>{props.children}</List>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DialogDrawer;
