import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../../features/auth/auth.interface';

// Pages
import LoginPage from '../../pages/login';
import RegisterPage from '../../pages/register';
import ForgotPasswordPage from '../../pages/forgot-password';
import PageNotFound from '../../pages/not-found';
import HomePage from '../../pages/home';

// Layouts
import AuthLayout from '../../layouts/AuthLayout';
import MainLayout from '../../layouts/MainLayout';

const NonProtectedBoundary = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
      </Route>

      <Route path={ROUTES.NOT_FOUND} element={<PageNotFound />} />

      {/* Add more non-protected routes here as needed */}
    </Routes>
  );
};

export default NonProtectedBoundary;
