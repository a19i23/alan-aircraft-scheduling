import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import { StyledPaperColumn, StyledTypography } from '../StyledComponents';
import Aircraft from '../Aircraft';
import Flight from '../Flight';
import { useAircrafts } from '../../hooks/useAircrafts';
import { useFlights } from '../../hooks/useFlights';
import FlightRotation from '../FlightRotation';
import LinearTime from '../LinearTime';
import TimeGauge from '../TimeGauge';

const FLIGHT_LIMIT = 25;
export const SECONDS_IN_DAY = 86400;

const ColumnContent = () => {
  const [page, setPage] = useState(1);
  const [totalFlights, setTotalFlights] = useState(0);
  const [flightRotation, setFlightRotation] = useState(new Map());
  const [filteredFlights, setFilteredFlights] = useState();

  const { data: aircrafts } = useAircrafts();
  const { data: flights } = useFlights(FLIGHT_LIMIT, page);

  useEffect(() => {
    if (flights) {
      const totalPages = Math.ceil(flights.pagination.total / FLIGHT_LIMIT);
      setTotalFlights(totalPages);

      if (flightRotation.size !== 0) {
        const lastFlight = Array.from(flightRotation.values()).pop();
        const { destination, arrivalTime } = lastFlight;
        const possibleFlights = flights?.data?.filter(
          (flight) =>
            flight.origin === destination &&
            flight.departuretime >= arrivalTime + 1200,
        );
        setFilteredFlights({ data: possibleFlights });
      } else {
        setFilteredFlights(flights);
      }
    }
  }, [flights, flightRotation]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <Grid item xs={12} sm={4}>
        <StyledTypography>Aircrafts</StyledTypography>
        <StyledPaperColumn>
          {aircrafts?.data?.map((aircraft) => (
            <Aircraft
              key={aircraft.ident}
              info={aircraft}
              flightRotation={flightRotation}
            />
          ))}
        </StyledPaperColumn>
      </Grid>
      <Grid item xs={12} sm={4}>
        <StyledTypography>Flights</StyledTypography>
        <StyledPaperColumn>
          {filteredFlights?.data?.length > 0 ? (
            filteredFlights?.data?.map((flight) => (
              <Flight
                key={flight.id}
                info={flight}
                setFlightRotation={setFlightRotation}
                disabled={flightRotation.has(flight.id)}
              />
            ))
          ) : (
            <Typography>
              No flights available on this page. Please check next page
            </Typography>
          )}
        </StyledPaperColumn>
        <Box display="flex" justifyContent="center" marginTop="5px">
          <Pagination
            size="small"
            count={totalFlights}
            page={page}
            onChange={handleChange}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <StyledTypography>
          Rotation {aircrafts?.data[0]?.ident}
        </StyledTypography>
        <StyledPaperColumn>
          {Array.from(flightRotation).map(([key, value]) => (
            <FlightRotation id={key} info={value} />
          ))}
        </StyledPaperColumn>
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          width="100%"
        >
          <TimeGauge flightRotation={Array.from(flightRotation.values())} />
          <LinearTime />
        </Box>
      </Grid>
    </>
  );
};
export default ColumnContent;
