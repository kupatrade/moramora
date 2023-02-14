import styles from "../../styles/preview.module.scss"

interface PreviewProps {
    title: string,
    description?: string
}

export const Preview = ({ title, description = "" }: PreviewProps) => {
    return (
        <div className={`${description ? styles.preview : ""} ${styles.pre_contact_block}`}>
            <h1>{title}</h1>
            {description && (
                <div className={styles.mini_text}>
                    <p>{description}</p>
                </div>
            )}
        </div>
    )
}