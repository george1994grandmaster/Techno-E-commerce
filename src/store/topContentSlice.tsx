import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootStore } from './store';
import { ContentValue } from '../types';

const initialState: ContentValue = {
  contentValue: "",
  loading: 'idle',
  error: null,
};

const topContentSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateValue: (state, action: PayloadAction<string> ) => {
     state.contentValue = action.payload;
    },
  },
});

export const { updateValue } = topContentSlice.actions;
export default topContentSlice.reducer;
export const selectContentValue = (state: RootStore) => state.topContent.contentValue;