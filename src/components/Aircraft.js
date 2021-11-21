import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import airplaneIcon from './../assets/airplane-outline.png';

const Aircraft = ({ info }) => {
  return (
    <Paper style={{ padding: '10px', borderRadius: '15px' }}>
      <Box display="flex" justifyContent="space-around">
        <img src={airplaneIcon} alt="airplane" />
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Typography>{info.ident}</Typography>
          <Typography> ({Math.round((10 / 24) * 100)})%</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default Aircraft;
