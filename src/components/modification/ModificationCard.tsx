import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { ModificationCategory } from '../../types';

interface ModificationCardProps {
  modification: ModificationCategory;
  onSelect: (modification: ModificationCategory) => void;
}

export const ModificationCard: React.FC<ModificationCardProps> = ({
  modification,
  onSelect,
}) => {
  return (
    <div
      onClick={() => onSelect(modification)}
      className="group cursor-pointer block bg-zoku-card/40 border border-zoku-border/70 hover:border-zoku-red/60 transition-all duration-300"
    >
      {/* Photograph */}
      <div className="relative aspect-[4/3] overflow-hidden bg-black/80">
        <img
          src={modification.image}
          alt={modification.name}
          className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-[1.02] group-hover:grayscale-0 transition-all duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

        {/* Japanese Title Badge */}
        <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 text-[11px] font-jp text-zoku-white/90 border border-white/10">
          {modification.japanese}
        </div>

        {/* Bottom category header */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-[10px] uppercase tracking-[0.25em] text-zoku-muted font-mono mb-1">
            {modification.historicalEra}
          </p>
          <h3 className="text-lg font-display font-medium text-zoku-white group-hover:text-zoku-red transition-colors">
            {modification.name}
          </h3>
        </div>
      </div>

      {/* Description text */}
      <div className="p-5 space-y-3">
        <p className="text-xs text-zoku-gray font-light line-clamp-2 leading-relaxed">
          {modification.tagline}
        </p>
        <div className="pt-2 flex items-center text-xs uppercase tracking-[0.2em] text-zoku-muted group-hover:text-zoku-white transition-colors">
          <span>READ ARCHIVE ENTRY</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};
