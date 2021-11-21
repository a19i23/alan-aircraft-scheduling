import React from 'react';
import Grid from '@mui/material/Grid';
import { StyledPaper } from '.';
import Aircraft from '../Aircraft';
import Flight from '../Flight';
import { useAircrafts } from '../../hooks/useAircrafts';
import { useFlights } from '../../hooks/useFlights';

const ColumnContent = (props) => {
  const { data: aircrafts } = useAircrafts();
  const { data: flights } = useFlights();

  console.log(flights?.data);

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
        <StyledPaper>
          {flights?.data?.map((flight) => (
            <Flight info={flight} />
          ))}
        </StyledPaper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <StyledPaper>xs=4</StyledPaper>
      </Grid>
    </>
  );
};
export default ColumnContent;
