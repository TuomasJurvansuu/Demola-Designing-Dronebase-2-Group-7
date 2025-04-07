
import React from 'react';
import { Battery, BatteryWarning } from 'lucide-react';

const BatteryStatus = () => {
  // Mock data - in real app, this would come from API
  const batteryLevel = 78;
  const estimatedTime = 28; // minutes
  const isLow = batteryLevel < 20;
  
  const getBatteryColor = (level: number) => {
    if (level < 20) return 'text-drone-danger';
    if (level < 40) return 'text-drone-warning';
    return 'text-drone-accent3';
  };
  
  return (
    <div className="glass-card card-glow rounded-lg overflow-hidden">
      <div className="p-4 border-b border-white/10">
        <h2 className="text-lg font-medium text-drone-accent1">Battery Status</h2>
      </div>
      <div className="p-4 flex flex-col items-center justify-center">
        {isLow ? (
          <BatteryWarning className="h-16 w-16 text-drone-danger animate-pulse-glow mb-3" />
        ) : (
          <Battery className={`h-16 w-16 ${getBatteryColor(batteryLevel)} mb-3`} />
        )}
        
        <div className="text-3xl font-bold mb-1 accent3-glow">
          {batteryLevel}%
        </div>
        
        <div className="text-white/60 text-sm">
          Est. time remaining: {estimatedTime} min
        </div>
        
        <div className="w-full bg-white/10 h-2 rounded-full mt-4 overflow-hidden">
          <div 
            className={`h-full rounded-full ${getBatteryColor(batteryLevel)}`} 
            style={{ width: `${batteryLevel}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between w-full mt-1 text-xs text-white/60">
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
};

export default BatteryStatus;
