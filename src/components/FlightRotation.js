import React from 'react';
import { CardHeader, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { StyledCard } from './StyledComponents';

const FlightRotation = ({ id, info }) => {
  return (
    <StyledCard>
      <CardHeader
        title={`Flight: ${id}`}
        titleTypographyProps={{ variant: 'h6' }}
      />
      <Box display="flex" justifyContent="space-around" alignItems="center">
        <Box>
          <Typography>{info.origin}</Typography>
          <Typography>{info.readableDeparture}</Typography>
        </Box>
        <Typography>-></Typography>
        <Box>
          <Typography>{info.destination}</Typography>
          <Typography>{info.readableArrival}</Typography>
        </Box>
      </Box>
    </StyledCard>
  );
};

export default FlightRotation;
