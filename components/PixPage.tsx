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
