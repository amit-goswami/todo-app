import * as Yup from 'yup';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../../../providers/toast-provider/index.tsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ROUTES } from '../../auth.interface.ts';
import MorenCard from '../../../../components/card.tsx';
import ModernInput from '../../../../components/input/index.tsx';
import MorenButton from '../../../../components/button/index.tsx';

type FormValues = {
  email: string;
};

const schema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const ForgotPassword = () => {
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
    showToast('Successfully submitted!', 'success');
  };

  const handleNavigation = (path: string) => {
    naivgate(path);
  };

  return (
    <MorenCard
      title="Forgot Password"
      description="Enter your email to reset your password"
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
        <MorenButton type="submit" variant="contained">
          Submit
        </MorenButton>
      </Box>

      <Box mt={2} textAlign="center" display="flex" flexDirection="row" gap={1}>
        <MorenButton
          variant="text"
          onClick={() => handleNavigation(ROUTES.LOGIN)}
        >
          Already have an account? Sign In
        </MorenButton>
      </Box>
    </MorenCard>
  );
};

export default ForgotPassword;
