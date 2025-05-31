import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../features/auth/auth.interface';
import { LOCAL_STORAGE_KEYS } from '../utils/constants';

/**
 * Redirects the user based on authentication status.
 * If a token exists, redirects to HOME. Otherwise, redirects to LOGIN.
 */
const useAuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);
    if (token) {
      navigate(ROUTES.HOME, { replace: true });
    } else {
      navigate(ROUTES.LOGIN, { replace: true });
    }
  }, [navigate]);
};

export default useAuthRedirect;
