import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'motion/react';
import { APP_CONFIG } from '../config';

interface BingoScreenProps {
  onBack: () => void;
}

export const BingoScreen: React.FC<BingoScreenProps> = ({ onBack }) => {
  const [selectedSquares, setSelectedSquares] = useState<boolean[]>(
    new Array(9).fill(false)
  );
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(true);

  const toggleSquare = (index: number) => {
    const updated = [...selectedSquares];
    updated[index] = !updated[index];
    setSelectedSquares(updated);
  };

  const isAllSelected = selectedSquares.length === 9 && selectedSquares.every(Boolean);

  // Trigger confetti when all 10 are checked
  useEffect(() => {
    if (isAllSelected) {
      // First celebration confetti burst
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#D95844', '#BDD9D3', '#A7A07A', '#FFF3D5', '#F8EBCB']
      });

      const timer1 = setTimeout(() => {
        confetti({
          particleCount: 40,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.6 }
        });
        confetti({
          particleCount: 40,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.6 }
        });
      }, 300);

      return () => clearTimeout(timer1);
    } else {
      setIsEnvelopeOpen(false);
    }
  }, [isAllSelected]);

  const handleOpenEnvelope = () => {
    setIsEnvelopeOpen(true);
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.4 },
      colors: ['#D95844', '#BDD9D3', '#FFF3D5', '#3F2925']
    });
  };

  return (
    <div className="min-h-[calc(100vh-45px)] w-full bg-striped-pattern p-4 pb-12 flex flex-col items-center relative">
      <div className="w-full max-w-sm">

        {/* Header Card */}
        <div className="wonky-card p-4 mb-5 text-center relative pt-5">
          <div className="washi-tape" />
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#D95844] mb-1">
            today’s bingo
          </h2>
          <p className="text-sm font-heading text-[#3F2925] leading-snug px-1">
            cross the tiles whenever one of these happens
          </p>
        </div>

        {/* 3x3 Bingo Grid (9 tiles) */}
        <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mb-6">
          {APP_CONFIG.bingoItems.map((item, idx) => {
            const isSelected = selectedSquares[idx];
            return (
              <button
                key={idx}
                onClick={() => toggleSquare(idx)}
                className={`relative min-h-[90px] p-2 sm:p-2.5 flex items-center justify-center text-center rounded-xl border-[1.5px] border-[#3F2925] transition-all cursor-pointer select-none ${
                  isSelected
                    ? 'bg-[#F8EBCB] scale-[0.98] shadow-inner'
                    : 'bg-[#FFF3D5] hover:bg-[#F8EBCB] shadow-[2px_3px_0px_rgba(63,41,37,0.06)]'
                }`}
                style={{
                  borderRadius:
                    idx % 3 === 0
                      ? '16px 22px 14px 20px'
                      : idx % 2 === 0
                      ? '20px 14px 22px 16px'
                      : '14px 20px 16px 22px'
                }}
              >
                {/* Tile Number Indicator */}
                <span className="absolute top-1 left-1.5 text-[9px] font-heading font-bold text-[#3F2925]/40">
                  #{idx + 1}
                </span>

                {/* Text Content */}
                <span className={`text-xs sm:text-sm font-heading font-bold text-[#3F2925] leading-snug z-10 ${isSelected ? 'line-through opacity-75' : ''}`}>
                  {item}
                </span>

                {/* Hand-drawn Red Cross Overlay */}
                {isSelected && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                    <svg className="w-9 h-9 text-[#D95844] opacity-85 transform -rotate-6" viewBox="0 0 40 40">
                      <path
                        d="M 10 10 L 30 30 M 30 10 L 10 30"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Return to Headquarters Back Button */}
        <div className="text-center">
          <button
            onClick={onBack}
            className="hand-button hand-button-primary font-heading text-sm py-2 px-5"
          >
            return to headquarters
          </button>
        </div>

      </div>

      {/* Completion Modal Sequence (Triggers ONLY when all 10 tiles are checked) */}
      <AnimatePresence>
        {isAllSelected && showCompletionModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#3F2925]/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 20 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="w-full max-w-sm relative"
            >
              {/* Closed Envelope view */}
              {!isEnvelopeOpen ? (
                <div
                  onClick={handleOpenEnvelope}
                  className="bg-[#FFF3D5] border-2 border-[#3F2925] rounded-2xl p-6 text-center cursor-pointer shadow-[4px_6px_0px_rgba(63,41,37,0.2)] hover:scale-[1.02] transition-transform relative overflow-hidden group"
                  style={{
                    borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px'
                  }}
                >
                  {/* Washi Tape Accent */}
                  <div className="washi-tape" />

                  {/* Envelope Flap Lines */}
                  <div className="w-full h-24 border-b-2 border-[#3F2925]/30 mb-4 flex items-center justify-center relative bg-[#F8EBCB]/50 rounded-lg">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl transform group-hover:scale-110 transition-transform">
                        ✉️
                      </span>
                    </div>
                  </div>

                  <p className="font-heading font-bold text-xl text-[#D95844] mb-1">
                    bingo complete!
                  </p>
                  <p className="font-heading text-sm text-[#3F2925] mb-4">
                    you crossed off all 9 tiles! tap the envelope to open your note.
                  </p>

                  <button className="hand-button hand-button-accent font-heading text-base py-2 px-6">
                    open envelope
                  </button>
                </div>
              ) : (
                /* Opened Envelope & Handwritten Note */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#FFF3D5] border-2 border-[#3F2925] rounded-2xl p-6 text-center relative shadow-[4px_6px_0px_rgba(63,41,37,0.2)]"
                  style={{
                    borderRadius: '15px 255px 15px 225px/225px 15px 255px 15px'
                  }}
                >
                  {/* Top tape */}
                  <div className="washi-tape" />

                  {/* Stamp / Icon */}
                  <div className="inline-block bg-[#BDD9D3] border border-[#3F2925] rounded-full px-3 py-0.5 text-xs font-heading font-bold text-[#3F2925] mb-3">
                    ✦ official bingo reward ✦
                  </div>

                  {/* Line 1: Before coupon */}
                  <p className="font-heading text-lg font-bold text-[#3F2925] mb-4">
                    well, that was expected.
                  </p>

                  {/* Handwritten Coupon Card */}
                  <div className="bg-[#F8EBCB] border-2 border-dashed border-[#D95844] p-4 rounded-xl text-center mb-5 relative shadow-inner">
                    <span className="text-xs font-heading font-bold text-[#D95844] uppercase tracking-wider block mb-1">
                      special coupon
                    </span>
                    <p className="font-heading font-bold text-xl text-[#3F2925] leading-snug">
                      you get 10 minutes of tutu saying yes to anything you say and ask her
                    </p>
                  </div>

                  {/* Dismiss / Close modal button */}
                  <button
                    onClick={() => setShowCompletionModal(false)}
                    className="hand-button hand-button-primary font-heading text-sm py-2 px-5"
                  >
                    keep playing or back
                  </button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

