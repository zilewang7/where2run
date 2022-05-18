import { configureStore } from '@reduxjs/toolkit'
// import { createStore } from 'redux'
import languageReducer from './reducers/languageReducer';
import covidDataReducer from './reducers/covidDataReducer';
import { actionLog } from './middlewares/actionLog';

export const store = configureStore({
    reducer: {
        language: languageReducer,
        covidData: covidDataReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(actionLog)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>