import { configureStore } from '@reduxjs/toolkit'
// import { createStore } from 'redux'
import languageReducer from './reducers/languageReducer';
import covidDataReducer from './reducers/covidDataReducer';
import userReducer from './reducers/userReducer';
import { actionLog } from './middlewares/actionLog';

export const store = configureStore({
    reducer: {
        language: languageReducer,
        covidData: covidDataReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(actionLog),
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch