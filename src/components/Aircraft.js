import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import airplaneIcon from './../assets/airplane-outline.png';
import { StyledCard } from './StyledComponents';
import { SECONDS_IN_DAY } from './AircraftScheduler/ColumnContent';

const Aircraft = ({ info, flightRotation }) => {
  const [utilization, setUtilization] = useState(0);

  useEffect(() => {
    if (flightRotation) {
      const aircraftRotation = Array.from(flightRotation.values());
      const totalUtil = aircraftRotation.reduce((accumulator, current) => {
        const currentTime = current.arrivalTime - current.departureTime;
        return Number(accumulator) + Number(currentTime);
      }, []);
      setUtilization(Math.round((totalUtil / SECONDS_IN_DAY) * 100));
    }
  }, [flightRotation]);
  return (
    <StyledCard>
      <Box display="flex" justifyContent="space-around">
        <img src={airplaneIcon} alt="airplane" />
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Typography>{info.ident}</Typography>
          <Typography> ({utilization}%)</Typography>
        </Box>
      </Box>
    </StyledCard>
  );
};

export default Aircraft;
