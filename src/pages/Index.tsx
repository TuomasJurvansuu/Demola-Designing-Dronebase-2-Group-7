
import React from 'react';
import DroneMap from '../components/Dashboard/DroneMap';
import BatteryStatus from '../components/Dashboard/BatteryStatus';
import DroneTelemetry from '../components/Dashboard/DroneTelemetry';
import WeatherInfo from '../components/Dashboard/WeatherInfo';
import LiveClock from '../components/Dashboard/LiveClock';

const Index = () => {
  return (
    <div className="container py-8 px-4 mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-white">Dashboard</h1>
        <p className="text-white/60">Monitor your drone's status in real-time</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* DroneMap (2x2) */}
        <DroneMap />
        
        {/* Right side components (2x1 each) */}
        <BatteryStatus />
        <DroneTelemetry />
        <WeatherInfo />
        <LiveClock />
      </div>
      
      <div className="mt-8 glass-card rounded-lg p-4">
        <div className="flex justify-between items-center text-sm text-white/60">
          <div>Last connection: 12 seconds ago</div>
          <div>System status: Operational</div>
          <div>Firmware: v2.1.4</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
