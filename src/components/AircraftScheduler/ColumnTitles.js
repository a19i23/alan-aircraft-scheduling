import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export const StyledTypography = styled(Typography)(() => ({
  textAlign: 'center',
}));

const ColumnTitles = (props) => {
  return (
    <>
      <Grid item xs={4}>
        <StyledTypography>Aircrafts</StyledTypography>
      </Grid>
      <Grid item xs={4}>
        <StyledTypography>Rotation "Aircraft title"</StyledTypography>
      </Grid>
      <Grid item xs={4}>
        <StyledTypography>Flights</StyledTypography>
      </Grid>
    </>
  );
};

export default ColumnTitles;
