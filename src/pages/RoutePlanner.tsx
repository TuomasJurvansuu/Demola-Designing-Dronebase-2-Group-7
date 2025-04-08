import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMapEvents } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Trash, RotateCcw, Save, Play } from 'lucide-react';

const RoutePlanner = () => {
  const [waypoints, setWaypoints] = useState([
    { id: 1, name: 'Start Point', lat: 60.192059, lng: 24.945831, altitude: 50 },
    { id: 2, name: 'Checkpoint A', lat: 60.193100, lng: 24.946900, altitude: 80 },
    { id: 3, name: 'Checkpoint B', lat: 60.194200, lng: 24.947800, altitude: 100 },
    { id: 4, name: 'Return Point', lat: 60.192059, lng: 24.945831, altitude: 50 }
  ]);

  const startIcon = new Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const endIcon = new Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const waypointIcon = new Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const getIcon = (index) => {
    if (index === 0) return startIcon;
    if (index === waypoints.length - 1) return endIcon;
    return waypointIcon;
  };

  const flightPath = waypoints.map(point => [point.lat, point.lng]);

  const MapClickHandler = () => {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        const newWaypoint = {
          id: waypoints.length + 1,
          name: `Checkpoint ${String.fromCharCode(65 + waypoints.length - 1)}`,
          lat,
          lng,
          altitude: 80
        };
        
        const newWaypoints = [
          ...waypoints.slice(0, -1),
          newWaypoint,
          waypoints[waypoints.length - 1]
        ];
        
        setWaypoints(newWaypoints);
      }
    });
    return null;
  };

  const removeWaypoint = (id) => {
    if (waypoints.length <= 2) return;
    
    setWaypoints(waypoints.filter(point => point.id !== id));
  };
  
  return (
    <div className="container py-8 px-4 mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-white">Route Planner</h1>
        <p className="text-white/60">Design and save automated flight paths</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="glass-card card-glow rounded-lg overflow-hidden h-[600px]">
            <div className="p-4 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-lg font-medium text-drone-accent1">Map View</h2>
              <div className="flex items-center space-x-2">
                <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <RotateCcw className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
            
            <div className="relative h-[calc(600px-64px)]">
              <MapContainer 
                center={[60.192059, 24.945831]} 
                zoom={13} 
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {waypoints.map((point, index) => (
                  <Marker 
                    key={point.id} 
                    position={[point.lat, point.lng]} 
                    icon={getIcon(index)}
                  >
                    <Popup>
                      {point.name}<br />
                      Altitude: {point.altitude}m
                    </Popup>
                  </Marker>
                ))}
                
                <Polyline 
                  positions={flightPath}
                  pathOptions={{ color: 'rgba(0, 255, 255, 0.6)', dashArray: '5, 5' }}
                />
                
                <MapClickHandler />
              </MapContainer>
            </div>
          </div>
        </div>
        
        <div>
          <div className="glass-card card-glow rounded-lg overflow-hidden">
            <div className="p-4 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-lg font-medium text-drone-accent1">Waypoints</h2>
              <div className="text-xs text-white/60">Click on map to add points</div>
            </div>
            
            <div className="divide-y divide-white/10 max-h-[500px] overflow-y-auto">
              {waypoints.map((point, index) => (
                <div key={point.id} className="p-4 hover:bg-white/5 transition-colors">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 ${
                        index === 0 ? 'bg-drone-accent3/20 text-drone-accent3' : 
                        index === waypoints.length - 1 ? 'bg-drone-accent2/20 text-drone-accent2' : 
                        'bg-drone-accent1/20 text-drone-accent1'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{point.name}</h3>
                        <p className="text-white/60 text-xs">
                          {point.lat.toFixed(6)}, {point.lng.toFixed(6)} | {point.altitude}m
                        </p>
                      </div>
                    </div>
                    <button 
                      className={`p-1 text-white/60 hover:text-drone-danger transition-colors ${
                        waypoints.length <= 2 ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      onClick={() => removeWaypoint(point.id)}
                      disabled={waypoints.length <= 2}
                    >
                      <Trash className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t border-white/10 flex justify-between">
              <button className="py-2 px-4 rounded bg-drone-accent1 text-black font-medium hover:bg-drone-accent1/90 transition-colors flex items-center">
                <Save className="h-4 w-4 mr-2" />
                Save Route
              </button>
              
              <button className="py-2 px-4 rounded bg-drone-accent3 text-black font-medium hover:bg-drone-accent3/90 transition-colors flex items-center">
                <Play className="h-4 w-4 mr-2" />
                Execute
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutePlanner;
