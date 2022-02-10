import React, { useState } from 'react';

import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';

import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import HistoryIcon from '@mui/icons-material/History';

function BottomAppBar() {
  const [navBarItem, setNavBarItem] = useState(0);

  return (
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
          setNavBarItem(newValue);
        }}
      >
        <BottomNavigationAction label="Hello" icon={<EmojiPeopleIcon />} />
        <BottomNavigationAction label="History" icon={<HistoryIcon />} />
      </BottomNavigation>
    </Paper>
  );
}

export default BottomAppBar;
