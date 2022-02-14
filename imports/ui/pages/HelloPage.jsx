import { Meteor } from 'meteor/meteor';

import {
  Button, Grid, TextField, Typography,
} from '@mui/material';

import React, { useState } from 'react';

function HelloPage() {
  const [name, setName] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [displayName, setDisplayName] = useState('World');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNameSubmit = (event) => {
    event.preventDefault();
    setShowMessage(true);
    setDisplayName(name.trim() || 'World');

    if (!name.trim()) return;

    Meteor.call('names.insert', name.trim());

    setName('');
  };

  return (
    <Grid container spacing={2} direction="column">
      <Grid item container spacing={2} alignItems="center">
        <Grid item>
          <TextField
            helperText="Please enter your name"
            label="Name"
            variant="standard"
            value={name}
            onChange={handleNameChange}
            id="name-input-field"
          />
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={handleNameSubmit} id="name-submit-button">Submit</Button>
        </Grid>
      </Grid>
      <Grid item>
        {showMessage
          && (
          <Typography variant="h4" gutterBottom id="hello-message">
            {`Hello ${displayName}`}
          </Typography>
          )}
      </Grid>
    </Grid>
  );
}

export default HelloPage;
