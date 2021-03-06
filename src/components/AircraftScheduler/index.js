import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ColumnTitles from './ColumnTitles';
import ColumnContent from './ColumnContent';
import { Typography } from '@mui/material';

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
            height: '100px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Typography>&lt; {date.toDateString()} &gt;</Typography>
        </Grid>
        <ColumnTitles />
        <ColumnContent />
      </Grid>
    </Box>
  );
};

export default AircraftScheduler;
