import React, { useEffect, useState } from 'react';

import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';

import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import HistoryIcon from '@mui/icons-material/History';
import { useLocation, useNavigate } from 'react-router-dom';

function BottomAppBar() {
  const location = useLocation();
  const activeTab = () => {
    if (location.pathname === '/history') { return 1; }
    return 0;
  };

  const [navBarTab, setNavBarTab] = useState(activeTab());
  const navigate = useNavigate();

  const handleTabClick = (event, newValue) => {
    if (newValue === 1) { navigate('/history'); } else { navigate('/'); }
  };

  const updateActiveTab = () => {
    useEffect(() => { setNavBarTab(activeTab()); });
  }; updateActiveTab();

  return (
    <Paper
      sx={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={navBarTab}
        onChange={handleTabClick}
      >
        <BottomNavigationAction label="Hello" icon={<EmojiPeopleIcon />} />
        <BottomNavigationAction label="History" icon={<HistoryIcon />} />
      </BottomNavigation>
    </Paper>
  );
}

export default BottomAppBar;
