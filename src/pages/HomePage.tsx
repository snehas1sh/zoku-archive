import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { culturesData } from '../data/cultures';
import { motorcyclesData } from '../data/motorcycles';
import { CultureItem } from '../components/culture/CultureItem';

export const HomePage: React.FC = () => {
  // Featured motorcycle carousel state
  const featuredBikes = motorcyclesData.slice(0, 4);
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

  const activeBike = featuredBikes[currentFeaturedIndex];

  const handlePrev = () => {
    setCurrentFeaturedIndex((prev) =>
      prev === 0 ? featuredBikes.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentFeaturedIndex((prev) =>
      prev === featuredBikes.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="flex flex-col w-full">
      
      {/* ==================================================
          CINEMATIC HERO SECTION
          ================================================== */}
      <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 sm:px-8 lg:px-12 overflow-hidden bg-zoku-black">
        {/* Background Image with Cinematic Darkness */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_bike.jpeg"
            alt="Japanese night motorcycle under Tokyo highway"
            className="w-full h-full object-cover object-center scale-100 filter brightness-[0.85] contrast-[1.1]"
          />
          {/* Gradients to keep text crisp and editorial */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from zoku-black via-transparent to-black/40" />
        </div>

        {/* Hero Content (Left Side) */}
        <div className="relative z-10 max-w-2xl my-auto pt-16 sm:pt-24 space-y-8">
          
          {/* Editorial Display Heading */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-light text-zoku-white tracking-tight leading-[1.08]">
              Japanese<br />
              Motorcycle<br />
              Cultures
            </h1>
          </div>

          {/* Short description */}
          <p className="text-sm sm:text-base text-zoku-gray/95 font-light leading-relaxed max-w-md">
            The machines. The people. The subcultures that rode against the ordinary.
            Explore the machines, styles and cultures behind Japan&apos;s motorcycle scene.
          </p>

          {/* Single Action Link (Matching mockup: — EXPLORE) */}
          <div className="pt-2">
            <a
              href="#cultures-section"
              className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.25em] font-medium text-zoku-white hover:text-zoku-red transition-colors group"
            >
              <span className="w-6 h-[1.5px] bg-zoku-red transition-all group-hover:w-9" />
              <span>EXPLORE</span>
              <span className="text-xs">&rarr;</span>
            </a>
          </div>

        </div>

        {/* Bottom Hero Controls & Indicators */}
        <div className="relative z-10 flex items-end justify-between text-xs text-zoku-muted border-t border-white/[0.08] pt-6 mt-12">
          
          {/* Bottom Left: Philosophy & Chevron */}
          <div className="space-y-2">
            <p className="text-[10px] tracking-[0.25em] uppercase text-zoku-muted font-sans">
              MORE THAN MACHINES. A WAY OF LIFE.
            </p>
            <a
              href="#cultures-section"
              className="inline-block text-zoku-gray hover:text-white transition-colors"
              aria-label="Scroll down"
            >
              <ChevronDown className="w-4 h-4 animate-pulse" />
            </a>
          </div>

          {/* Bottom Right: Slide Indicator */}
          <div className="font-mono text-xs text-zoku-muted tracking-widest">
            01 / 04
          </div>

        </div>
      </section>

      {/* ==================================================
          CULTURES SECTION (Editorial White Strip from Mockup)
          ================================================== */}
      <section
        id="cultures-section"
        className="w-full bg-[#f6f6f8] text-neutral-900 py-20 sm:py-24 px-6 sm:px-8 lg:px-12"
      >
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="flex items-baseline justify-between border-b border-neutral-300 pb-4 mb-10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] font-sans font-medium text-neutral-500 mb-1">
                CULTURES
              </p>
              <h2 className="text-2xl sm:text-4xl font-display font-medium text-neutral-950 tracking-tight">
                Explore the Cultures
              </h2>
            </div>
            <Link
              to="/cultures"
              className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-700 hover:text-zoku-red transition-colors inline-flex items-center space-x-1"
            >
              <span>VIEW ALL</span>
              <span>&rarr;</span>
            </Link>
          </div>

          {/* Culture 4-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
            {culturesData.map((culture) => (
              <CultureItem key={culture.id} culture={culture} />
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          FEATURED MOTORCYCLE SECTION (Dark Editorial Spread)
          ================================================== */}
      <section className="w-full bg-zoku-black text-zoku-white py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          
          {/* Eyebrow */}
          <p className="text-[11px] uppercase tracking-[0.25em] text-zoku-muted font-mono mb-4">
            FEATURED MOTORCYCLE
          </p>

          {/* Two-Column Editorial Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Bike Info & Restrained Specs */}
            <div className="lg:col-span-5 space-y-6">
              
              <div>
                <h2 className="text-3xl sm:text-5xl font-display font-light text-zoku-white tracking-tight">
                  {activeBike.name}
                </h2>
                <p className="text-sm font-mono text-zoku-muted mt-2 tracking-widest">
                  {activeBike.productionYears}
                </p>
              </div>

              <p className="text-sm sm:text-base text-zoku-gray font-light leading-relaxed">
                {activeBike.about.split('.')[0]}. {activeBike.about.split('.')[1]}.
              </p>

              {/* Minimal Specs (Clean list, not a dashboard) */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-zoku-border/80 text-xs font-sans">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-zoku-muted block">Displacement</span>
                  <span className="font-mono text-zoku-white text-sm">{activeBike.specs.displacement}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-zoku-muted block">Engine</span>
                  <span className="font-mono text-zoku-white text-sm">Inline-four</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-zoku-muted block">Cooling</span>
                  <span className="font-mono text-zoku-white text-sm">{activeBike.specs.cooling}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-zoku-muted block">Era</span>
                  <span className="font-mono text-zoku-white text-sm">{activeBike.productionYears}</span>
                </div>
              </div>

              {/* CTA & Carousel Controls */}
              <div className="flex items-center space-x-6 pt-2">
                <Link
                  to={`/motorcycles/${activeBike.id}`}
                  className="inline-flex items-center space-x-2 px-6 py-3.5 bg-zoku-red hover:bg-zoku-redHover text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors"
                >
                  <span>VIEW DETAILS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {/* Arrow Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handlePrev}
                    className="p-2 border border-zoku-border hover:border-zoku-white/40 text-zoku-gray hover:text-white transition-colors"
                    aria-label="Previous featured motorcycle"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 border border-zoku-border hover:border-zoku-white/40 text-zoku-gray hover:text-white transition-colors"
                    aria-label="Next featured motorcycle"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Right Column: Large Isolated Motorcycle Photograph */}
            <div className="lg:col-span-7 relative">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden flex items-center justify-center">
                <img
                  key={activeBike.id}
                  src={activeBike.image}
                  alt={activeBike.name}
                  className="w-full h-full object-contain filter contrast-[1.08] drop-shadow-2xl transition-all duration-700 ease-out"
                />
              </div>

              {/* Bottom Pagination Indicator */}
              <div className="text-right font-mono text-xs text-zoku-muted tracking-widest mt-2">
                0{currentFeaturedIndex + 1} / 0{featuredBikes.length}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================
          MODIFICATIONS PREVIEW SECTION
          ================================================== */}
      <section className="w-full bg-zoku-dark py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-t border-zoku-border/50">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-zoku-border/60 pb-4 gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-zoku-muted font-mono mb-1">
                MECHANICAL EXPRESSION
              </p>
              <h2 className="text-2xl sm:text-4xl font-display font-medium text-zoku-white tracking-tight">
                The Modifications
              </h2>
            </div>
            <Link
              to="/modifications"
              className="text-xs uppercase tracking-[0.2em] font-medium text-zoku-gray hover:text-white transition-colors inline-flex items-center space-x-1"
            >
              <span>EXPLORE ALL CATEGORIES</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Rocket Fairings',
                japanese: 'ロケットカウル',
                desc: 'Elevated aerodynamic cowls mounted on tall stage brackets.',
                img: '/images/mod_fairing.jpg'
              },
              {
                name: 'Oni-han Bars',
                japanese: '鬼ハンドル',
                desc: 'Narrowed, forward-swept bars altering hand stance and posture.',
                img: '/images/mod_handlebar.jpg'
              },
              {
                name: '3-Dan Seats',
                japanese: '三段シート',
                desc: 'Tiered vertical backrests engineered for flag-bearers.',
                img: '/images/mod_seat.jpg'
              },
              {
                name: 'Takeyari Exhausts',
                japanese: '竹槍マフラー',
                desc: 'Baffle-free pipes angled skyward like samurai spears.',
                img: '/images/mod_exhaust.jpg'
              }
            ].map((mod, i) => (
              <Link
                key={i}
                to="/modifications"
                className="group block bg-zoku-card/50 border border-zoku-border/60 hover:border-zoku-red/60 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden bg-black relative">
                  <img
                    src={mod.img}
                    alt={mod.name}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 px-2 py-0.5 text-[10px] font-jp text-zoku-gray border border-white/10">
                    {mod.japanese}
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-base font-display font-medium text-zoku-white group-hover:text-zoku-red transition-colors">
                    {mod.name}
                  </h3>
                  <p className="text-xs text-zoku-gray font-light line-clamp-2 leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          EDITORIAL MANIFESTO (Spacious, Pure Typography)
          ================================================== */}
      <section className="w-full bg-zoku-black py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="w-8 h-[1px] bg-zoku-red mx-auto" />
          <h3 className="text-xl sm:text-2xl font-display font-light text-zoku-white tracking-wide leading-relaxed">
            &ldquo;We document Japanese motorcycle subcultures not as folklore, but as an authentic movement of mechanical folk art and postwar sociology.&rdquo;
          </h3>
          <p className="text-xs uppercase tracking-[0.25em] text-zoku-muted font-mono">
            ZOKU ARCHIVE CURATORIAL MISSION
          </p>
        </div>
      </section>

    </div>
  );
};
