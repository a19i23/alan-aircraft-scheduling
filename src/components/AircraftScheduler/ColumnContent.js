import React from 'react';
import Grid from '@mui/material/Grid';
import { StyledPaper } from '.';
const ColumnContent = (props) => (
  <>
    <Grid item xs={12} sm={4}>
      <StyledPaper>xs=4</StyledPaper>
    </Grid>
    <Grid item xs={12} sm={4}>
      <StyledPaper>xs=4</StyledPaper>
    </Grid>
    <Grid item xs={12} sm={4}>
      <StyledPaper>xs=4</StyledPaper>
    </Grid>
  </>
);

export default ColumnContent;
