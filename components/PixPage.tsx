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
      <div className="max-w-md w-full bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-purple-100 text-center relative z-10">
        
        <button 
            onClick={onBack}
            className="absolute top-4 left-4 text-purple-600 hover:text-purple-800 transition-colors"
            aria-label="Voltar"
        >
            <ArrowLeft className="w-6 h-6" />
        </button>

        <h2 className="font-cursive text-5xl text-purple-600 mb-6 mt-2">Presente via Pix</h2>

        <p className="text-purple-800 text-lg leading-relaxed mb-8">
          Agradecemos o presente via PIX, favor copiar a chave celular em nome da <span className="font-bold">Vanessa</span>:
        </p>

        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-6">
             <p className="text-2xl font-mono text-purple-900 font-bold tracking-wider select-all">{pixKey}</p>
        </div>

        {/* Gift Box Illustration */}
        <div className="mb-8 flex justify-center">
            {/* Using a stylized gift image or high quality 3D render placeholder */}
            <img 
                src="data:image/jpeg;base64,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" 
                alt="Caixa de Presente" 
                className="w-32 h-32 object-contain drop-shadow-xl animate-bounce-slow" 
            />
        </div>

        <button
            onClick={handleCopy}
            className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all transform active:scale-95 flex items-center justify-center gap-2 shadow-lg
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

        <div className="mt-6 text-sm text-purple-400">
            Sua presença é o nosso maior presente!
        </div>

      </div>
    </div>
  );
};

export default PixPage;
