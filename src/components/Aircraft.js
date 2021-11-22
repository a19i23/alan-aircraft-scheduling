import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import airplaneIcon from './../assets/airplane-outline.png';
import { StyledCard } from './StyledComponents';

const Aircraft = ({ info }) => {
  return (
    <StyledCard>
      <Box display="flex" justifyContent="space-around">
        <img src={airplaneIcon} alt="airplane" />
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Typography>{info.ident}</Typography>
          <Typography> ({Math.round((10 / 24) * 100)})%</Typography>
        </Box>
      </Box>
    </StyledCard>
  );
};

export default Aircraft;
