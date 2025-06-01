import * as Yup from 'yup';
import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../auth.interface.ts';
import { useToast } from '../../../../providers/toast-provider';
import MorenButton from '../../../../components/button';
import ModernInput from '../../../../components/input';
import MorenCard from '../../../../components/card.tsx';

type FormValues = {
  email: string;
  password: string;
};

const schema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Login = () => {
  const naivgate = useNavigate();
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    showToast('Successfully logged in!', 'success');
  };

  const handleNavigation = (path: string) => {
    naivgate(path);
  };

  return (
    <MorenCard
      title="Login"
      description="Enter your credentials to continue"
      maxWidth={480}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        display="flex"
        flexDirection="column"
        gap={2}
      >
        <ModernInput
          label="Email"
          placeholder="Enter your email"
          type="email"
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <ModernInput
          label="Password"
          placeholder="Enter your password"
          type="password"
          {...register('password')}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <MorenButton type="submit" variant="contained">
          Login
        </MorenButton>
      </Box>

      <Box mt={2} textAlign="center" display="flex" flexDirection="row" gap={1}>
        <MorenButton
          variant="text"
          onClick={() => handleNavigation(ROUTES.REGISTER)}
        >
          Not a member? Sign Up
        </MorenButton>

        <MorenButton
          variant="text"
          onClick={() => handleNavigation(ROUTES.FORGOT_PASSWORD)}
        >
          Forgot Password?
        </MorenButton>
      </Box>
    </MorenCard>
  );
};

export default Login;
