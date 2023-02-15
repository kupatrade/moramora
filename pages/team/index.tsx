import Image from "next/image"
import { MainLayout } from "../../layouts/MainLayout"
import { ContentContainer } from "@/components/Container/ContentContaeiner"
import { PaddingContainer } from "@/components/PaddingContainer/PaddingContainer"
import { GenInTouch } from "@/components/GetInTouch/GetInTouch"
import { Preview } from "@/components/Preview/Preview"
import { DarkContainer } from "@/components/DarkContainer/DarkContaine"
import { Line } from "@/components/Line/Line"
import { useTranslation } from "react-i18next"
import styles from "../../styles/team.module.scss"

import photo1 from "../../public/photo/photo1.png"
import photo2 from "../../public/photo/photo2.png"
import photo3 from "../../public/photo/photo3.png"

export default function Team() {
    const { t } = useTranslation()
    return (
        <MainLayout>
            <PaddingContainer>
                <ContentContainer>
                    <Preview title={t("team.previewSlogan")} description={t("team.previewText") as string} />
                </ContentContainer>
                <DarkContainer>
                    <ContentContainer>
                        <Line dark={true} title={t("team.ourTeam")} />
                        <div className={styles.pictures_box}>
                            <div className={styles.pictures_card}>
                                <div className={styles.box_image}>
                                    <Image src={photo1} alt="photo1" />
                                </div>
                                <p className={styles.name}>Alex Vork</p>
                                <p className={styles.pro}>Founder</p>
                            </div>
                            <div className={styles.pictures_card}>
                                <div className={styles.box_image}>
                                    <Image src={photo2} alt="photo2" />
                                </div>
                                <p className={styles.name}>David Nobble</p>
                                <p className={styles.pro}>Full-Stack developer</p>
                            </div>
                            <div className={styles.pictures_card}>
                                <div className={styles.box_image}>
                                    <Image src={photo3} alt="photo3" />
                                </div>
                                <p className={styles.name}>Maria Sole</p>
                                <p className={styles.pro}>Art director</p>
                            </div>
                        </div>
                    </ContentContainer>
                </DarkContainer>
                <ContentContainer>
                    <GenInTouch />
                </ContentContainer>
            </PaddingContainer>
        </MainLayout>
    )
}