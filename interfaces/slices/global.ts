export type themeType = "light" | "dark"
export interface GlobalInit {
    navbar: boolean,
    language: "rus" | "en",
    theme: themeType,
    contentLoad: boolean
}