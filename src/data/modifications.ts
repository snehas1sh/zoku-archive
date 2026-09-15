import type { ModificationCategory } from '../types';

export const modificationsData: ModificationCategory[] = [
  {
    id: 'fairings',
    name: 'Rocket / Tower Fairings',
    japanese: 'ロケットカウル・タワーカウル',
    romaji: 'Roketto Kauru / Tawā Kauru',
    tagline: 'Elevated aerodynamic shells mounted high above the triple tree.',
    description: 'Originally derived from 1960s Grand Prix road-racing cowls (such as those produced by Inoe, Komine, and JMC), bōsōzoku builders elevated the mounting brackets upward on rigid tubular staging structures ("stage-tsuki"). Rather than resting closely over the clip-ons for wind deflection, the fairing was deliberately hoisted high into the air.',
    mechanicalFunction: 'In racing origins, fairings reduced aerodynamic drag at high velocities. In subcultural modification, the fairing was structurally repositioned as a monumental billboard for custom airbrushing, club emblems, and auxiliary lamp mountings.',
    culturalSignificance: 'An elevated fairing transforms the motorcycle from a functional machine into a towering mechanical monument. The height and aggressive upward pitch signaled senior rank within group convoys.',
    image: '/images/mod_fairing.jpg',
    historicalEra: '1970s — Late 1980s',
    relatedMotorcycleIds: ['kawasaki-750rs-z2', 'honda-cbx400f', 'kawasaki-z400fx'],
    subtypes: [
      {
        name: 'Inoe Rocket (イノウエロケット)',
        description: 'Classic round-cowl aerodynamic racing design with integrated round headlight opening, positioned on custom stage mounts.'
      },
      {
        name: 'Komine Dual (コミネデュアル)',
        description: 'Wider endurance-style cowl featuring twin horizontal Marchal headlights.'
      },
      {
        name: 'High-Mount Tower (ぶち上げ / Buchiage)',
        description: 'Extreme regional style originating in Ibaraki and Chiba, mounting fairings up to two meters above the chassis.'
      }
    ]
  },
  {
    id: 'handlebars',
    name: 'Oni-han Handlebars',
    japanese: '鬼ハン・絞りハンドル',
    romaji: 'Oni-han / Shibori Handoru',
    tagline: 'Inwardly bent, upwardly pitched tubular bars altering hand placement.',
    description: 'Factory tubular handlebars were heated with oxy-acetylene torches and bent inward (Shibori) or turned forward and upward to resemble demon horns (Oni-han). In extreme variants, the bars were bent so narrow that the rider\'s wrists touched together in front of the fuel tank.',
    mechanicalFunction: 'Narrowed handlebars allowed riders to squeeze through narrow alleys and heavy gridlocked traffic. However, extreme inward angles severely reduced steering leverage at slow speeds, requiring precise body weight shifting.',
    culturalSignificance: 'The distinctive riding posture—arms high or drawn tightly toward the chest—distinguished the rider instantly from standard commuters and highway patrols.',
    image: '/images/mod_handlebar.jpg',
    historicalEra: '1970s — Present',
    relatedMotorcycleIds: ['kawasaki-750rs-z2', 'suzuki-gs400', 'kawasaki-z400fx'],
    subtypes: [
      {
        name: 'Oni-han (鬼ハン)',
        description: 'Tubes bent sharply forward and upward like the horns of an Oni demon.'
      },
      {
        name: 'Shibori (絞りハンドル)',
        description: 'Bars bent aggressively inward toward the tank centerline for an ultra-narrow stance.'
      },
      {
        name: 'Up-han (アップハン)',
        description: 'Elevated tubular riser bars providing an upright, commanding posture during slow-speed formation runs.'
      }
    ]
  },
  {
    id: 'seats',
    name: 'Extended Seats & Tails',
    japanese: '三段シート・ツッパリテール',
    romaji: 'Sandan Shīto / Tsuppari Tēru',
    tagline: 'Tiered vertical backrests reaching lengths from 30 centimeters to two meters.',
    description: 'Replacing standard bench seats, the "Sandan" (three-tiered) seat featured an elongated vertical backrest reinforced with internal steel or aluminum rods and wrapped in tufted diamond-pattern vinyl, velour, or enamel patent leather.',
    mechanicalFunction: 'Provided support for the pillion passenger responsible for holding the group\'s large silk flag upright against wind resistance during highway runs.',
    culturalSignificance: 'Like the rocket fairing, the vertical seat broke the horizontal line of standard motorcycle production. Contrasting seat piping and embroidered slogans across the rear backrest made the bike recognizable from behind.',
    image: '/images/mod_seat.jpg',
    historicalEra: 'Late 1970s — 1990s',
    relatedMotorcycleIds: ['honda-cbx400f', 'kawasaki-z400fx', 'suzuki-gs400'],
    subtypes: [
      {
        name: '50cm – 1m Classic 3-Dan',
        description: 'The standard proportion for street riding, balanced between aesthetic drama and wind stability.'
      },
      {
        name: 'Tsuppari Tail (ツッパリテール)',
        description: 'A ducktail rear fiberglass cowl that extends horizontally or diagonally past the rear tire.'
      },
      {
        name: 'Buchiage Ultra-Seat',
        description: 'Extreme exhibition seats extending over 1.5 meters into the air for major annual rallies.'
      }
    ]
  },
  {
    id: 'exhausts',
    name: 'Modified Exhausts & Takeyari',
    japanese: '直管・竹槍マフラー',
    romaji: 'Chokkan / Takeyari Mafurā',
    tagline: 'Baffle-free straight pipes and towering angled bamboo-spear tips.',
    description: 'Exhaust modifications in Japanese motorcycle counterculture served two critical purposes: acoustic articulation (onkyō) and extreme kinetic geometry. Mufflers were stripped of their internal baffles to create "chokkan" (straight pipes). On premier machines, extended stainless steel or chrome pipes were welded into towering vertical or rearward angles called "Takeyari" (bamboo spears).',
    mechanicalFunction: 'Direct straight headers eliminate exhaust backpressure for high-rpm acoustic resonance, allowing precise acoustic rhythms during throttle blipping.',
    culturalSignificance: 'The exhaust sound was considered an acoustic signature. Different clubs and regional chapters could be identified by the acoustic rhythm of their engines long before visual contact was made.',
    image: '/images/mod_exhaust.jpg',
    historicalEra: '1970s — 1980s',
    relatedMotorcycleIds: ['honda-cbx400f', 'kawasaki-750rs-z2', 'suzuki-gs400'],
    subtypes: [
      {
        name: 'Chokkan Straight Pipe (直管)',
        description: 'Muffler can removed entirely, creating an unfiltered four-into-one or four-into-two bark.'
      },
      {
        name: 'Takeyari Spear Pipes (竹槍)',
        description: 'Tubular pipes extending high over the tail, cut at sharp diagonal angles mimicking samurai bamboo spears.'
      },
      {
        name: 'Hasu-giri (斜め切り・蓮切り)',
        description: 'Exhaust tips cut at a steep 45-degree bevel for directed acoustic projection.'
      }
    ]
  },
  {
    id: 'forks',
    name: 'Extended Forks & Suspension',
    japanese: 'ロングフォーク・サスペンション加工',
    romaji: 'Rongu Fōku / Sasupenshon Kakō',
    tagline: 'Stretched front stanchions and lowered rear mono-shocks altering chassis rake.',
    description: 'Front fork tubes were lengthened with precision machined extension plugs or donor tubes from longer cruisers, raising the front triple clamp while lowering or stiffening the rear shocks.',
    mechanicalFunction: 'Altered the steering head rake angle. While increasing turning radius at slow speeds, it stabilized straight-line formation runs.',
    culturalSignificance: 'Gave the motorcycle a distinctive upward-raked, predatory profile that accentuated the height of the rocket fairing.',
    image: '/images/mod_forks.jpg',
    historicalEra: '1970s — 1980s',
    relatedMotorcycleIds: ['kawasaki-750rs-z2', 'honda-cb750-four'],
    subtypes: [
      {
        name: 'Extension Plugs (延長ジョイント)',
        description: 'Machined steel caps threaded into the upper fork tubes providing 50mm to 150mm of lift.'
      },
      {
        name: 'Dropped Rear Stance (ローダウン)',
        description: 'Shortened rear shock absorbers dropping the rear swingarm to exaggerate the raked stance.'
      }
    ]
  },
  {
    id: 'wheels',
    name: 'Wheels & Tires',
    japanese: '星型ホイール・ワイドタイヤ',
    romaji: 'Hoshigata Hoīru / Waido Taiya',
    tagline: 'Lightweight cast alloys, five-star geometries, and vintage racing compound rubber.',
    description: 'Replacing standard wire spokes with period cast alloy wheels such as Hayashi Racing, BEET Cast, or Comstar wheels, wrapped in iconic period tires like Dunlop TT100.',
    mechanicalFunction: 'Cast aluminum alloy wheels eliminated tube pinch flats and provided rigidity for rapid directional changes.',
    culturalSignificance: 'Wheels were status symbols of genuine mechanical expense. Rare period wheels (such as original BEET cast rims) remain some of the most valuable Japanese motorcycle artifacts today.',
    image: '/images/mod_wheels.jpg',
    historicalEra: 'Mid 1970s — 1980s',
    relatedMotorcycleIds: ['kawasaki-z400fx', 'honda-cbx400f', 'suzuki-gs400'],
    subtypes: [
      {
        name: 'Hayashi Racing (ハヤシレーシング)',
        description: 'Cast five-spoke aluminum alloy wheels originally developed for Japanese formula and clubman racing.'
      },
      {
        name: 'BEET Cast Wheels (BEETキャスト)',
        description: 'Legendary multi-point cast wheels produced by Nihon Beet Industry with unmistakable finned spokes.'
      },
      {
        name: 'Dunlop TT100 Classic Tread',
        description: 'The definitive vintage tire profile with deep siped center groove and rounded shoulder profile.'
      }
    ]
  },
  {
    id: 'paint',
    name: 'Paint & Graphics',
    japanese: '日章旗・ラメ塗装・カスタムペイント',
    romaji: 'Nisshōki / Rame Tosō / Kasutamu Peinto',
    tagline: 'Multi-layer metal flake, sunburst motifs, and hand-lettered kanji calligraphy.',
    description: 'Lacquer paintwork applied in multi-stage coats with heavy metal flake (rame), candy color clears, and sharp tape-masked geometric lines.',
    mechanicalFunction: 'Protective clear lacquer over handcrafted sheet metal and fiberglass cowls.',
    culturalSignificance: 'Visual representation of regional identity. Color combinations frequently mirrored the group\'s insignia, with silver or gold leaf kanji denoting the bike\'s owner and team rank.',
    image: '/images/mod_paint.jpg',
    historicalEra: '1970s — Present',
    relatedMotorcycleIds: ['honda-cbx400f', 'kawasaki-z400fx', 'kawasaki-750rs-z2'],
    subtypes: [
      {
        name: 'Nisshōki Sunburst (日章カラー)',
        description: 'Radiating sunburst graphic bands originating from the tank or fairing badge.'
      },
      {
        name: 'Heavy Metal Flake (ギラギララメ)',
        description: 'Coarse metallic flakes suspended beneath deep tinted candy clear coats.'
      },
      {
        name: 'Gold Leaf & Kanji Airbrush',
        description: 'Hand-applied Japanese slogans, dragon crests, and family crests (kamon).'
      }
    ]
  },
  {
    id: 'lighting',
    name: 'Lighting & Auxiliary Lamps',
    japanese: 'パトランプ・マーシャル・回転灯',
    romaji: 'Patoranpu / Māsharu / Kaitentō',
    tagline: 'Vintage French Marchal headlights, amber fog lenses, and rotating emergency strobe lamps.',
    description: 'Custom lighting setups incorporating Marchal cat-logo halogen lamps, Cibié driving lights with yellow lenses, and red or blue emergency rotating beacon lamps (Pato-lamp) mounted to engine crash guards or fairing stages.',
    mechanicalFunction: 'Illuminated unlit rural expressways and mountain roads during late-night group rides.',
    culturalSignificance: 'The revolving red or purple strobe light mimicked emergency and patrol vehicle equipment, serving as an explicit symbol of nocturnal street authority.',
    image: '/images/mod_lighting.jpg',
    historicalEra: '1970s — 1980s',
    relatedMotorcycleIds: ['kawasaki-750rs-z2', 'honda-cbx400f', 'yamaha-xj400'],
    subtypes: [
      {
        name: 'Marchal 819 Headlamp (マーシャル819)',
        description: 'French vintage lens featuring the iconic black cat silhouette emblem in the lens center.'
      },
      {
        name: 'Rotating Strobe / Pato-lamp (回転灯)',
        description: 'Red or amber cylindrical beacon wired to an auxiliary handlebar toggle switch.'
      },
      {
        name: 'Yellow Fog Lenses (イエローレンズ)',
        description: 'High-contrast tinted glass providing unmistakable visual presence in rearview mirrors.'
      }
    ]
  }
];
