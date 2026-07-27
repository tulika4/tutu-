import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import { HeaderBar } from './components/HeaderBar';
import { OpeningScreen } from './components/OpeningScreen';
import { DayPassScreen } from './components/DayPassScreen';
import { MainMenu } from './components/MainMenu';
import { BingoScreen } from './components/BingoScreen';
import { EmergencyDesk } from './components/EmergencyDesk';
import { ClassifiedSection } from './components/ClassifiedSection';
import { SecretPage } from './components/SecretPage';
import { FinalScreen } from './components/FinalScreen';

export type ScreenType =
  | 'opening'
  | 'daypass'
  | 'menu'
  | 'bingo'
  | 'emergency'
  | 'classified'
  | 'secret'
  | 'final';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('opening');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'opening':
        return <OpeningScreen onContinue={() => setCurrentScreen('daypass')} />;
      case 'daypass':
        return <DayPassScreen onActivate={() => setCurrentScreen('menu')} />;
      case 'menu':
        return (
          <MainMenu
            onNavigate={(s) => setCurrentScreen(s as ScreenType)}
            onOpenSecret={() => setCurrentScreen('secret')}
          />
        );
      case 'bingo':
        return <BingoScreen onBack={() => setCurrentScreen('menu')} />;
      case 'emergency':
        return <EmergencyDesk onBack={() => setCurrentScreen('menu')} />;
      case 'classified':
        return <ClassifiedSection onBack={() => setCurrentScreen('menu')} />;
      case 'secret':
        return <SecretPage onBack={() => setCurrentScreen('menu')} />;
      case 'final':
        return <FinalScreen onBackToMenu={() => setCurrentScreen('menu')} />;
      default:
        return (
          <MainMenu
            onNavigate={(s) => setCurrentScreen(s as ScreenType)}
            onOpenSecret={() => setCurrentScreen('secret')}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F8EBCB] text-[#3F2925] flex flex-col font-body selection:bg-[#BDD9D3] selection:text-[#3F2925]">
      {/* Top Header Bar */}
      <HeaderBar
        currentScreen={currentScreen}
        onNavigate={(s) => setCurrentScreen(s as ScreenType)}
        onSecretTrigger={() => setCurrentScreen('secret')}
      />

      {/* Main Screen Content with Soft Paper Transitions */}
      <main className="flex-1 w-full relative overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="w-full min-h-full"
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

