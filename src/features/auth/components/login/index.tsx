import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { useToast } from '../../../../providers/toast-provider';
import MorenButton from '../../../../components/button';
import ModernInput from '../../../../components/input';

type FormValues = {
  name: string;
  email: string;
  password: string;
};

const schema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Login = () => {
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

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      display="flex"
      flexDirection="column"
      gap={2}
      width="400px"
    >
      <ModernInput
        label="Name"
        placeholder="Enter your name"
        {...register('name')}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
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
  );
};

export default Login;
