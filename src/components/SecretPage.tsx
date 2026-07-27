import React from 'react';
import { APP_CONFIG } from '../config';

interface SecretPageProps {
  onBack: () => void;
}

export const SecretPage: React.FC<SecretPageProps> = ({ onBack }) => {
  const note = APP_CONFIG.secretPage;

  return (
    <div className="min-h-[calc(100vh-45px)] w-full bg-[#F8EBCB] paper-texture p-6 flex flex-col items-center justify-center relative">
      {/* Decorative subtle doodle */}
      <div className="absolute top-8 left-8 text-[#3F2925]/30 text-lg select-none">
        ♥
      </div>
      <div className="absolute bottom-8 right-8 text-[#3F2925]/30 text-lg select-none">
        ✦
      </div>

      <div className="w-full max-w-sm my-auto text-center">

        {/* Quiet Paper Note */}
        <div className="bg-[#FFF3D5] border-[1.5px] border-[#3F2925] rounded-2xl p-6 text-left relative shadow-xs mb-6">
          <div className="washi-tape" />

          {/* Paragraphs */}
          <div className="space-y-3.5 text-base sm:text-lg text-[#3F2925] font-heading leading-relaxed">
            {note.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {/* Return Button */}
        <div>
          <button
            onClick={onBack}
            className="hand-button hand-button-primary font-heading text-sm py-2 px-5"
          >
            {note.btnText}
          </button>
        </div>

      </div>
    </div>
  );
};
