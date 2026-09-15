import React from 'react';
import { Link } from 'react-router-dom';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  actionText?: string;
  actionLink?: string;
  theme?: 'dark' | 'light';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  description,
  actionText,
  actionLink,
  theme = 'dark',
  className = '',
}) => {
  const isLight = theme === 'light';

  return (
    <div className={`mb-10 sm:mb-12 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.06] pb-4">
        <div>
          {eyebrow && (
            <p
              className={`text-[11px] uppercase tracking-[0.25em] font-sans font-medium mb-2 ${
                isLight ? 'text-neutral-500' : 'text-zoku-muted'
              }`}
            >
              {eyebrow}
            </p>
          )}
          <div className="flex items-baseline space-x-3">
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-display font-medium tracking-tight ${
                isLight ? 'text-neutral-900' : 'text-zoku-white'
              }`}
            >
              {title}
            </h2>
            {subtitle && (
              <span
                className={`text-sm sm:text-base font-jp ${
                  isLight ? 'text-neutral-400' : 'text-zoku-muted'
                }`}
              >
                {subtitle}
              </span>
            )}
          </div>
          {description && (
            <p
              className={`mt-2 text-sm sm:text-base font-light max-w-2xl leading-relaxed ${
                isLight ? 'text-neutral-600' : 'text-zoku-gray'
              }`}
            >
              {description}
            </p>
          )}
        </div>

        {actionText && actionLink && (
          <Link
            to={actionLink}
            className={`inline-flex items-center text-xs uppercase tracking-[0.2em] font-medium transition-colors group self-start sm:self-end ${
              isLight
                ? 'text-neutral-800 hover:text-zoku-red'
                : 'text-zoku-gray hover:text-zoku-white'
            }`}
          >
            <span>{actionText}</span>
            <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};
