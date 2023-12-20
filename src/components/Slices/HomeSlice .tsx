import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HomeState {
    showModalFirst: boolean;
    showModalSecond: boolean;
    showDosageModal: boolean;
    showModalBanner: boolean;
    selectedButton: number | null;
    tableData: TableRow[];
    inputValueFirst: string;
    itemsModalFirst: string[];
}

interface TableRow {
    id: number;
    medication: string;
    path: string;
    start: string;
    end: string;
    session: number;
    days: number;
}

const initialState: HomeState = {
    showModalFirst: false,
    showModalSecond: false,
    showDosageModal: false,
    showModalBanner: false,
    selectedButton: null,
    tableData: [
        { id: 1, medication: 'Medication 1', path: 'Path 1', start: 'Start 1', end: 'End 1', session: 1, days: 7 },
        { id: 2, medication: 'Medication 2', path: 'Path 2', start: 'Start 2', end: 'End 2', session: 2, days: 14 },
    ],
    inputValueFirst: '',
    itemsModalFirst: [
        'Лекарственный препарат №1',
        'Лекарственный препарат №2',
        'Лекарственный препарат №3',
        'Лекарственный препарат №4',
    ],
};

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setShowModalFirst: (state, action: PayloadAction<boolean>) => {
            state.showModalFirst = action.payload;
        },
        setShowModalSecond: (state, action: PayloadAction<boolean>) => {
            state.showModalSecond = action.payload;
        },
        setShowDosageModal: (state, action: PayloadAction<boolean>) => {
            state.showDosageModal = action.payload;
        },
        setShowModalBanner: (state, action: PayloadAction<boolean>) => {
            state.showModalBanner = action.payload;
        },
        setSelectedButton: (state, action: PayloadAction<number | null>) => {
            state.selectedButton = action.payload;
        },
        setTableData: (state, action: PayloadAction<TableRow[]>) => {
            state.tableData = action.payload;
        },
        setInputValueFirst: (state, action: PayloadAction<string>) => {
            state.inputValueFirst = action.payload;
        },
        setItemsModalFirst: (state, action: PayloadAction<string[]>) => {
            state.itemsModalFirst = action.payload;
        },
        addTableRow: (state) => {
            const newId = state.tableData.length + 1;
            const newRow: TableRow = {
                id: newId,
                medication: 'New Medication',
                path: 'New Path',
                start: 'New Start',
                end: 'New End',
                session: state.selectedButton || 1,
                days: 0,
            };
            state.tableData = [...state.tableData, newRow];
        },
    },
});

export const {
    setShowModalFirst,
    setShowModalSecond,
    setShowDosageModal,
    setShowModalBanner,
    setSelectedButton,
    setTableData,
    setInputValueFirst,
    setItemsModalFirst,
    addTableRow,
} = homeSlice.actions;

export default homeSlice.reducer;
