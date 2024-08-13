import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ModalState } from '../../../types/modal';

const initialState: ModalState = {
  open: false,
  title: '',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    closeModal: (state) => {
      state.open = false;
      state.title = '';
    },
    openModal: (state, action: PayloadAction<string>) => {
      state.open = true;
      state.title = action.payload;
    },
  },
});

export const { closeModal, openModal } = modalSlice.actions;

export default modalSlice.reducer;
