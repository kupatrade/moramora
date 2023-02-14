import styles from "../../styles/darkcontainer.module.scss"

interface DarkContainerProps {
    children: React.ReactNode
}

export const DarkContainer = ({ children }: DarkContainerProps) => {
    return (
        <div className={styles.dark_container}>
            {children}
        </div>
    )
}