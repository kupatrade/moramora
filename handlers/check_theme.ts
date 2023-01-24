import { themeType } from "@/interfaces/slices/global"
export const check_theme = (): themeType => {
    if (typeof window !== "undefined") {
        window.localStorage.setItem("theme", window.localStorage.getItem("theme") || "light")
        return window.localStorage.getItem('theme') as themeType || 'light'

    }
    return "light"
}