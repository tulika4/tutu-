import React, { useState } from 'react';
import { APP_CONFIG } from '../config';

interface FinalScreenProps {
  onBackToMenu: () => void;
}

export const FinalScreen: React.FC<FinalScreenProps> = ({ onBackToMenu }) => {
  const [requested, setRequested] = useState(false);
  const data = APP_CONFIG.finalScreen;

  return (
    <div className="min-h-[calc(100vh-45px)] w-full bg-striped-pattern p-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-sm my-auto">

        {/* Expired Pass Ticket Card */}
        <div className="bg-[#FFF3D5] border-[1.5px] border-[#3F2925] rounded-2xl p-5 text-center relative shadow-[3px_4px_0px_rgba(63,41,37,0.1)] mb-6">
          <div className="washi-tape" />

          {/* Heading */}
          <h2 className="text-2xl font-bold font-heading text-[#D95844] mb-3 mt-1">
            {data.title}
          </h2>

          {/* Summary Stats */}
          <div className="bg-[#F8EBCB] border border-[#3F2925]/20 rounded-xl p-3.5 text-left space-y-2 mb-4">
            {data.stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-baseline justify-between gap-3 border-b border-[#3F2925]/15 pb-1.5 last:border-0"
              >
                <span className="font-heading font-bold text-sm sm:text-base text-[#D95844] shrink-0">
                  {stat.label}:
                </span>
                <span className="font-heading font-bold text-sm sm:text-base text-[#3F2925] text-right break-words">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* Request Approval Result or Button */}
          {requested ? (
            <div className="p-3.5 bg-[#BDD9D3] border-[1.5px] border-[#3F2925] rounded-xl text-center animate-fadeIn">
              <p className="text-base sm:text-lg font-heading font-bold text-[#3F2925]">
                {data.finalMessage}
              </p>
            </div>
          ) : (
            <button
              onClick={() => setRequested(true)}
              className="hand-button hand-button-accent w-full text-base py-2.5"
            >
              {data.btnText}
            </button>
          )}
        </div>

        {/* Back to HQ Menu */}
        <div className="text-center">
          <button
            onClick={onBackToMenu}
            className="hand-button hand-button-primary text-sm py-2 px-4"
          >
            return to headquarters
          </button>
        </div>

      </div>
    </div>
  );
};
