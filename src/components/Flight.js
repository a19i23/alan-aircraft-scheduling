import React from 'react';
import { Card, CardHeader, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import airplaneTakeOff from '../assets/airplane-take-off.png';
import airplaneLanding from '../assets/airplane-landing.png';

const Flight = ({ info, setFlightRotation }) => {
  const handleAddFlight = () => {
    setFlightRotation((prev) => ({
      rotation: [
        ...prev.rotation,
        {
          id: info.id,
          arrivalTime: info.arrivaltime,
          readadbleDeparture: info.readable_departure,
          readableArrival: info.readable_arrival,
          origin: info.origin,
          destination: info.destination,
        },
      ],
    }));
  };

  return (
    <>
      <Card
        style={{ padding: '10px', margin: '8px 0px', borderRadius: '15px' }}
      >
        <CardHeader
          action={
            <IconButton onClick={handleAddFlight}>
              <AddIcon />
            </IconButton>
          }
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
      </Card>
    </>
  );
};

export default Flight;
