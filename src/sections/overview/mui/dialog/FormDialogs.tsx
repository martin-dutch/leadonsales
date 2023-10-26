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

export default function FormDialogs() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="warning" onClick={handleClickOpen}>
        Add Field
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Field</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add a field to the table, our AI + human in the loop will extract it with 100% certainty
          </DialogContentText>
          <TextField
            autoFocus
            fullWidth
            type="email"
            margin="dense"
            variant="outlined"
            label="Field Name"
          />
          <TextField
            autoFocus
            fullWidth
            multiline
            rows={4}
            margin="dense"
            variant="outlined"
            label="Field Description"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleClose} variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
