import React, { useState } from 'react';
import { APP_CONFIG } from '../config';

interface DayPassScreenProps {
  onActivate: () => void;
}

export const DayPassScreen: React.FC<DayPassScreenProps> = ({ onActivate }) => {
  const [activated, setActivated] = useState(false);

  const handleAccept = () => {
    setActivated(true);
    setTimeout(() => {
      onActivate();
    }, 1200);
  };

  return (
    <div className="min-h-[calc(100vh-45px)] w-full bg-striped-pattern flex items-center justify-center p-4">
      <div className="w-full max-w-sm my-auto">
        {/* Handmade Wonky Ticket Container */}
        <div className="bg-[#FFF3D5] border-[1.5px] border-[#3F2925] rounded-2xl p-6 relative shadow-[3px_4px_0px_rgba(63,41,37,0.1)]">
          {/* Top Ticket Notch cuts */}
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-5 bg-[#A7A07A] rounded-full border-r-[1.5px] border-[#3F2925]" />
          <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 bg-[#A7A07A] rounded-full border-l-[1.5px] border-[#3F2925]" />

          {/* Ticket Badge Header (No main heading) */}
          <div className="text-center pb-4 mb-5 border-b-2 border-dashed border-[#3F2925]/30">
            <span className="text-sm font-heading font-bold text-[#D95844] bg-[#F8EBCB] px-3 py-1 rounded-md border border-[#3F2925]/20 inline-block tracking-wide">
              one day pass ticket
            </span>
          </div>

          {/* Ticket Body / Details Box */}
          <div className="space-y-3 font-heading text-[#3F2925] bg-[#F8EBCB] p-4 rounded-xl border border-[#3F2925]/20 mb-5">
            <div className="flex items-baseline justify-between border-b border-[#3F2925]/15 pb-1.5">
              <span className="font-bold text-sm text-[#D95844]">guest:</span>
              <span className="font-bold text-lg">mr. mittal</span>
            </div>

            <div className="flex items-baseline justify-between border-b border-[#3F2925]/15 pb-1.5">
              <span className="font-bold text-sm text-[#D95844]">host:</span>
              <span className="font-bold text-lg">mrs. mittal</span>
            </div>

            <div className="border-b border-[#3F2925]/15 pb-2">
              <span className="font-bold text-sm text-[#D95844] block mb-0.5">validity:</span>
              <span className="text-base leading-tight">
                one day <span className="text-sm italic opacity-85">(i wish it was every day)</span>
              </span>
            </div>

            <div>
              <span className="font-bold text-sm text-[#D95844] block mb-1">includes:</span>
              <span className="text-base leading-snug block">
                food, sleep, slaps, dance, walks, talks, cuddles, some private stuff that i’m shy to mention hehe
              </span>
            </div>
          </div>

          {/* Terms & Conditions Note (Separate small handwritten note below box) */}
          <div className="mb-6 px-1 text-center font-heading">
            <span className="font-bold text-xs text-[#D95844] block mb-0.5">
              * terms & conditions
            </span>
            <p className="text-sm text-[#3F2925]/85 italic leading-snug">
              host reserves the right to change plans, demand cuddles, talk more than required, and get over clingy.
            </p>
          </div>

          {/* Centred Accept Button or Confirmation */}
          {activated ? (
            <div className="p-3 bg-[#BDD9D3] border-[1.5px] border-[#3F2925] rounded-xl text-center font-heading transform -rotate-1 animate-pulse">
              <p className="font-bold text-lg text-[#3F2925]">
                {APP_CONFIG.dayPass.confirmation}
              </p>
            </div>
          ) : (
            <div className="flex justify-center">
              <button
                onClick={handleAccept}
                className="hand-button hand-button-accent font-heading text-lg py-2.5 px-6 w-full max-w-[220px]"
              >
                accept happily
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

