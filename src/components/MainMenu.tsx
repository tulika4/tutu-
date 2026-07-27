import React from 'react';

interface MainMenuProps {
  onNavigate: (screen: string) => void;
  onOpenSecret: () => void;
}

export const MainMenu: React.FC<MainMenuProps> = ({ onNavigate, onOpenSecret }) => {
  return (
    <div className="min-h-[calc(100vh-45px)] w-full bg-striped-pattern p-4 pb-12 flex flex-col items-center">
      <div className="w-full max-w-sm">

        {/* Top Welcome Note Card (Heading removed as requested) */}
        <div className="wonky-card p-5 mb-5 text-center relative pt-6">
          <div className="washi-tape" />
          <p className="text-base text-[#3F2925] leading-snug font-heading font-medium px-1">
            I couldn’t properly show or say how happy I am to see you, so I made this website to say some of it for me.
          </p>

          {/* Inconspicuous secret trigger button hidden right here */}
          <button
            onClick={onOpenSecret}
            className="absolute bottom-1 right-2 text-xs font-heading text-[#3F2925]/30 hover:text-[#D95844] transition-colors cursor-pointer px-1 py-0.5"
            title="psst..."
          >
            psst... ♥
          </button>
        </div>

        {/* Grid of 2 Interactive Paper Cards */}
        <div className="grid grid-cols-1 gap-4 mb-6">
          {/* Card 1: Bingo */}
          <button
            onClick={() => onNavigate('bingo')}
            className="wonky-card p-4 text-left group hover:scale-[1.01] transition-transform cursor-pointer relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold font-heading text-[#3F2925] group-hover:text-[#D95844] transition-colors leading-tight">
                  how predictable are we?
                </h3>
                <p className="text-sm text-[#3F2925]/85 mt-1 font-heading">
                  tick them off as the day goes
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#BDD9D3] border border-[#3F2925] flex items-center justify-center font-heading font-bold text-[#3F2925] group-hover:bg-[#D95844] group-hover:text-[#FFF3D5] transition-colors shrink-0 ml-2">
                ➔
              </div>
            </div>
          </button>

          {/* Card 2: Emergency Desk */}
          <button
            onClick={() => onNavigate('emergency')}
            className="wonky-card-alt p-4 text-left group hover:scale-[1.01] transition-transform cursor-pointer relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold font-heading text-[#3F2925] group-hover:text-[#D95844] transition-colors leading-tight">
                  how are you feeling?
                </h3>
                <p className="text-sm text-[#3F2925]/85 mt-1 font-heading">
                  tap here before you start acting difficult
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#FFF3D5] border border-[#3F2925] flex items-center justify-center font-heading font-bold text-[#3F2925] group-hover:bg-[#D95844] group-hover:text-[#FFF3D5] transition-colors shrink-0 ml-2">
                ➔
              </div>
            </div>
          </button>
        </div>

        {/* Bottom End-of-Day Stamp Button */}
        <div className="text-center pt-2">
          <button
            onClick={() => onNavigate('final')}
            className="hand-button text-sm py-1.5 px-4 bg-[#F8EBCB] text-[#3F2925]/80 hover:text-[#D95844] font-heading"
          >
            ✦ end of day summary (open at night) ✦
          </button>
        </div>

      </div>
    </div>
  );
};

