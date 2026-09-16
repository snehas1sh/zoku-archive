import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { culturesData } from '../data/cultures';
import { motorcyclesData } from '../data/motorcycles';
import { modificationsData } from '../data/modifications';
import { MotorcycleGrid } from '../components/motorcycle/MotorcycleGrid';
import { ModificationCard } from '../components/modification/ModificationCard';
import { ModificationModal } from '../components/modification/ModificationModal';
import { SourceList } from '../components/ui/SourceList';
import { ComingSoon } from '../components/culture/ComingSoon';
import type { ModificationCategory, CultureBlock } from '../types';

interface CulturePageProps {
  cultureId?: string;
}

export const CulturePage: React.FC<CulturePageProps> = ({ cultureId: propCultureId }) => {
  const { id: paramId } = useParams<{ id: string }>();
  const activeId = propCultureId || paramId || 'bosozoku';

  const culture = culturesData.find((c) => c.id === activeId);

  const [selectedMod, setSelectedMod] = useState<ModificationCategory | null>(null);

  // If culture not found, show a graceful placeholder
  if (!culture) {
    return (
      <ComingSoon
        title="UNLISTED CULTURE"
        japanese="未登録"
      />
    );
  }

  // If culture is marked Coming Soon, render the reusable Coming Soon experience
  if (culture.status === 'coming_soon') {
    return (
      <ComingSoon
        title={culture.name}
        japanese={culture.japanese}
        romaji={culture.romaji}
        heroImage={culture.heroImage}
      />
    );
  }

  // Resolve canonical motorcycles
  const canonicalBikes = culture.motorcycleIds
    ? motorcyclesData.filter((b) => culture.motorcycleIds?.includes(b.id))
    : motorcyclesData.filter((b) => b.cultureIds.includes(culture.id));

  // Dynamic block renderer
  const renderBlock = (block: CultureBlock, key: React.Key) => {
    switch (block.type) {
      case 'timeline':
        return (
          <div key={key} className="border-l border-zoku-border pl-6 sm:pl-8 space-y-8 relative">
            {block.items.map((pt, idx) => (
              <div key={idx} className="relative group">
                {/* Minimal indicator dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-2.5 h-2.5 bg-zoku-red rounded-none" />
                <div className="text-xs font-mono text-zoku-red tracking-widest uppercase mb-1">
                  {pt.year}
                </div>
                <p className="text-sm text-zoku-offwhite font-light leading-relaxed">
                  {pt.event}
                </p>
              </div>
            ))}
          </div>
        );

      case 'elements':
        return (
          <div key={key} className="space-y-6">
            {block.title && (
              <h3 className="text-lg font-display text-zoku-white flex items-center space-x-3">
                <span className="w-4 h-[1px] bg-zoku-red" />
                <span>{block.title}</span>
              </h3>
            )}
            {block.summary && (
              <p className="text-sm text-zoku-gray font-light leading-relaxed">
                {block.summary}
              </p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              {block.items.map((item, i) => (
                <div key={i} className="p-5 bg-zoku-surface/40 border border-zoku-border/60 space-y-2">
                  <h4 className="text-sm font-display text-zoku-white font-medium">
                    {item.name}
                  </h4>
                  <p className="text-xs text-zoku-gray font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'points':
        return (
          <div key={key} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {block.items.map((point, i) => (
              <div
                key={i}
                className="p-5 bg-zoku-card/30 border border-zoku-border/50 text-xs text-zoku-gray font-light leading-relaxed space-y-2"
              >
                <span className="text-[10px] font-mono text-zoku-muted block">0{i + 1}</span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        );

      case 'prose':
        return (
          <div key={key} className="space-y-4 text-sm text-zoku-offwhite/90 font-light leading-relaxed">
            {block.title && (
              <h3 className="text-lg font-display text-zoku-white font-medium">
                {block.title}
              </h3>
            )}
            {Array.isArray(block.content) ? (
              block.content.map((paragraph, i) => <p key={i}>{paragraph}</p>)
            ) : (
              <p>{block.content}</p>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-zoku-black text-zoku-white">
      
      {/* ==================================================
          PAGE HERO
          ================================================== */}
      <section className="relative pt-32 pb-20 sm:pb-28 px-6 sm:px-8 lg:px-12 border-b border-white/[0.06] overflow-hidden">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src={culture.heroImage}
            alt={`${culture.name} archival machine`}
            className="w-full h-full object-cover grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zoku-black via-zoku-black/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-6">
          <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-zoku-muted font-mono">
            <span>JAPANESE MOTORCYCLE SUBDIVISIONS</span>
            <span className="text-zoku-red">•</span>
            <span>CULTURE 01</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-6">
            <h1 className="text-4xl sm:text-7xl font-display font-light text-zoku-white tracking-tight">
              {culture.name}
            </h1>
            <span className="text-2xl sm:text-4xl font-jp text-zoku-red mt-2 sm:mt-0">
              {culture.japanese}
            </span>
          </div>

          <p className="text-base sm:text-xl text-zoku-gray font-light max-w-3xl leading-relaxed">
            {culture.shortDescription}
          </p>
        </div>
      </section>

      {/* ==================================================
          CANONICAL MOTORCYCLES SECTION (If present)
          ================================================== */}
      {canonicalBikes.length > 0 && (
        <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
          <div className="mb-12">
            <p className="text-[11px] uppercase tracking-[0.25em] text-zoku-muted font-mono mb-2">
              CANONICAL MACHINES
            </p>
            <h2 className="text-2xl sm:text-4xl font-display font-medium text-zoku-white tracking-tight">
              THE MOTORCYCLES
            </h2>
            <p className="text-xs sm:text-sm text-zoku-gray font-light mt-2 max-w-xl">
              Four defining Japanese multi-cylinder platforms that formed the backbone of the bōsōzoku phenomenon.
            </p>
          </div>

          {/* Clean Editorial Motorcycle Grid */}
          <MotorcycleGrid motorcycles={canonicalBikes} columns={2} />
        </section>
      )}

      {/* ==================================================
          MODIFICATIONS SECTION (If enabled)
          ================================================== */}
      {culture.hasModifications && (
        <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
          <div className="mb-12">
            <p className="text-[11px] uppercase tracking-[0.25em] text-zoku-muted font-mono mb-2">
              VISUAL TAXONOMY
            </p>
            <h2 className="text-2xl sm:text-4xl font-display font-medium text-zoku-white tracking-tight">
              MODIFICATIONS
            </h2>
            <p className="text-xs sm:text-sm text-zoku-gray font-light mt-2 max-w-xl">
              The mechanical and sculptural grammar that altered production silhouettes into kinetic street art. Click any entry to inspect details.
            </p>
          </div>

          {/* Modification 4-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modificationsData.map((mod) => (
              <ModificationCard
                key={mod.id}
                modification={mod}
                onSelect={setSelectedMod}
              />
            ))}
          </div>
        </section>
      )}

      {/* ==================================================
          DYNAMIC CULTURE SECTIONS
          ================================================== */}
      {culture.sections && culture.sections.map((section, idx) => (
        <section
          key={section.id || idx}
          className="py-20 sm:py-24 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto border-b border-white/[0.06]"
        >
          <div className="mb-10">
            {section.eyebrow && (
              <p className="text-[11px] uppercase tracking-[0.25em] text-zoku-muted font-mono mb-2">
                {section.eyebrow}
              </p>
            )}
            <div className="flex items-baseline space-x-3">
              <h2 className="text-2xl sm:text-4xl font-display font-medium text-zoku-white tracking-tight">
                {section.title}
              </h2>
              {section.japanese && (
                <span className="text-lg sm:text-2xl font-jp text-zoku-red">
                  {section.japanese}
                </span>
              )}
            </div>
            {section.summary && (
              <p className="text-sm text-zoku-gray font-light mt-2 max-w-2xl leading-relaxed">
                {section.summary}
              </p>
            )}
          </div>

          <div className="space-y-12">
            {section.blocks.map((block, bIdx) => renderBlock(block, bIdx))}
          </div>
        </section>
      ))}

      {/* ==================================================
          SOURCES
          ================================================== */}
      {culture.sources && culture.sources.length > 0 && (
        <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto">
          <SourceList sources={culture.sources} />
        </section>
      )}

      {/* Modification Inspection Modal */}
      {culture.hasModifications && (
        <ModificationModal
          modification={selectedMod}
          onClose={() => setSelectedMod(null)}
        />
      )}

    </div>
  );
};
