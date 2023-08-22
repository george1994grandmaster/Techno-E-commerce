import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { RootStore } from './store';
import { Form } from '../types';

const initialState: Form = {
  formType: "",
  loading: 'idle',
  error: null,
};

const formSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectForm: (state, action: PayloadAction<string> ) => {
     state.formType = action.payload;
    },
  },
});

export const { selectForm } = formSlice.actions;
export default formSlice.reducer;
export const selectFormType = (state: RootStore) => state.form.formType;