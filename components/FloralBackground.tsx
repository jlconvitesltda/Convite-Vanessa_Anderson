import React from 'react';

interface FloralBackgroundProps {
  children: React.ReactNode;
}

const FloralBackground: React.FC<FloralBackgroundProps> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen flex flex-col">
      {/* Top Floral Border (Image Simulation) */}
      <div className="absolute top-0 left-0 w-full h-20 md:h-32 overflow-hidden z-0 pointer-events-none">
        <img 
          src="/borda-abaixo.jpg" 
          alt="Purple Flowers Top"
          className="w-full h-full object-cover opacity-80 rotate-180"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-50/90"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-grow flex flex-col">
        {children}
      </div>

      {/* Bottom Floral Border */}
      <div className="absolute bottom-8 left-0 w-full h-32 md:h-48 overflow-hidden z-0 pointer-events-none">
        <img 
           src="/borda-abaixo.jpg" 
           alt="Purple Flowers Bottom"
           className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-purple-50/90"></div>
      </div>
    </div>
  );
};

export default FloralBackground;
