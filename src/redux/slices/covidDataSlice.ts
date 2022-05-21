import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios";
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

export const getCovidData = createAsyncThunk(
    'covidData/getCovidData',

    async () => {
        const { data } = await axios.get("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.json")
        return data;
    }
)

export const covidDataSlice = createSlice({
    name: 'covidData',
    initialState: defaultState,
    reducers: {

    },
    extraReducers: {
        [getCovidData.fulfilled.type]: (_state, action) => {
            return {
                covidData: getRank(action.payload),
                loading: false,
                error: null
            }
        },
        [getCovidData.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
            state.loading = false;
            console.log(state.error)
        }
    }
})

export default covidDataSlice.reducer;