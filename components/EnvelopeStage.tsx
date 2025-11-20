import React, { useState } from 'react';
import { Heart } from 'lucide-react';

interface EnvelopeStageProps {
  onOpen: () => void;
}

const EnvelopeStage: React.FC<EnvelopeStageProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    onOpen();
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto perspective-1000">
      
      {/* Header Text for the Envelope Page */}
      <div className={`text-center mb-12 transition-opacity duration-700 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
         <h1 className="font-cursive text-6xl text-purple-800 mb-4 drop-shadow-sm">Vanessa e Anderson</h1>
      </div>

      {/* The Envelope Container */}
      <div className={`relative w-72 h-48 md:w-96 md:h-64 transition-transform duration-1000 transform-style-preserve-3d ${isOpen ? 'translate-y-24' : ''}`}>
        
        {/* The Card Inside (Pre-rendered part that slides out) */}
        <div 
            className={`absolute inset-x-2 bottom-0 bg-white h-full rounded shadow-md flex flex-col items-center justify-start pt-4 border-2 border-purple-100 transition-transform duration-1000 ease-in-out z-10 ${isOpen ? 'animate-slide-up' : ''}`}
            style={{ height: '95%' }}
        >
            <div className="w-full text-center">
                <h2 className="font-cursive text-3xl text-purple-600">Convite Especial</h2>
                <p className="text-xs text-gray-500 mt-2">Você está convidado!</p>
            </div>
        </div>

        {/* Envelope Body (Back) */}
        <div className="absolute inset-0 bg-purple-200 rounded-b-lg shadow-lg z-0"></div>

        {/* Envelope Flaps (Front Left/Right/Bottom) */}
        {/* We use CSS borders to create triangles */}
        <div className="absolute inset-0 z-20 pointer-events-none">
            {/* Left Flap */}
            <div 
                className="absolute top-0 left-0 h-full w-1/2 bg-purple-300" 
                style={{ clipPath: 'polygon(0 0, 0 100%, 100% 50%)' }}
            ></div>
            {/* Right Flap */}
            <div 
                className="absolute top-0 right-0 h-full w-1/2 bg-purple-300" 
                style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 50%)' }}
            ></div>
            {/* Bottom Flap */}
            <div 
                className="absolute bottom-0 left-0 w-full h-1/2 bg-purple-400 rounded-b-lg" 
                style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}
            ></div>
        </div>

        {/* Top Flap (The one that opens) */}
        <div 
            className={`absolute top-0 left-0 w-full h-1/2 bg-purple-400 z-30 origin-top transition-transform duration-700 ease-in-out ${isOpen ? 'rotate-x-180 z-0' : 'z-30'}`}
            style={{ 
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                backfaceVisibility: 'visible' // Allow seeing it when flipped if needed, though simplified here
            }}
        >
        </div>
        
        {/* Heart Seal Button */}
        <button
            onClick={handleOpen}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 transition-all duration-500 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100 hover:scale-110'}`}
            aria-label="Abrir convite"
        >
             <div className="relative flex flex-col items-center">
                <p className="text-purple-900 font-bold text-sm mb-1 bg-white/80 px-2 py-0.5 rounded-full whitespace-nowrap shadow-sm">Clique no coração</p>
                <Heart className="w-16 h-16 text-red-500 fill-red-500 drop-shadow-lg animate-pulse" />
             </div>
        </button>

      </div>
    </div>
  );
};

export default EnvelopeStage;