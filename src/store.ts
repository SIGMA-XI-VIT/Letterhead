// store.ts
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  formData: { salutation: string; message: string; signature: string };
  isFormSubmitted: boolean;
}

const initialState: FormState = {
  formData: { salutation: '', message: '', signature: '' },
  isFormSubmitted: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    submitForm: (state, action: PayloadAction<FormState['formData']>) => {
      state.formData = action.payload;
      state.isFormSubmitted = true;
    },
  },
});

export const { submitForm } = formSlice.actions;

const store = configureStore({
  reducer: {
    form: formSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
