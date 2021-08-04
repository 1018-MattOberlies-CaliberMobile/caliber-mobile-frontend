import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type WeekState = string | null;

export const weekSlice = createSlice({
  name: 'week',
  initialState: null as WeekState,
  reducers: {
    setWeek: (state, action: PayloadAction<WeekState>) => action.payload,
    clear: () => null,
  },
});

export const { setWeek, clear } = weekSlice.actions;

export const selectWeek = (state: RootState): string | null => {
  if (state.week) {
    return state.week as string;
  }
  return null;
};

export default weekSlice.reducer;
