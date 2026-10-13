// Central content + demo data. When real photos exist, swap img URLs here.
// Stock placeholders via Unsplash source URLs (hotlinked for demo only).

export const WEEK = {
  label: "This week's bake",
  date: "Saturday, October 17",
  closes: "Thursday 8pm, or when sold out",
  loavesTotal: 10,
  loavesLeft: 7,
};

export const PRODUCTS = [
  {
    id: "classic-sourdough",
    name: "Country Sourdough",
    price: 9,
    stock: 7,
    stockTotal: 10,
    tag: "The classic",
    desc: "48-hour cold ferment. Blistered crust, custardy crumb, that gentle tang. Flour, water, salt, time.",
    img: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=900&q=80", // verified: rustic seeded loaf
  },
  {
    id: "rosemary-olive",
    name: "Rosemary Olive",
    price: 11,
    stock: 3,
    stockTotal: 6,
    tag: "Weekend special",
    desc: "Kalamata olives and garden rosemary folded into the same slow-fermented dough. Loud with cheese.",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&q=80",
  },
  {
    id: "cultured-butter",
    name: "Cultured Butter",
    price: 8,
    stock: 5,
    stockTotal: 6,
    tag: "Small batch",
    desc: "Cream cultured 24 hours with the same bacterial care as the bread, then hand-churned. Tangy, deep, nutty.",
    img: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=900&q=80", // SWAP: verified bakery photo, not butter — replace w/ Donna's churn shot
  },
  {
    id: "honey-whole-wheat",
    name: "Honey Whole Wheat",
    price: 10,
    stock: 0,
    stockTotal: 6,
    tag: "Back next week",
    desc: "50% stone-ground whole wheat, local honey, same long ferment. Toasts like nothing else.",
    img: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=900&q=80", // SWAP: verified loaf photo, replace w/ real honey-wheat crumb shot
  },
];

export const STEPS = [
  { n: "01", h: "Order by Thursday", p: "Weekly bake, limited loaves. When they're gone, they're gone — that's the freshness guarantee." },
  { n: "02", h: "Donna bakes Friday", p: "Every loaf is shaped by hand and cold-fermented for up to 48 hours. No shortcuts, no dough conditioners." },
  { n: "03", h: "Delivered Saturday", p: "Warm-ish, paper-wrapped, at your door. Right now we deliver locally ourselves — friends first." },
];

export const FACTS = [
  { h: "Actually digestible", p: "Long fermentation pre-digests much of the gluten and the tricky fructans in wheat. This is why people who 'can't do bread' often can do this." },
  { h: "No fake bread", p: "Three ingredients. No yeast packets, no sugar, no dough conditioners, no 'enriched flour' mystery. A 48-hour ferment does what additives do in 4 hours." },
  { h: "Better nutrition", p: "The ferment raises mineral availability and lowers the bread's glycemic response versus same-flour quick breads. Slow food isn't a vibe, it's chemistry." },
];

export const TIMELINE = [
  { t: "Day 1, morning", p: "Levain built from the starter — a culture of wild yeast and lactic bacteria Donna has kept alive and fed for years." },
  { t: "Day 1, evening", p: "Autolyse: flour and water rest together so gluten forms gently. Then salt in, and a series of slow folds through the night." },
  { t: "Day 2, all day", p: "Bulk fermentation in a warm room. The culture does the rising and the flavor-building. This is the part nobody can rush." },
  { t: "Day 2, night", p: "Shaped by hand into baskets, then cold retard in the fridge overnight — the slow, cold ferment that builds the tang and the blisters." },
  { t: "Day 3, bake day", p: "Into a screaming-hot oven with steam. Out comes a loaf that sings as it cools. Delivered the same day." },
];

export const FAQ = [
  { q: "How does delivery work?", a: "We bake Friday and deliver locally on Saturday. Right now that's Donna and Terry on foot and by car, friends-first pricing: delivery is free nearby, small flat fee further out. Order by Thursday night." },
  { q: "How do I keep sourdough fresh?", a: "Never the fridge. Keep it cut-side-down on a board or in a linen bag for 3-4 days, then slice and freeze in a bag — toast straight from frozen and it's indistinguishable. Real sourdough stales slower than commercial bread because of the acids." },
  { q: "Why does it sell out so fast?", a: "It's a home oven and a human being. 8-10 loaves a week is one baker's honest limit, and every loaf is shaped by hand. Scarcity isn't marketing; it's geometry." },
  { q: "Is your bread gluten-free?", a: "No — it's wheat. But the 36-48 hour ferment breaks down a good deal of the gluten and the FODMAPs people actually react to. Many folks who avoid supermarket bread find they're fine with this. Still: not safe for celiac, and we bake in a kitchen that handles wheat." },
  { q: "Can I get a loaf every week without remembering to order?", a: "That's the Bread Club — coming soon. One weekly payment, one loaf (plus butter option) every Saturday until you pause it." },
  { q: "What about custom or party orders?", a: "Yes. Baguettes for dinners, loaf gifts, holiday bakes — message us two weeks ahead and Donna will tell you honestly what's possible." },
];
