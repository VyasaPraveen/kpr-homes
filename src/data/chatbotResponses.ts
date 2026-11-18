import { SITE_CONFIG } from "@/lib/constants";
import { projects } from "@/data/projects";
import { BASE_RATES } from "@/data/estimator";
import { AVAILABLE_FLATS, FLAT_PRICE_NOTE, flatPrice } from "@/data/availableFlats";
import { formatCurrency } from "@/lib/utils";

export interface ChatResponse {
  keywords: string[];
  response: string;
  followUp?: string[];
  /** Multiplies the match score; < 1 lets real topics win over small talk. */
  weight?: number;
}

export const GREETING_MESSAGES = [
  "Hello! Welcome to KPR Homes. 🏠 2 & 3 BHK flats are available for sale now. How can I help you today?",
];

export const QUICK_REPLIES = [
  "Available flats for sale",
  "Construction contracts",
  "What are your prices?",
  "What projects do you have?",
  "How can I contact you?",
  "Where are you located?",
];

const names = (list: typeof projects) => list.map((p) => p.title).join(", ");
const contracts = projects.filter((p) => p.category === "commercial");
const residential = projects.filter((p) => p.category === "residential");
const byStatus = (list: typeof projects, s: "completed" | "ongoing") => list.filter((p) => p.status === s);
const rates = BASE_RATES.residential;

const flatLines = AVAILABLE_FLATS.map(
  (f) =>
    `- **${f.type}**: ${f.areaSqft.toLocaleString("en-IN")} sq ft @ ${formatCurrency(f.ratePerSqft)}/sq ft = ${formatCurrency(flatPrice(f))}`
).join("\n");

const chatResponses: ChatResponse[] = [
  {
    keywords: ["available", "availability", "for sale", "sale", "sell", "selling", "buy", "buying", "purchase",
      "flat", "flats", "plot", "plots", "bhk", "2bhk", "3bhk", "2 bhk", "3 bhk", "booking", "ready to move"],
    response: `Flats available for sale now:\n\n${flatLines}\n\n${FLAT_PRICE_NOTE}\n\nSee photos and enquire on the **Available Flats** page, or WhatsApp us on ${SITE_CONFIG.phone}.`,
    followUp: ["Book a site visit", "Residential projects", "Contact info"],
  },
  {
    keywords: ["construction contract", "construction contracts", "contract", "contracts", "contractor", "turnkey",
      "build my house", "build my home", "build a house", "construct", "landowner", "land owner", "my plot",
      "hospital", "bank", "home stay", "homestay", "duplex", "kpr construction"],
    response: `**KPR Construction** - we build your vision. We take up construction contracts for clients:\n\n- **Residential:** individual homes, home stays, duplex homes, apartments for landowners\n- **Commercial:** hospitals, offices, banks, commercial complexes\n\nContract rates: Standard ${formatCurrency(rates.standard)}, Premium ${formatCurrency(rates.premium)}, Luxury ${formatCurrency(rates.luxury)} per sq ft. Try our **Cost Estimator** for your plot size.`,
    followUp: ["Get estimate", "Compare packages", "Contract projects"],
  },
  {
    keywords: ["price", "prices", "cost", "costs", "rate", "rates", "estimate", "estimator", "budget", "how much",
      "pricing", "sqft", "sq ft", "per sq", "package", "packages", "compare", "standard", "premium", "luxury", "quote"],
    response: `**Construction contract rates** (per sq ft):\n\n- **Standard:** ${formatCurrency(rates.standard)}\n- **Premium:** ${formatCurrency(rates.premium)}\n- **Luxury:** ${formatCurrency(rates.luxury)}\n\nUse the **Cost Estimator** for your area, and **Compare Packages** to see what each level includes.\n\nLooking to **buy a flat**? Our flats start at ${formatCurrency(Math.min(...AVAILABLE_FLATS.map((f) => f.ratePerSqft)))}/sq ft. Ask me "available flats".`,
    followUp: ["Available flats", "Construction contracts", "Contact info"],
  },
  {
    keywords: ["gst", "registration", "register", "stamp duty", "interior", "interiors", "extra charges", "hidden charges"],
    response: `For our flats: ${FLAT_PRICE_NOTE} Our team will give you the full cost sheet before booking.\n\nCall ${SITE_CONFIG.phone} for details.`,
    followUp: ["Available flats", "Contact info"],
  },
  {
    keywords: ["residential", "residential project", "residential projects", "apartment", "apartments", "kpr developments", "villa", "gated community"],
    response: `**KPR Developments** - our own residential projects:\n\n**Completed:** ${names(byStatus(residential, "completed"))}\n**Ongoing:** ${names(byStatus(residential, "ongoing"))}\n\nFlats currently for sale are on the **Available Flats** page.`,
    followUp: ["Available flats", "Ongoing projects"],
  },
  {
    keywords: ["commercial", "commercial project", "commercial projects", "contract project", "contract projects", "office", "shop", "retail", "business", "complex"],
    response: `Projects built under **construction contracts**:\n\n**Completed:** ${names(byStatus(contracts, "completed"))}\n**Ongoing:** ${names(byStatus(contracts, "ongoing"))}\n\nWe build hospitals, offices, banks, commercial complexes and homes for clients.`,
    followUp: ["Construction contracts", "Get estimate"],
  },
  {
    keywords: ["project", "projects", "portfolio", "work", "works", "completed", "ongoing", "running", "what do you build"],
    response: `We have delivered 25+ projects in Tirupati:\n\n**Construction contracts - completed:** ${names(byStatus(contracts, "completed"))}\n**Construction contracts - ongoing:** ${names(byStatus(contracts, "ongoing"))}\n**Residential - completed:** ${names(byStatus(residential, "completed"))}\n**Residential - ongoing:** ${names(byStatus(residential, "ongoing"))}\n\nAsk me about any project by name.`,
    followUp: ["Residential projects", "Contract projects", "Available flats"],
  },
  {
    keywords: ["service", "services", "what do you do", "offer", "expertise"],
    response: `What we do:\n\n1. **Construction Contracts** - homes, duplexes, home stays, apartments for landowners, hospitals, offices, banks\n2. **Residential Projects** - our own apartments for sale\n3. **Renovation & Remodeling**\n4. **Project Management** - end-to-end delivery\n5. **Architecture Planning** - design & structural planning`,
    followUp: ["Construction contracts", "Available flats", "Get estimate"],
  },
  {
    keywords: ["about", "company", "who are you", "history", "since", "experience", "founded", "founder", "owner", "prasad", "established"],
    response: `KPR Homes was founded in **2015** by **K. Prasad Rao** (12+ years in construction). We have delivered **25+ projects** in Tirupati with a **99% client satisfaction** rate and a team of **50+ skilled professionals**.\n\nOur tagline: "We Create Landmarks"`,
    followUp: ["Our projects", "Contact info"],
  },
  {
    keywords: ["award", "awards", "nominated", "nomination", "recognition", "achievement"],
    response: `In 2023 our residential project **KPR Pride** was nominated for an award for its construction quality.`,
    followUp: ["Residential projects", "About KPR Homes"],
  },
  {
    keywords: ["contact", "phone", "call", "reach", "talk", "number", "email", "mail", "whatsapp", "site visit", "visit"],
    response: `You can reach us at:\n\n📞 ${SITE_CONFIG.phone}\n📞 ${SITE_CONFIG.phone2}\n📧 ${SITE_CONFIG.email}\n📍 ${SITE_CONFIG.address}\n⏰ ${SITE_CONFIG.workingHours}\n\nOr chat with us on WhatsApp - we can arrange a site visit.`,
  },
  {
    keywords: ["location", "located", "where", "address", "office address", "your office", "where is your office", "directions", "map", "tirupati"],
    response: `Our office is at:\n\n📍 ${SITE_CONFIG.address}\n\nNear Hotel Taj, beside Vintage INN, Revenue Colony, Tirupati.`,
  },
  {
    keywords: ["loan", "home loan", "bank loan", "emi", "finance", "financing"],
    response: `Our team can guide you on home-loan documentation when you book one of our flats. Call ${SITE_CONFIG.phone} or WhatsApp us and we will help you with the process.`,
    followUp: ["Available flats", "Contact info"],
  },
  {
    keywords: ["hours", "timing", "timings", "open", "working hours", "schedule", "sunday"],
    response: `Our working hours:\n\n⏰ ${SITE_CONFIG.workingHours}\n\nWe are closed on Sundays. For urgent queries, WhatsApp us anytime.`,
  },
  {
    keywords: ["thank", "thanks", "thank you", "bye", "goodbye", "ok thanks"],
    response: `Thank you for chatting with us! You can also reach us at ${SITE_CONFIG.phone}. Have a great day!`,
    weight: 0.6,
  },
  {
    keywords: ["hello", "hi", "hey", "hii", "good morning", "good afternoon", "good evening", "namaste", "namaskaram"],
    response: `Hello! Welcome to KPR Homes, Tirupati. I can help with flats for sale, construction contracts, prices and our projects.`,
    followUp: ["Available flats", "Construction contracts", "Our projects"],
    weight: 0.5,
  },
];

// One entry per project, so questions that name a project get its details.
const projectResponses: ChatResponse[] = projects.map((p) => {
  const title = p.title.toLowerCase();
  const plain = title.replace(/[^a-z0-9 ]/g, "");
  const short = plain.replace(/^kpr /, "");
  const kind =
    p.category === "commercial"
      ? "construction contract"
      : p.client && p.client !== "KPR Homes"
        ? `residential project built by KPR Homes for ${p.client}`
        : "KPR residential project";
  return {
    keywords: Array.from(new Set([title, plain, short, p.slug.replace(/-/g, " ")])),
    response: `**${p.title}** - ${p.status === "completed" ? "completed" : "ongoing"} ${kind} in ${p.location}.\n\n${p.description}\n\n**Key features:** ${p.features.join(", ")}.`,
    followUp: p.category === "commercial" ? ["Contract projects", "Get estimate"] : ["Available flats", "Residential projects"],
    weight: 3,
  };
});

// Names shared by several projects (e.g. "Mokshitha", "Lucky's") answer with all of them.
const groupResponses: ChatResponse[] = Object.entries(
  projects.reduce<Record<string, typeof projects>>((acc, p) => {
    const first = p.title.toLowerCase().replace(/[^a-z0-9 ]/g, "").split(" ").find((w) => w !== "kpr") || "";
    (acc[first] ||= []).push(p);
    return acc;
  }, {})
)
  .filter(([word, list]) => word.length > 3 && list.length > 1)
  .map(([word, list]) => ({
    keywords: [word],
    response: `We have ${list.length} ${list[0].title.split(" ")[0]} projects:\n\n${list
      .map((p) => `- **${p.title}** (${p.status === "completed" ? "completed" : "ongoing"}): ${p.description}`)
      .join("\n")}`,
    followUp: list.map((p) => p.title),
    weight: 2,
  }));

const ALL_RESPONSES = [...projectResponses, ...groupResponses, ...chatResponses];

const DEFAULT_RESPONSE = `Sorry, I didn't quite get that. I can help you with:\n\n- **Flats for sale** (sizes & prices)\n- **Construction contracts** & rates\n- Our **projects**\n- **Contact** details, **location** & working hours\n\nOr call us on ${SITE_CONFIG.phone}.`;

function normalize(text: string): string {
  return ` ${text
    .toLowerCase()
    .replace(/&#x27;|&#39;|['’]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()} `;
}

function scoreEntry(text: string, entry: ChatResponse): number {
  let score = 0;
  for (const kw of entry.keywords) {
    const k = normalize(kw).trim();
    if (!k) continue;
    // Whole-word / whole-phrase match (allow a plural "s"), so "hi" does not match "which".
    if (text.includes(` ${k} `) || text.includes(` ${k}s `)) {
      score += k.split(" ").length; // longer phrases are stronger signals
    }
  }
  return score * (entry.weight ?? 1);
}

export function findResponse(message: string): {
  response: string;
  followUp?: string[];
} {
  const text = normalize(message);
  let best: ChatResponse | null = null;
  let bestScore = 0;
  for (const entry of ALL_RESPONSES) {
    const s = scoreEntry(text, entry);
    if (s > bestScore) {
      best = entry;
      bestScore = s;
    }
  }
  if (best) return { response: best.response, followUp: best.followUp };
  return { response: DEFAULT_RESPONSE, followUp: QUICK_REPLIES.slice(0, 3) };
}
