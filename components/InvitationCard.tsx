import React from 'react';
import { MapPin, CheckCircle, Gift } from 'lucide-react';

interface InvitationCardProps {
  onNavigateToPix: () => void;
}

const InvitationCard: React.FC<InvitationCardProps> = ({ onNavigateToPix }) => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center p-4 md:p-8 animate-fadeIn">
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-2xl border border-purple-100 text-center relative z-10 mt-4 mb-4">
        
        {/* Couple Photo */}
        <div className="mx-auto mb-6 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-200 shadow-lg relative bg-purple-100">
           {/* 
              ATENÇÃO: Substitua o link abaixo pelo caminho da sua imagem local
              Exemplo: src="/foto-casal.jpg" (após colocar o arquivo na pasta public)
           */}
           <img 
             src="/foto-casal.png" 
             alt="Vanessa e Anderson"
             className="w-full h-full object-cover"
           />
        </div>

        {/* Quote */}
        <blockquote className="italic text-purple-800 mb-6 text-sm md:text-base px-4 font-medium leading-relaxed">
          “DEUS UNIU NOSSOS CAMINHOS E NÓS, SOB SUA BENÇÃO, UNIREMOS NOSSAS VIDAS PARA SEMPRE.”
        </blockquote>

        {/* Names */}
        <h1 className="font-cursive text-5xl md:text-7xl text-purple-600 mb-2">Vanessa e Anderson</h1>

        {/* Date & Time */}
        <div className="my-6 border-t border-b border-purple-200 py-4">
            <p className="text-xl md:text-2xl text-purple-900 font-bold uppercase tracking-wider">
                Sábado, às 13h
            </p>
            <p className="text-lg md:text-xl text-purple-700 mt-1">
                24 de Janeiro de 2026
            </p>
        </div>

        {/* Action Buttons Grid */}
        <div className="grid grid-cols-3 gap-2 md:gap-6 mt-8 w-full">
            
            {/* RSVP Button */}
            <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfCA8s17t1b5p1Dr4XyIIpMCYzKTMEG3JmJdvUc5-cjOlJ5Iw/viewform?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
            >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-purple-700 transition-colors mb-2 md:mb-3">
                    <CheckCircle className="text-white w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="text-purple-900 font-bold text-[10px] md:text-sm uppercase tracking-wide leading-tight">Confirme sua<br/>presença</span>
            </a>

            {/* Location Button */}
            <a 
                href="https://www.google.com/maps/place/23%C2%B033'44.6%22S+47%C2%B014'07.2%22W/@-23.5623889,-47.2353333,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-23.5623889!4d-47.2353333?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
            >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-purple-700 transition-colors mb-2 md:mb-3">
                    <MapPin className="text-white w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="text-purple-900 font-bold text-[10px] md:text-sm uppercase tracking-wide leading-tight">Localização do<br/>Evento</span>
            </a>

            {/* Pix Button */}
            <button 
                onClick={onNavigateToPix}
                className="flex flex-col items-center group"
            >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-purple-700 transition-colors mb-2 md:mb-3">
                    <Gift className="text-white w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="text-purple-900 font-bold text-[10px] md:text-sm uppercase tracking-wide leading-tight">Formas de<br/>presentear</span>
            </button>

        </div>
        
        <p className="mt-8 text-xs text-purple-400">Clique nos ícones para acessar</p>
      </div>
    </div>
  );
};

export default InvitationCard;
