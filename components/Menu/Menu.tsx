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

    const close = (p: string | undefined): void => {
        const elemMenu = document.getElementById("menu")
        if (elemMenu) {
            elemMenu.classList.add("hide_menu")
            setTimeout(() => {
                setNavbar(false)
                if (p) {
                    router.push(p)
                }
            }, 1000)
        }
    }

    return (
        <Modal>
            <div id={"menu"} className={styles.menu_container}>
                <ContentContainer>
                    <div className={styles.close_box}>
                        <svg onClick={() => close(undefined)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 1L1 17" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1 1L17 17" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                            onClick={() => setLanguage("rus")}
                            data-lang={language === "rus" ? "active" : ""} >Russian</p>
                    </div>
                </ContentContainer>
            </div>
        </Modal>
    )
}
