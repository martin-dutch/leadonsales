import React, { useState } from 'react';
import {
  Card, CardContent, Typography, Divider, ListItem, List,
  CardHeader, ListItemIcon, ListItemText, Accordion, AccordionSummary,
  AccordionDetails,
  IconButton, Button, Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WatchIcon from '@mui/icons-material/WatchLater';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import OpportunityCall from './OpportunityEmail';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import OpportunityEmail from './OpportunityEmailReal';

export function OpportunityTimeline() {
  // State to manage accordion expansion
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : null);
  };

  return (
    <Card>
      <CardHeader title="$25k Bill Pay Sell" />
      <Box sx={{marginY: 2}} />
      <Divider />
      <CardContent>

        <Typography variant="subtitle1">Upcoming</Typography>
        <Box sx={{marginY: 2}} />
        <Accordion expanded={expanded === 'billPay'} onChange={handleChange('billPay')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <ListItemIcon>
            <VideoCameraFrontIcon />
            </ListItemIcon>
            <ListItemText primary="Bill Pay walkthrough w/ Jenn" secondary="Tomorrow - 1:00 pm – 2:00 pm" />
          </AccordionSummary>
        </Accordion>
        <Box sx={{marginY: 2}} />
        <Typography variant="subtitle1">This week</Typography>
        <Box sx={{marginY: 2}} />
        <Accordion expanded={expanded === 'platformOverview'} onChange={handleChange('platformOverview')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <ListItemIcon>
              <VideoCameraFrontIcon />
            </ListItemIcon>
            <ListItemText primary="Demo w/ James, 2 days ago - 4:02 pm – 4:31 pm" secondary="Casual chat about team setup and current pain points with product" />
            <ListItemIcon>
              <Button variant='outlined'>
                <Typography variant="body2" sx={{marginX: 2}}>Transcript</Typography>
                <TextSnippetIcon />
              </Button>
              <Button variant='outlined' sx={{marginX: 2}}>
                <Typography variant="body2" sx={{marginX: 2}}>Watch</Typography>
                <OndemandVideoIcon />
              </Button>
            </ListItemIcon>
          </AccordionSummary>
          <AccordionDetails>
            <OpportunityCall />
          </AccordionDetails>
        </Accordion>
        <Box sx={{marginY: 2}} />
        <Accordion expanded={expanded === 'availabilityDemo'} onChange={handleChange('availabilityDemo')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Availability for demo call, 5 days ago - 4:02 pm – 4:31 pm" secondary="Jimmy asked about the availability for a call on the second" />
          </AccordionSummary>
          <AccordionDetails>
            <OpportunityEmail />
          </AccordionDetails>
        </Accordion>
        <Box sx={{marginY: 2}} />
        <Typography variant="subtitle1">September 2023</Typography>
        <Box sx={{marginY: 2}} />
        <Accordion expanded={expanded === 'introJames'} onChange={handleChange('introJames')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Intro w/ James, 1 week ago - 4:02 pm – 4:31 pm" secondary="" />
          </AccordionSummary>
          <AccordionDetails>
            <OpportunityEmail />
          </AccordionDetails>
        </Accordion>
        <Box sx={{marginY: 2}} />
        <Accordion expanded={expanded === 'techStack'} onChange={handleChange('techStack')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <ListItemIcon>
              <VideoCameraFrontIcon />
            </ListItemIcon>
            <ListItemText primary="Platform overview w/ James, 2 days ago - 4:02 pm – 4:31 pm" secondary="Casual chat about team setup and current pain points with product" />
            <ListItemIcon>
              <Button variant='outlined'>
                <Typography variant="body2" sx={{marginX: 2}}>Transcript</Typography>
                <TextSnippetIcon />
              </Button>
              <Button variant='outlined' sx={{marginX: 2}}>
                <Typography variant="body2" sx={{marginX: 2}}>Watch</Typography>
                <OndemandVideoIcon />
              </Button>
            </ListItemIcon>
          </AccordionSummary>
          <AccordionDetails>
            <OpportunityCall />
          </AccordionDetails>
        </Accordion>
        <Box sx={{marginY: 2}} />
        <Accordion expanded={expanded === 'placeholderEmail'} onChange={handleChange('placeholderEmail')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Placeholder for email title, 2 weeks ago - 4:02 pm – 4:31 pm" secondary="" />
          </AccordionSummary>
          <AccordionDetails>
            <OpportunityEmail />
          </AccordionDetails>
        </Accordion>

      </CardContent>
    </Card>
  );
}

export default OpportunityTimeline;
