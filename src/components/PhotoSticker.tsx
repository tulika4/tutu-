import React from 'react';
import { PhotoConfig } from '../config';

interface PhotoStickerProps {
  photo: PhotoConfig;
  className?: string;
  rotate?: number;
  width?: string;
  caption?: string;
}

export const PhotoSticker: React.FC<PhotoStickerProps> = ({
  photo,
  className = '',
  rotate = -2,
  width = 'w-48'
}) => {
  return (
    <div
      id={photo.id}
      className={`relative inline-block bg-[#FFF3D5] p-2 pt-3 pb-2.5 border-[1.5px] border-[#3F2925] rounded-[18px] shadow-[2px_3px_0px_rgba(63,41,37,0.12)] transition-transform duration-200 hover:rotate-0 hover:scale-[1.02] ${width} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Washi Tape Accent */}
      <div className="washi-tape" />

      {/* Frame Container */}
      <div className="relative bg-[#F8EBCB] border border-[#3F2925]/30 rounded-lg overflow-hidden min-h-[120px] flex flex-col items-center justify-center p-2 text-center">
        {photo.url ? (
          <img
            src={photo.url}
            alt={photo.alt}
            className="w-full h-auto max-h-64 object-cover rounded-md"
          />
        ) : (
          <div className="flex flex-col items-center justify-center py-3 px-2">
            {/* Cute hand-drawn doodle placeholder SVG */}
            <svg
              className="w-10 h-10 text-[#3F2925] opacity-70 mb-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <circle cx="10" cy="13" r="2" />
              <path d="m20 17-1.29-1.29a1 1 0 0 0-1.42 0L13.5 19" />
            </svg>
            <span className="text-xs font-bold text-[#D95844] font-heading tracking-wide uppercase px-1.5 py-0.5 bg-[#FFF3D5] border border-[#3F2925]/20 rounded">
              {photo.id}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
