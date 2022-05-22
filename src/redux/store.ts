import { configureStore } from '@reduxjs/toolkit'
import languageReducer from './slices/languageSlice';
import covidDataReducer from './slices/covidDataSlice';
import userSlice from './slices/userSlice';
import shoppingCartSlice from './slices/shoppingCartSlice';
import { actionLog } from './middlewares/actionLog';

export const store = configureStore({
    reducer: {
        language: languageReducer,
        covidData: covidDataReducer,
        user: userSlice,
        shoppingCart: shoppingCartSlice,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(actionLog),
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch