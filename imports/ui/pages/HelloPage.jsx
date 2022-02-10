import {
  Button, Grid, TextField, Typography,
} from '@mui/material';

import React from 'react';

function HelloPage() {
  return (
    <Grid container spacing={2} direction="column">
      <Grid item container spacing={2} alignItems="center">
        <Grid item>
          <TextField
            helperText="Please enter your name"
            id="user-name-input"
            label="Name"
            variant="standard"
          />
        </Grid>
        <Grid item><Button variant="contained">Submit</Button></Grid>
      </Grid>
      <Grid item>
        <Typography variant="h4" gutterBottom id="hello-message">Hello World</Typography>
      </Grid>
    </Grid>
  );
}

export default HelloPage;
