import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Culture } from '../../types';

interface CultureItemProps {
  culture: Culture;
}

export const CultureItem: React.FC<CultureItemProps> = ({ culture }) => {
  const isAvailable = culture.status === 'available';

  const Content = (
    <div
      className={`group block relative overflow-hidden transition-all duration-300 ${
        isAvailable
          ? 'cursor-pointer hover:border-zoku-red/70'
          : 'opacity-65 hover:opacity-85 cursor-pointer'
      }`}
    >
      {/* Image Block */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#111]">
        <img
          src={culture.thumbnailImage}
          alt={culture.name}
          className={`w-full h-full object-cover grayscale transition-transform duration-500 ease-out ${
            isAvailable
              ? 'group-hover:scale-[1.02] group-hover:grayscale-0'
              : 'contrast-75'
          }`}
          loading="lazy"
        />
        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

        {/* Status tag if Coming Soon */}
        {!isAvailable && (
          <div className="absolute top-3 right-3 bg-black/80 border border-white/10 px-2 py-0.5 text-[9px] uppercase tracking-[0.2em] text-zoku-gray font-mono">
            Coming Soon
          </div>
        )}

        {/* Accent bar for Available culture */}
        {isAvailable && (
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-zoku-red transform origin-left scale-x-100 transition-transform duration-300" />
        )}

        {/* Content overlaid at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex items-end justify-between">
          <div>
            <div className="flex items-baseline space-x-2">
              <h3 className="text-base sm:text-lg font-display font-medium tracking-tight text-white group-hover:text-zoku-red transition-colors">
                {culture.name}
              </h3>
            </div>
            <p className="text-xs text-zoku-gray font-jp mt-0.5 tracking-wider">
              {culture.japanese}
            </p>
          </div>

          <div className="text-zoku-gray group-hover:text-white transition-colors pl-2">
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Link to={`/cultures/${culture.id}`} className="focus:outline-none">
      {Content}
    </Link>
  );
};
