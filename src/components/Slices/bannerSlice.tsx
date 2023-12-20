import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TableRow {
  id: number;
  medication: string;
  path: string;
  start: string;
  end: string;
  session: number;
  days: number;
}

interface BannerState {
  showModalFirst: boolean;
  showModalSecond: boolean;
  selectedButton: number | null;
  tableData: TableRow[];
}

const initialState: BannerState = {
  showModalFirst: false,
  showModalSecond: false,
  selectedButton: null,
  tableData: [
    { id: 1, medication: 'Medication 1', path: 'Path 1', start: 'Start 1', end: 'End 1', session: 1, days: 7 },
    { id: 2, medication: 'Medication 2', path: 'Path 2', start: 'Start 2', end: 'End 2', session: 2, days: 14 },
  ],
};

const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {
    setShowModalFirst: (state, action: PayloadAction<boolean>) => {
      state.showModalFirst = action.payload;
    },
    setShowModalSecond: (state, action: PayloadAction<boolean>) => {
      state.showModalSecond = action.payload;
    },
    setSelectedButton: (state, action: PayloadAction<number | null>) => {
      state.selectedButton = action.payload;
    },
    setTableData: (state, action: PayloadAction<TableRow[]>) => {
      state.tableData = action.payload;
    },
    // Add more reducers as needed
  },
});

export const {
  setShowModalFirst,
  setShowModalSecond,
  setSelectedButton,
  setTableData,
  // Add more action creators as needed
} = bannerSlice.actions;

export default bannerSlice.reducer;
