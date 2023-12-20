
import { configureStore } from '@reduxjs/toolkit';
import contentReducer from '../Slices/contentSlice';
import bannerReducer from '../Slices/bannerSlice'
import homeReducer from '../Slices/HomeSlice '
import textReducer from '../Slices/textSlice'
const store = configureStore({
    reducer: {
        content: contentReducer,
        banner: bannerReducer,
        home: homeReducer,
        text: textReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
