import React from 'react';

const StarField = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20">
    {[...Array(50)].map((_, i) => (
      <div 
        key={i}
        className="absolute bg-white rounded-full opacity-20 animate-pulse"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 3 + 2}s`
        }}
      />
    ))}
  </div>
);

export default StarField;
