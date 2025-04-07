
import React, { useState } from 'react';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Rotate3D, Power, AlertCircle } from 'lucide-react';
import BatteryStatus from '../components/Dashboard/BatteryStatus';
import DroneTelemetry from '../components/Dashboard/DroneTelemetry';

const ManualControl = () => {
  const [controlMode, setControlMode] = useState('joystick');
  
  return (
    <div className="container py-8 px-4 mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-white">Manual Control</h1>
        <p className="text-white/60">Directly control the drone's movement</p>
        <div className="mt-4 flex items-center">
          <AlertCircle className="text-drone-warning mr-2 h-5 w-5" />
          <span className="text-drone-warning text-sm">
            Manual control should only be used by certified operators
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="glass-card card-glow rounded-lg overflow-hidden">
            <div className="p-4 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-lg font-medium text-drone-accent1">Control Interface</h2>
              <div className="flex space-x-2">
                <button 
                  className={`px-3 py-1 rounded text-sm ${controlMode === 'joystick' ? 'bg-drone-accent1 text-black' : 'bg-white/10 text-white/70'}`}
                  onClick={() => setControlMode('joystick')}
                >
                  Joystick
                </button>
                <button 
                  className={`px-3 py-1 rounded text-sm ${controlMode === 'buttons' ? 'bg-drone-accent1 text-black' : 'bg-white/10 text-white/70'}`}
                  onClick={() => setControlMode('buttons')}
                >
                  Buttons
                </button>
              </div>
            </div>
            
            <div className="p-6 flex flex-col items-center">
              {controlMode === 'joystick' ? (
                <div className="relative w-64 h-64">
                  {/* Joystick base */}
                  <div className="absolute inset-0 rounded-full border-2 border-white/20 bg-black/30"></div>
                  
                  {/* Joystick crosshairs */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-px bg-white/20"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-px h-full bg-white/20"></div>
                  </div>
                  
                  {/* Joystick handle */}
                  <div className="absolute w-16 h-16 rounded-full bg-drone-accent1/80 backdrop-blur-sm border border-drone-accent1 shadow-lg cursor-grab" 
                       style={{ left: 'calc(50% - 2rem)', top: 'calc(50% - 2rem)' }}>
                    <div className="absolute inset-0 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-start-2">
                    <button className="w-16 h-16 rounded-lg bg-black/30 border border-white/20 flex items-center justify-center hover:bg-drone-accent1/20 hover:border-drone-accent1/50 transition-colors">
                      <ArrowUp className="h-8 w-8 text-white" />
                    </button>
                  </div>
                  
                  <div className="col-start-1">
                    <button className="w-16 h-16 rounded-lg bg-black/30 border border-white/20 flex items-center justify-center hover:bg-drone-accent1/20 hover:border-drone-accent1/50 transition-colors">
                      <ArrowLeft className="h-8 w-8 text-white" />
                    </button>
                  </div>
                  
                  <div className="col-start-2">
                    <button className="w-16 h-16 rounded-lg bg-black/30 border border-white/20 flex items-center justify-center hover:bg-drone-accent1/20 hover:border-drone-accent1/50 transition-colors">
                      <ArrowDown className="h-8 w-8 text-white" />
                    </button>
                  </div>
                  
                  <div className="col-start-3">
                    <button className="w-16 h-16 rounded-lg bg-black/30 border border-white/20 flex items-center justify-center hover:bg-drone-accent1/20 hover:border-drone-accent1/50 transition-colors">
                      <ArrowRight className="h-8 w-8 text-white" />
                    </button>
                  </div>
                </div>
              )}
              
              <div className="mt-8 flex space-x-6">
                <button className="w-20 h-20 rounded-full bg-black/30 border border-white/20 flex flex-col items-center justify-center hover:bg-drone-accent1/20 hover:border-drone-accent1/50 transition-colors">
                  <ArrowUp className="h-8 w-8 text-white mb-1" />
                  <span className="text-xs text-white/70">Altitude +</span>
                </button>
                
                <button className="w-20 h-20 rounded-full bg-black/30 border border-white/20 flex flex-col items-center justify-center hover:bg-drone-accent1/20 hover:border-drone-accent1/50 transition-colors">
                  <Rotate3D className="h-8 w-8 text-white mb-1" />
                  <span className="text-xs text-white/70">Rotate</span>
                </button>
                
                <button className="w-20 h-20 rounded-full bg-black/30 border border-white/20 flex flex-col items-center justify-center hover:bg-drone-accent1/20 hover:border-drone-accent1/50 transition-colors">
                  <ArrowDown className="h-8 w-8 text-white mb-1" />
                  <span className="text-xs text-white/70">Altitude -</span>
                </button>
              </div>
              
              <button className="mt-8 px-6 py-3 rounded-full bg-drone-danger flex items-center justify-center text-white font-medium hover:bg-drone-danger/80 transition-colors">
                <Power className="h-5 w-5 mr-2" />
                Emergency Stop
              </button>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <BatteryStatus />
          <DroneTelemetry />
        </div>
      </div>
    </div>
  );
};

export default ManualControl;
