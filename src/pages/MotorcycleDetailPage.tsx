import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Wrench } from 'lucide-react';
import { motorcyclesData } from '../data/motorcycles';
import { MotorcycleSpecs } from '../components/motorcycle/MotorcycleSpecs';
import { SourceList } from '../components/ui/SourceList';

export const MotorcycleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const motorcycle = motorcyclesData.find((m) => m.id === id);

  if (!motorcycle) {
    return <Navigate to="/motorcycles" replace />;
  }

  return (
    <div className="w-full bg-zoku-black text-zoku-white pt-28 pb-32 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Back navigation */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
          <Link
            to="/motorcycles"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-zoku-muted hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO MOTORCYCLES</span>
          </Link>
          <div className="text-[10px] uppercase font-mono tracking-widest text-zoku-muted">
            CATALOGUE ID &bull; {motorcycle.id.toUpperCase()}
          </div>
        </div>

        {/* Header Block */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-zoku-red font-mono">
            <span>{motorcycle.manufacturer}</span>
            <span className="text-white/20">•</span>
            <span className="text-zoku-muted">{motorcycle.productionYears}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-light text-zoku-white tracking-tight">
            {motorcycle.name}
          </h1>
          <p className="text-base sm:text-lg text-zoku-gray font-light max-w-2xl leading-relaxed">
            {motorcycle.shortDescription}
          </p>
        </div>

        {/* Large Cinematic Motorcycle Photograph */}
        <div className="relative w-full aspect-[16/9] bg-[#0c0c0f] border border-zoku-border/80 overflow-hidden flex items-center justify-center">
          <img
            src={motorcycle.image}
            alt={motorcycle.name}
            className="w-full h-full object-contain filter contrast-[1.05] p-4 sm:p-8"
          />
          <div className="absolute bottom-4 right-4 bg-black/80 px-2.5 py-1 text-[10px] uppercase font-mono tracking-widest text-zoku-muted border border-white/10">
            {motorcycle.specs.displacement} &bull; {motorcycle.era}
          </div>
        </div>

        {/* Two-Column Editorial Layout: Left About, Right Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-6">
          
          {/* Left Column: About the Motorcycle */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-zoku-muted font-mono mb-2">
                HISTORICAL APPRAISAL
              </p>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-zoku-white tracking-tight">
                About the Motorcycle
              </h2>
            </div>
            
            <div className="space-y-4 text-sm sm:text-base text-zoku-offwhite/90 font-light leading-relaxed">
              <p>{motorcycle.about}</p>
            </div>

            {/* Cultural Connection Section */}
            <div className="pt-8 border-t border-zoku-border/60 space-y-4">
              <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-zoku-red font-mono">
                <span>SUBCULTURAL ANTHROPOLOGY</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-medium text-zoku-white">
                BŌSŌZOKU CONNECTION
              </h3>
              <p className="text-sm sm:text-base text-zoku-gray font-light leading-relaxed">
                {motorcycle.bosozokuConnection}
              </p>
            </div>

            {/* Common Modifications Section */}
            <div className="pt-8 border-t border-zoku-border/60 space-y-4">
              <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-zoku-muted font-mono">
                <Wrench className="w-3.5 h-3.5 text-zoku-red" />
                <span>COMMON MODIFICATIONS</span>
              </div>
              <p className="text-xs text-zoku-gray font-light">
                Key sculptural adaptations traditionally performed on this platform:
              </p>
              <div className="flex flex-wrap gap-2.5 pt-1">
                {motorcycle.commonModifications.map((mod, i) => (
                  <Link
                    key={i}
                    to="/modifications"
                    className="inline-flex items-center space-x-1.5 text-xs px-3.5 py-2 bg-zoku-surface/80 border border-zoku-border hover:border-zoku-red text-zoku-gray hover:text-white transition-colors"
                  >
                    <span>{mod}</span>
                    <ArrowRight className="w-3 h-3 text-zoku-muted" />
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Factory Technical Specifications */}
          <div className="lg:col-span-5 space-y-6">
            <MotorcycleSpecs specs={motorcycle.specs} />

            <div className="p-5 bg-zoku-card/30 border border-zoku-border/50 text-xs text-zoku-muted space-y-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-zoku-gray block">
                ARCHIVAL VERIFICATION
              </span>
              <p className="font-light leading-relaxed">
                All engineering metrics cross-referenced against period manufacturer technical brochures and contemporary issues of Young Machine &amp; AutoBy.
              </p>
            </div>
          </div>

        </div>

        {/* Sources Section */}
        <SourceList sources={motorcycle.sources} />

      </div>
    </div>
  );
};
