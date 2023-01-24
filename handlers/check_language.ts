export const check_language = (): string => {
    if (typeof window !== "undefined") {
        return localStorage.getItem('lang') as string || 'en'

    }
    return "en"
}