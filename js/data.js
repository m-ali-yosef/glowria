/* Fixed data for Glowria Skincare Website */
const SITE = {
  name: "Glowria",
  nameEn: "Glowria",
  tagline: "Purity of nature for your skin's beauty",
  phone: "+966 50 000 0000",
  email: "hello@glowria-skin.com",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    tiktok: "https://www.tiktok.com/",
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
    name: "Radiant Vitamin C Serum",
    short: "Evens skin tone and provides a noticeable daily radiance.",
    description:
      "A lightweight serum with a gentle concentration of stabilized Vitamin C. Helps even tone and reduce dullness with non-greasy hydration suitable for morning use.",
    price: 129,
    volume: "30 ml",
    skin: ["mixed", "oily"],
    featured: true,
    rating: 4.8,
    reviewsCount: 64,
    image: "images/products/p1.jpg",
    benefits: ["Clearer daily radiance", "Light non-greasy texture", "Ideal under sunscreen"],
    ingredients: ["Stabilized Vitamin C", "Hyaluronic Acid", "Niacinamide", "Glycerin"],
    howToUse: "After cleansing and toning, apply 3 to 4 drops in the morning to face and neck, then follow with moisturizer and sunscreen.",
  },
  {
    id: "p2",
    name: "Deep Hydration Cream",
    short: "Intense nourishment for dry skin with shea butter and ceramides.",
    description:
      "A rich cream infused with shea butter and ceramides that restores the skin barrier and delivers all-day softness without feeling heavy.",
    price: 99,
    volume: "50 ml",
    skin: ["dry"],
    featured: true,
    rating: 4.7,
    reviewsCount: 51,
    image: "images/products/p2.jpg",
    benefits: ["Long-lasting hydration", "Reduces flaking and tightness", "Supports skin barrier"],
    ingredients: ["Shea Butter", "Ceramides", "Vitamin E", "Jojoba Oil"],
    howToUse: "Apply a thin layer morning and evening to clean skin, focusing extra on cheeks and around the mouth.",
  },
  {
    id: "p3",
    name: "Gentle Aloe Vera Cleanser",
    short: "Calm cleansing without tightness, perfect for sensitive skin.",
    description:
      "A creamy cleanser free from strong fragrances. Gently cleanses while preserving natural skin oils with soothing aloe vera extract.",
    price: 69,
    volume: "150 ml",
    skin: ["sensitive", "dry"],
    featured: true,
    rating: 4.9,
    reviewsCount: 88,
    image: "images/products/p3.jpg",
    benefits: ["Cleanses without tightness", "Soothes redness", "Suitable for daily use"],
    ingredients: ["Aloe Vera Extract", "Vegetable Glycerin", "Panthenol", "Distilled Water"],
    howToUse: "Dampen face, take a pea-sized amount, gently massage, and rinse with lukewarm water morning and evening.",
  },
  {
    id: "p4",
    name: "Oil Balance Toner",
    short: "Reduces shine and refines pores with rose water and niacinamide.",
    description:
      "An alcohol-free toner that balances oil production and minimizes pore appearance, featuring pure rose water and niacinamide for a smoother texture.",
    price: 79,
    volume: "120 ml",
    skin: ["oily", "mixed"],
    featured: true,
    rating: 4.6,
    reviewsCount: 47,
    image: "images/products/p4.jpg",
    benefits: ["Reduces excess shine", "Refines pore appearance", "Prepares skin for serum"],
    ingredients: ["Rose Water", "Niacinamide", "Green Tea Extract", "Hyaluronic Acid"],
    howToUse: "After cleansing, soak a cotton pad or pat palms gently across the face, avoiding the eye area.",
  },
  {
    id: "p5",
    name: "Mineral Sunscreen SPF 50",
    short: "Lightweight daily protection without leaving a white cast.",
    description:
      "A broad-spectrum mineral sunscreen with a fast-absorbing, lightweight formula suitable for sensitive skin and under-makeup application.",
    price: 119,
    volume: "50 ml",
    skin: ["sensitive", "mixed", "dry", "oily"],
    featured: false,
    rating: 4.8,
    reviewsCount: 73,
    image: "images/products/p5.jpg",
    benefits: ["Broad-spectrum protection", "Lightweight texture", "Suitable for sensitive skin"],
    ingredients: ["Zinc Oxide", "Titanium Dioxide", "Vitamin E", "Aloe Vera"],
    howToUse: "The final step in your morning routine. Apply an adequate amount to face and neck, and reapply during extended sun exposure.",
  },
  {
    id: "p6",
    name: "Pure Clay Mask",
    short: "Draws out impurities and refines oily skin texture.",
    description:
      "A natural clay mask that helps purify pores and absorb excess oils, blended with green tea extract to refresh the skin.",
    price: 85,
    volume: "75 ml",
    skin: ["oily"],
    featured: false,
    rating: 4.5,
    reviewsCount: 39,
    image: "images/products/p6.jpg",
    benefits: ["Purifies pores", "Absorbs excess oil", "Leaves a smoother feel"],
    ingredients: ["Kaolin Clay", "Rhassoul Clay", "Green Tea", "Rose Water"],
    howToUse: "Use once or twice a week. Apply a medium layer for 8–10 minutes, then rinse off before it completely dries.",
  },
  {
    id: "p7",
    name: "Night Argan Oil",
    short: "Nourishing overnight repair for morning softness and radiance.",
    description:
      "Virgin argan oil that absorbs quickly to nourish dry skin while you sleep, leaving it supple and glowing by morning.",
    price: 139,
    volume: "30 ml",
    skin: ["dry", "mixed"],
    featured: false,
    rating: 4.7,
    reviewsCount: 44,
    image: "images/products/p7.jpg",
    benefits: ["Deep overnight nourishment", "Absorbs quickly", "Imparts morning softness"],
    ingredients: ["Virgin Argan Oil", "Vitamin E", "Rosehip Seed Oil", "Squalane"],
    howToUse: "In the evening after moisturizer, warm 2–3 drops between palms and gently press onto face and neck.",
  },
  {
    id: "p8",
    name: "Caffeine Eye Cream",
    short: "Depuffs and nourishes the delicate delicate eye contour.",
    description:
      "A lightweight eye cream combining caffeine and peptides to reduce puffiness and fine lines with gentle hydration.",
    price: 109,
    volume: "15 ml",
    skin: ["mixed", "dry", "sensitive"],
    featured: false,
    rating: 4.6,
    reviewsCount: 36,
    image: "images/products/p8.jpg",
    benefits: ["Reduces puffiness", "Hydrates eye area", "Light, fast-absorbing texture"],
    ingredients: ["Caffeine", "Peptides", "Hyaluronic Acid", "Shea Butter"],
    howToUse: "Morning and evening, dab a small amount and tap gently using your ring finger from inner to outer corner.",
  },
];

const ARTICLES = [
  {
    id: "a1",
    title: "5-Minute Morning Skincare Routine",
    excerpt:
      "Simple, consistent steps for fresh skin before stepping out, without complexity or excessive products.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=75",
    date: "July 12, 2026",
    readTime: "4 min read",
    body: [
      "You don't need a lengthy routine to start your day with balanced skin. The secret lies in consistency and proper layering rather than the number of products.",
      "Start with a gentle cleanser tailored to your skin type, followed by an alcohol-free toner to prepare your skin. Next, apply a lightweight morning serum like Vitamin C, follow with moisturizer, and finish with sunscreen—the non-negotiable step.",
      "If you have oily skin, opt for a lightweight water-based moisturizer. Dry skin types will benefit from a slightly richer cream before sunscreen. Combination skin can focus rich moisture on the cheeks and lighter formulas on the T-zone.",
      "Stick to this sequence for two weeks and notice the difference in radiance, makeup longevity, and skin comfort throughout the day.",
    ],
  },
  {
    id: "a2",
    title: "How to Choose Products for Your Skin Type",
    excerpt:
      "A quick guide for oily, dry, combination, and sensitive skin so you can shop with confidence.",
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1000&q=75",
    date: "June 28, 2026",
    readTime: "6 min read",
    body: [
      "Knowing your skin type saves you from endless trial and error. Observe your clean skin one hour after cleansing, without applying any products.",
      "If you notice visible shine on your forehead and nose, your skin leans oily. Feeling tightness and flaking indicates dry skin. A mix of both means combination, while rapid redness and stinging point to sensitivity that needs soothing formulas.",
      "For oily skin: gentle foaming cleanser, balancing toner, non-comedogenic moisturizer. For dry skin: creamy cleanser and nourishing oils. For sensitive skin: short ingredient lists free from strong fragrances.",
      "Introduce one new product every two weeks to truly understand what works for you.",
    ],
  },
  {
    id: "a3",
    title: "Sunscreen Every Day… Even in the Shade",
    excerpt:
      "UV rays penetrate through windows and clouds. Here is how to smartly protect your skin.",
    image:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1000&q=75",
    date: "June 9, 2026",
    readTime: "5 min read",
    body: [
      "Sunscreen isn't just for summer. UV rays sneak through glass and cloud cover, causing long-term dullness and hyperpigmentation over time.",
      "Choose at least SPF 30 for daily wear, and SPF 50 if spending extended time outdoors. Reapply every two hours when exposed to direct sunlight.",
      "Mineral sunscreen is an excellent choice for sensitive skin. Apply a two-finger amount for face and neck, without forgetting the eye contour and hairline.",
      "Make sunscreen the final step in your morning routine before makeup, and your skin will thank you months from now.",
    ],
  },
  {
    id: "a4",
    title: "Natural Ingredients Worthy of Your Routine",
    excerpt:
      "Rose water, argan, and aloe vera: real benefits and how to integrate them without overwhelming skin.",
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=75",
    date: "May 21, 2026",
    readTime: "5 min read",
    body: [
      "Nature offers effective ingredients when formulated at studied concentrations. Not everything natural suits every skin type, but certain ingredients have proven gentle and beneficial.",
      "Rose water calms and delivers an instant sense of refreshment. Argan oil nourishes dryness without excessive heaviness when using a few drops at night. Aloe vera cools redness post-sun exposure or light exfoliation.",
      "Golden rule: Add one ingredient at a time and monitor your skin for three days before introducing another new product.",
      "At Glowria, we select these ingredients because they align closely with daily skin needs, formulating them clearly so you can understand and trust them.",
    ],
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah Al-Otaibi",
    city: "Riyadh",
    text: "My combination skin became much more balanced after two weeks on the serum and toner. The texture is lightweight and scent is very subtle.",
    rating: 5,
  },
  {
    name: "Lama Hassan",
    city: "Jeddah",
    text: "The gentle cleanser saved my sensitive skin. Finally a product that cleanses without tightness or redness.",
    rating: 5,
  },
  {
    name: "Hind Al-Qahtani",
    city: "Dammam",
    text: "I ordered the hydrating cream and argan oil as a gift. The packaging is elegant and the experience exceeded expectations.",
    rating: 4,
  },
];