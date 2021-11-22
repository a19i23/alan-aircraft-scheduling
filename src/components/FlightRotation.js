import React from 'react';
import { CardHeader, Typography } from '@mui/material';
import { Box } from '@mui/system';

import airplaneTakeOff from '../assets/airplane-take-off.png';
import airplaneLanding from '../assets/airplane-landing.png';
import { StyledCard } from './StyledComponents';

const FlightRotation = ({ id, info }) => {
  console.log(id, info);
  return (
    <StyledCard>
      <CardHeader
        title={`Flight: ${id}`}
        titleTypographyProps={{ variant: 'h6' }}
      />
      <Box display="flex" justifyContent="space-around" alignItems="center">
        <Box>
          <Typography>{info.origin}</Typography>
          {/* <img
            src={airplaneTakeOff}
            alt="airplane takeoff"
            height="40px"
            width="40px"
          /> */}
          <Typography>{info.readableDeparture}</Typography>
        </Box>
        <Typography>-></Typography>
        <Box>
          <Typography>{info.destination}</Typography>
          {/* <img
            src={airplaneLanding}
            alt="airplane landing"
            height="40px"
            width="40px"
          /> */}
          <Typography>{info.readableArrival}</Typography>
        </Box>
      </Box>
    </StyledCard>
  );
};

export default FlightRotation;
