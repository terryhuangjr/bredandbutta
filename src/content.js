// Central content + demo data. When real photos exist, swap img URLs here.
// Stock placeholders via Unsplash source URLs (hotlinked for demo only).

export const WEEK = {
  label: "This week's bake",
  date: "Saturday, October 17",
  closes: "Thursday 8pm, or when sold out",
  loavesTotal: 10,
  loavesLeft: 7,
};

// category: "bread" | "butter" — Menu groups on this.
export const PRODUCTS = [
  {
    id: "country-sourdough",
    category: "bread",
    name: "Country Sourdough",
    price: 9,
    stock: 3,
    stockTotal: 4,
    tag: "The classic",
    desc: "Flour, water, salt, time. A 48-hour cold ferment, blistered crust, custardy crumb, that gentle tang. The loaf that started it all.",
    img: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=900&q=80", // verified: rustic loaf
  },
  {
    id: "cheddar",
    category: "bread",
    name: "Cheddar",
    price: 11,
    stock: 2,
    stockTotal: 2,
    tag: "Fan favorite",
    desc: "Aged sharp cheddar folded through the same slow-fermented dough. Melty pockets, burnished edges, zero chill to its reputation.",
    img: "", // IMG: cheddar loaf — Donna's own photo when shot
  },
  {
    id: "garlic-gochujang-cheddar",
    category: "bread",
    name: "Garlic Gochujang Cheddar",
    price: 12,
    stock: 2,
    stockTotal: 2,
    tag: "Donna's signature",
    desc: "Roasted garlic and gochujang — fermented Korean chili paste — rubbed through the dough before the fold, with cheddar for structure. Savory, spicy, faintly sweet, deeply stupid-good on a cold morning.",
    img: "", // IMG: gochujang loaf — the red-flecked crumb deserves a real photo
  },
  {
    id: "rainbow-chocolate",
    category: "bread",
    name: "Italian Rainbow with Chocolate Chips",
    price: 10,
    stock: 0,
    stockTotal: 2,
    tag: "The kids' one",
    desc: "Donna's birthday-loaf crossover: soft enriched sourdough in rainbow layers, studded with chocolate chips. Sienna and Genevieve approved by committee vote.",
    img: "", // IMG: rainbow loaf — needs a real slice shot, no stock will do this justice
  },
  {
    id: "maple-miso-butter",
    category: "butter",
    name: "Maple Miso Butter",
    price: 8,
    stock: 2,
    stockTotal: 2,
    tag: "Small batch",
    desc: "Hand-churned cultured butter whipped with real maple and white miso. Put it on anything warm and watch it disappear.",
    img: "", // IMG: butter board — SWAP when churn day gets photographed
  },
  {
    id: "sesame-honey-butter",
    category: "butter",
    name: "Sesame Honey Butter",
    price: 8,
    stock: 2,
    stockTotal: 2,
    tag: "Small batch",
    desc: "Toasted sesame and wildflower honey into the same cultured base. Quietly excellent on plain toast, loudly excellent on the cheddar loaf.",
    img: "", // IMG: butter board
  },
  {
    id: "brown-sugar-espresso-butter",
    category: "butter",
    name: "Brown Sugar Espresso Butter",
    price: 8,
    stock: 2,
    stockTotal: 2,
    tag: "Small batch",
    desc: "Espresso from the local roaster and dark brown sugar into cultured butter. Dessert for breakfast. We don't make the rules.",
    img: "", // IMG: butter board
  },
];

export const STEPS = [
  { n: "01", h: "Order by Thursday", p: "Weekly bake, limited loaves. When they're gone, they're gone — that's the freshness guarantee." },
  { n: "02", h: "Donna bakes Friday", p: "Every loaf is mixed, folded, and shaped by hand over three days. Breadie Smalls does the rising." },
  { n: "03", h: "Delivered Saturday", p: "Warm-ish, paper-wrapped, at your door. Right now that's Terry's car and a cooler — friends first." },
];

export const FACTS = [
  {
    h: "Easier to digest",
    p: "Hours of fermentation begin breaking down gluten and the fructans (a FODMAP) that leave many people bloated after supermarket bread. In one trial, people with irritable bowel syndrome reported less discomfort on low-FODMAP sourdough. Not gluten-free — but for many, genuinely easier.",
  },
  {
    h: "Gentler on blood sugar",
    p: "In a controlled study, sourdough white bread came in at a glycemic index of about 54 versus 72 for yeast bread. A 2023 review of 25 clinical trials found lower glucose responses after sourdough in most studies. The lactic acid is doing real work, not vibes.",
  },
  {
    h: "Your body keeps more of it",
    p: "Phytic acid in flour binds up iron, zinc, and magnesium so you absorb less. Sourdough fermentation cut phytate 62% in one study — versus 38% for yeast — and test animals absorbed more iron, zinc, and magnesium from the sourdough bread.",
  },
  {
    h: "Nothing you can't pronounce",
    p: "Flour, water, salt, time. No yeast packets, no sugar, no dough conditioners, no ascorbic acid, no 'enzymes.' A 48-hour ferment does in days what additives fake in hours.",
  },
  {
    h: "Flavor you can't buy",
    p: "The same fermentation that helps digestion builds hundreds of flavor compounds. That tang, those blisters, that crust that sings as it cools — it's lactic acid and time. Industrial baking rents this flavor from a conditioner factory.",
  },
  {
    h: "It stays fresh longer",
    p: "The acids that make sourdough tangy also resist staling and mold. That's why real sourdough keeps days on a counter while 'wheat' bread turns to cotton — or needs a shelf of preservatives to pretend otherwise.",
  },
];

// Honest-science footnote for the Culture page.
export const SCIENCE_NOTE =
  "Sources, in plain words: a 2010 Journal of Cereal Science trial (lower glucose and insulin responses to sourdough wholemeal); a British Journal of Nutrition study (sourdough GI ≈ 54 vs ≈ 72 for yeast white bread); a Journal of Agricultural and Food Chemistry study (−62% phytate with sourdough vs −38% with yeast, better magnesium solubility); and a 2023 Frontiers in Nutrition systematic review of 25 clinical trials. The honest caveat from that review: results vary with flour, strain, and method — sourdough is promising and traditional, not medicine. If wheat bothers you, talk to your doctor. What no study disputes: three days of fermentation beats three hours of additives.";

export const TIMELINE = [
  { t: "Day 1, morning", p: "Levain built from Breadie Smalls — Donna's starter, a living culture of wild yeast and lactic acid bacteria, fed flour and water like a very patient pet." },
  { t: "Day 1, evening", p: "Autolyse: flour and water rest together so gluten forms gently. Then salt in, and a series of slow folds through the night." },
  { t: "Day 2, all day", p: "Bulk fermentation in a warm room. Breadie Smalls does the rising and the flavor-building. This is the part nobody can rush." },
  { t: "Day 2, night", p: "Shaped by hand into baskets, then cold retard in the fridge overnight — the slow, cold ferment that builds the tang and the blisters." },
  { t: "Day 3, bake day", p: "Into a screaming-hot oven with steam. Out comes a loaf that sings as it cools. Delivered the same day." },
];

export const FAQ = [
  { q: "Who is Breadie Smalls?", a: "Donna's sourdough starter — a jar of flour and water alive with wild yeast and lactic acid bacteria. It's fed regularly, lives on the counter, and every loaf she bakes is partly made of it. Yes, it has a name. Yes, it's family." },
  { q: "How does delivery work?", a: "We bake Friday and deliver locally on Saturday. Right now that's Donna and Terry, by car, friends-first pricing: delivery is free nearby, small flat fee further out. Order by Thursday night." },
  { q: "How do I keep sourdough fresh?", a: "Never the fridge. Keep it cut-side-down on a board or in a linen bag for 3-4 days, then slice and freeze in a bag — toast straight from frozen and it's indistinguishable. Real sourdough stales slower than commercial bread because of the acids." },
  { q: "Why does it sell out so fast?", a: "It's a home oven and a human being with two kids and a full life. 8-10 loaves a week is one baker's honest limit, and every loaf is shaped by hand. Scarcity isn't marketing; it's geometry." },
  { q: "Is your bread gluten-free?", a: "No — it's wheat. But the 36-48 hour ferment breaks down a good deal of the gluten and the FODMAPs people actually react to, and studies back that up. Many folks who avoid supermarket bread find they're fine with this. Still: not safe for celiac, and we bake in a kitchen that handles wheat." },
  { q: "What's in the butters?", a: "Cream, cultured for 24 hours like the bread gets fermented, then churned by hand. From there it's the flavor team: maple + miso, sesame + honey, or brown sugar + espresso. No gums, no 'natural flavors.'" },
  { q: "Can I get a loaf every week without remembering to order?", a: "That's the Bread Club — coming soon. One weekly payment, one loaf (plus butter option) every Saturday until you pause it." },
  { q: "Can I request a flavor?", a: "The menu rotates as Donna tests new bakes, and requests move it. Gochujang was a request. Ask in your order note — worst case she says 'not this week.'" },
];
