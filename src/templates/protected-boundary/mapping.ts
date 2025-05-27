// Pages
import LoginPage from '../../pages/login';
import Register from '../../pages/register';
import ForgotPassword from '../../pages/forgot-password';

// Layouts
import MainLayout from '../../layouts/MainLayout';
import AuthLayout from '../../layouts/AuthLayout';
import AdminLayout from '../../layouts/AdminLayout';

export const LAYOUT_MAP = {
  MainLayout,
  AuthLayout,
  AdminLayout,
};

export const COMPONENT_MAP = {
  LoginPage,
  Register,
  ForgotPassword,
};

export type ComponentKey = keyof typeof COMPONENT_MAP;
