import {  Button, Typography, Container, TextField } from '@mui/material';
import React from 'react';
import TranscriptDialog from 'src/sections/overview/mui/dialog/TimelineDialog';

function OpportunityCall() {
  return (
    <Container>
      <Typography variant="h6">Introd through BK's network - Jimmy @ Glasshouse</Typography>
      <Typography variant="body1">Missy said in email chain they may not be ready for new tools</Typography>
      <TranscriptDialog />
      <Typography variant="h6">Tech Stack:</Typography>
      <Typography variant="body1">CRM: SF</Typography>
      <Typography variant="body1">Recording: Gong</Typography>
      
      <Typography variant="h6">Can you run me through how you are enabling your reps today?</Typography>
      <Typography variant="body1">How many reps do you have? 12 SDRs % 12 AEs.. majority outbound focus.. 4 partner sales.. 5 solutions engineers.. clinical team 7 folks</Typography>
      <TranscriptDialog />
      <Typography variant="body1">Missy enables the AE team.. She has a gal that is dedicated to SDRs.. laid off people over the summer</Typography>
      
      <Typography variant="h6">How many calls a week do they have? How long is a call?</Typography>
      <Typography variant="h6">How many fields are they having to update per deal in your Salesforce?</Typography>
      <TranscriptDialog />
      <Typography variant="body1">Rolled out Meddic as our Sales qualifier last quarter... Thought it could be great for picking up those fields (reps have to use multiple sources to reference info)</Typography>
    </Container>
  );
}

export default OpportunityCall;
