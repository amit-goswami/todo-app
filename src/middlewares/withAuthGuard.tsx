import React from 'react';
import { LOCAL_STORAGE_KEYS } from '../utils/constants';

function withAuthGuard<P extends React.PropsWithChildren<unknown>>(
  WrappedComponent: React.ComponentType<P>
) {
  const ComponentWithAuthGuard = (props: P) => {
    const token = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);

    if (!token) {
      return null; // User not authenticated, show nothing
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuthGuard;
}

export default withAuthGuard;
