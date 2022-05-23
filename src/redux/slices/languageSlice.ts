import { createSlice } from "@reduxjs/toolkit"
import i18n from "i18next"

export interface languageState {
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
            i18n.changeLanguage(action.payload);
            state.language = action.payload;
        },
        getLanguageCookie: (_, action) => {
            i18n.changeLanguage(action.payload.language);
            return {
                ...action.payload
            }
        }
    }
})

export const { changeLanguage, getLanguageCookie } = languageSlice.actions;
export default languageSlice.reducer;