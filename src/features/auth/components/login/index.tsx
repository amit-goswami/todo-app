import { Box } from '@mui/material';
import { useToast } from '../../../../providers/toast-provider';
import MorenButton from '../../../../components/button';
import ModernInput from '../../../../components/input';

const Login = () => {
  const { showToast } = useToast();
  return (
    <Box
      display="flex"
      sx={{ flexDirection: 'column', width: '400px' }}
      gap={2}
    >
      <ModernInput placeholder="Enter your name" label="Name" />
      <ModernInput placeholder="Enter your email" label="Email" type="email" />
      <ModernInput
        placeholder="Enter your password"
        label="Password"
        type="password"
      />
      <MorenButton
        variant="contained"
        onClick={() => showToast('This is a success toast!', 'success')}
      >
        Login
      </MorenButton>
    </Box>
  );
};

export default Login;
