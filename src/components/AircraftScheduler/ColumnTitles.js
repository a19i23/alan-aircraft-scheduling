import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useAircrafts } from '../../hooks/useAircrafts';

export const StyledTypography = styled(Typography)(() => ({
  textAlign: 'center',
}));

const ColumnTitles = (props) => {
  const { data: aircrafts } = useAircrafts();

  return (
    <>
      <Grid item xs={4}>
        <StyledTypography>Aircrafts</StyledTypography>
      </Grid>
      <Grid item xs={4}>
        <StyledTypography>
          Rotation {aircrafts?.data[0]?.ident}
        </StyledTypography>
      </Grid>
      <Grid item xs={4}>
        <StyledTypography>Flights</StyledTypography>
      </Grid>
    </>
  );
};

export default ColumnTitles;
