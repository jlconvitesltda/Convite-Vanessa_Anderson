import React, { useState } from 'react';
import EnvelopeStage from './components/EnvelopeStage';
import InvitationCard from './components/InvitationCard';
import PixPage from './components/PixPage';
import FloralBackground from './components/FloralBackground';

export type AppState = 'envelope' | 'invitation' | 'pix';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppState>('envelope');

  const handleEnvelopeOpened = () => {
    // Small delay to let animation finish visually before switching pure DOM
    setTimeout(() => {
      setCurrentView('invitation');
    }, 2000);
  };

  return (
    <div className="min-h-screen w-full bg-purple-50 text-gray-800 overflow-hidden relative">
       {/* Global Floral Background Wrapper */}
       <FloralBackground>
          {currentView === 'envelope' && (
            <div className="w-full h-full flex items-center justify-center min-h-screen p-4">
              <EnvelopeStage onOpen={handleEnvelopeOpened} />
            </div>
          )}

          {currentView === 'invitation' && (
            <InvitationCard onNavigateToPix={() => setCurrentView('pix')} />
          )}

          {currentView === 'pix' && (
            <PixPage onBack={() => setCurrentView('invitation')} />
          )}
       </FloralBackground>
    </div>
  );
};

export default App;