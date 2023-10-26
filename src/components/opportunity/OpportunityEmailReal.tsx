import React from 'react';
import { Typography, Container, Link } from '@mui/material';

function OpportunityEmail() {
  return (
    <Container>
      <Typography variant="body1">Hi Jim,</Typography>
      <br />
      <Typography variant="body1">
        I’m the <Link href="#" color="inherit">general manager</Link> of a nationwide hospitality chain. Lorem ipsum dolor sit amet consectetur adipiscing enim ad. Lorem ipsum dolor sit amet cons
      </Typography>
      <br />
      <Typography variant="body1">
        Are you available for <Link href="#" color="inherit">demo</Link> on December 12, 2021 at 10:15 AM?
      </Typography>
      <br />
      <Typography variant="body1">
        Kind regards,
      </Typography>
      <Typography variant="body1">
        <Link href="#" color="inherit">Jimmy @ Glasshouse</Link>
      </Typography>
    </Container>
  );
}

export default OpportunityEmail;