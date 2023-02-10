import { useSubmitDataFormMutation } from "@/redux_toolkit/api/api"
import dynamic from "next/dynamic"
import { MainLayout } from "../../layouts/MainLayout"
import { ContentContainer } from "@/components/Container/ContentContaeiner"
import styles from "../../styles/contact.module.scss"

const Map = dynamic(() => import("../../components/Map/Map"), { ssr: false })

export default function Contacts() {
    const [formSubmit, data] = useSubmitDataFormMutation()

    return (
        <MainLayout>
            <ContentContainer>
                <div className={styles.container}>
                    Contacts
                    {/* <Map
                    style={{ width: "300px", height: "300px" }}
                    data={[[52.23148857837141, 21.01646713994617], [53.915293, 27.565888]]}
                    center={[52.23148857837141, 21.01646713994617]}
                    zoom={4}
                />
                <button className={styles.one} onClick={() => formSubmit({
                    name: "One",
                    phone: "557845",
                    email: "dddddvffv",
                    message: "dcdkdc"
                })}>Submit Form</button> */}
                </div>
            </ContentContainer>
        </MainLayout>
    )
}