import styles from "../../styles/line.module.scss"

interface LineProps {
    title: string,
    dark?: boolean
}

export const Line = ({ title, dark = false }: LineProps) => {
    return (
        <div data-dark-line={dark} style={{ width: "100%" }}>
            <div className={styles.line_container}>
                <p>{title}</p>
                <div className={styles.line}></div>
            </div>
        </div>
    )
}