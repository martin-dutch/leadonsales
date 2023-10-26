import { useState } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Box, Rating, LinearProgress, IconButton, Button, Popover, FormControlLabel, Checkbox, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridSelectionModel,
  getGridNumericOperators,
  GridFilterInputValueProps,
} from '@mui/x-data-grid';
// utils
import createAvatar from '../../../../utils/createAvatar';
import { fPercent } from '../../../../utils/formatNumber';
// _mock_
import { _dataGrid } from '../../../../_mock';
// components
import Label from '../../../../components/Label';
import Avatar from '../../../../components/Avatar';
import Iconify from '../../../../components/Iconify';
import { Block } from '../../Block';
import style from '../../extra/map/zoom-to-bounds/map-style';
import OpportunityDrawer from 'src/components/opportunity/OpportunityDrawer';
import { formatToPound } from '../../extra/map/geojson/utils';

// ----------------------------------------------------------------------

const columns: GridColDef[] = [
  // OPTIONS
  // https://material-ui.com/api/data-grid/grid-col-def/#main-content
  // - hide: false (default)
  // - editable: false (default)
  // - filterable: true (default)
  // - sortable: true (default)
  // - disableColumnMenu: false (default)

  // FIELD TYPES
  // --------------------
  // 'string' (default)
  // 'number'
  // 'date'
  // 'dateTime'
  // 'boolean'
  // 'singleSelect'

  {
    field: 'id',
    hide: true,
  },
  {
    field: 'avatar',
    headerName: 'Avatar',
    align: 'center',
    headerAlign: 'center',
    width: 64,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: (params) => {
      const getAvatar = params.row.name;

      return (
        <Avatar color={createAvatar(getAvatar).color} sx={{ width: 36, height: 36 }}>
          {createAvatar(getAvatar).name}
        </Avatar>
      );
    },
  },
  {
    field: 'status',
    type: 'singleSelect',
    headerName: 'Stage',
    valueOptions: ['online', 'away', 'busy'],
    align: 'center',
    headerAlign: 'center',
    width: 120,
    renderCell: (params) => RenderStatus(params.row.status),
  },
  {
    field: 'age',
    headerName: 'Amount',
    width: 100,
    editable: true,
    renderCell: (params) => {
      const getEmail = params.row.age;
      return (
        <Typography variant="body2" sx={{ textDecoration: 'underline' }} noWrap>
          {formatToPound(getEmail)}
        </Typography>
      );
    },
  },
  {
    field: 'metrics',
    // type: 'dateTime',
    headerName: 'Metrics',
    align: 'center',
    headerAlign: 'center',
    width: 200,
    renderCell: (params) => RenderMetrics({metrics: params.row.metrics}),
  },
  {
    field: 'economic_buyer',
    type: 'singleSelect',
    headerName: 'Economic Buyer',
    valueOptions: ['online', 'away', 'busy'],
    align: 'center',
    headerAlign: 'center',
    width: 140,
    renderCell: (params) => (<Typography variant='body2'>{'CFO'}</Typography>),
  },
  {
    field: 'decision_criteria',
    // type: 'dateTime',
    headerName: 'Decision Criteria',
    align: 'center',
    headerAlign: 'center',
    width: 150,
    renderCell: (params) => RenderDecisionCriteria({criteria: params.row.criteria}),
  },
  {
    field: 'process',
    // type: 'dateTime',
    headerName: 'Process',
    align: 'center',
    headerAlign: 'center',
    width: 130,
    renderCell: (params) => RenderConcern({concerns: params.row.process}),
  },
  {
    field: 'concern',
    // type: 'dateTime',
    headerName: 'Identified Pain',
    align: 'center',
    headerAlign: 'center',
    width: 130,
    renderCell: (params) => RenderConcern({concerns: params.row.concerns}),
  },
  {
    field: 'competition',
    // type: 'dateTime',
    headerName: 'Competition',
    align: 'center',
    headerAlign: 'center',
    width: 100,
    renderCell: (params) => RenderCompetition({competitors: [params.row.competition]}),
  },
  {
    field: 'name',
    headerName: 'Champion',
    type: 'string',
    width: 150,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'next_steps',
    // type: 'dateTime',
    headerName: 'Next Step',
    align: 'center',
    headerAlign: 'center',
    width: 130,
    renderCell: (params) => RenderNextSteps({items: params.row.next_steps}),
  },
  // {
  //   field: 'performance',
  //   type: 'number',
  //   headerName: 'Performance',
  //   align: 'center',
  //   headerAlign: 'center',
  //   width: 160,
  //   renderCell: (params) => {
  //     const value = params.row.performance;

  //     return (
  //       <Stack spacing={1} direction="row" alignItems="center" sx={{ px: 1, width: 1, height: 1 }}>
  //         <LinearProgress
  //           value={value}
  //           variant="determinate"
  //           color={(value < 30 && 'error') || (value > 30 && value < 70 && 'warning') || 'primary'}
  //           sx={{ width: 1, height: 6 }}
  //         />
  //         <Typography variant="caption" sx={{ width: 80 }}>
  //           {fPercent(value)}
  //         </Typography>
  //       </Stack>
  //     );
  //   },
  // },
  {
    field: 'empty',
    headerName: ' ',
    align: 'center',
    flex: 1,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: (params) => (
        <Box>
          {' '}
        </Box>
      ),
  },
  {
    field: 'action',
    headerName: ' ',
    align: 'center',
    width: 80,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: (params) => {
      const selectedID = params.row.id;

      const handleClick = () => {
        console.log('selectedID', selectedID);
      };

      return (
        <IconButton onClick={handleClick}>
          <Iconify icon={'eva:more-vertical-fill'} sx={{ width: 20, height: 20 }} />
        </IconButton>
      );
    },
  },
];

// ----------------------------------------------------------------------

export default function DataGridCustom() {
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);

  if (columns.length > 0) {
    const ratingColumn = columns.find((column) => column.field === 'rating')!;
    const ratingColIndex = columns.findIndex((col) => col.field === 'rating');

    const ratingFilterOperators = getGridNumericOperators().map((operator) => ({
      ...operator,
      InputComponent: RatingInputValue,
    }));
    columns[ratingColIndex] = {
      ...ratingColumn,
      filterOperators: ratingFilterOperators,
    };
  }

  const selected = _dataGrid.filter((row) => selectionModel.includes(row.id));

  console.log('selected', selected);

  console.log('selectionModel',selectionModel)


  return (
    <>
    <OpportunityDrawer open={selected.length > 0} setOpen={(newOpen) => {if(newOpen){} else {setSelectionModel([])} }} />
      <DataGrid
        checkboxSelection
        disableSelectionOnClick
        rows={_dataGrid}
        columns={columns}
        pagination
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
        }}
        selectionModel={selectionModel}
        // components={{
        //   Toolbar: GridToolbar,
        // }}
      />
      
    </>
  );
}

// ----------------------------------------------------------------------

type Status = '1.Prospect' | '2.Qualified' | '3.Engaged' | '4.Negotiating' | '5.Closed' | '6.Lost';
type Color = 'primary' | 'secondary' | 'warning' | 'error' | 'info' | 'success';

function statusToColor(status: Status): Color {
    switch (status) {
        case '1.Prospect':
            return 'primary';
        case '2.Qualified':
            return 'info';
        case '3.Engaged':
            return 'secondary';
        case '4.Negotiating':
            return 'warning';
        case '5.Closed':
            return 'success';
        case '6.Lost':
            return 'error';
        default:
            throw new Error('Invalid status provided');
    }
}

function RenderStatus(getStatus: string) {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  
  return (
    <Label
      variant={isLight ? 'ghost' : 'filled'}
      color={statusToColor(getStatus as Status)}
      sx={{ textTransform: 'capitalize', mx: 'auto' }}
    >
      {getStatus}
    </Label>
  );
}

// ----------------------------------------------------------------------

function RatingInputValue({ item, applyValue }: GridFilterInputValueProps) {
  return (
    <Box sx={{ p: 1, height: 1, alignItems: 'flex-end', display: 'flex' }}>
      <Rating
        size="small"
        precision={0.5}
        placeholder="Filter value"
        value={Number(item)}
        onChange={(event, newValue) => {
          applyValue({ ...item, value: newValue });
        }}
      />
    </Box>
  );
}

const popoverStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

function RenderNextSteps({items}: {items: string[]}) { 
  const [click, setCLick] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCLick(event.currentTarget);
  };

  const handleClose = () => {
    setCLick(null);
  };

  return (<Box>
              <Button variant="outlined" onClick={handleClick}>
                {`${items.length} items`}
              </Button>
              <Popover
                open={Boolean(click)}
                anchorEl={click}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Box sx={{ p: 2, maxWidth: 280 }}>
                  {
                    items.map((item, index) => (<FormControlLabel key={index} label={item} control={<Checkbox />} />))
                  }
                </Box>
              </Popover>
            </Box>)
}

function RenderCompetition({competitors}: {competitors: string[]}) { 
  const [click, setCLick] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCLick(event.currentTarget);
  };

  const handleClose = () => {
    setCLick(null);
  };

  return (<Box>
              <Typography variant="body2" onClick={handleClick}>
                {competitors.map((competitor, index) => (<Typography key={index} variant="body2">{competitor + (competitors.length !== index + 1 ? ',' : '')}</Typography>))}
              </Typography>
              <Popover
                open={Boolean(click)}
                anchorEl={click}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Box sx={{ p: 2, maxWidth: 280 }}>
                  {
                    competitors.map((competitor, index) => (<Typography key={index} variant="body2">{competitor}</Typography>))
                  }
                </Box>
              </Popover>
            </Box>)
}

function RenderMetrics({metrics}: {metrics: string[]}) { 
  const [click, setCLick] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCLick(event.currentTarget);
  };

  const handleClose = () => {
    setCLick(null);
  };

  return (<Box>
              <Typography variant="body2" onClick={handleClick}>
                {metrics.map((competitor, index) => (<Typography key={index} variant="body2">{competitor + (metrics.length !== index + 1 ? ',' : '')}</Typography>))}
              </Typography>
              <Popover
                open={Boolean(click)}
                anchorEl={click}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Box sx={{ p: 2, maxWidth: 280 }}>
                  {
                    metrics.map((competitor, index) => (<Typography key={index} variant="body2">{competitor}</Typography>))
                  }
                </Box>
              </Popover>
            </Box>)
}

function RenderDecisionCriteria({criteria}: {criteria: string[]}) { 
  const [click, setCLick] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCLick(event.currentTarget);
  };

  const handleClose = () => {
    setCLick(null);
  };

  return (<Box>
              <Typography variant="body2" onClick={handleClick}>
                {criteria.map((competitor, index) => (<Typography key={index} variant="body2">{competitor + (criteria.length !== index + 1 ? ',' : '')}</Typography>))}
              </Typography>
              <Popover
                open={Boolean(click)}
                anchorEl={click}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Box sx={{ p: 2, maxWidth: 280 }}>
                  {
                    criteria.map((competitor, index) => (<Typography key={index} variant="body2">{competitor}</Typography>))
                  }
                </Box>
              </Popover>
            </Box>)
}

function RenderConcern({concerns}: {concerns: {title: string; quote: string}[]}) { 
  const [click, setCLick] = useState<HTMLButtonElement | null>(null);
  const [controlled, setControlled] = useState<string | false>(false);
  const handleChangeControlled =
  (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setControlled(isExpanded ? panel : false);
  };


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCLick(event.currentTarget);
  };

  const handleClose = () => {
    setCLick(null);
  };

  return (<Box>
              <Button variant="outlined" onClick={handleClick}>
                {`${concerns.length} items`}
              </Button>
              <Popover
                open={Boolean(click)}
                anchorEl={click}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Box sx={{ p: 4 }}>
                {concerns.map((item, index) => (
                <Accordion
                  key={index}
                  disabled={index === 3}
                  expanded={controlled === item.title}
                  onChange={handleChangeControlled(item.title)}
                >
                  <AccordionSummary
                    expandIcon={
                      <Iconify icon={'eva:arrow-ios-downward-fill'} width={20} height={20} />
                    }
                  >
                    <Typography variant="subtitle1" sx={{ width: '33%', flexShrink: 0 }}>
                      {item.title}
                    </Typography>
                    {/* <Typography sx={{ color: 'text.secondary' }}>{item.subHeading}</Typography> */}
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{'Quote: ' + item.quote}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
                </Box>
              </Popover>
            </Box>)
}

