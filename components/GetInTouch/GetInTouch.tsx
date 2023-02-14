import Link from "next/link"
import { useTranslation } from "react-i18next"
import styles from "../../styles/getintouch.module.scss"

export const GenInTouch = () => {
    const { t } = useTranslation()
    return (
        <div className={styles.get_in_container}>
            <div className={styles.get_in_box}>
                <p className={styles.pre}>{t("getInTouchBlock.pre")}</p>
                <Link href={"/contacts#contact-form"} scroll={false}>
                    <p className={styles.link}>{t("getInTouchBlock.getInTouch")}</p>
                </Link>
            </div>
        </div>
    )
}