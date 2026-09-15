import React from 'react';
import { SourceList } from '../components/ui/SourceList';
import { sourcesData } from '../data/sources';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full bg-zoku-black text-zoku-white pt-32 pb-32 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="border-b border-white/[0.06] pb-8 space-y-3">
          <p className="text-[11px] uppercase tracking-[0.25em] text-zoku-muted font-mono">
            ARCHIVE MANIFESTO
          </p>
          <h1 className="text-4xl sm:text-6xl font-display font-light tracking-tight text-zoku-white">
            ABOUT ZOKU ARCHIVE
          </h1>
          <p className="text-base text-zoku-gray font-light max-w-2xl leading-relaxed">
            Preserving the machines, styles, and sociology of Japan&apos;s motorcycle cultures.
          </p>
        </div>

        {/* Manifesto Content */}
        <div className="space-y-10 text-sm sm:text-base text-zoku-offwhite/90 font-light leading-relaxed">
          
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-medium text-zoku-white">
              Beyond Cyberpunk and Stereotype
            </h2>
            <p>
              Western popular media often reduces Japanese subcultures to neon-soaked cyberpunk cliches or sensationalized headlines. ZOKU ARCHIVE was conceived as an independent visual repository and rigorous design archive dedicated to documenting the authentic mechanical, social, and aesthetic realities of Japanese motorcycle movements.
            </p>
            <p>
              From the thunderous multi-cylinder four-stroke boom of the 1970s to the meticulously orchestrated exhaust cadences (<em>onkyō</em>) of teenage street clubs, these movements represented genuine working-class folk art and mechanical self-determination in postwar Japan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-zoku-border/60">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-zoku-muted">PRINCIPLE 01</span>
              <h3 className="text-base font-display text-zoku-white font-medium">Mechanical Accuracy</h3>
              <p className="text-xs sm:text-sm text-zoku-gray font-light leading-relaxed">
                We catalog exact displacement figures, frame architectures, and factory production windows verified against period documentation.
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-zoku-red">PRINCIPLE 02</span>
              <h3 className="text-base font-display text-zoku-white font-medium">Archival Respect</h3>
              <p className="text-xs sm:text-sm text-zoku-gray font-light leading-relaxed">
                No decorative anime graphics or fabricated folklore. We treat these subcultures as complex historical developments worthy of photographic preservation.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-medium text-zoku-white">
              Curatorial Structure
            </h2>
            <p>
              The archive is partitioned into primary cultural chapters: <strong>Bōsōzoku</strong> (currently available), followed by ongoing research into <strong>Hashiriya</strong> (touge and expressway racers), <strong>Kaminari-zoku</strong> (the 1950s thunder tribes), and <strong>Classic Production Racing</strong>.
            </p>
            <p>
              As primary photographic collections, oral histories, and workshop archives are verified, new chapters and machine dossiers are systematically integrated.
            </p>
          </div>

        </div>

        {/* Full Sources Bibliography */}
        <SourceList
          sources={sourcesData}
          title="MASTER ARCHIVE BIBLIOGRAPHY &amp; REFERENCES"
        />

      </div>
    </div>
  );
};
