export type themeType = "light" | "dark"
export interface GlobalInit {
    navbar: boolean,
    language: "rus" | "en" | "bel",
    theme: themeType,
    contentLoad: boolean
}