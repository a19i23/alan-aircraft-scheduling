import React from 'react';
import Box from '@mui/material/Box';
import { StyledSlider } from './StyledComponents';

const marks = [
  {
    value: 0,
    label: '00:00',
  },
  {
    value: 50,
    label: '12:00',
  },
  {
    value: 100,
    label: '24:00',
  },
];

const LinearTime = (props) => {
  return (
    <Box width="inherit">
      <StyledSlider defaultValue={100} valueLabelDisplay="off" marks={marks} />
    </Box>
  );
};

export default LinearTime;
