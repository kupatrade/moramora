import { useSubmitDataFormMutation } from "@/redux_toolkit/api/api"
import dynamic from "next/dynamic"
import { MainLayout } from "../../layouts/MainLayout"
import { ContentContainer } from "@/components/Container/ContentContaeiner"
import { PaddingContainer } from "@/components/PaddingContainer/PaddingContainer"
import { Line } from "@/components/Line/Line"
import { Form } from "@/components/Form/Form"
import styles from "../../styles/contact.module.scss"

const Map = dynamic(() => import("../../components/Map/Map"), { ssr: false })

export default function Contacts() {
    const [formSubmit, data] = useSubmitDataFormMutation()

    return (
        <MainLayout>
            <PaddingContainer>
                <ContentContainer>
                    <div className={styles.pre_contact_block}>
                        <h1>We work around the world<br />find us here</h1>
                    </div>
                    <Line title="Officess" />
                </ContentContainer>
                <ContentContainer>
                    <div className={styles.map_container}>
                        <Map
                            style={{ width: "100%", height: "648px" }}
                            data={[[52.23148857837141, 21.01646713994617], [53.915293, 27.565888]]}
                            center={[52.23148857837141, 21.01646713994617]}
                            zoom={4}
                        />
                    </div>
                    <Line title="Get in touch" />
                </ContentContainer>
                <ContentContainer>
                    <div className={styles.form_container}>
                        <h2>Tell us about<br /> your project</h2>
                        <div className={styles.form_wrap}>
                            <Form />
                        </div>
                    </div>
                </ContentContainer>
            </PaddingContainer>
        </MainLayout>
    )
}