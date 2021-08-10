import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { db } from "../../firebase";
import { messageAppear } from "../Event/Utility";
import { FiPlusCircle } from "react-icons/fi";

const CalendarForm = ({ userID }) => {
  const [scheduleInput, setScheduleInput] = useState("");
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [confirm, setConfirm] = useState(null);

  // adds the inputted schedule (title, start and end time) and updates to Firestore
  const addSchedule = (e) => {
    e.preventDefault();

    console.log("user: " + userID);
    db.collection("users")
      .doc(userID)
      .get()
      .then((result) => {
        const { schedules } = result.exists ? result.data() : { schedules: [] };
        const newSched = {
          scheduleTitle: scheduleInput,
          scheduleStart: startTime,
          scheduleEnd: endTime,
        };
        const newArray = [...schedules, newSched];
        db.collection("users")
          .doc(userID)
          .set({ schedules: newArray }, { merge: true });
      });
    messageAppear(setConfirm, "Successfully Saved");
  };

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const reload = () => {
    handleClose();
    window.location.reload(false);
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <div>
        {confirm && (
          <div className="messageDiv">
            <p className="message">{confirm}</p>
          </div>
        )}
      </div>
      <FiPlusCircle
        size="50"
        onClick={handleClickOpen}
        style={{ float: "right", marginTop: "15px" }}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Your Schedule</DialogTitle>
        <DialogContent>
          <DialogContentText>Fill me out!</DialogContentText>
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField
                required
                id="standard-required"
                label="Schedule Title"
                value={scheduleInput}
                onChange={(e) => setScheduleInput(e.target.value)}
              />

              <TextField
                required
                id="datetime-local"
                label="Start Date"
                type="datetime-local"
                defaultValue={new Date()}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setStartTime(e.target.value)}
              />
              <TextField
                required
                id="datetime-local"
                label="End Date"
                type="datetime-local"
                defaultValue={new Date()}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addSchedule} color="primary" type="submit">
            Save
          </Button>
          <Button onClick={reload} color="primary" type="submit">
            Add to calendar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CalendarForm;
