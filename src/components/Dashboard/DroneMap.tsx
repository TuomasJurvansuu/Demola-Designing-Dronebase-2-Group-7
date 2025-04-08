import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const DroneMap = () => {
  const dronePosition = [60.192059, 24.945831];
  
  const flightPath = [
    [60.192059, 24.945831],
    [60.193100, 24.946900],
    [60.194200, 24.947800],
    [60.195300, 24.948700]
  ];
  
  const droneIcon = new Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <div className="glass-card card-glow rounded-lg overflow-hidden col-span-2 row-span-2 flex flex-col h-full">
      <div className="p-4 border-b border-white/10 flex justify-between items-center">
        <h2 className="text-lg font-medium text-drone-accent1">Drone Map</h2>
        <div className="flex items-center text-xs text-white/60">
          <span>{dronePosition[0].toFixed(6)}, {dronePosition[1].toFixed(6)}</span>
        </div>
      </div>
      
      <div className="relative flex-grow">
        <MapContainer 
          center={dronePosition} 
          zoom={13} 
          style={{ height: "100%", width: "100%" }}
          className="z-10"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={dronePosition} icon={droneIcon}>
            <Popup>
              Drone is here<br />Current altitude: 50m
            </Popup>
          </Marker>
          <Polyline 
            positions={flightPath}
            pathOptions={{ color: 'rgba(0, 255, 255, 0.6)', dashArray: '5, 5' }}
          />
        </MapContainer>
      </div>
      
      <div className="p-3 border-t border-white/10 flex justify-between items-center text-xs text-white/60">
        <span>Current flight: 15 minutes</span>
        <span>Range: 2.4 km</span>
        <span className="text-drone-accent1">Track active</span>
      </div>
    </div>
  );
};

export default DroneMap;