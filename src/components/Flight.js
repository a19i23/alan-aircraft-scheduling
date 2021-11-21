import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import airplaneTakeOff from '../assets/airplane-take-off.png';
import airplaneLanding from '../assets/airplane-landing.png';

const Flight = ({ info }) => {
  return (
    <>
      <Paper style={{ padding: '10px', margin: '8px 0px' }}>
        <Box flex>
          <Typography>Flight: {info.id}</Typography>
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
        </Box>
      </Paper>
    </>
  );
};

export default Flight;
