import React from 'react';
import PageNotFound from '../../pages/not-found';
import MainLayout from '../../layouts/MainLayout';
import HomePage from '../../pages/home';
import { Route, Routes } from 'react-router-dom';
import { ROUTES, type IAuthState } from '../../features/auth/auth.interface';
import { COMPONENT_MAP, LAYOUT_MAP } from './mapping';

interface IProtectedBoundaryProps {
  allowedRoutes: IAuthState['allowedRoutes'];
}

const ProtectedBoundary = ({ allowedRoutes = [] }: IProtectedBoundaryProps) => {
  return (
    <Routes>
      {/* Dynamically render routes from backend */}
      {allowedRoutes &&
        allowedRoutes.map(({ path, component, layout }, i) => {
          const Layout = LAYOUT_MAP[layout] || React.Fragment;

          return (
            <Route key={i} element={<Layout />}>
              <Route
                path={path}
                element={React.createElement(
                  COMPONENT_MAP[component] || (() => <PageNotFound />)
                )}
              />
            </Route>
          );
        })}

      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
      </Route>

      <Route path={ROUTES.NOT_FOUND} element={<PageNotFound />} />

      {/* Add more non-protected routes here as needed */}
    </Routes>
  );
};

export default ProtectedBoundary;
