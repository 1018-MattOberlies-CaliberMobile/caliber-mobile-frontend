import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Auth } from 'aws-amplify';
import User from '../../models/user';
import { RootState } from '../store';

export type UserState = string | null;

export type LoginCredentials = {
  username: string;
  password: string;
}

export const loginAsync = createAsyncThunk<string, LoginCredentials>(
  'user/login/async',
  async ({ username, password }, thunkAPI) => {
    try {
      // TODO: cognito auth
      const result = await Auth.signIn(username, password);
      const user = new User(result.username, result.attributes['custom:role']);
      return JSON.stringify(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const logoutAsync = createAsyncThunk<string|null>(
  'user/logout/async',
  async (thunkAPI) => null,
);

export const userSlice = createSlice({
  name: 'user',
  initialState: null as UserState,
  reducers: {
    login: (state, action: PayloadAction<string>) => action.payload,
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

export const selectUser = (state: RootState): User | null => {
  if (state.user) {
    return JSON.parse(state.user) as User;
  }
  return null;
};

export default userSlice.reducer;
