import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { Icon } from "leaflet"
import styles from "../../styles/map.module.scss"
import svgImg from "../../public/icon/map-pin-svgrepo-com.svg"

type PositionData = [number, number]

interface MapProps {
    center: PositionData,
    zoom?: number,
    zoomControl?: boolean
    style: React.CSSProperties,
    data: PositionData[]
}

const myIcon = new Icon({
    iconUrl: svgImg.src,
    iconRetinaUrl: svgImg.src,
    iconSize: [32, 45]
})
export default function Map({ center, zoom = 7, data, style, zoomControl = false }: MapProps) {

    return (
        <div className={styles.mapblock} style={style}>
            <MapContainer zoomControl={zoomControl} scrollWheelZoom={true} style={{ width: "100%", height: "100%" }} center={center} zoom={zoom} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />
                {data.map((p, index) => <Marker key={`marker-${index}${p[0]}`} position={p} icon={myIcon} />)}
            </MapContainer>
        </div>
    )
}