import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ColumnTitles from './ColumnTitles';
import ColumnContent from './ColumnContent';
import { Typography } from '@mui/material';

export const StyledPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  backgroundColor: 'lightblue',
  color: theme.palette.text.secondary,
  border: '3px solid grey',
  borderRadius: '15px',
  height: '60vh',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: '18px',
  },
  '&::-webkit-scrollbar-track': {
    'margin-top': '5px',
    'margin-bottom': '5px',
  },
  '&:hover': {
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      backgroundColor: 'grey',
      border: '3px solid lightblue',
    },
  },
}));

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
