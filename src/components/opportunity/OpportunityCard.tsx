import React from 'react';
import { Card, CardContent, Typography, Divider, Checkbox, ListItem, List } from '@mui/material';

function OpportunityCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Opportunity Insights
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <span role="img" aria-label="thumb-up">👍</span> Promising engagement
        </Typography>
        
        <Divider style={{ margin: '16px 0' }} />

        <Typography variant="body1">
          Stage: <strong>Negotiating</strong>
        </Typography>
        <Typography variant="body1">
          Main contact: <strong>Lainey Davidson</strong>
        </Typography>
        <Typography variant="body1">
          Owner: <strong>Monica Parrish</strong>
        </Typography>

        <Divider style={{ margin: '16px 0' }} />

        <Typography variant="body1">
          Next steps: Reach agreement about pricing and test run with limited user base
        </Typography>

        <Divider style={{ margin: '16px 0' }} />

        <Typography variant="body1">
          Amount: <strong>$25,000</strong>
        </Typography>

        <Divider style={{ margin: '16px 0' }} />

        <Typography variant="h6" component="div">
          My action items
        </Typography>
        <List>
          <ListItem>
            <Checkbox checked={true} />
            Set up follow-up call with Jenn
          </ListItem>
          <ListItem>
            <Checkbox checked={false} />
            Touch base with Ron for pricing details
          </ListItem>
          <ListItem>
            <Checkbox checked={false} />
            Email James for pricing clarification
          </ListItem>
        </List>

        <Divider style={{ margin: '16px 0' }} />

        <Typography variant="h6" component="div">
          Notes
        </Typography>
        <Typography variant="body1">
          Client rep is skeptic about AI powered tools – treat with care and focus on product mechanics and customizability
        </Typography>
      </CardContent>
    </Card>
  );
}

export default OpportunityCard;
