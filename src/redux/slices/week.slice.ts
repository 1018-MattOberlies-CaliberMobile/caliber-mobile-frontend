import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type WeekState = string;

export const weekSlice = createSlice({
  name: 'week',
  initialState: 'week1',
  reducers: {
    setWeek: (state, action: PayloadAction<WeekState>) => action.payload,
    clear: () => 'week1',
  },
});

export const { setWeek, clear } = weekSlice.actions;

export const selectWeek = (state: RootState): string => {
  if (state.week) {
    return state.week as string;
  }
  return 'week1';
};

export default weekSlice.reducer;
