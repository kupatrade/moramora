import dynamic from "next/dynamic"
import { MainLayout } from "../../layouts/MainLayout"
import { ContentContainer } from "@/components/Container/ContentContaeiner"
import { PaddingContainer } from "@/components/PaddingContainer/PaddingContainer"
import { Preview } from "@/components/Preview/Preview"
import { Line } from "@/components/Line/Line"
import { Form } from "@/components/Form/Form"
import { useTranslation } from "react-i18next"
import styles from "../../styles/contact.module.scss"

const Map = dynamic(() => import("../../components/Map/Map"), { ssr: false })

export default function Contacts() {
    const { t } = useTranslation()
    return (
        <MainLayout>
            <PaddingContainer>
                <ContentContainer>
                    <Preview title={t("contact.pre1")} />
                    <Line title={t("contact.officess")} />
                </ContentContainer>
                <ContentContainer>
                    <div className={styles.map_container}>
                        <Map
                            style={{ width: "100%", height: "100%" }}
                            data={[[52.23148857837141, 21.01646713994617], [53.915293, 27.565888]]}
                            center={[52.23148857837141, 21.01646713994617]}
                            zoom={4}
                        />
                    </div>
                    <Line title={t("contact.getintouch")} />
                </ContentContainer>
                <ContentContainer>
                    <div className={styles.form_container}>
                        <div id="contact-form" className={styles.scrollId} >0</div>
                        <h2>{t("contact.tellUs")}</h2>
                        <div className={styles.form_wrap}>
                            <Form />
                        </div>
                    </div>
                </ContentContainer>
            </PaddingContainer>
        </MainLayout>
    )
}