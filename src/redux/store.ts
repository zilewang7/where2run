import { configureStore } from '@reduxjs/toolkit'
// import { createStore } from 'redux'
import languageReducer from './language/languageReducer';

export const store = configureStore({
    reducer: {
        language: languageReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;