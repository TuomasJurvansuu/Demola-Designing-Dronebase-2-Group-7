import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/dronemap.css";
import L from "leaflet";


const droneIcon = new L.Icon({
    iconUrl: "/images/drone-symbol.png",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0, -25],
});

const DroneMap = () => {
  const position = [65.0121, 25.4651]; // Oulu, Suomi

  return (
    <div className="drone-map">
      <h3>Drone Location</h3>
      <MapContainer center={position} zoom={13} style={{ height: "300px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={droneIcon}>
          <Popup>Drone is here!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default DroneMap;
