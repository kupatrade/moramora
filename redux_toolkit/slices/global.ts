import { createSlice } from '@reduxjs/toolkit';
import { GlobalInit } from '../../interfaces/slices/global'
import { check_language } from '../../handlers/check_language'
import { check_theme } from '../../handlers/check_theme'
import { AnswerCheckLanguage } from '@/interfaces/interface';
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: GlobalInit = {
    navbar: false,
    language: check_language(),
    theme: "dark", //check_theme()
    contentLoad: true
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
        setLanguage: (state, action: PayloadAction<AnswerCheckLanguage>) => {
            state.language = action.payload
            if (typeof window !== "undefined") {
                localStorage.setItem('lang', action.payload)
            }
        },
        setNavbar: (state, action: PayloadAction<boolean>) => {
            state.navbar = action.payload
        },
        setContentLoaded: (state, action: PayloadAction<boolean>) => {
            state.contentLoad = action.payload
        },
    },
});


export const globalActions = globalSlice.actions;
export const globalReducer = globalSlice.reducer;

