
import React from 'react';
import { Clock, AlertCircle, Info, Check } from 'lucide-react';

const LogPage = () => {
  // Mock log data
  const logs = [
    { id: 1, type: 'info', message: 'Drone takeoff successful', timestamp: '12:34:22', details: 'Coordinates: 60.192059, 24.945831' },
    { id: 2, type: 'warning', message: 'Battery level below 50%', timestamp: '12:40:15', details: 'Current level: 48%' },
    { id: 3, type: 'error', message: 'Wind speed exceeding safe limit', timestamp: '12:42:07', details: 'Current: 15 km/h, Max: 12 km/h' },
    { id: 4, type: 'success', message: 'Route point reached', timestamp: '12:45:30', details: 'Waypoint 2/5 completed' },
    { id: 5, type: 'info', message: 'Switching to automated flight mode', timestamp: '12:48:03', details: 'Following preset route Alpha' }
  ];
  
  const getLogIcon = (type: string) => {
    switch (type) {
      case 'info':
        return <Info className="h-5 w-5 text-drone-accent1" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-drone-warning" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-drone-danger" />;
      case 'success':
        return <Check className="h-5 w-5 text-drone-accent3" />;
      default:
        return <Info className="h-5 w-5" />;
    }
  };
  
  const getLogBackground = (type: string) => {
    switch (type) {
      case 'info':
        return 'bg-drone-accent1/10';
      case 'warning':
        return 'bg-drone-warning/10';
      case 'error':
        return 'bg-drone-danger/10';
      case 'success':
        return 'bg-drone-accent3/10';
      default:
        return 'bg-gray-800';
    }
  };
  
  return (
    <div className="container py-8 px-4 mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-white">System Log</h1>
        <p className="text-white/60">View drone system events and activities</p>
      </div>
      
      <div className="glass-card rounded-lg overflow-hidden">
        <div className="p-4 border-b border-white/10 flex justify-between items-center">
          <h2 className="text-lg font-medium text-drone-accent1">Event Logs</h2>
          <div className="flex items-center text-white/60 text-sm">
            <Clock className="h-4 w-4 mr-1" />
            <span>Latest events</span>
          </div>
        </div>
        
        <div className="divide-y divide-white/10">
          {logs.map((log) => (
            <div key={log.id} className={`p-4 ${getLogBackground(log.type)}`}>
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  {getLogIcon(log.type)}
                </div>
                <div>
                  <div className="flex items-center">
                    <h3 className="font-medium text-white">{log.message}</h3>
                    <span className="ml-3 text-white/60 text-sm">{log.timestamp}</span>
                  </div>
                  <p className="text-white/60 text-sm mt-1">{log.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t border-white/10 flex justify-center">
          <button className="text-drone-accent1 hover:text-drone-accent2 transition-colors">
            Load more entries
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogPage;
