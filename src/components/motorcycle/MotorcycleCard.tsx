import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Motorcycle } from '../../types';

interface MotorcycleCardProps {
  motorcycle: Motorcycle;
}

export const MotorcycleCard: React.FC<MotorcycleCardProps> = ({ motorcycle }) => {
  return (
    <Link
      to={`/motorcycles/${motorcycle.id}`}
      className="group block bg-zoku-card/50 border border-zoku-border/60 hover:border-zoku-red/60 transition-all duration-300"
    >
      {/* Photograph */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black/80">
        <img
          src={motorcycle.image}
          alt={motorcycle.name}
          className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
        
        {/* Era / Displacement tag */}
        <div className="absolute top-3 left-3 bg-black/75 px-2 py-0.5 text-[9px] uppercase tracking-[0.2em] text-zoku-muted font-mono border border-white/[0.08]">
          {motorcycle.specs.displacement}
        </div>
      </div>

      {/* Text block */}
      <div className="p-5 sm:p-6 space-y-3">
        <div>
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-zoku-muted font-sans">
            <span>{motorcycle.manufacturer}</span>
            <span>{motorcycle.productionYears}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-display font-medium text-zoku-white group-hover:text-zoku-red transition-colors mt-1">
            {motorcycle.name}
          </h3>
        </div>

        <p className="text-xs text-zoku-gray font-light line-clamp-2 leading-relaxed">
          {motorcycle.shortDescription}
        </p>

        <div className="pt-2 flex items-center text-xs uppercase tracking-[0.2em] text-zoku-muted group-hover:text-zoku-white transition-colors">
          <span>VIEW DETAILS</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};
