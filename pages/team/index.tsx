import Image from "next/image"
import { MainLayout } from "../../layouts/MainLayout"
import { ContentContainer } from "@/components/Container/ContentContaeiner"
import { PaddingContainer } from "@/components/PaddingContainer/PaddingContainer"
import { GenInTouch } from "@/components/GetInTouch/GetInTouch"
import { Line } from "@/components/Line/Line"
import { useTranslation } from "react-i18next"
import styles from "../../styles/team.module.scss"
import stylesContact from "../../styles/contact.module.scss"

import photo1 from "../../public/photo/photo1.png"
import photo2 from "../../public/photo/photo2.png"
import photo3 from "../../public/photo/photo3.png"

export default function Team() {
    const { t } = useTranslation()
    return (
        <MainLayout>
            <PaddingContainer>
                <ContentContainer>
                    <div className={`${styles.preview} ${stylesContact.pre_contact_block}`}>
                        <h1>{t("team.previewSlogan")}</h1>
                        <div className={styles.mini_text}>
                            <p>{t("team.previewText")}</p>
                        </div>
                    </div>
                </ContentContainer>
                <div className={styles.pictures_container}>
                    <ContentContainer>
                        <Line dark={true} title={t("team.ourTeam")} />
                        <div className={styles.pictures_box}>
                            <div className={styles.pictures_card}>
                                <Image src={photo1} alt="photo1" />
                                <p className={styles.name}>Alex Vork</p>
                                <p className={styles.pro}>Founder</p>
                            </div>
                            <div className={styles.pictures_card}>
                                <Image src={photo2} alt="photo2" />
                                <p className={styles.name}>David Nobble</p>
                                <p className={styles.pro}>Full-Stack developer</p>
                            </div>
                            <div className={styles.pictures_card}>
                                <Image src={photo3} alt="photo3" />
                                <p className={styles.name}>Maria Sole</p>
                                <p className={styles.pro}>Art director</p>
                            </div>
                        </div>
                    </ContentContainer>
                </div>
                <ContentContainer>
                    <GenInTouch />
                </ContentContainer>
            </PaddingContainer>
        </MainLayout>
    )
}