import React from 'react';
import Grid from '@material-ui/core/Grid';

const centerHorizontalGrid = (prop) => (
    <Grid container justify="center" spacing={16}>
    {React.Children.toArray(prop.children).map((value, index) => (
      <Grid key={index} item>
        {value}
      </Grid>
    ))}
  </Grid>
);

export default centerHorizontalGrid;