import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ComingSoonProps {
  title: string;
  japanese: string;
  romaji?: string;
  heroImage?: string;
}

export const ComingSoon: React.FC<ComingSoonProps> = ({
  title,
  japanese,
  romaji,
  heroImage,
}) => {
  return (
    <div className="relative min-h-[85vh] flex flex-col justify-center items-center px-6 text-center overflow-hidden">
      {/* Background with low opacity */}
      {heroImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover grayscale contrast-125 opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zoku-black via-zoku-black/90 to-zoku-black" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-xl mx-auto space-y-8 py-20">
        
        {/* Cultural Name & Kanji */}
        <div className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.3em] text-zoku-muted font-mono">
            ARCHIVE INTAKE &bull; UNRELEASED CHAPTER
          </p>
          <h1 className="text-4xl sm:text-6xl font-display font-light tracking-tight text-zoku-white">
            {title}
          </h1>
          <div className="flex items-center justify-center space-x-3 text-lg sm:text-xl text-zoku-gray font-jp">
            <span>{japanese}</span>
            {romaji && <span className="text-xs text-zoku-muted tracking-widest uppercase font-sans">({romaji})</span>}
          </div>
        </div>

        {/* Restrained Red Line */}
        <div className="w-12 h-[1.5px] bg-zoku-red mx-auto" />

        {/* Coming Soon Message */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] font-medium text-zoku-gray">
            COMING SOON
          </p>
          <p className="text-base text-zoku-muted font-light leading-relaxed max-w-md mx-auto">
            Research for this culture is currently being developed.
          </p>
          <p className="text-xs text-zoku-muted/70 font-light max-w-sm mx-auto">
            Archival oral histories, period mechanical documentation, and photographic permissions are actively in curation.
          </p>
        </div>

        {/* Return Button */}
        <div className="pt-6">
          <Link
            to="/cultures/bosozoku"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] px-6 py-3 border border-zoku-border text-zoku-gray hover:text-white hover:border-zoku-red transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>EXPLORE BŌSŌZOKU ARCHIVE</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
