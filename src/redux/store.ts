import { configureStore } from '@reduxjs/toolkit'
// import { createStore } from 'redux'
import languageReducer from './reducers/languageReducer';
import covidDataReducer from './reducers/covidDataReducer';

export const store = configureStore({
    reducer: {
        language: languageReducer,
        covidData: covidDataReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>