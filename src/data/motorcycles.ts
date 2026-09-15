import type { Motorcycle } from '../types';
import { sourcesData } from './sources';

export const motorcyclesData: Motorcycle[] = [
  {
    id: 'kawasaki-750rs-z2',
    name: 'Kawasaki 750RS Z2',
    manufacturer: 'Kawasaki',
    productionYears: '1973 — 1975',
    era: '1970s',
    cultureIds: ['bosozoku', 'kaminari-zoku'],
    image: '/images/featured_z2.jpg',
    shortDescription: 'The domestic pinnacle of Japanese performance engineering in the 1970s, revered for its double overhead camshafts and muscular frame.',
    about: 'Introduced in 1973 as the domestic Japanese counterpart to the overseas 903cc Z1, the Kawasaki 750RS (officially designated Z2) was engineered to abide by the domestic 750cc industry limit. Boasting a newly scaled 746cc DOHC inline-four motor, it quickly became the definitive heavyweight motorcycle of the decade in Japan. Its imposing silhouette, deep four-cylinder growl, and robust tubular steel cradle chassis gave it unrivaled street presence.',
    specs: {
      manufacturer: 'Kawasaki Heavy Industries',
      production: '1973 — 1975',
      engine: 'Four-stroke, transverse DOHC inline-4, 2 valves per cylinder',
      displacement: '746cc',
      cooling: 'Air-cooled',
      cylinders: '4',
      power: '69 hp (51.5 kW) @ 9,000 rpm',
      weight: '230 kg (dry) / 246 kg (curb)',
      transmission: '5-speed constant mesh',
      topSpeed: '190 km/h (118 mph)'
    },
    bosozokuConnection: 'Within the bōsōzoku subculture, the Z2 was considered the crown jewel and an aspirational machine typically reserved for senior group leaders (Sōchō) due to its cost, mechanical stature, and thunderous acoustic note. Its sturdy frame and four-into-four exhaust configuration made it the ultimate canvas for aggressive high-mount fairings and elongated exhaust modifications.',
    commonModifications: [
      'Rocket / Tower Fairings (Komine / Inoe type)',
      'Oni-han (Upward-turned swept handlebars)',
      'Extended 3-Dan Tufted Seats',
      'Takeyari Bamboo-Spear Straight Exhaust Pipes',
      'Marchal 819 Driving Headlights with Yellow Lens'
    ],
    sources: [sourcesData[1], sourcesData[4]]
  },
  {
    id: 'honda-cb750-four',
    name: 'Honda Dream CB750 Four',
    manufacturer: 'Honda',
    productionYears: '1969 — 1978',
    era: '1970s',
    cultureIds: ['bosozoku', 'racing', 'kaminari-zoku'],
    image: '/images/bike_cb750.jpg',
    shortDescription: 'The foundational superbike that introduced transverse four-cylinder power and hydraulic front disc brakes to mainstream motorcycling.',
    about: 'Launched in 1969, the Honda Dream CB750 Four fundamentally altered the global motorcycle landscape. Featuring an air-cooled SOHC 736cc inline-four with four separate carburetors and four individual chrome megaphones, it combined accessible electric starting, unshakeable reliability, and breathtaking high-speed stability.',
    specs: {
      manufacturer: 'Honda Motor Co., Ltd.',
      production: '1969 — 1978',
      engine: 'Four-stroke, transverse SOHC inline-4, 2 valves per cylinder',
      displacement: '736cc',
      cooling: 'Air-cooled',
      cylinders: '4',
      power: '67 hp (50 kW) @ 8,000 rpm',
      weight: '218 kg (dry) / 235 kg (wet)',
      transmission: '5-speed manual',
      topSpeed: '200 km/h (125 mph)'
    },
    bosozokuConnection: 'As the first widely available multi-cylinder Japanese heavyweight, the CB750 Four was an early idol among second-generation riders. Its distinct 4-into-4 sound was often turned into an open straight-pipe chorus during coastal and highway evening gatherings.',
    commonModifications: [
      'Tsuppari extended ducktail fairing',
      'High-rise swept handlebars',
      'Individual velocity stacks and straight pipes',
      'Custom candy-flake and metallic paint schemes'
    ],
    sources: [sourcesData[2], sourcesData[4]]
  },
  {
    id: 'kawasaki-z400fx',
    name: 'Kawasaki Z400FX',
    manufacturer: 'Kawasaki',
    productionYears: '1979 — 1982',
    era: '1970s',
    cultureIds: ['bosozoku'],
    image: '/images/bike_z400fx.jpg',
    shortDescription: 'The revolutionary 400cc class leader that brought DOHC inline-four engineering within reach of Japan\'s mid-tier licensing framework.',
    about: 'Following the 1975 Japanese licensing reform that split motorcycle licenses at 400cc, the market desperately craved a genuine multi-cylinder platform that qualified under the lower restriction. In 1979, Kawasaki unveiled the Z400FX — the first mass-production 400cc DOHC inline-four. Featuring angular square-tank styling reminiscent of the European Z1000MkII, it immediately captivated younger Japanese riders.',
    specs: {
      manufacturer: 'Kawasaki Heavy Industries',
      production: '1979 — 1982',
      engine: 'Four-stroke, transverse DOHC inline-4, 8 valves',
      displacement: '399cc',
      cooling: 'Air-cooled',
      cylinders: '4',
      power: '43 hp (32 kW) @ 9,500 rpm',
      weight: '189 kg (dry)',
      transmission: '6-speed',
      topSpeed: '175 km/h (109 mph)'
    },
    bosozokuConnection: 'The Z400FX quickly became the most coveted middleweight motorcycle among high-school and young adult members of bōsōzoku clubs across Kanto and Kansai. Its balanced geometry and sharp boxy fuel tank provided the ideal base for aggressive BEET bodywork and megaphone exhausts.',
    commonModifications: [
      'BEET Racing finned engine covers and side panels',
      'Shibori inward-pulled handlebars',
      'Moriwaki / Kerker 4-into-1 shorty exhaust',
      'Tower-mounted nose fairing'
    ],
    sources: [sourcesData[0], sourcesData[1]]
  },
  {
    id: 'honda-cbx400f',
    name: 'Honda CBX400F',
    manufacturer: 'Honda',
    productionYears: '1981 — 1984',
    era: '1980s',
    cultureIds: ['bosozoku'],
    image: '/images/bike_cbx400f.jpg',
    shortDescription: 'The 16-valve engineering masterpiece featuring inboard ventilated disc brakes, cross-pipe exhaust, and high-rpm acoustic perfection.',
    about: 'Released in late 1981, the CBX400F represented Honda\'s triumph in the fiercely competitive 400cc four-cylinder arena. It featured an ultra-refined 16-valve DOHC powerplant pushing an astonishing 48 horsepower, paired with cast aluminum Pro-Link rear mono-shock suspension, ventilated inboard disc brakes, and crossed exhaust headers.',
    specs: {
      manufacturer: 'Honda Motor Co., Ltd.',
      production: '1981 — 1984',
      engine: 'Four-stroke, DOHC 16-valve transverse inline-4',
      displacement: '399cc',
      cooling: 'Air-cooled',
      cylinders: '4',
      power: '48 hp (35.8 kW) @ 11,000 rpm',
      weight: '173 kg (dry) / 189 kg (curb)',
      transmission: '6-speed constant mesh',
      topSpeed: '180 km/h (112 mph)'
    },
    bosozokuConnection: 'The CBX400F is universally regarded as the greatest throttle-rapping ("onkyō") motorcycle ever constructed. Its 16-valve valve train and light crankshaft allowed riders to rhythmically modulate the throttle with microsecond precision, producing musical acoustic cadences that came to define nocturnal city runs.',
    commonModifications: [
      'Tower-mounted Inoe rocket fairing with stage brackets',
      'High-stepped 3-dan seat with white or red vinyl',
      'Stainless steel Takeyari angled exhaust pipes',
      'Kyokujitsu-ki sunburst airbrush livery with gold leaf leafing'
    ],
    sources: [sourcesData[0], sourcesData[1], sourcesData[4]]
  },
  {
    id: 'suzuki-gs400',
    name: 'Suzuki GS400',
    manufacturer: 'Suzuki',
    productionYears: '1976 — 1980',
    era: '1970s',
    cultureIds: ['bosozoku'],
    image: '/images/bike_gs400.jpg',
    shortDescription: 'The resilient parallel-twin famed for its 180-degree crank syncopation and immense bottom-end durability.',
    about: 'Suzuki entered the four-stroke roadster era with the GS400 in 1976. Unlike its four-cylinder competitors, the GS400 utilized a compact, robust 398cc DOHC parallel twin with a gear-driven counterbalancer, roller bearing crankshaft, and exceptionally light overall weight.',
    specs: {
      manufacturer: 'Suzuki Motor Corporation',
      production: '1976 — 1980',
      engine: 'Four-stroke, DOHC parallel-twin, 4 valves',
      displacement: '398cc',
      cooling: 'Air-cooled',
      cylinders: '2',
      power: '37 hp (27.2 kW) @ 8,500 rpm',
      weight: '172 kg (dry)',
      transmission: '6-speed',
      topSpeed: '160 km/h (99 mph)'
    },
    bosozokuConnection: 'Riders prized the GS400 specifically for its distinct twin-cylinder sound when equipped with dual straight pipes ("Suikomi" inhalation note), which created a punchy, staccato beat that complemented four-cylinder machines in multi-bike formations.',
    commonModifications: [
      'Suikomi modified dual straight pipes',
      'Up-han high handlebars',
      'Custom cast star-wheels (Hoshigata)',
      'BEET cast points covers'
    ],
    sources: [sourcesData[1], sourcesData[3]]
  },
  {
    id: 'yamaha-xj400',
    name: 'Yamaha XJ400',
    manufacturer: 'Yamaha',
    productionYears: '1980 — 1984',
    era: '1980s',
    cultureIds: ['bosozoku', 'racing'],
    image: '/images/bike_xj400.jpg',
    shortDescription: 'Yamaha\'s first 400cc four-cylinder motorcycle, recognized for its compact engine architecture and smooth, balanced delivery.',
    about: 'In 1980 Yamaha unveiled the XJ400 to counter Honda and Kawasaki in the 400cc class. The engine featured an auxiliary jackshaft placing the alternator behind the cylinders rather than on the crank ends, making the engine remarkably narrow and agile in fast directional changes.',
    specs: {
      manufacturer: 'Yamaha Motor Co., Ltd.',
      production: '1980 — 1984',
      engine: 'Four-stroke, DOHC 8-valve transverse inline-4',
      displacement: '398cc',
      cooling: 'Air-cooled',
      cylinders: '4',
      power: '45 hp (33.1 kW) @ 10,000 rpm',
      weight: '176 kg (dry)',
      transmission: '6-speed',
      topSpeed: '176 km/h (110 mph)'
    },
    bosozokuConnection: 'The narrow profile and smooth power delivery of the XJ400 made it a reliable mount for tight city navigating and perimeter patrol duty during club cruise nights.',
    commonModifications: [
      '4-into-1 high-exit megaphone exhaust',
      'Inward-bent clip-ons with handlebar risers',
      'Dual Marchal headlamps with stone guards'
    ],
    sources: [sourcesData[1], sourcesData[4]]
  }
];
