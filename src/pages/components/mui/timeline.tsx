import { ReactElement } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Paper, Container, Typography } from '@mui/material';
import {
  Masonry,
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineOppositeContent,
} from '@mui/lab';
// routes
import { PATH_PAGE } from '../../../routes/paths';
// layouts
import Layout from '../../../layouts';
// components
import Page from '../../../components/Page';
import Iconify from '../../../components/Iconify';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
// sections
import { Block } from '../../../sections/overview/Block';

// ----------------------------------------------------------------------

type TimelineType = {
  key: number;
  title: string;
  des: string;
  time: string;
  color?: 'primary' | 'info' | 'success' | 'warning' | 'error' | 'inherit' | 'grey' | 'secondary';
  icon: ReactElement;
};

export const TIMELINES: TimelineType[] = [
  {
    key: 1,
    title: 'Martin',
    des: `Hey Lainey, I trust you're well. Given our previous conversations and the trajectory of your company, I wanted to introduce our latest suite of business tools. I truly believe they could be a game-changer for your team. Would you be open to a demonstration next week?`,
    time: '09:30',
    icon: <Iconify icon="material-symbols:person" width={24} height={24} />,
  },
  {
    key: 2,
    title: 'Lainey',
    des: `Hi Martin, always a pleasure. I've heard some buzz about your new tools, and they do sound appealing. But I've had preliminary discussions with my team. They seem quite attached to our current system and tools, and I'm sensing some resistance to change.`,
    time: '10:00',
    color: 'primary',
    icon: <Iconify icon="material-symbols:person-outline" width={24} height={24} />,
  },
  {
    key: 3,
    title: 'Martin',
    des: `I get that, Lainey. Transitioning can have its challenges. However, what if we arranged a session that not only demos the tools but also directly addresses your team's concerns? We can cover integration aspects, potential learning curves, and even have hands-on trials. Would that help?`,
    time: '10:15',
    color: 'secondary',
    icon: <Iconify icon="material-symbols:person" width={24} height={24} />,
  },
  {
    key: 4,
    title: 'Lainey',
    des: ` That's a thoughtful offer, Martin. I've been revisiting our email chain and consolidating some feedback, and the overarching sentiment seems to be that we're in a phase of adjustment with our current setup. Introducing new tools might be a bit premature for us right now.`,
    time: '10:30',
    color: 'info',
    icon: <Iconify icon="material-symbols:person-outline" width={24} height={24} />,
  },
  {
    key: 5,
    title: 'Martin',
    des: `Totally understand, Lainey. Let's keep the lines of communication open. We can revisit this when the timing feels more appropriate for you and your team. And of course, if you have any questions or need more information before then, just reach out.`,
    time: '11:00',
    color: 'success',
    icon: <Iconify icon="material-symbols:person" width={24} height={24} />,
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15),
}));

// ----------------------------------------------------------------------

MUITimeline.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function MUITimeline() {
  const lastItem = TIMELINES[TIMELINES.length - 1].key;

  const reduceTimeLine = TIMELINES.slice(TIMELINES.length - 3);

  return (
    <Page title="Components: Timeline">
      <RootStyle>
        <Box
          sx={{
            pt: 6,
            pb: 1,
            mb: 10,
            bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800'),
          }}
        >
          <Container>
            <HeaderBreadcrumbs
              heading="Timeline"
              links={[{ name: 'Components', href: PATH_PAGE.components }, { name: 'Timeline' }]}
              moreLink="https://mui.com/components/timeline"
            />
          </Container>
        </Box>

        <Container>
          <Masonry columns={{ xs: 1, md: 3 }} spacing={3}>
            <Block title="Default">
              <Timeline>
                {reduceTimeLine.map((item) => (
                  <TimelineItem key={item.key}>
                    <TimelineSeparator>
                      <TimelineDot />
                      {lastItem === item.key ? null : <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>{item.title}</TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Block>

            <Block title="Right">
              <Timeline position="right">
                {reduceTimeLine.map((item) => (
                  <TimelineItem key={item.key}>
                    <TimelineSeparator>
                      <TimelineDot />
                      {lastItem === item.key ? null : <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>{item.title}</TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Block>

            <Block title="Alternating">
              <Timeline position="alternate">
                {reduceTimeLine.map((item) => (
                  <TimelineItem key={item.key}>
                    <TimelineSeparator>
                      <TimelineDot />
                      {lastItem === item.key ? null : <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>{item.title}</TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Block>

            <Block title="Filled">
              <Timeline position="alternate">
                {TIMELINES.map((item) => (
                  <TimelineItem key={item.key}>
                    <TimelineSeparator>
                      <TimelineDot color={item.color} />
                      {lastItem === item.key ? null : <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>{item.title}</TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Block>

            <Block title="Outlined">
              <Timeline position="alternate">
                {TIMELINES.map((item) => (
                  <TimelineItem key={item.key}>
                    <TimelineSeparator>
                      <TimelineDot variant="outlined" color={item.color} />
                      {lastItem === item.key ? null : <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>{item.title}</TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Block>

            <Block title="Opposite content">
              <Timeline position="alternate">
                {TIMELINES.map((item) => (
                  <TimelineItem key={item.key}>
                    <TimelineOppositeContent>
                      <Typography sx={{ color: 'text.secondary' }}>{item.time}</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot color={item.color} />
                      {lastItem === item.key ? null : <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography> {item.title}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Block>
          </Masonry>

          <Block title="Customized">
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
          </Block>
        </Container>
      </RootStyle>
    </Page>
  );
}
