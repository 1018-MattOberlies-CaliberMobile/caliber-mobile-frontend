import { AnyAction } from 'redux';
import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import userReducer from './slices/user.slice';
import batchReducer from './slices/batch.slice';

const store = configureStore({
  reducer: {
    user: userReducer,
    batch: batchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export default store;
