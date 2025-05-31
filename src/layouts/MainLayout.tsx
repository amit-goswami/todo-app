import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import Header from '../components/header';
import Sidebar from '../components/sidebar';

const MainLayout = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setDrawerOpen(prev => !prev);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Header toggleDrawer={toggleDrawer} />
      <Sidebar open={drawerOpen} onClose={closeDrawer} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
