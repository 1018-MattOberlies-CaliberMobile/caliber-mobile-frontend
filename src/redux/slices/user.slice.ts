import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Auth } from 'aws-amplify';
import User from '../../models/user';
import { RootState } from '../store';

export type UserState = User | null;

export type LoginCredentials = {
  username: string;
  password: string;
}

export const loginAsync = createAsyncThunk<User, LoginCredentials>(
  'user/login/async',
  async ({ username, password }, thunkAPI) => {
    try {
      // TODO: cognito auth
      const result = await Auth.signIn(username, password);
      console.log(result);
      const user = new User(result.username, result.attributes['custom:role']);
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const logoutAsync = createAsyncThunk<User|null>(
  'user/logout/async',
  async (thunkAPI) => null,
);

export const userSlice = createSlice({
  name: 'user',
  initialState: null as UserState,
  reducers: {
    login: (state, action: PayloadAction<User>) => action.payload,
    logout: (state) => null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
      // return null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => action.payload)
      .addCase(loginAsync.rejected, (state, action) => {
        console.log(action.error);
      })
      .addCase(logoutAsync.pending, (state) => {
      // return null;
      })
      .addCase(logoutAsync.fulfilled, (state, action) => action.payload)
      .addCase(logoutAsync.rejected, (state, action) => {
        console.log(action.error);
      });
  },
});
export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
