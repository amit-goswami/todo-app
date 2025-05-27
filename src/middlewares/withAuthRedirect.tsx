/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../features/auth/auth.interface';
import Constants from '../utils/constants';

// Define a generic type for wrapped component props
function withAuthRedirect<P>(_WrappedComponent: React.ComponentType<P>) {
  const ComponentWithRedirect = (_props: P) => {
    const navigate = useNavigate();

    // Replace with real auth check (e.g. from context or Redux)
    const user = JSON.parse(
      localStorage.getItem(Constants.LOCAL_STORAGE_KEYS.TOKEN) || 'null'
    );

    useEffect(() => {
      if (user) {
        navigate(ROUTES.HOME, { replace: true });
      } else {
        navigate(ROUTES.LOGIN, { replace: true });
      }
    }, [user, navigate]);

    // Optionally show loading or null while redirecting
    return null;
  };

  return ComponentWithRedirect;
}

export default withAuthRedirect;
