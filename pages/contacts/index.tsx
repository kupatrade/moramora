import dynamic from "next/dynamic"
import { MainLayout } from "../../layouts/MainLayout"
import { ContentContainer } from "@/components/Container/ContentContaeiner"
import { PaddingContainer } from "@/components/PaddingContainer/PaddingContainer"
import { Line } from "@/components/Line/Line"
import { Form } from "@/components/Form/Form"
import styles from "../../styles/contact.module.scss"
import { useTranslation } from "react-i18next"

const Map = dynamic(() => import("../../components/Map/Map"), { ssr: false })

export default function Contacts() {
    const { t } = useTranslation()
    return (
        <MainLayout>
            <PaddingContainer>
                <ContentContainer>
                    <div className={styles.pre_contact_block}>
                        <h1>{t("contact.pre1")}</h1>
                    </div>
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
                    <div id="contact-form" className={styles.form_container}>
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