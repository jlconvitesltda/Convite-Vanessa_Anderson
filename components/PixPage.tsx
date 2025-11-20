dimport React, { useState } from 'react';
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
