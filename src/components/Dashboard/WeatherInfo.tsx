
import React from 'react';
import { Cloud, Thermometer, Wind, Droplets } from 'lucide-react';

const WeatherInfo = () => {
  return (
    <div className="glass-card card-glow rounded-lg">
      <div className="p-4 border-b border-white/10">
        <h2 className="text-lg font-medium text-drone-accent1">Weather Info</h2>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <Cloud className="h-12 w-12 text-white/80" />
          <div className="text-3xl font-bold text-white">14°C</div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Thermometer className="h-4 w-4 mr-2 text-drone-accent2" />
              <span className="text-white/60">Temperature</span>
            </div>
            <span>14°C</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Wind className="h-4 w-4 mr-2 text-drone-accent2" />
              <span className="text-white/60">Wind Speed</span>
            </div>
            <span>12 km/h</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Droplets className="h-4 w-4 mr-2 text-drone-accent2" />
              <span className="text-white/60">Humidity</span>
            </div>
            <span>65%</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Cloud className="h-4 w-4 mr-2 text-drone-accent2" />
              <span className="text-white/60">Rain Probability</span>
            </div>
            <span>15%</span>
          </div>
        </div>
        
        <div className="mt-4 text-xs text-drone-accent2 text-center">
          ✓ Safe flying conditions
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
