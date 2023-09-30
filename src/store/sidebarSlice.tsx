import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootStore } from './store';
import { SidebarCondition } from '../types';

const initialState: SidebarCondition = {
  isSidebarOpen: false
};


const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setSidebarPosition: (state, action: PayloadAction<boolean>) => {
      const sidebarPosition = action.payload;
      state.isSidebarOpen = sidebarPosition;
      console.log(state.isSidebarOpen);
    },
  },
});

export const { setSidebarPosition } = sidebarSlice.actions;
export default sidebarSlice.reducer;
export const selectSidebarPosition = (state: RootStore) => state.sidebar.isSidebarOpen;
