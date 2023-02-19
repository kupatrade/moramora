import { useEffect } from "react"
import styles from "../../styles/cursor.module.scss"

interface CursorProps {
    children?: React.ReactNode
}

export const Cursor = ({ children }: CursorProps) => {
    const mouseObserver = (e: MouseEvent): void => {
        const el = document.querySelector(`.${styles.follow_cursor}`) as HTMLElement
        if (!el) {
            return
        }
        const target = e.target as HTMLElement


        if (target && target.closest("#get-in-touch")) {
            document.documentElement.style.setProperty('--x', (e.clientX) + 'px');
            document.documentElement.style.setProperty('--y', (e.clientY) + 'px');
            el.classList.add(styles.follow_cursor_active)
            const text = document.getElementById("get-in-touch") as HTMLElement
            if (text) {
                text.style.color = "transparent"
                text.style.background = ""
            }
        } else {
            el.classList.remove(styles.follow_cursor_active)
            document.documentElement.style.setProperty('--x', (-100) + 'px');
            document.documentElement.style.setProperty('--y', (-100) + 'px');
            const text = document.getElementById("get-in-touch") as HTMLElement
            if (text) {
                text.style.color = "#121212"
                text.style.background = "none"
            }
        }

        let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
        el.style.transform = `translate(${e.pageX}px, ${e.pageY - posTop}px)`
    }
    useEffect(() => {
        window.addEventListener("mousemove", mouseObserver)
        return () => {
            window.removeEventListener("mousemove", mouseObserver)
        }
    }, [])
    return (
        <div className={styles.follow_cursor_container}>
            {children}
            <div className={styles.follow_cursor}></div>
        </div>
    )
}