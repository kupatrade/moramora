import React, { useEffect, useLayoutEffect } from 'react';
import { useAppSelector } from '../hooks/useRedux';
import i18n from '../i18n/i18n';

type Props = {
    children: JSX.Element | JSX.Element[]
}

export const LangugesSubscribe: React.FC<Props> = ({ children }) => {
    const { language } = useAppSelector((state) => state.global)
    const stylesFonts = (p: string): void => {
        const documetHtml = document.documentElement
        if (p === 'rus') {
            documetHtml.style.setProperty("--font-light", "GolosTextWebRegular")
            documetHtml.style.setProperty("--font-medium", "GolosTextWebMedium")
            return
        }

        documetHtml.style.setProperty("--font-light", "Poppins-Light")
        documetHtml.style.setProperty("--font-medium", "Poppins-Medium")
    }

    useEffect(() => {
        stylesFonts(language)
        i18n.changeLanguage(language)
    }, [language])
    return (<>{children}</>)
}