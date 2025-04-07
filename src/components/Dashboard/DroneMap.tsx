
import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const DroneMap = () => {
  return (
    <div className="glass-card card-glow rounded-lg overflow-hidden col-span-2 row-span-2 flex flex-col h-full">
      <div className="p-4 border-b border-white/10 flex justify-between items-center">
        <h2 className="text-lg font-medium text-drone-accent1">Drone Map</h2>
        <div className="flex items-center text-xs text-white/60">
          <Navigation className="h-3 w-3 mr-1" />
          <span>60.192059, 24.945831</span>
        </div>
      </div>
      <div className="relative flex-grow p-4 grid-bg">
        {/* Map placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <MapPin 
              className="h-6 w-6 text-drone-accent1 animate-pulse-glow absolute" 
              style={{ 
                left: '30%', 
                top: '40%' 
              }} 
            />
            <div 
              className="h-5 w-5 bg-drone-accent1/20 border border-drone-accent1/50 rounded-full animate-ping absolute" 
              style={{ 
                left: '30%', 
                top: '40%',
                transform: 'translate(-30%, -40%)'
              }} 
            />
            <div 
              className="w-40 h-40 rounded-full border-2 border-drone-accent1/20 absolute"
              style={{
                left: '30%',
                top: '40%',
                transform: 'translate(-50%, -50%)'
              }}
            />
            <div 
              className="w-80 h-80 rounded-full border border-drone-accent1/10 absolute"
              style={{
                left: '30%',
                top: '40%',
                transform: 'translate(-50%, -50%)'
              }}
            />
            
            {/* Flight path visualization */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
              <path 
                d="M 50,150 C 100,100 150,200 250,100" 
                stroke="rgba(0, 255, 255, 0.6)" 
                strokeWidth="2" 
                fill="none" 
                strokeDasharray="5,5" 
              />
            </svg>
          </div>
        </div>
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
