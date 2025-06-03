import HttpService from '../../services/HttpService';
import { get } from 'lodash';
import { store } from '../../store';
import { LOCAL_STORAGE_KEYS } from '../../utils/constants';
import { setLocalStorageItem } from '../../utils/functions';
import type { ILoginPayload, ILoginResponse } from './auth.interface';
import { loginFailure, loginStart, loginSuccess } from './auth.slice';

const loginUser = async (payload: ILoginPayload): Promise<ILoginResponse> => {
  store.dispatch(loginStart());

  try {
    const response = await HttpService.post<ILoginResponse>(
      '/auth/login',
      payload
    );

    const { token, user, allowedRoutes } = response.data;

    if (token && user && allowedRoutes) {
      const successPayload = {
        user,
        token,
        allowedRoutes,
      };

      store.dispatch(loginSuccess(successPayload));

      // Store token in localStorage or cookies if needed
      setLocalStorageItem(LOCAL_STORAGE_KEYS.TOKEN, token);
    }

    return {
      user,
      token,
      allowedRoutes,
      success: true,
      message: 'Login successful',
    };
  } catch (error: unknown) {
    store.dispatch(loginFailure());

    const message = 'An unexpected error occurred during login';

    return {
      user: null,
      token: null,
      allowedRoutes: null,
      success: false,
      message: get(error as Error, ['message'], message),
    };
  }
};

const AuthService = {
  loginUser,
};

export default AuthService;
