import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

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

const AuthLayout = () => {
  return (
    <Box
      component="main"
      sx={{
        ...styles.container,
        backgroundColor: theme => theme.palette.background.default,
      }}
    >
      <Outlet />
    </Box>
  );
};

export default AuthLayout;
