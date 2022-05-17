import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getRank } from "../../components";


interface covidData {
    covidData: any,
    loading: boolean,
    error: string | null
}

const defaultState: covidData = {
    covidData: undefined,
    loading: true,
    error: null
}

export const covidDataSlice = createSlice({
    name: 'covidData',
    initialState: defaultState,
    reducers: {
        fetchSuccess: (_state, action) => {
            return {
                covidData: getRank(action.payload),
                loading: false,
                error: null
            }
        },
        fetchFail: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
            state.loading = false;
            console.log(state.error)
        }
    },
})

export const { fetchSuccess, fetchFail } = covidDataSlice.actions
export default covidDataSlice.reducer;