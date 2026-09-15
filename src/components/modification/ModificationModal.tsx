import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';
import type { ModificationCategory } from '../../types';
import { motorcyclesData } from '../../data/motorcycles';

interface ModificationModalProps {
  modification: ModificationCategory | null;
  onClose: () => void;
}

export const ModificationModal: React.FC<ModificationModalProps> = ({
  modification,
  onClose,
}) => {
  useEffect(() => {
    if (modification) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modification]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!modification) return null;

  const associatedBikes = motorcyclesData.filter((b) =>
    modification.relatedMotorcycleIds.includes(b.id)
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/90 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-zoku-surface border border-zoku-border shadow-2xl my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/70 hover:bg-black text-zoku-gray hover:text-white border border-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image strip */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-black">
          <img
            src={modification.image}
            alt={modification.name}
            className="w-full h-full object-cover grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zoku-surface via-zoku-surface/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 sm:left-8 right-6">
            <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-zoku-muted mb-2 font-mono">
              <span>{modification.historicalEra}</span>
              <span className="text-zoku-red">•</span>
              <span className="font-jp text-zoku-gray">{modification.japanese}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-medium text-zoku-white tracking-tight">
              {modification.name}
            </h2>
          </div>
        </div>

        {/* Modal content body */}
        <div className="p-6 sm:p-8 lg:p-10 space-y-10 max-h-[65vh] overflow-y-auto">
          
          {/* Tagline & Overview */}
          <div className="space-y-4">
            <p className="text-base sm:text-lg text-zoku-white/90 font-light italic leading-relaxed border-l-2 border-zoku-red pl-4">
              &ldquo;{modification.tagline}&rdquo;
            </p>
            <p className="text-sm text-zoku-gray font-light leading-relaxed">
              {modification.description}
            </p>
          </div>

          {/* Two-Column: Mechanical Function vs Cultural Significance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-y border-zoku-border/70 py-8">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-zoku-muted font-mono block">
                MECHANICAL ORIGIN &amp; FUNCTION
              </span>
              <h4 className="text-base font-display font-medium text-zoku-white">
                Engineering Rationale
              </h4>
              <p className="text-xs sm:text-sm text-zoku-gray font-light leading-relaxed">
                {modification.mechanicalFunction}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-zoku-red font-mono block">
                CULTURAL ANTHROPOLOGY
              </span>
              <h4 className="text-base font-display font-medium text-zoku-white">
                Subcultural Intent &amp; Semiotics
              </h4>
              <p className="text-xs sm:text-sm text-zoku-gray font-light leading-relaxed">
                {modification.culturalSignificance}
              </p>
            </div>
          </div>

          {/* Subtypes */}
          {modification.subtypes && modification.subtypes.length > 0 && (
            <div className="space-y-4">
              <div className="text-[10px] uppercase tracking-[0.25em] text-zoku-muted font-mono">
                STYLISTIC VARIANTS &amp; REGIONAL SUBTYPES
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {modification.subtypes.map((sub, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-zoku-card/50 border border-zoku-border/60 space-y-1.5"
                  >
                    <h5 className="text-xs font-display font-medium text-zoku-white">
                      {sub.name}
                    </h5>
                    <p className="text-[11px] text-zoku-gray font-light leading-relaxed">
                      {sub.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Associated Machines */}
          {associatedBikes.length > 0 && (
            <div className="space-y-4 pt-2">
              <div className="text-[10px] uppercase tracking-[0.25em] text-zoku-muted font-mono">
                TYPICALLY MOUNTED ON PLATFORMS
              </div>
              <div className="flex flex-wrap gap-3">
                {associatedBikes.map((bike) => (
                  <Link
                    key={bike.id}
                    to={`/motorcycles/${bike.id}`}
                    onClick={onClose}
                    className="inline-flex items-center space-x-2 text-xs px-3.5 py-2 bg-zoku-dark border border-zoku-border hover:border-zoku-red text-zoku-gray hover:text-white transition-colors"
                  >
                    <span>{bike.name}</span>
                    <ArrowRight className="w-3 h-3 text-zoku-muted" />
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 sm:px-8 py-4 bg-zoku-dark border-t border-zoku-border flex items-center justify-between text-xs text-zoku-muted">
          <span className="uppercase tracking-widest text-[10px] font-mono">
            ARCHIVE ENTRY ID: {modification.id.toUpperCase()}
          </span>
          <button
            onClick={onClose}
            className="hover:text-zoku-white uppercase tracking-widest text-[10px]"
          >
            CLOSE ENTRY [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};
