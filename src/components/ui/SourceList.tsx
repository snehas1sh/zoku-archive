import React from 'react';
import { BookOpen } from 'lucide-react';
import type { Source } from '../../types';

interface SourceListProps {
  sources: Source[];
  title?: string;
}

export const SourceList: React.FC<SourceListProps> = ({
  sources,
  title = 'ARCHIVAL SOURCES & REFERENCES',
}) => {
  if (!sources || sources.length === 0) return null;

  return (
    <div className="border-t border-zoku-border/60 pt-10">
      <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-zoku-muted font-mono mb-6">
        <BookOpen className="w-3.5 h-3.5 text-zoku-red" />
        <span>{title}</span>
      </div>

      <div className="space-y-4">
        {sources.map((source, index) => (
          <div
            key={source.id || index}
            className="p-4 bg-zoku-surface/50 border border-zoku-border/50 text-xs space-y-1 hover:border-zoku-border transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-zoku-white">
              <p className="font-medium tracking-wide">
                {source.author && <span>{source.author}. </span>}
                <span className="italic font-display text-zoku-white">{source.title}</span>
                {source.year && <span> ({source.year})</span>}
              </p>
              <span className="text-[10px] uppercase font-mono tracking-wider text-zoku-muted px-1.5 py-0.5 border border-zoku-border self-start sm:self-auto">
                {source.type}
              </span>
            </div>

            {source.publication && (
              <p className="text-zoku-muted text-[11px]">
                Published by {source.publication}
              </p>
            )}

            {source.notes && (
              <p className="text-zoku-gray font-light text-[11px] pt-1 leading-relaxed border-t border-white/[0.04] mt-1.5">
                {source.notes}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
