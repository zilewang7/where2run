import { createSlice } from "@reduxjs/toolkit"

interface languageState {
    language: 'zh' | 'en' | 'jp'
    languageList: {
        name: string,
        code: string
    }[]
}

const defaultState: languageState = {
    language: "zh",
    languageList: [
        { name: "中文", code: "zh" },
        { name: "English", code: "en" },
        { name: "家乡话", code: "jp" },
    ],
}

export const languageSlice = createSlice({
    name: 'language',
    initialState: defaultState,
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload;
        }
    }
})

export default languageSlice.reducer;