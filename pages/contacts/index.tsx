import dynamic from "next/dynamic"
import { MainLayout } from "../../layouts/MainLayout"

const Map = dynamic(() => import("../../components/Map/Map"), { ssr: false })

export default function Contacts() {
    return (
        <MainLayout>
            <div>Contacts
                <Map
                    style={{ width: "300px", height: "300px" }}
                    data={[[52.23148857837141, 21.01646713994617], [53.915293, 27.565888]]}
                    center={[52.23148857837141, 21.01646713994617]}
                    zoom={4}
                />
            </div>
        </MainLayout>
    )
}