import { Outlet } from 'react-router-dom';
import { useThemeContext } from '../providers/theme-provider/ThemeContext';
import { Button, Stack } from '@mui/material';

const MainLayout = () => {
  const { themeName, setThemeName } = useThemeContext();

  return (
    <div>
      <h1>Current Theme: {themeName}</h1>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={() => setThemeName('light')}>
          Light
        </Button>
        <Button variant="contained" onClick={() => setThemeName('dark')}>
          Dark
        </Button>
        <Button variant="contained" onClick={() => setThemeName('green')}>
          Green
        </Button>
      </Stack>
      <header>Main Navigation</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
