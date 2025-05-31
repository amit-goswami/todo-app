import type { ComponentKey } from '../../templates/protected-boundary/mapping';

export type UserRole = 'user' | 'admin' | 'superadmin';

export type LayoutType = 'MainLayout' | 'AuthLayout';

export interface IUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export const ROUTES = {
  // Public routes
  HOME: '/',
  ABOUT: '/about',

  // Authenticated routes
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',

  // Protected routes
  DASHBOARD: '/dashboard',

  // Not Found
  NOT_FOUND: '*',
} as const;

export type ROUTES = (typeof ROUTES)[keyof typeof ROUTES];

export interface IUserRoute {
  path: ROUTES;
  layout: LayoutType;
  component: ComponentKey;
}

export interface IAuthState {
  user: IUser | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  allowedRoutes: IUserRoute[] | null;
}
