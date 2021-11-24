import React from 'react';
import Box from '@mui/material/Box';
import { GaugeContainer } from './StyledComponents';

const TimeGauge = (props) => {
  return (
    <Box width="inherit" display="flex" justifyContent="center">
      <GaugeContainer />
    </Box>
  );
};

export default TimeGauge;
