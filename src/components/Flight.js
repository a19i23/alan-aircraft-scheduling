import React from 'react';
import { CardHeader, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';

import airplaneTakeOff from '../assets/airplane-take-off.png';
import airplaneLanding from '../assets/airplane-landing.png';
import {
  StyledAddIcon,
  StyledCheckIcon,
  StyledIconButton,
  StyledCard,
} from './StyledComponents';

const Flight = ({ info, setFlightRotation, disabled }) => {
  const handleAddFlight = () => {
    setFlightRotation((prev) => {
      const newMap = new Map(prev);
      newMap.set(info.id, {
        arrivalTime: info.arrivaltime,
        readableDeparture: info.readable_departure,
        readableArrival: info.readable_arrival,
        origin: info.origin,
        destination: info.destination,
      });
      return newMap;
    });
  };

  const handleIcon = () => {
    if (disabled) {
      return (
        <StyledIconButton>
          <StyledCheckIcon />
        </StyledIconButton>
      );
    }
    return (
      <IconButton onClick={handleAddFlight}>
        <StyledAddIcon />
      </IconButton>
    );
  };

  return (
    <>
      <StyledCard>
        <CardHeader
          action={handleIcon()}
          title={`Flight: ${info.id}`}
          titleTypographyProps={{ variant: 'h6' }}
        />
        <Box display="flex" justifyContent="space-around" alignItems="center">
          <Box>
            <Typography>{info.origin}</Typography>
            <img
              src={airplaneTakeOff}
              alt="airplane takeoff"
              height="40px"
              width="40px"
            />
            <Typography>{info.readable_departure}</Typography>
          </Box>
          <Typography>-></Typography>
          <Box>
            <Typography>{info.destination}</Typography>
            <img
              src={airplaneLanding}
              alt="airplane landing"
              height="40px"
              width="40px"
            />
            <Typography>{info.readable_arrival}</Typography>
          </Box>
        </Box>
      </StyledCard>
    </>
  );
};

export default Flight;
