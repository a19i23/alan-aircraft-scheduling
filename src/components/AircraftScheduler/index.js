import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ColumnContent from './ColumnContent';
import { Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const AircraftScheduler = () => {
  const date = new Date();
  date.setDate(date.getDate() + 1);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} padding="5% 10% 2% 10%">
        <Grid
          item
          xs={12}
          style={{
            height: '50px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <ChevronLeftIcon />
          <Typography>{date.toDateString()}</Typography>
          <ChevronRightIcon />
        </Grid>
        <ColumnContent />
      </Grid>
    </Box>
  );
};

export default AircraftScheduler;
