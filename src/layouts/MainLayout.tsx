import { Outlet } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';
import { SidebarProvider } from '../components/sidebar/provider';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import FloatingPositionedBox from '../components/box';
import LanguageMode from '../i18n/LanguageMode';
import ColorMode from '../providers/theme-provider/ColorMode';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    maxHeight: '100vh',
    overflow: 'hidden', // Prevents any overflow
    width: '100%',
    maxWidth: '100vw',
  },
};

const MainLayout = () => {
  return (
    <SidebarProvider>
      <Box sx={{ display: 'flex' }}>
        <Header />
        <Sidebar />
        <Box
          component="main"
          sx={{
            ...styles.container,
            backgroundColor: theme => theme.palette.background.paper,
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>

      <FloatingPositionedBox position="bottom-right">
        <Box sx={{ display: 'flex', gap: 1 }}>
          <LanguageMode />
          <ColorMode />
        </Box>
      </FloatingPositionedBox>
    </SidebarProvider>
  );
};

export default MainLayout;
