import { Outlet } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';
import { SidebarProvider } from '../components/sidebar/provider';
import Header from '../components/header';
import Sidebar from '../components/sidebar';

const MainLayout = () => {
  return (
    <SidebarProvider>
      <Box sx={{ display: 'flex' }}>
        <Header />
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: '100%',
            height: '100vh',
            maxWidth: '100vw',
            overflowX: 'hidden', // Prevent horizontal scroll
            maxHeight: '100vh', // Prevent vertical overflow
            overflowY: 'auto', // Allow vertical scrolling
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </SidebarProvider>
  );
};

export default MainLayout;
