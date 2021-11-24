import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import { GaugeContainer } from './StyledComponents';
import { SECONDS_IN_DAY } from './AircraftScheduler/ColumnContent';
import Paper from '@mui/material/Paper';

const TimeGauge = ({ flightRotation }) => {
  const ref = useRef(0);
  return (
    <Box width="inherit" display="flex" flexDirection="row">
      <GaugeContainer>
        {flightRotation.map((flight, index) => {
          const { departureTime, arrivalTime } = flight;

          // calculate for currentFlight
          let duration = arrivalTime - departureTime;
          const percentOfDay = Math.round((duration / SECONDS_IN_DAY) * 100);

          if (index === 0) {
            // paint idle time grey
            const idleDuration = departureTime - 0;
            const percentOfFirstIdle = Math.round(
              (idleDuration / SECONDS_IN_DAY) * 100,
            );
            ref.current = arrivalTime;
            return (
              <>
                <Paper
                  style={{
                    width: `${percentOfFirstIdle}%`,
                    height: 'inherit',
                    backgroundColor: 'grey',
                    border: '1px solid grey',
                    boxShadow: 'none',
                  }}
                />
                <Paper
                  style={{
                    width: `${percentOfDay}%`,
                    height: 'inherit',
                    backgroundColor: 'green',
                    border: '1px solid green',
                    boxShadow: 'none',
                  }}
                />
              </>
            );
          }

          // calculate for turnaround time
          const durationTurnaround = departureTime - ref.current;
          const percentTurnaround = Math.round(
            (durationTurnaround / SECONDS_IN_DAY) * 100,
          );
          ref.current = arrivalTime;

          return (
            <>
              <Paper
                style={{
                  width: `${percentTurnaround}%`,
                  height: 'inherit',
                  backgroundColor: 'purple',
                  border: '1px solid purple',
                  boxShadow: 'none',
                }}
              />
              <Paper
                style={{
                  width: `${percentOfDay}%`,
                  height: 'inherit',
                  backgroundColor: 'green',
                  border: '1px solid green',
                  boxShadow: 'none',
                }}
              />
            </>
          );
        })}
      </GaugeContainer>
    </Box>
  );
};

export default TimeGauge;
