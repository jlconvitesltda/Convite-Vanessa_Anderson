import React, { useState } from 'react';
import { Copy, ArrowLeft, Check } from 'lucide-react';

interface PixPageProps {
  onBack: () => void;
}

const PixPage: React.FC<PixPageProps> = ({ onBack }) => {
  const [copied, setCopied] = useState(false);
  const pixKey = "15988197057";

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="flex-grow flex flex-col items-center justify-center p-4 animate-fadeIn">
      <div className="max-w-md w-full bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-purple-100 text-center relative z-10">
        
        <button 
            onClick={onBack}
            className="absolute top-4 left-4 text-purple-600 hover:text-purple-800 transition-colors"
            aria-label="Voltar"
        >
            <ArrowLeft className="w-6 h-6" />
        </button>

        <h1 className="font-cursive text-5xl text-purple-600 mb-6 mt-2">Nossas Opções de Presente</h1>

        {/* Separator */}
        <div className="border-t border-purple-200 w-full mb-4"></div>

        {/* ---------------------------------- */}
        {/* SECTION 1: PIX GIFT */}
        {/* ---------------------------------- */}

        <h2 className="font-cursive text-4xl text-purple-600 mb-2">Presente via Pix</h2>

        <p className="text-purple-800 text-sm leading-relaxed mb-3">
          Agradecemos o presente via PIX, favor copiar a chave celular em nome da <span className="font-bold">Vanessa</span>:
        </p>

        <div className="bg-purple-50 p-3 rounded-lg border border-purple-200 mb-4">
             <p className="text-xl font-mono text-purple-900 font-bold tracking-wider select-all">{pixKey}</p>
        </div>

        <button
            onClick={handleCopy}
            className={`w-full py-3 px-4 rounded-xl font-bold text-white transition-all transform active:scale-95 flex items-center justify-center gap-2 shadow-lg text-sm
                ${copied ? 'bg-green-500 hover:bg-green-600' : 'bg-purple-600 hover:bg-purple-700'}
            `}
        >
            {copied ? (
                <>
                    <Check className="w-5 h-5" />
                    Copiado!
                </>
            ) : (
                <>
                    <Copy className="w-5 h-5" />
                    Copiar Chave Pix
                </>
            )}
        </button>
        
        {/* Separator */}
        <div className="border-t border-purple-200 w-full mt-6 mb-6"></div>

        {/* ---------------------------------- */}
        {/* SECTION 2: MERCADO LIVRE GIFT LIST */}
        {/* ---------------------------------- */}

        <h2 className="font-cursive text-4xl text-purple-600 mb-2">Lista de Presentes</h2>

        <p className="text-purple-800 text-sm leading-relaxed mb-4">
          Clique na logo do Mercado Livre para acessar a lista:
        </p>

        <a 
            href="https://www.mercadolivre.com.br/presentes/vanessa-e-anderson-bs9sl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform transform hover:scale-105"
        >
            <img 
                src="/logoml.png" 
                alt="Logo Mercado Livre" 
                className="w-24 h-24 object-contain mx-auto drop-shadow-md" 
            />
        </a>


        <div className="mt-6 text-sm text-purple-400">
            Sua presença é o nosso maior presente!
        </div>

      </div>
    </div>
  );
};

export default PixPage;
