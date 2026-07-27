import React from 'react';
import { APP_CONFIG } from '../config';

interface HeaderBarProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
  onSecretTrigger?: () => void;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  currentScreen,
  onNavigate,
  onSecretTrigger
}) => {
  return (
    <header className="w-full bg-[#FFF3D5] border-b-[1.5px] border-[#3F2925] sticky top-0 z-40 shadow-xs">
      {/* Top red/cream checkered banner line like reference image */}
      <div className="top-striped-banner" />

      {/* Main header row */}
      <div className="max-w-md mx-auto px-4 py-2 flex items-center justify-between">
        {/* Brand/Title */}
        <button
          onClick={() => onNavigate('menu')}
          className="text-left group flex items-center gap-1.5 focus:outline-hidden"
        >
          <span className="text-lg sm:text-xl font-bold font-heading text-[#D95844] tracking-wide group-hover:scale-105 transition-transform">
            one day wife trial
          </span>
          <span className="text-[11px] sm:text-xs text-[#3F2925]/60 bg-[#F8EBCB] border border-[#3F2925]/20 px-1.5 py-0.5 rounded-full font-heading whitespace-nowrap shrink-0">
            limited period
          </span>
        </button>

        {/* Navigation & Controls */}
        <div className="flex items-center gap-2 text-xs">
          {currentScreen !== 'opening' && currentScreen !== 'menu' && (
            <button
              onClick={() => onNavigate('menu')}
              className="hand-button text-xs py-0.5 px-2 bg-[#BDD9D3] hover:bg-[#a5cac3]"
            >
              hq menu
            </button>
          )}

          {currentScreen === 'menu' && (
            <button
              onClick={() => onNavigate('final')}
              className="text-[11px] text-[#3F2925]/70 hover:text-[#D95844] border-b border-dashed border-[#3F2925]/40"
              title="open at end of day"
            >
              end of day
            </button>
          )}

          {/* Hidden secret psst button in header for extra fun */}
          {onSecretTrigger && (
            <button
              onClick={onSecretTrigger}
              className="text-xs text-[#3F2925]/30 hover:text-[#D95844] font-heading transition-colors px-1"
              title="psst..."
            >
              ♥
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
