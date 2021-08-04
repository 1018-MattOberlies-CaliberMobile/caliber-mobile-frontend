import { AnyAction } from 'redux';
import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import userReducer from './slices/user.slice';
import batchReducer from './slices/batch.slice';
import weekReducer from './slices/week.slice';

const store = configureStore({
  reducer: {
    user: userReducer,
    batch: batchReducer,
    week: weekReducer,
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
