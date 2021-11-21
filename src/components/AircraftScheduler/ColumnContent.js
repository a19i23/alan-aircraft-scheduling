import React from 'react';
import Grid from '@mui/material/Grid';
import { StyledPaper } from '.';
import Aircraft from '../Aircraft';
import { useAircrafts } from '../../hooks/useAircrafts';

const ColumnContent = (props) => {
  const { data: aircrafts } = useAircrafts();
  console.log(aircrafts?.data);

  return (
    <>
      <Grid item xs={12} sm={4}>
        <StyledPaper>
          {aircrafts?.data?.map((aircraft) => (
            <Aircraft info={aircraft} />
          ))}
        </StyledPaper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <StyledPaper>xs=4</StyledPaper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <StyledPaper>xs=4</StyledPaper>
      </Grid>
    </>
  );
};
export default ColumnContent;
