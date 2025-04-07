
import React from 'react';
import { ArrowUp, Signal, Wind, Gauge } from 'lucide-react';

const DroneTelemetry = () => {
  return (
    <div className="glass-card card-glow rounded-lg">
      <div className="p-4 border-b border-white/10">
        <h2 className="text-lg font-medium text-drone-accent1">Drone Telemetry</h2>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-black/20 p-3 rounded-lg">
            <div className="flex items-center mb-2">
              <Gauge className="h-4 w-4 mr-2 text-drone-accent2" />
              <span className="text-white/60 text-sm">Speed</span>
            </div>
            <div className="text-xl font-semibold">24 km/h</div>
          </div>
          
          <div className="bg-black/20 p-3 rounded-lg">
            <div className="flex items-center mb-2">
              <ArrowUp className="h-4 w-4 mr-2 text-drone-accent2" />
              <span className="text-white/60 text-sm">Altitude</span>
            </div>
            <div className="text-xl font-semibold">120 m</div>
          </div>
          
          <div className="bg-black/20 p-3 rounded-lg">
            <div className="flex items-center mb-2">
              <Signal className="h-4 w-4 mr-2 text-drone-accent2" />
              <span className="text-white/60 text-sm">Signal</span>
            </div>
            <div className="text-xl font-semibold">86%</div>
          </div>
          
          <div className="bg-black/20 p-3 rounded-lg">
            <div className="flex items-center mb-2">
              <Wind className="h-4 w-4 mr-2 text-drone-accent2" />
              <span className="text-white/60 text-sm">Heading</span>
            </div>
            <div className="text-xl font-semibold">320°</div>
          </div>
        </div>
        
        <div className="mt-4 pt-3 border-t border-white/10">
          <div className="flex justify-between items-center text-sm">
            <span className="text-white/60">Gyro:</span>
            <span className="text-drone-accent2">Stable</span>
          </div>
          <div className="flex justify-between items-center mt-2 text-sm">
            <span className="text-white/60">Connection:</span>
            <span className="text-drone-accent2">4G-LTE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DroneTelemetry;
