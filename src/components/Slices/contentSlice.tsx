// contentSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContentState {
  selectedProgram: string | null;
  selectedButton: string | null;
  isModalOpen: boolean;
  modalContent: string;
  inputValueFirst: string;
  itemsModalFirst: string[];
  isNeedleTypeModalOpen: boolean;
  isCatheterTypeModalOpen: boolean;
  needleTypeContent: string;
  catheterTypeContent: string;
  showModalBanner: boolean;
}

const initialState: ContentState = {
  selectedProgram: null,
  selectedButton: null,
  isModalOpen: false,
  modalContent: '',
  inputValueFirst: '',
  itemsModalFirst: [],
  isNeedleTypeModalOpen: false,
  isCatheterTypeModalOpen: false,
  needleTypeContent: '',
  catheterTypeContent: '',
  showModalBanner: false,
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setSelectedProgram: (state, action: PayloadAction<string>) => {
      state.selectedProgram = action.payload;
    },
    setSelectedButton: (state, action: PayloadAction<string | null>) => {
      state.selectedButton = action.payload;
    },
    setIsModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
    setModalContent: (state, action: PayloadAction<string>) => {
      state.modalContent = action.payload;
    },
    setInputValueFirst: (state, action: PayloadAction<string>) => {
      state.inputValueFirst = action.payload;
    },
    setItemsModalFirst: (state, action: PayloadAction<string[]>) => {
      state.itemsModalFirst = action.payload;
    },
    setIsNeedleTypeModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isNeedleTypeModalOpen = action.payload;
    },
    setIsCatheterTypeModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isCatheterTypeModalOpen = action.payload;
    },
    setNeedleTypeContent: (state, action: PayloadAction<string>) => {
      state.needleTypeContent = action.payload;
    },
    setCatheterTypeContent: (state, action: PayloadAction<string>) => {
      state.catheterTypeContent = action.payload;
    },
    setShowModalBanner: (state, action: PayloadAction<boolean>) => {
      state.showModalBanner = action.payload;
    },
  },
});

export const {
  setSelectedProgram,
  setSelectedButton,
  setIsModalOpen,
  setModalContent,
  setInputValueFirst,
  setItemsModalFirst,
  setIsNeedleTypeModalOpen,
  setIsCatheterTypeModalOpen,
  setNeedleTypeContent,
  setCatheterTypeContent,
  setShowModalBanner,
} = contentSlice.actions;

export default contentSlice.reducer;
