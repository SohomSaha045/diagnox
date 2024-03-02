// 'use client'

import L from 'leaflet'
// import MarkerIcon from '../node_modules/leaflet/dist/images/marker-icon.png'
// import MarkerShadow from '../node_modules/leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState } from 'react'

const Map = () => {

    const [coord, setCoord] = useState([51.505, -0.09])

    const SearchLocation = () => {
        return (
            <div className="search-location">
                <input type="text" placeholder="Search Location" />
            </div>
        )
    }

    const GetMyLocation = () => {
        const getMyLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    setCoord([position.coords.latitude, position.coords.longitude])
                })
            } else {
                console.log("Geolocation is not supported by this browser.")
            }
        }

        return (
            <div className="get-my-location">
                <button onClick={getMyLocation}>Get My Location</button>
            </div>
        )
    }

    return (
        <div>

            <MapContainer style={{
                height: '100vh',
                width: '50vw'
            }} center={coord} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker icon={
                    new L.Icon({
                        iconUrl: 'data:image/png;base64,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',
                        // iconRetinaUrl: MarkerIcon.src,
                        iconSize: [25, 41],
                        iconAnchor: [12.5, 41],
                        popupAnchor: [0, -41],
                        // shadowUrl: MarkerShadow.src,
                        shadowSize: [41, 41],
                    })
                } position={[51.505, -0.09]}>
                     <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map