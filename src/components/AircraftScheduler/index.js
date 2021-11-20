import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ColumnTitles from './ColumnTitles';
import ColumnContent from './ColumnContent';

export const StyledPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '60vh',
}));

const AircraftScheduler = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} padding="10% 10% 2% 10%">
        <Grid item xs={12}>
          <StyledPaper style={{ height: '100px' }}>xs=12</StyledPaper>
        </Grid>
        <ColumnTitles />
        <ColumnContent />
      </Grid>
    </Box>
  );
};

export default AircraftScheduler;
