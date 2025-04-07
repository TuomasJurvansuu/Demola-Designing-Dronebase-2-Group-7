
import React, { useState } from 'react';
import { Save, Battery, Wifi, CloudRain, PaintBucket, Bell, ShieldAlert, Cpu } from 'lucide-react';

const Settings = () => {
  const [batteryWarning, setBatteryWarning] = useState(20);
  const [criticalBattery, setCriticalBattery] = useState(10);
  
  return (
    <div className="container py-8 px-4 mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-white">Settings</h1>
        <p className="text-white/60">Configure your DroneBase system</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card card-glow rounded-lg overflow-hidden">
          <div className="p-4 border-b border-white/10 flex items-center">
            <Battery className="h-5 w-5 mr-2 text-drone-accent1" />
            <h2 className="text-lg font-medium text-drone-accent1">Battery Settings</h2>
          </div>
          
          <div className="p-4 space-y-4">
            <div>
              <label className="text-white/80 mb-2 block">Warning Level (%)</label>
              <div className="flex items-center">
                <input 
                  type="range" 
                  min="5" 
                  max="50" 
                  value={batteryWarning} 
                  onChange={(e) => setBatteryWarning(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
                <span className="ml-3 w-10 text-center bg-white/10 rounded py-1 text-white/80">{batteryWarning}</span>
              </div>
            </div>
            
            <div>
              <label className="text-white/80 mb-2 block">Critical Level (%)</label>
              <div className="flex items-center">
                <input 
                  type="range" 
                  min="1" 
                  max={batteryWarning - 1} 
                  value={criticalBattery} 
                  onChange={(e) => setCriticalBattery(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
                <span className="ml-3 w-10 text-center bg-white/10 rounded py-1 text-white/80">{criticalBattery}</span>
              </div>
            </div>
            
            <div>
              <label className="text-white/80 mb-2 block">Auto Return on Low Battery</label>
              <div className="flex items-center">
                <div className="relative inline-block w-12 h-6 rounded-full bg-white/10">
                  <input 
                    type="checkbox" 
                    className="peer sr-only" 
                    defaultChecked
                  />
                  <span className="absolute inset-0 cursor-pointer rounded-full transition-all duration-200 peer-checked:bg-drone-accent1"></span>
                  <span className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-all duration-200 peer-checked:translate-x-6"></span>
                </div>
                <span className="ml-3 text-white/80">Enabled</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass-card card-glow rounded-lg overflow-hidden">
          <div className="p-4 border-b border-white/10 flex items-center">
            <Wifi className="h-5 w-5 mr-2 text-drone-accent1" />
            <h2 className="text-lg font-medium text-drone-accent1">Connection Settings</h2>
          </div>
          
          <div className="p-4 space-y-4">
            <div>
              <label className="text-white/80 mb-2 block">Connection Type</label>
              <select className="w-full bg-white/10 border border-white/20 rounded py-2 px-3 text-white/80 focus:outline-none focus:border-drone-accent1">
                <option>4G-LTE (Default)</option>
                <option>Radio Frequency</option>
                <option>Wi-Fi</option>
                <option>Satellite</option>
              </select>
            </div>
            
            <div>
              <label className="text-white/80 mb-2 block">Range Limit (meters)</label>
              <input 
                type="number" 
                className="w-full bg-white/10 border border-white/20 rounded py-2 px-3 text-white/80 focus:outline-none focus:border-drone-accent1"
                defaultValue="5000"
              />
            </div>
            
            <div>
              <label className="text-white/80 mb-2 block">Auto Reconnect</label>
              <div className="flex items-center">
                <div className="relative inline-block w-12 h-6 rounded-full bg-white/10">
                  <input 
                    type="checkbox" 
                    className="peer sr-only" 
                    defaultChecked
                  />
                  <span className="absolute inset-0 cursor-pointer rounded-full transition-all duration-200 peer-checked:bg-drone-accent1"></span>
                  <span className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-all duration-200 peer-checked:translate-x-6"></span>
                </div>
                <span className="ml-3 text-white/80">Enabled</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass-card card-glow rounded-lg overflow-hidden">
          <div className="p-4 border-b border-white/10 flex items-center">
            <CloudRain className="h-5 w-5 mr-2 text-drone-accent1" />
            <h2 className="text-lg font-medium text-drone-accent1">Weather Settings</h2>
          </div>
          
          <div className="p-4 space-y-4">
            <div>
              <label className="text-white/80 mb-2 block">Weather Data Source</label>
              <select className="w-full bg-white/10 border border-white/20 rounded py-2 px-3 text-white/80 focus:outline-none focus:border-drone-accent1">
                <option>OpenWeather API</option>
                <option>AccuWeather</option>
                <option>Local Weather Station</option>
              </select>
            </div>
            
            <div>
              <label className="text-white/80 mb-2 block">Max Wind Speed (km/h)</label>
              <input 
                type="number" 
                className="w-full bg-white/10 border border-white/20 rounded py-2 px-3 text-white/80 focus:outline-none focus:border-drone-accent1"
                defaultValue="12"
              />
            </div>
            
            <div>
              <label className="text-white/80 mb-2 block">Auto Land on Bad Weather</label>
              <div className="flex items-center">
                <div className="relative inline-block w-12 h-6 rounded-full bg-white/10">
                  <input 
                    type="checkbox" 
                    className="peer sr-only" 
                    defaultChecked
                  />
                  <span className="absolute inset-0 cursor-pointer rounded-full transition-all duration-200 peer-checked:bg-drone-accent1"></span>
                  <span className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-all duration-200 peer-checked:translate-x-6"></span>
                </div>
                <span className="ml-3 text-white/80">Enabled</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass-card card-glow rounded-lg overflow-hidden">
          <div className="p-4 border-b border-white/10 flex items-center">
            <PaintBucket className="h-5 w-5 mr-2 text-drone-accent1" />
            <h2 className="text-lg font-medium text-drone-accent1">Interface Settings</h2>
          </div>
          
          <div className="p-4 space-y-4">
            <div>
              <label className="text-white/80 mb-2 block">Theme</label>
              <select className="w-full bg-white/10 border border-white/20 rounded py-2 px-3 text-white/80 focus:outline-none focus:border-drone-accent1">
                <option>Dark Horizon (Default)</option>
                <option>Light Mode</option>
                <option>High Contrast</option>
              </select>
            </div>
            
            <div>
              <label className="text-white/80 mb-2 block">Accent Color</label>
              <div className="flex space-x-3">
                <div className="w-8 h-8 rounded-full bg-drone-accent1 cursor-pointer border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-drone-accent2 cursor-pointer"></div>
                <div className="w-8 h-8 rounded-full bg-drone-accent3 cursor-pointer"></div>
                <div className="w-8 h-8 rounded-full bg-drone-warning cursor-pointer"></div>
                <div className="w-8 h-8 rounded-full bg-drone-danger cursor-pointer"></div>
              </div>
            </div>
            
            <div>
              <label className="text-white/80 mb-2 block">Notifications</label>
              <div className="flex items-center">
                <div className="relative inline-block w-12 h-6 rounded-full bg-white/10">
                  <input 
                    type="checkbox" 
                    className="peer sr-only" 
                    defaultChecked
                  />
                  <span className="absolute inset-0 cursor-pointer rounded-full transition-all duration-200 peer-checked:bg-drone-accent1"></span>
                  <span className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-all duration-200 peer-checked:translate-x-6"></span>
                </div>
                <span className="ml-3 text-white/80">Enabled</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-8">
        <div className="flex items-center text-white/60 space-x-6">
          <div className="flex items-center">
            <Cpu className="h-5 w-5 mr-2" />
            <span>System v1.0.0</span>
          </div>
          <div className="flex items-center">
            <Bell className="h-5 w-5 mr-2" />
            <span>Notifications: On</span>
          </div>
          <div className="flex items-center">
            <ShieldAlert className="h-5 w-5 mr-2" />
            <span>Security: Standard</span>
          </div>
        </div>
        
        <button className="py-2 px-4 rounded bg-drone-accent1 text-black font-medium hover:bg-drone-accent1/90 transition-colors flex items-center">
          <Save className="h-4 w-4 mr-2" />
          Save All Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
