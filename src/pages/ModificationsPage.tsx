import React, { useState } from 'react';
import { modificationsData } from '../data/modifications';
import { ModificationCard } from '../components/modification/ModificationCard';
import { ModificationModal } from '../components/modification/ModificationModal';
import type { ModificationCategory } from '../types';

export const ModificationsPage: React.FC = () => {
  const [selectedMod, setSelectedMod] = useState<ModificationCategory | null>(null);

  return (
    <div className="w-full bg-zoku-black text-zoku-white pt-32 pb-32 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="border-b border-white/[0.06] pb-8 space-y-3">
          <p className="text-[11px] uppercase tracking-[0.25em] text-zoku-muted font-mono">
            AESTHETIC &amp; MECHANICAL TAXONOMY
          </p>
          <h1 className="text-4xl sm:text-6xl font-display font-light tracking-tight text-zoku-white">
            MODIFICATIONS
          </h1>
          <p className="text-sm sm:text-base text-zoku-gray font-light max-w-2xl leading-relaxed">
            Explore the visual language of Japanese motorcycle customization.
          </p>
        </div>

        {/* Editorial Introduction */}
        <div className="max-w-3xl space-y-4 text-sm text-zoku-offwhite/80 font-light leading-relaxed">
          <p>
            Japanese motorcycle modification did not emerge from standard tuning manuals. Instead, it was an idiosyncratic collision of 1960s Isle of Man TT road-racing aerodynamics, traditional lacquerwork and heraldry, and aggressive street silhouette restructuring.
          </p>
          <p className="text-xs text-zoku-muted">
            Select any category below to inspect mechanical function, cultural semiotics, and historical variants.
          </p>
        </div>

        {/* 8 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {modificationsData.map((mod) => (
            <ModificationCard
              key={mod.id}
              modification={mod}
              onSelect={setSelectedMod}
            />
          ))}
        </div>

      </div>

      {/* Modification Deep-Dive Modal */}
      <ModificationModal
        modification={selectedMod}
        onClose={() => setSelectedMod(null)}
      />
    </div>
  );
};
