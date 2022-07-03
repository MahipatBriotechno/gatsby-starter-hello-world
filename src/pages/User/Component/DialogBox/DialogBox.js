import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import {
  compose,
  spacing,
  palette,
  styleFunctionSx,
} from "@material-ui/system";
import styled, { ThemeProvider } from "styled-components";
import { makeStyles } from "@material-ui/core";
const styleFunction = styleFunctionSx(compose(spacing, palette));

const Box = styled.div(styleFunction);
const useStyles = makeStyles((theme) => ({
  dialog_root: {
    "& .MuiDialog-paperWidthSm": {
      maxWidth: "100%",
    },
  },
  close: {
    position: "absolute",
    right: "5px",
    top: "5px",
    cursor: "pointer",
  },
}));

const DialogBox = (props) => {
  const classes=useStyles();
  const { open, handleClose, DialogTitle, subTitle, content } = props;
  //   const [open, setOpen] = React.useState(false);

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };
 

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
      disableEscapeKeyDown
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      style={{ maxWidth: "auto" }}
      className={classes.dialog_root}
    >
      <Box sx={{ padding: "16px 24px 5px" }} id="alert-dialog-title">
        <h2 style={{ fontSize: 24, fontWeight: 500, marginBottom: 15 }}>
          {DialogTitle}
        </h2>
        {subTitle && <p>{subTitle}</p>}
        <CloseIcon className={classes.close} onClick={handleClose} />
      </Box>
      </Dialog>
    </div>
  );
};

export default DialogBox;
