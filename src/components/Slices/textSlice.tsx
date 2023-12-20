// textSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TextState {
  recommendations: string[];
  doctorInfo: string;
}

const initialState: TextState = {
  recommendations: [],
  doctorInfo: '',
};

const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    addRecommendation: (state, action: PayloadAction<string>) => {
      state.recommendations.push(action.payload);
    },
    setDoctorInfo: (state, action: PayloadAction<string>) => {
      state.doctorInfo = action.payload;
    },
  },
});

export const { addRecommendation, setDoctorInfo } = textSlice.actions;
export default textSlice.reducer;
