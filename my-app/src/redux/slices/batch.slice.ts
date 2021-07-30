import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Batch from '../../models/batch';
import { RootState } from '../store';

export type BatchState = Batch | null;

export const batchSlice = createSlice({
  name: 'batch',
  initialState: null as BatchState,
  reducers: {
    setBatch: (state, action: PayloadAction<Batch | null>) => action.payload,
    clear: () => null,
  },
});

export const { setBatch, clear } = batchSlice.actions;

export const getBatch = (state: RootState): BatchState => state.batch;

export default batchSlice.reducer;
