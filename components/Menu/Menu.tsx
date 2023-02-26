import { useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ContentContainer } from '@/components/Container/ContentContaeiner'
import { Modal } from '../Modal/Modal'
import { useActions, useAppSelector } from '@/hooks/useRedux'
import { useNav } from '@/hooks/useNav'
import styles from "../../styles/menu.module.scss"

export const Menu = () => {
    const { language } = useAppSelector(state => state.global)
    const router = useRouter()
    const { setNavbar, setLanguage } = useActions()
    const navData = useNav({ hidden: false })
    const containerRef = useRef<HTMLInputElement>(null);

    const close = (p: string | undefined): void => {
        const elemMenu = document.getElementById("menu")
        if (elemMenu) {
            elemMenu.classList.add("hide_menu")
            setTimeout(() => {
                setNavbar(false)
                if (p) {
                    router.push(p)
                }
            }, 980)
        }
    }
    const keyHandler = (e: React.KeyboardEvent): void => {
        if (e.code === "Escape") {
            close(undefined)
        }
    }
    useEffect(() => {
        containerRef.current?.focus()
    }, [])
    return (
        <Modal>
            <div ref={containerRef} tabIndex={0} onKeyDown={keyHandler} id={"menu"} className={styles.menu_container}>
                <ContentContainer>
                    <div className={styles.close_box}>
                        <svg onClick={() => close(undefined)} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 1L1 19M1 1L19 19" stroke="#FAFAFA" />
                        </svg>
                    </div>
                    <div className={styles.nav_menu}>
                        {navData.map((i, index) => (
                            <p onClick={() => close(i.url)} key={`nav_menu${i.url}${index}`} className={styles.wrap_nav}>{i.title}</p>
                        ))}
                    </div>
                    <div className={styles.lang_box}>
                        <p
                            onClick={() => setLanguage("en")}
                            data-lang={language === "en" ? "active" : ""}>English</p>

                        <p
                            onClick={() => setLanguage("bel")}
                            data-lang={language === "bel" ? "active" : ""} >Беларуская</p>
                        <p
                            onClick={() => setLanguage("rus")}
                            data-lang={language === "rus" ? "active" : ""} >Русский</p>

                    </div>
                </ContentContainer>
            </div>
        </Modal>
    )
}
