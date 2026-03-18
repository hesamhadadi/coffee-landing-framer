export const MENU_ITEMS = [
  {
    id: 1,
    cat: "SIGNATURE",
    name: "Nero",
    sub: "Espresso",
    price: "£4.50",
    origin: "Ethiopia · Yirgacheffe",
    desc: "Triple-origin blend. Volcanic soil, altitude-grown. Dark chocolate, dried fig, whisper of smoke.",
    bg: "radial-gradient(ellipse at 40% 30%, #4a2010 0%, #0d0604 100%)",
    accent: "#c9a05e",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=80&fit=crop",
  },
  {
    id: 2,
    cat: "CRAFT",
    name: "Silk",
    sub: "Flat White",
    price: "£5.20",
    origin: "Colombia · Huila",
    desc: "Ristretto base, hand-stretched microfoam. Silkier than a latte. More honest than a cappuccino.",
    bg: "radial-gradient(ellipse at 35% 25%, #7a4020 0%, #160804 100%)",
    accent: "#d4a870",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80&fit=crop",
  },
  {
    id: 3,
    cat: "COLD",
    name: "Midnight",
    sub: "Cold Brew",
    price: "£5.80",
    origin: "Guatemala · Antigua",
    desc: "Steeped 24 hours. Naturally sweet. Zero bitterness. Served over hand-cut clear ice.",
    bg: "radial-gradient(ellipse at 60% 60%, #0e2030 0%, #050a0e 100%)",
    accent: "#6ab4d4",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80&fit=crop",
  },
  {
    id: 4,
    cat: "FILTER",
    name: "Origin",
    sub: "Pour Over",
    price: "£6.50",
    origin: "Kenya · Nyeri",
    desc: "A meditation in four minutes. Blackcurrant, bergamot, clean as mountain water.",
    bg: "radial-gradient(ellipse at 45% 35%, #5a3814 0%, #100804 100%)",
    accent: "#e8b870",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80&fit=crop",
  },
  {
    id: 5,
    cat: "SEASONAL",
    name: "Obsidian",
    sub: "Reserve",
    price: "£9.00",
    origin: "Panama · Geisha",
    desc: "The rarest lot we found this year. Jasmine, peach, white wine. A cup you'll remember for years.",
    bg: "radial-gradient(ellipse at 50% 20%, #3a2a18 0%, #080604 100%)",
    accent: "#f0d090",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80&fit=crop",
  },
] as const;

export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Origin Selection",
    desc: "We visit farms personally. We taste hundreds of lots every season and choose only those that genuinely surprise us.",
  },
  {
    n: "02",
    title: "Precision Roasting",
    desc: "Every origin gets its own roast profile — developed over months of iteration to unlock its unique character.",
  },
  {
    n: "03",
    title: "Fresh Grinding",
    desc: "Ground to order, measured to the gram. We never pre-grind. The aromatics are too precious to waste.",
  },
  {
    n: "04",
    title: "The Pour",
    desc: "Every extraction is a performance. Temperature, timing, technique — each variable controlled with obsessive precision.",
  },
] as const;

export const EXPERIENCE_ITEMS = [
  {
    n: "01",
    title: "Direct Trade, Always",
    desc: "We pay above-market rates directly to farmers. No middlemen. Full transparency on where your money goes and whose lives it changes.",
  },
  {
    n: "02",
    title: "Weekly Roasted",
    desc: "Beans roasted in-house every week. Never more than 14 days old when it reaches your cup. Peak flavour, guaranteed.",
  },
  {
    n: "03",
    title: "Competition Baristas",
    desc: "Our team has placed in national championships. They don't just make coffee — they understand it at a molecular level.",
  },
  {
    n: "04",
    title: "Architecture of Calm",
    desc: "Designed by a Pritzker-shortlisted studio. Every surface, sound, and detail engineered to make you feel differently about time.",
  },
] as const;

export const TICKER_ITEMS = [
  "Single Origin",
  "Ethiopia Yirgacheffe",
  "Cold Brew 24h",
  "Latte Art",
  "Colombia Huila",
  "Specialty Coffee",
  "Filter Brew",
  "Handcrafted Pastry",
  "Panama Geisha",
  "Direct Trade",
];

export const GALLERY_ITEMS = [
  { label: "Morning Service", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&q=80&fit=crop" },
  { label: "Cold Brew Lab",   image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80&fit=crop" },
  { label: "The Roastery",    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&q=80&fit=crop" },
  { label: "Latte Art",       image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80&fit=crop" },
  { label: "Evening Ritual",  image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80&fit=crop" },
  { label: "Farm to Cup",     image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80&fit=crop" },
];
