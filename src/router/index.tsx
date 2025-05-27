import React from 'react';
import type { RootState } from '../store';
import { useSelector } from 'react-redux';

// Boundaries
import ProtectedBoundary from '../templates/protected-boundary';
import NonProtectedBoundary from '../templates/non-protected-boundary';

// Components
import CustomLoader from '../components/loader';
import TopRight from '../components/top-right';

// Selectors
import ColorModeSelect from '../providers/theme-provider/ColorModeSelect';
import LanguageModeSelect from '../i18n/LanguageModeSelect';

const AppRouter = () => {
  const { isAuthenticated, loading, allowedRoutes } = useSelector(
    (state: RootState) => state.auth
  );

  if (loading) {
    return <CustomLoader />;
  }

  return (
    <React.Fragment>
      <TopRight>
        <LanguageModeSelect />
        <ColorModeSelect />
      </TopRight>
      {!isAuthenticated && <NonProtectedBoundary />}
      {isAuthenticated && <ProtectedBoundary allowedRoutes={allowedRoutes} />}
    </React.Fragment>
  );
};

export default AppRouter;
