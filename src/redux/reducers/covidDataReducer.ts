import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";


// interface covidData {
//     covidData: any,
//     loading: boolean,
//     error: string | null
// }

// const defaultState: covidData = {
//     covidData: undefined,
//     loading: true,
//     error: null
// }

// export const GetData = createAsyncThunk("getData", async () => {
//     try {
//         const { data } = await axios.get("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.json")
//         console.log('thunkData', data)
//         return {
//             covidData: data,
//             loading: false,
//             error: null
//         };
//     } catch (e: any) {
//         return {
//             covidData: undefined,
//             loading: false,
//             error: e.messages
//         };
//     }
// })

export const fetchData = createAsyncThunk(
    'users/fetchByIdStatus',
    async () => {
        const response = await axios.get("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.json")
        return response.data
    }
)



export const covidDataSlice = createSlice({
    name: 'covidData',
    initialState: {},
    reducers: {
        // setCovidData: (state, action) => {
        //     state = {
        //         covidData: action.payload,
        //         loading: false,
        //         error: null
        //     }
        //     console.log('setCovidData', state)
        // }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(GetData.fulfilled, (state, action) => {
    //         console.log(action.payload, 'payload')
    //         state = action.payload
    //         console.log('state', state)
    //     })
    // },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        // builder.addCase(fetchData.fulfilled, (state, action) => {
        //     // Add user to the state array
        //     //   state.push(action.payload)
        //     state = action.payload
        //     console.log(state)
        // })
    },
})

// export const { setCovidData } = covidDataSlice.actions
export default covidDataSlice.reducer;