import HttpService from '../../services/HttpService';
import { get } from 'lodash';
import { store } from '../../store';
import { LOCAL_STORAGE_KEYS } from '../../utils/constants';
import { setLocalStorageItem } from '../../utils/functions';
import type {
  ILoginPayload,
  ILoginResponse,
  IRegisterPayload,
} from './auth.interface';
import { loginFailure, loginStart, loginSuccess } from './auth.slice';

const registerUser = async (
  payload: IRegisterPayload
): Promise<ILoginResponse> => {
  store.dispatch(loginStart()); // optional: create separate registerStart()

  try {
    const response = await HttpService.post<ILoginResponse>(
      '/auth/register',
      payload
    );

    const { token, user, allowedRoutes } = response.data;

    if (token && user && allowedRoutes) {
      const successPayload = { user, token, allowedRoutes };
      store.dispatch(loginSuccess(successPayload)); // or registerSuccess

      setLocalStorageItem(LOCAL_STORAGE_KEYS.TOKEN, token);

      return {
        user,
        token,
        allowedRoutes,
        success: true,
        message: 'Registration successful',
      };
    }

    return {
      user: null,
      token: null,
      allowedRoutes: null,
      success: false,
      message: 'Registration failed: Invalid response data',
    };
  } catch (error: unknown) {
    store.dispatch(loginFailure()); // or registerFailure

    const message =
      get(error, 'response.data.message') ||
      'An unexpected error occurred during registration';

    return {
      user: null,
      token: null,
      allowedRoutes: null,
      success: false,
      message,
    };
  }
};

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

      return {
        user,
        token,
        allowedRoutes,
        success: true,
        message: 'Login successful',
      };
    }

    return {
      user,
      token,
      allowedRoutes,
      success: false,
      message: 'Login failed: Invalid response data',
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
  registerUser,
};

export default AuthService;
