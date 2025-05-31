import React from 'react';
import type { RootState } from '../store';
import { useSelector } from 'react-redux';

// Boundaries
import ProtectedBoundary from '../templates/protected-boundary';
import NonProtectedBoundary from '../templates/non-protected-boundary';

// Components
import CustomLoader from '../components/loader';

const AppRouter = () => {
  const { isAuthenticated, loading, allowedRoutes } = useSelector(
    (state: RootState) => state.auth
  );

  if (loading) {
    return <CustomLoader />;
  }

  return (
    <React.Fragment>
      {!isAuthenticated && <NonProtectedBoundary />}
      {isAuthenticated && <ProtectedBoundary allowedRoutes={allowedRoutes} />}
    </React.Fragment>
  );
};

export default AppRouter;
