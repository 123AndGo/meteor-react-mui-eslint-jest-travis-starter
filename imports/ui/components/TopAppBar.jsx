import React from 'react';

import { Typography, AppBar, Toolbar } from '@mui/material';

function TopAppBar() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hello X
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default TopAppBar;
