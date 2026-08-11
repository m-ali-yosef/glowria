/* Fixed data for Glowria Skincare Website — Aligned with Brand Book */
const SITE = {
  name: "Glowria",
  nameEn: "Glowria",
  tagline: "Glow, without the grind",
  phone: "+20254878787",
  email: "hello@glowria-skin.com",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61592585675020",
    instagram: "https://www.instagram.com/glowria_skincare_routine",
  },
};

const SKIN_TYPES = [
  { id: "all", label: "All" },
  { id: "oily", label: "Oily" },
  { id: "dry", label: "Dry" },
  { id: "mixed", label: "Combination" },
  { id: "sensitive", label: "Sensitive" },
];

const PRODUCTS = [
  {
    id: "p1",
    name: "Glow Cleanse — Gentle Gel Cleanser",
    short: "Your 60-second reset. A gentle everyday gel cleanser that removes dirt and excess oil.",
    description: "Your 60-second reset. A gentle everyday gel cleanser that removes dirt, excess oil and the day without leaving skin feeling stripped. Leaves your skin fresh, comfortable and ready for the next step.",
    price: 129,
    volume: "60 ml",
    skin: ["sensitive", "mixed", "dry", "oily"],
    featured: true,
    rating: 4.8,
    reviewsCount: 64,
    image: "images/products/p1.jpg",
    benefits: ["Gentle everyday cleansing", "Removes excess oil without stripping", "Leaves skin fresh & comfortable"],
    ingredients: ["Aqua", "Glycerin", "Gentle Cleansing Agents"],
    howToUse: "Apply to damp face, massage gently for 60 seconds, and rinse thoroughly.",
  },
  {
    id: "p2",
    name: "Glow Repair — Niacinamide Serum",
    short: "A lightweight niacinamide serum designed to improve dullness and uneven tone.",
    description: "Your daily repair step. A lightweight niacinamide serum designed to improve the appearance of dullness, uneven tone, post-breakout marks and uneven texture while leaving skin looking calmer and smoother. Fast-absorbing and easy to layer.",
    price: 249,
    volume: "30 ml",
    skin: ["mixed", "oily", "sensitive"],
    featured: true,
    rating: 4.9,
    reviewsCount: 88,
    image: "images/products/p2.jpg",
    benefits: ["Improves post-breakout marks", "Evens out skin tone & texture", "Fast-absorbing and easy to layer"],
    ingredients: ["Niacinamide", "Hyaluronic Acid", "Aqua"],
    howToUse: "Apply 2–3 drops morning and evening to clean skin before moisturizing.",
  },
  {
    id: "p3",
    name: "Glow Shield — Daily Sunscreen Moisturizer SPF 50+",
    short: "A daily moisturizer with SPF 50+ that defends skin from UV exposure.",
    description: "Protection without the heavy feeling. A daily moisturizer with SPF 50+ that helps defend skin from everyday UV exposure while keeping it comfortable and hydrated. Lightweight enough to become an everyday habit.",
    price: 299,
    volume: "50 ml",
    skin: ["sensitive", "mixed", "dry", "oily"],
    featured: true,
    rating: 4.8,
    reviewsCount: 73,
    image: "images/products/p3.jpg",
    benefits: ["Broad-spectrum SPF 50+ protection", "Lightweight non-heavy formula", "Keeps skin hydrated daily"],
    ingredients: ["Zinc Oxide", "UV Filters", "Hydrating Complex"],
    howToUse: "Apply generously as the last step of your morning routine 15 minutes before sun exposure.",
  },
  {
    id: "p4",
    name: "The Glow Routine Set — Cleanse + Repair + Protect",
    short: "The complete Glowria routine in one simple set. For him & her.",
    description: "The complete Glowria routine in one simple set. Cleanse. Repair. Protect. Three everyday essentials designed for busy mornings, long days and people who want healthy-looking skin without a complicated routine. For him & her.",
    price: 599,
    volume: "Full Set (3 Products)",
    skin: ["sensitive", "mixed", "dry", "oily"],
    featured: true,
    rating: 5.0,
    reviewsCount: 112,
    image: "images/products/p4.jpg",
    benefits: ["Complete 3-step routine", "Designed for busy lifestyle", "Suitable for all skin types (For him & her)"],
    ingredients: ["Glow Cleanse", "Glow Repair Serum", "Glow Shield SPF 50+"],
    howToUse: "Step 1: Cleanse with Glow Cleanse. Step 2: Repair with Niacinamide Serum. Step 3: Protect with Glow Shield SPF 50+.",
  }
];

const ARTICLES = [
  {
    id: "a1",
    title: "5-Minute Morning Skincare Routine",
    excerpt: "Simple, consistent steps for fresh skin before stepping out, without complexity or excessive products.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=75",
    date: "August 12, 2026",
    readTime: "4 min read",
    body: [
      "You don't need a 10-step routine to start your day with balanced skin. The secret lies in consistency and proper layering rather than the number of products.",
      "Start with a gentle cleanser like Glow Cleanse, followed by a lightweight repair serum with Niacinamide. Finish with a hydrating SPF 50+ moisturizer—the non-negotiable protection step.",
      "Whether you have oily, dry, or sensitive skin, keeping it simple prevents barrier disruption and gives you real results without wasting time.",
      "Stick to this sequence for two weeks and notice the difference in skin comfort and natural radiance."
    ]
  },
  {
    id: "a2",
    title: "Why Repair + Protect is the Only Routine You Need",
    excerpt: "Cut through the marketing noise and discover why two core steps deliver 90% of your skin results.",
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1000&q=75",
    date: "August 2, 2026",
    readTime: "5 min read",
    body: [
      "Overpriced shelves and 40-minute regimens steal your time and money. Real skincare should be light and burden-free.",
      "Repairing past damage with Niacinamide and protecting against future UV exposure creates a complete defense cycle.",
      "This approach works equally well for him & her—because healthy skin requires care, not complexity."
    ]
  },
  {
    id: "a3",
    title: "SPF Matters in Cairo 365 Days a Year",
    excerpt: "UV rays sneak through clouds and office windows. Here is how daily SPF defends your skin.",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1000&q=75",
    date: "July 20, 2026",
    readTime: "4 min read",
    body: [
      "Sunscreen isn't just for Sahel trips. UV exposure is the primary driver of uneven tone and dullness.",
      "Glow Shield combines daily hydration with SPF 50+ in a lightweight formula that never feels sticky or heavy.",
      "Make it an daily habit every single morning."
    ]
  }
];

const TESTIMONIALS = [
  {
    name: "Sara M.",
    city: "Cairo",
    text: "I forgot skincare could be this easy. Two steps in the morning and my skin stays fresh all day.",
    rating: 5,
  },
  {
    name: "Ahmed K.",
    city: "Alexandria",
    text: "Finally a brand that isn't preachy and works for guys too. The Glow Cleanse and Glow Shield are staples now.",
    rating: 5,
  },
  {
    name: "Nouran T.",
    city: "Giza",
    text: "The Glow Routine Set saved my time and money. Clear results without a 10-step hassle.",
    rating: 5,
  }
];