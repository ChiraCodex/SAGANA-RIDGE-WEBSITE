"use client"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function LocationMap() {
  const position: [number, number] = [-0.7050556228838573, 37.2051279116434]; // Sagana Ridge site coords

  return (
    <MapContainer center={position} zoom={20} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Sagana Ridge Location</Popup>
      </Marker>
    </MapContainer>
  );
}
