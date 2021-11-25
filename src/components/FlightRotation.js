import React from 'react';
import { CardHeader, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { StyledCard } from './StyledComponents';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import airplaneTakeOff from '../assets/airplane-take-off.png';
import airplaneLanding from '../assets/airplane-landing.png';

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
        <img
          src={airplaneTakeOff}
          alt="airplane-takeoff"
          height="40px"
          width="40px"
        />
        <ArrowForwardIcon style={{ color: 'grey' }} />
        <Box>
          <Typography>{info.destination}</Typography>
          <Typography>{info.readableArrival}</Typography>
        </Box>
        <img
          src={airplaneLanding}
          alt="airplane landing"
          height="40px"
          width="40px"
        />
      </Box>
    </StyledCard>
  );
};

export default FlightRotation;
