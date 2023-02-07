import { useEffect } from "react"
import { useAppSelector } from "@/hooks/useRedux"
interface ThemeSubscribeProps {
    children: React.ReactNode
}
export const ThemeSubscribe = ({ children }: ThemeSubscribeProps) => {
    const { theme } = useAppSelector(state => state.global)
    const setTheme = (p: string): void => {
        const html = document.querySelector("html")
        if (html) {
            html.removeAttribute("data-theme")
            html.setAttribute("data-theme", p)
        }
    }
    useEffect(() => {
        setTheme(theme)
    }, [theme])
    return (<>{children}</>)
}