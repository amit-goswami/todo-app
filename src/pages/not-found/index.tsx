import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../features/auth/auth.interface';
import PageNotFoundImage from '../../assets/404/404.jpg';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      {/* SVG Illustration */}
      <Box
        component="img"
        src={PageNotFoundImage}
        alt="404 Not Found"
        sx={{ maxWidth: 400, width: '100%', mb: 4 }}
      />

      {/* Message */}
      <Typography variant="h6" color="text.secondary">
        Page Not Found
      </Typography>

      {/* Button to go back */}
      <Button
        variant="contained"
        sx={{ mt: 4 }}
        onClick={() => navigate(ROUTES.HOME)}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default PageNotFound;
