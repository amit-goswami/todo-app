import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IAuthState, IUser } from './auth.interface';

const initialState: IAuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  allowedRoutes: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: state => {
      state.loading = true;
    },
    loginSuccess: (
      state,
      action: PayloadAction<{ user: IUser; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;
    },
    loginFailure: state => {
      state.loading = false;
    },
    logout: state => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
    updateUser: (state, action: PayloadAction<Partial<IUser>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
    purge: state => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.allowedRoutes = null;
      // Clear the local storage or any other persistent storage if needed
      localStorage.clear();
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, updateUser } =
  authSlice.actions;

export default authSlice.reducer;
