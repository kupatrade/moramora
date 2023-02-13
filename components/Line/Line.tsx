import styles from "../../styles/line.module.scss"

interface LineProps {
    title: string
}

export const Line = ({ title }: LineProps) => {
    return (
        <div className={styles.line_container}>
            <p>{title}</p>
            <div className={styles.line}></div>
        </div>
    )
}