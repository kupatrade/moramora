import styles from "../../styles/padding.module.scss"
interface PaddingContainerProps {
    children: React.ReactNode;
}

export const PaddingContainer = ({ children }: PaddingContainerProps) => {
    return (
        <div className={styles.padding_container}>
            {children}
        </div>
    )
}