import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Batch from '../../models/batch';
import { RootState } from '../store';

export type BatchState = string | null;

export const batchSlice = createSlice({
  name: 'batch',
  initialState: null as BatchState,
  reducers: {
    setBatch: (state, action: PayloadAction<Batch | null>) => JSON.stringify(action.payload),
    clear: () => null,
  },
});

export const { setBatch, clear } = batchSlice.actions;

export const selectBatch = (state: RootState): Batch | null => {
  if (state.batch) {
    return JSON.parse(state.batch) as Batch;
  }
  return null;
};

export default batchSlice.reducer;
