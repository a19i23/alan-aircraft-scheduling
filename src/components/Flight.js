import React, { useState } from 'react';
import { CardHeader, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import airplaneTakeOff from '../assets/airplane-take-off.png';
import airplaneLanding from '../assets/airplane-landing.png';
import {
  StyledAddIcon,
  StyledCheckIcon,
  StyledIconButton,
  StyledCard,
} from './StyledComponents';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Flight = ({ info, flightRotation, setFlightRotation, disabled }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleAddFlight = (departTime) => {
    const lastFlight = Array.from(flightRotation.values()).pop();

    if (
      flightRotation.size === 0 ||
      departTime >= lastFlight.arrivalTime + 1200
    ) {
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
    } else {
      setOpenSnackbar(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  const handleIcon = (departTime) => {
    if (disabled) {
      return (
        <StyledIconButton>
          <StyledCheckIcon />
        </StyledIconButton>
      );
    }
    return (
      <IconButton onClick={() => handleAddFlight(departTime)}>
        <StyledAddIcon />
      </IconButton>
    );
  };

  return (
    <>
      <StyledCard>
        <CardHeader
          action={handleIcon(info.departuretime)}
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
          <ArrowForwardIcon style={{ color: 'grey' }} />
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
      <Snackbar
        open={openSnackbar}
        autoHideDuration={10000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
          Next flight departure time must be at least 20 minutes after previous
          flight arrival time.
        </Alert>
      </Snackbar>
    </>
  );
};

export default Flight;
