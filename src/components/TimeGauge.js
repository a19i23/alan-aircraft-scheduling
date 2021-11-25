import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import {
  GaugeContainer,
  IdleSection,
  ServiceSection,
  TurnaroundSection,
} from './StyledComponents';
import { SECONDS_IN_DAY } from './AircraftScheduler/ColumnContent';

const TimeGauge = ({ flightRotation }) => {
  const ref = useRef(0);
  return (
    <Box width="inherit" display="flex" flexDirection="row">
      <GaugeContainer>
        {Array.from(flightRotation.values()).map((flight, index) => {
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
                <IdleSection
                  data-testid="zero-idle"
                  width={percentOfFirstIdle}
                />
                <ServiceSection
                  data-testid="first-service"
                  width={percentOfDay}
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
              <TurnaroundSection width={percentTurnaround} />
              <ServiceSection width={percentOfDay} />
            </>
          );
        })}
      </GaugeContainer>
    </Box>
  );
};

export default TimeGauge;
