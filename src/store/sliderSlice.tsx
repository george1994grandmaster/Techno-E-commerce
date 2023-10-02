import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootStore } from './store';
import { CurrentSlideIndex } from '../types';

const initialState: CurrentSlideIndex = {
  slideIndex: null
};


const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    setSlideIndex: (state, action: PayloadAction<number | null>) => {
      const index = action.payload;
      state.slideIndex = index;
      console.log(state.slideIndex);
    },
  },
});

export const { setSlideIndex } = sliderSlice.actions;
export default sliderSlice.reducer;
export const selectSlideIndex = (state: RootStore) => state.slider.slideIndex;
