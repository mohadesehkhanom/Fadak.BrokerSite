// components/MapComponent.jsx
"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// تنظیم آیکون Leaflet
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// کامپوننت داخلی برای flyTo
function MapFlyTo({ center }) {
    const map = useMap();
    React.useEffect(() => {
        if (center) {
            map.flyTo(center, 12, { duration: 1.5 });
        }
    }, [center, map]);
    return null;
}

import React from "react";

export default function MapComponent({ center, branches }) {
    return (
        <MapContainer
            center={center}
            zoom={12}
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            />
            <MapFlyTo center={center} />
            {branches.map((branch, idx) => (
                <Marker key={idx} position={branch.position}>
                    <Popup>
                        <div className="dir-rtl">
                            <h5>{branch.name}</h5>
                            <p>{branch.address}</p>
                            <p><i className="bi bi-postcard"></i> کد پستی: {branch.postalCode}</p>
                            <p>
                                <i className="bi bi-telephone-fill"></i>
                                تماس: <a href={`tel:${branch.phone}`}>{branch.phone}</a>
                            </p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}