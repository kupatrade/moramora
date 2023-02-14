import { MainLayout } from "../../layouts/MainLayout"
import { ContentContainer } from "@/components/Container/ContentContaeiner"
import { PaddingContainer } from "@/components/PaddingContainer/PaddingContainer"
import { GenInTouch } from "@/components/GetInTouch/GetInTouch"
import { Preview } from "@/components/Preview/Preview"
import { DarkContainer } from "@/components/DarkContainer/DarkContaine"
import { Line } from "@/components/Line/Line"
import { useTranslation } from "react-i18next"
import style from "../../styles/about.module.scss"


export default function About() {
    const { t } = useTranslation()
    return (
        <MainLayout>
            <PaddingContainer>
                <ContentContainer>
                    <Preview title={t("about.previewSlogan")} description={t("about.previewText") as string} />
                </ContentContainer>
                <DarkContainer>
                    <ContentContainer>
                        <Line dark={true} title={t("about.aboutUsLabel")} />
                        <div className={style.text_container}>
                            <p className={style.left}>
                                {t("about.leftText")}
                            </p>
                            <p className={style.right}>
                                {t("about.rightText")}
                            </p>
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