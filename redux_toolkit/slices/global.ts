import { createSlice } from '@reduxjs/toolkit';
import { GlobalInit } from '../../interfaces/slices/global'
import { check_language } from '../../handlers/check_language'
import { check_theme } from '../../handlers/check_theme'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: GlobalInit = {
    navbar: false,
    language: check_language(),
    theme: "dark", //check_theme()
};

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        themeTougle: (state) => {
            if (typeof window !== "undefined" && state.theme === "light") {
                state.theme = 'dark'
                window.localStorage.setItem("theme", "dark")
            }
            if (typeof window !== "undefined" && state.theme === "dark") {
                state.theme = "light"
                window.localStorage.setItem("theme", "light")
            }
        },
        setLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload
        },
    },
});


export const globalActions = globalSlice.actions;
export const globalReducer = globalSlice.reducer;

