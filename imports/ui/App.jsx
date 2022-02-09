import {
  Container, Typography, AppBar, Toolbar, BottomNavigation, BottomNavigationAction,
  Paper,
} from '@mui/material';

import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import HistoryIcon from '@mui/icons-material/History';

import React, { useState } from 'react';

function App() {
  const [navBarItem, setValue] = useState(0);

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
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>Hello World</Typography>
        <Paper
          sx={{
            position: 'fixed', bottom: 0, left: 0, right: 0,
          }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={navBarItem}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Hello" icon={<EmojiPeopleIcon />} />
            <BottomNavigationAction label="History" icon={<HistoryIcon />} />
          </BottomNavigation>
        </Paper>
      </Container>
    </>
  );
}

export default App;
