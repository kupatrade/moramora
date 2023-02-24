import { MainLayout } from "../../layouts/MainLayout"
import { ContentContainer } from "@/components/Container/ContentContaeiner"
import { PaddingContainer } from "@/components/PaddingContainer/PaddingContainer"
import { GenInTouch } from "@/components/GetInTouch/GetInTouch"
import { Preview } from "@/components/Preview/Preview"
import { DarkContainer } from "@/components/DarkContainer/DarkContainer"
import { Line } from "@/components/Line/Line"
import { useTranslation } from "react-i18next"
import styles from "../../styles/whatwedo.module.scss"


export default function WhatWeDo() {
    const { t } = useTranslation()
    return (
        <MainLayout>
            <PaddingContainer>
                <ContentContainer>
                    <Preview title={t("whatwedo.previewSlogan")} description={t("whatwedo.previewText") as string} />
                </ContentContainer>
                <DarkContainer>
                    <ContentContainer>
                        <Line dark={true} title={t("whatwedo.servicesLabel")} />
                        <div className={styles.services_container}>
                            <div className={styles.square}>
                                <div className={styles.squere_box}>
                                    <svg className={styles.first_square} width="315" height="316" viewBox="0 0 315 316" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.67334" width="314" height="314" stroke="white" strokeWidth="1" />
                                    </svg>
                                    <svg className={styles.second_squere} width="315" height="316" viewBox="0 0 315 316" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.67334" width="314" height="314" stroke="white" />
                                    </svg>
                                </div>
                            </div>
                            <div className={styles.text_container}>
                                <div className={styles.text_box}>
                                    <p className={styles.text_main}>{t("whatwedo.firstServiceBlock.title")}</p>
                                    <div className={styles.text_main_deteils_block}>
                                        <p className={styles.text_main_deteils_text}>{t("whatwedo.firstServiceBlock.text1")}</p>
                                        <p className={styles.text_main_deteils_text}>{t("whatwedo.firstServiceBlock.text2")}</p>
                                        <p className={styles.text_main_deteils_text}>{t("whatwedo.firstServiceBlock.text3")}</p>
                                        <p className={styles.text_main_deteils_text}>{t("whatwedo.firstServiceBlock.text4")}</p>
                                    </div>
                                    <div className={styles.line}></div>
                                </div>
                                <div className={styles.text_box}>
                                    <p className={styles.text_main}>{t("whatwedo.secondServiceBlock.title")}</p>
                                    <div className={styles.text_main_deteils_block}>
                                        <p className={styles.text_main_deteils_text}>{t("whatwedo.secondServiceBlock.text1")}</p>
                                        <p className={styles.text_main_deteils_text}>{t("whatwedo.secondServiceBlock.text2")}</p>
                                        <p className={styles.text_main_deteils_text}>{t("whatwedo.secondServiceBlock.text3")}</p>
                                        <p className={styles.text_main_deteils_text}>{t("whatwedo.secondServiceBlock.text4")}</p>
                                    </div>
                                    <div className={styles.line}></div>
                                </div>
                                <div className={styles.text_box}>
                                    <p className={styles.text_main}>{t("whatwedo.thirdServiceBlock.title")}</p>
                                    <div className={styles.text_main_deteils_block}>
                                        <p className={styles.text_main_deteils_text}>{t("whatwedo.thirdServiceBlock.text1")}</p>
                                        <p className={styles.text_main_deteils_text}>{t("whatwedo.thirdServiceBlock.text2")}</p>
                                        <p className={styles.text_main_deteils_text}>{t("whatwedo.thirdServiceBlock.text3")}</p>
                                        <p className={styles.text_main_deteils_text}>{t("whatwedo.thirdServiceBlock.text4")}</p>
                                    </div>
                                    <div className={styles.line}></div>
                                </div>
                            </div>
                        </div>
                    </ContentContainer>
                </DarkContainer>
                <DarkContainer light={true}>
                    <ContentContainer>
                        <Line title={t("whatwedo.workLabel")} />
                        <div className={styles.process_container}>
                            <div className={styles.left}>
                                <p className={styles.number}>{t("whatwedo.firstProcessBlock.number")}</p>
                                <p className={styles.text}>{t("whatwedo.firstProcessBlock.title")}</p>
                            </div>
                            <div className={styles.right}>
                                {t("whatwedo.firstProcessBlock.description")}
                            </div>
                            <div className={styles.left}>
                                <p className={styles.number}>{t("whatwedo.secondProcessBlock.number")}</p>
                                <p className={styles.text}>{t("whatwedo.secondProcessBlock.title")}</p>
                            </div>
                            <div className={styles.right}>
                                {t("whatwedo.secondProcessBlock.description")}
                            </div>
                            <div className={styles.left}>
                                <p className={styles.number}>{t("whatwedo.thirdProcessBlock.number")}</p>
                                <p className={styles.text}>{t("whatwedo.thirdProcessBlock.title")}</p>
                            </div>
                            <div className={styles.right}>
                                {t("whatwedo.thirdProcessBlock.description")}
                            </div>
                            <div className={styles.left}>
                                <p className={styles.number}>{t("whatwedo.fourthProcessBlock.number")}</p>
                                <p className={styles.text}>{t("whatwedo.fourthProcessBlock.title")}</p>
                            </div>
                            <div className={styles.right}>
                                {t("whatwedo.fourthProcessBlock.description")}
                            </div>
                        </div>
                    </ContentContainer>
                </DarkContainer>
                <div className={styles.common_container}>
                    <ContentContainer>
                        <p className={styles.common_text}>{t("whatwedo.commonText")}</p>
                    </ContentContainer>
                </div>
                <ContentContainer>
                    <GenInTouch />
                </ContentContainer>
            </PaddingContainer>
        </MainLayout>
    )
}