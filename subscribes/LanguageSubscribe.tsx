import React, { useEffect } from 'react';
import { useAppSelector } from '../hooks/useRedux';
import i18n from '../i18n/i18n';

type Props = {
    children: JSX.Element | JSX.Element[]
}

export const LangugesSubscribe: React.FC<Props> = ({ children }) => {
    const { language } = useAppSelector((state) => state.global)
    useEffect(() => {
        i18n.changeLanguage(language)
    }, [language])
    return <> {children} </>
}