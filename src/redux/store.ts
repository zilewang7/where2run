import { configureStore } from '@reduxjs/toolkit'
// import { createStore } from 'redux'
import languageReducer from './languageReducer';

export const store = configureStore({
    reducer: {
        language: languageReducer,
    },
});