import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    background: { default: '#f5f5f5' },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    background: { default: '#121212' },
  },
});

export const greenTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#2e7d32' },
    background: { default: '#e8f5e9' },
  },
});
