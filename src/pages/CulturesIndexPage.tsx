import React from 'react';
import { culturesData } from '../data/cultures';
import { CultureItem } from '../components/culture/CultureItem';

export const CulturesIndexPage: React.FC = () => {
  return (
    <div className="w-full bg-zoku-black text-zoku-white pt-32 pb-32 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="border-b border-white/[0.06] pb-8 space-y-3">
          <p className="text-[11px] uppercase tracking-[0.25em] text-zoku-muted font-mono">
            ANTHROPOLOGICAL INDEX
          </p>
          <h1 className="text-4xl sm:text-6xl font-display font-light tracking-tight text-zoku-white">
            CULTURES
          </h1>
          <p className="text-sm sm:text-base text-zoku-gray font-light max-w-2xl leading-relaxed">
            Exploration into the distinct mechanical movements, subcultures, and riding traditions of postwar Japan.
          </p>
        </div>

        {/* Culture grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {culturesData.map((culture) => (
            <div key={culture.id} className="space-y-3">
              <CultureItem culture={culture} />
              <p className="text-xs text-zoku-gray font-light leading-relaxed line-clamp-2 px-1">
                {culture.shortDescription}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
