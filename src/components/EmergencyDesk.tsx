import React, { useState } from 'react';

interface EmergencyDeskProps {
  onBack: () => void;
}

interface FeelingOption {
  id: string;
  label: string;
  response: string;
}

export const EmergencyDesk: React.FC<EmergencyDeskProps> = ({ onBack }) => {
  const [selectedFeeling, setSelectedFeeling] = useState<FeelingOption | null>(null);

  const feelings: FeelingOption[] = [
    {
      id: 'hungry',
      label: 'i am hungry',
      response: 'please remain calm. let tutu know which cuisine you want and she will order.'
    },
    {
      id: 'tired',
      label: 'i am tired',
      response: 'go hug tutu.'
    },
    {
      id: 'annoying',
      label: 'tutu is annoying me',
      response: 'how dare you. this complaint has been received, reviewed, and ignored.'
    },
    {
      id: 'leave',
      label: 'i don’t want to leave',
      response: 'i know. marry me.'
    },
    {
      id: 'annoy_tutu',
      label: 'i want to annoy tutu',
      response: 'go ahead. this may have consequences.'
    },
    {
      id: 'kiss',
      label: 'i need a kiss',
      response: 'approved immediately. (would be better if you surprise her)'
    },
    {
      id: 'again',
      label: 'i want this day again',
      response: 'good. now book Tutu’s tickets to Georgia for January.'
    }
  ];

  return (
    <div className="min-h-[calc(100vh-45px)] w-full bg-striped-pattern p-4 pb-12 flex flex-col items-center">
      <div className="w-full max-w-sm">

        {/* Header Card */}
        <div className="wonky-card p-4 mb-4 text-center relative pt-5">
          <div className="washi-tape" />
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#D95844] mb-1">
            how are you feeling?
          </h2>
          <p className="text-sm font-heading text-[#3F2925] leading-snug px-1">
            tap here before you start acting difficult
          </p>
        </div>

        {/* Selected Response Card */}
        {selectedFeeling && (
          <div className="mb-5 p-5 bg-[#BDD9D3] border-[1.5px] border-[#3F2925] rounded-2xl text-center relative shadow-[3px_4px_0px_rgba(63,41,37,0.1)] transition-all animate-fadeIn">
            <div className="washi-tape" />
            <span className="text-xs font-bold font-heading uppercase text-[#D95844] tracking-wider block mb-1">
              tutu’s response:
            </span>
            <p className="text-lg font-heading font-bold text-[#3F2925] leading-snug">
              {selectedFeeling.response}
            </p>
          </div>
        )}

        {/* Feeling Options List */}
        <div className="grid grid-cols-1 gap-2.5 mb-6">
          {feelings.map((item) => {
            const isSelected = selectedFeeling?.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedFeeling(item)}
                className={`hand-button font-heading w-full text-base py-2.5 px-4 text-left justify-between transition-all ${
                  isSelected
                    ? 'bg-[#D95844] text-[#FFF3D5] translate-x-1 shadow-inner'
                    : 'bg-[#FFF3D5] text-[#3F2925] hover:bg-[#F8EBCB]'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs opacity-70 ml-2">➔</span>
              </button>
            );
          })}
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={onBack}
            className="hand-button hand-button-primary font-heading text-sm py-2 px-5"
          >
            the crisis has passed
          </button>
        </div>

      </div>
    </div>
  );
};

