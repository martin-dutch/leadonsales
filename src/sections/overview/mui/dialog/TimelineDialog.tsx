import { useState } from 'react';
// @mui
import {
  Button,
  Dialog,
  TextField,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Paper,
  Typography,
  Box
} from '@mui/material';
import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
import { TIMELINES } from 'src/pages/components/mui/timeline';
import FeedbackDialog from './FeedbackDialog';

// ----------------------------------------------------------------------

export default function TranscriptDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Box display={'flex'}>
        <Button variant="contained" color="warning" onClick={handleClickOpen} sx={{marginY: 1}}>
            Open Snippet
        </Button>
        <Box sx={{marginX: 1}}/>
        <Box sx={{marginTop: 1}}>
        <FeedbackDialog />
        </Box>
        
        </Box>
      

      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Add Field</DialogTitle>
        <DialogContent>
        <Timeline position="alternate">
              {TIMELINES.map((item) => (
                <TimelineItem key={item.key}>
                  <TimelineOppositeContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.time}
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color={item.color}>{item.icon}</TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper
                      sx={{
                        p: 3,
                        bgcolor: 'grey.50012',
                      }}
                    >
                      <Typography variant="subtitle2">{item.title}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {item.des}
                      </Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleClose} variant="contained">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
