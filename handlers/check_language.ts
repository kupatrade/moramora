import { AnswerCheckLanguage } from "@/interfaces/interface"
export const check_language = (): AnswerCheckLanguage => {
    if (typeof window !== "undefined") {
        return localStorage.getItem('lang') as AnswerCheckLanguage || 'en'
    }
    return "en"
}