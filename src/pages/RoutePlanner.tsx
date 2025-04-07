
import React from 'react';
import { MapPin, Plus, Trash, RotateCcw, Save, Play } from 'lucide-react';

const RoutePlanner = () => {
  // Mock waypoints
  const waypoints = [
    { id: 1, name: 'Start Point', lat: 60.192059, lng: 24.945831, altitude: 50 },
    { id: 2, name: 'Checkpoint A', lat: 60.193100, lng: 24.946900, altitude: 80 },
    { id: 3, name: 'Checkpoint B', lat: 60.194200, lng: 24.947800, altitude: 100 },
    { id: 4, name: 'Return Point', lat: 60.192059, lng: 24.945831, altitude: 50 }
  ];
  
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
                  <Plus className="h-4 w-4 text-white" />
                </button>
                <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <RotateCcw className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
            
            <div className="relative h-full grid-bg">
              {/* Map placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-white/30">
                Map View
              </div>
              
              {/* Waypoint indicators */}
              {waypoints.map((point, index) => (
                <div 
                  key={point.id}
                  className={`absolute ${index === 0 ? 'text-drone-accent3' : 
                                         index === waypoints.length - 1 ? 'text-drone-accent2' : 
                                         'text-drone-accent1'}`}
                  style={{
                    left: `${20 + index * 20}%`,
                    top: `${30 + (index % 2) * 30}%`
                  }}
                >
                  <MapPin className="h-6 w-6" />
                  <div className="absolute w-6 text-xs text-center font-bold" style={{ top: '6px' }}>
                    {index + 1}
                  </div>
                </div>
              ))}
              
              {/* Route path */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                <path 
                  d="M 100,150 L 200,180 L 300,210 L 400,150" 
                  stroke="rgba(0, 255, 255, 0.6)" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeDasharray="5,5" 
                />
              </svg>
            </div>
          </div>
        </div>
        
        <div>
          <div className="glass-card card-glow rounded-lg overflow-hidden">
            <div className="p-4 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-lg font-medium text-drone-accent1">Waypoints</h2>
              <button className="py-1 px-3 rounded bg-drone-accent1/20 text-drone-accent1 text-sm hover:bg-drone-accent1/30 transition-colors">
                Add Point
              </button>
            </div>
            
            <div className="divide-y divide-white/10">
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
                    <button className="p-1 text-white/60 hover:text-drone-danger transition-colors">
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
