import { Box } from '@mui/material';

interface ITopRightProps {
  children: React.ReactNode;
}

const TopRight: React.FC<ITopRightProps> = ({ children }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        right: 0,
        zIndex: 1000,
        padding: '16px',
        display: 'flex',
        flexDirection: 'row',
        gap: '8px',
      }}
    >
      {children}
    </Box>
  );
};

export default TopRight;
