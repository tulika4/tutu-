import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { APP_CONFIG } from '../config';

interface OpeningScreenProps {
  onContinue: () => void;
}

const NICKNAMES = [
  'kannu',
  'kaddu',
  'schatz',
  'mein mann',
  'sonnenschein',
  'boyfriend',
  'uncle'
];

export const OpeningScreen: React.FC<OpeningScreenProps> = ({ onContinue }) => {
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % NICKNAMES.length);
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  const handleChoice = (isButton1: boolean) => {
    const msg = isButton1
      ? APP_CONFIG.opening.btn1Response
      : APP_CONFIG.opening.btn2Response;
    setFeedbackMessage(msg);

    setTimeout(() => {
      onContinue();
    }, 1200);
  };

  const currentNickname = NICKNAMES[currentIndex];

  return (
    <div className="min-h-[calc(100vh-45px)] w-full bg-striped-pattern flex items-center justify-center p-4 relative">
      {/* Decorative background doodles */}
      <div className="absolute top-6 left-6 text-xl text-[#3F2925]/40 select-none font-heading">
        ✦ 
      </div>
      <div className="absolute bottom-8 right-6 text-xl text-[#3F2925]/40 select-none font-heading">
        ✿
      </div>

      {/* Center Card Container */}
      <div className="relative w-full max-w-sm my-auto">

        {/* Main Wonky Paper Card */}
        <div className="wonky-card p-5 pt-6 text-center relative z-20">
          {/* Top Washi Tape */}
          <div className="washi-tape" />

          {/* Heading with fixed 'hello,' and smoothly fading nickname */}
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-[#D95844] mb-3 tracking-wide flex items-center justify-center flex-wrap gap-x-1.5 min-h-[38px]">
            <span className="whitespace-nowrap">hello,</span>
            <span className="inline-flex items-center min-w-[140px] sm:min-w-[160px] justify-start h-[38px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentNickname}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="inline-block whitespace-nowrap"
                >
                  {currentNickname}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base text-[#3F2925] mb-5 leading-snug px-1 font-body">
            I have been waiting for this day, so yes, you are under my supervision now.
          </p>

          {/* Question directly above buttons */}
          <div className="mb-4 pt-1">
            <p className="text-sm font-heading font-bold text-[#D95844] italic">
              will you be cute and cooperate?
            </p>
          </div>

          {/* Feedback Toast or Buttons */}
          {feedbackMessage ? (
            <div className="py-4 my-2 bg-[#BDD9D3] border border-[#3F2925] rounded-xl text-center animate-bounce">
              <p className="text-base font-bold font-heading text-[#3F2925]">
                {feedbackMessage}
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleChoice(true)}
                className="hand-button hand-button-primary w-full text-base py-2"
              >
                {APP_CONFIG.opening.btn1}
              </button>

              <button
                onClick={() => handleChoice(false)}
                className="hand-button w-full text-sm py-2 bg-[#FFF3D5]"
              >
                {APP_CONFIG.opening.btn2}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

