import React, { useState } from 'react';
import { APP_CONFIG } from '../config';

interface ClassifiedSectionProps {
  onBack: () => void;
}

export const ClassifiedSection: React.FC<ClassifiedSectionProps> = ({ onBack }) => {
  const [cards, setCards] = useState(APP_CONFIG.classifiedCards);
  const [activeMessage, setActiveMessage] = useState<{ id: string; text: string; isError: boolean } | null>(null);

  const handleCardClick = (card: typeof cards[0]) => {
    if (card.isLocked) {
      setActiveMessage({
        id: card.id,
        text: card.lockedMessage || "nice try. access denied.",
        isError: true
      });
    } else {
      setActiveMessage({
        id: card.id,
        text: card.unlockedContent,
        isError: false
      });
    }
  };

  const toggleLock = (cardId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCards(prev =>
      prev.map(c => (c.id === cardId ? { ...c, isLocked: !c.isLocked } : c))
    );
    setActiveMessage(null);
  };

  return (
    <div className="min-h-[calc(100vh-45px)] w-full bg-striped-pattern p-4 flex flex-col items-center">
      <div className="w-full max-w-sm">

        {/* Header Card */}
        <div className="wonky-card p-4 mb-4 text-center relative">
          <div className="washi-tape" />
          <h2 className="text-2xl font-bold font-heading text-[#D95844] mb-1">
            classified boyfriend information
          </h2>
          <p className="text-xs text-[#3F2925] leading-snug">
            information available only when tulika permits.
          </p>
        </div>

        {/* Message / Content Reveal Modal or Banner */}
        {activeMessage && (
          <div className={`mb-4 p-4 border-[1.5px] border-[#3F2925] rounded-xl text-center relative animate-fadeIn ${
            activeMessage.isError ? 'bg-[#D95844] text-[#FFF3D5]' : 'bg-[#FFF3D5] text-[#3F2925]'
          }`}>
            <p className="text-base font-heading font-bold whitespace-pre-line leading-relaxed">
              {activeMessage.text}
            </p>
            <button
              onClick={() => setActiveMessage(null)}
              className="mt-2 text-xs border border-current px-2 py-0.5 rounded-full opacity-80 hover:opacity-100"
            >
              close note
            </button>
          </div>
        )}

        {/* Envelope Grid */}
        <div className="grid grid-cols-1 gap-3.5 mb-6">
          {cards.map((card) => {
            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(card)}
                className={`wonky-card p-4 text-left cursor-pointer transition-all relative overflow-hidden group ${
                  card.isLocked ? 'bg-[#F8EBCB]' : 'bg-[#FFF3D5]'
                }`}
              >
                {/* Envelope Top Flap Design */}
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-heading font-bold text-[#D95844] uppercase tracking-wider flex items-center gap-1">
                    {card.isLocked ? '🔒 locked envelope' : '🔓 unlocked card'}
                  </span>

                  {/* Tulika Admin Toggle lock button */}
                  <button
                    onClick={(e) => toggleLock(card.id, e)}
                    className="text-[10px] text-[#3F2925]/50 hover:text-[#D95844] border border-[#3F2925]/20 px-1.5 py-0.5 rounded"
                    title="Tulika: Click to lock/unlock card"
                  >
                    {card.isLocked ? 'tulika: unlock' : 'tulika: lock'}
                  </button>
                </div>

                <h3 className="text-xl font-bold font-heading text-[#3F2925] group-hover:text-[#D95844] transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs text-[#3F2925]/70 mt-1 italic font-body">
                  {card.isLocked
                    ? 'requires tulika authorization to reveal content'
                    : 'click to open note'}
                </p>
              </div>
            );
          })}
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={onBack}
            className="hand-button hand-button-primary text-sm py-2 px-4"
          >
            return to headquarters
          </button>
        </div>

      </div>
    </div>
  );
};
