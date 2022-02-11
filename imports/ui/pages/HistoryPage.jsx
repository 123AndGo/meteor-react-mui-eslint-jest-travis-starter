/* eslint-disable no-underscore-dangle */
import { Meteor } from 'meteor/meteor';

import { Grid, Typography } from '@mui/material';

import React from 'react';

import { useTracker } from 'meteor/react-meteor-data';
import NamesCollection from '../../db/NamesCollection';

function HistoryPage() {
  const { names, isLoading } = useTracker(() => {
    const handler = Meteor.subscribe('names');

    if (!handler.ready()) { return { names: [], isLoading: true }; }

    return { names: NamesCollection.find({}, { sort: { createdAt: -1 } }).fetch() };
  });

  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Typography variant="h5" gutterBottom id="history">Last Greetings:</Typography>
      </Grid>
      {isLoading && <Grid item><div>Loading...</div></Grid>}
      {names.map((name) => (
        <Grid item key={name._id}>
          <Typography variant="body" gutterBottom id="history">{`Hello ${name.text}`}</Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export default HistoryPage;
