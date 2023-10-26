import { useState } from 'react';
// @mui
import {
  Button,
  Dialog,
  TextField,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText
} from '@mui/material';

// ----------------------------------------------------------------------

export default function FeedbackDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="warning" onClick={handleClickOpen}>
      Feedback
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Share feedback</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Share feeedback on this snippet and let your rep know what you think
          </DialogContentText>
          <TextField
            autoFocus
            fullWidth
            multiline
            rows={4}
            margin="dense"
            variant="outlined"
            label="Feedback"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleClose} variant="contained">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
