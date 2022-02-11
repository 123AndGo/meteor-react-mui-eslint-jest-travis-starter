import { Grid, Typography } from '@mui/material';

import React from 'react';

const greetingNames = [
  { id: '1', name: 'Andrés' }, { id: '2', name: 'David' }, { id: '3', name: 'James' },
];

function HistoryPage() {
  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Typography variant="h5" gutterBottom id="history">Last Greetings:</Typography>
      </Grid>
      {greetingNames.map((nameObject) => (
        <Grid item key={nameObject.id}>
          <Typography variant="body" gutterBottom id="history">{`Hello ${nameObject.name}`}</Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export default HistoryPage;
