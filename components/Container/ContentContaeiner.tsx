import styles from "../../styles/container.module.scss"
interface ContentContainerProps {
    children: React.ReactNode;
}

export const ContentContainer = ({ children }: ContentContainerProps) => {
    return (
        <div className={styles.content_container}>
            {children}
        </div>
    )
}