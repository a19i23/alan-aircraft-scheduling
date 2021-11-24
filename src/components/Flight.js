import React from 'react';
import { CardHeader, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';

import {
  StyledAddIcon,
  StyledCheckIcon,
  StyledIconButton,
  StyledCard,
} from './StyledComponents';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Flight = ({ info, setFlightRotation, disabled }) => {
  const handleAddFlight = () => {
    setFlightRotation((prev) => {
      const newMap = new Map(prev);
      newMap.set(info.id, {
        departureTime: info.departuretime,
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
            <Typography>{info.readable_departure}</Typography>
          </Box>
          <ArrowForwardIcon style={{ color: 'grey' }} />
          <Box>
            <Typography>{info.destination}</Typography>
            <Typography>{info.readable_arrival}</Typography>
          </Box>
        </Box>
      </StyledCard>
    </>
  );
};

export default Flight;
