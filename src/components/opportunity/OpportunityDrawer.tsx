import { AnimatePresence, m } from 'framer-motion';
import { useState, useEffect } from 'react';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Stack, Divider, Backdrop, Typography, IconButton, Button, Grid, Paper,Card } from '@mui/material';
import { NAVBAR } from 'src/config';
import cssStyles from 'src/utils/cssStyles';
import Iconify from '../Iconify';
import Scrollbar from '../Scrollbar';
import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
import { TIMELINES } from 'src/pages/components/mui/timeline';
import OpportunityCard from './OpportunityCard';
import { OpportunityTimeline } from './OpportunityTimeline';

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  ...cssStyles(theme).bgBlur({ color: theme.palette.background.paper, opacity: 0.92 }),
  top: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  position: 'fixed',
  overflow: 'hidden',
//   width: NAVBAR.BASE_WIDTH,
  width: '70vw',
  flexDirection: 'column',
  margin: theme.spacing(2),
  marginTop: '100px',
  paddingBottom: theme.spacing(3),
  zIndex: theme.zIndex.drawer + 3,
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  boxShadow: `-24px 12px 32px -4px ${alpha(
    theme.palette.mode === 'light' ? theme.palette.grey[500] : theme.palette.common.black,
    0.16
  )}`,
}));

// ----------------------------------------------------------------------

export default function OpportunityDrawer({open, setOpen}: {open: boolean, setOpen: (open: boolean) => void}) {
  // const [open, setOpen] = useState(openDef);
  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  

  return (
    <>
      <Backdrop
        open={open}
        onClick={handleClose}
        sx={{ background: 'transparent', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      />

      {/* {!open && <Button onClick={handleToggle} >Drawer Button</Button>} */}

      <AnimatePresence>
        {open && (
          <>
            <RootStyle>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ py: 2, pr: 1, pl: 2.5 }}
              >
                <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
                  Opportunity Details
                </Typography>

                <IconButton>
                  <Iconify icon={'ic:round-refresh'} width={20} height={20} />
                </IconButton>

                <IconButton onClick={handleClose}>
                  <Iconify icon={'eva:close-fill'} width={20} height={20} />
                </IconButton>
              </Stack>

              <Divider sx={{ borderStyle: 'dashed' }} />

              <Scrollbar sx={{ flexGrow: 1 }}>
                <Stack spacing={3} sx={{ p: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item sm={8}>
                          <OpportunityTimeline />
                        </Grid>
                        <Grid item sm={4} >
                          <OpportunityCard />
                        </Grid>
                    </Grid>
                </Stack>
              </Scrollbar>
            </RootStyle>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
