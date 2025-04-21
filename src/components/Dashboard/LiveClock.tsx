import React, { useState, useEffect } from 'react';
import { Clock, Calendar } from 'lucide-react';

const LiveClock = () => {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('fi-FI', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false
    });
  };
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fi-FI', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };
  
  return (
    <div className="glass-card card-glow rounded-lg p-4 flex flex-col items-center justify-center">
      <div className="mb-2 flex items-center">
        <Clock className="h-5 w-5 mr-2 text-drone-accent2" />
        <div className="text-3xl font-bold accent2-glow">
          {formatTime(time)}
        </div>
      </div>
      
      <div className="flex items-center text-white/70">
        <Calendar className="h-4 w-4 mr-2 text-drone-accent2/70" />
        <span>{formatDate(time)}</span>
      </div>
    </div>
  );
};

export default LiveClock;
