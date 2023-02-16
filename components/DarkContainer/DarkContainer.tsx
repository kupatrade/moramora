import styles from "../../styles/darkcontainer.module.scss"

interface DarkContainerProps {
    children: React.ReactNode,
    light?: boolean
}

export const DarkContainer = ({ children, light = false }: DarkContainerProps) => {
    return (
        <div className={`${styles.dark_container} ${light ? styles.light : ""}`}>
            {children}
        </div>
    )
}