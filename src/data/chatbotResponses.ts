import { SITE_CONFIG } from "@/lib/constants";

export interface ChatResponse {
  keywords: string[];
  response: string;
  followUp?: string[];
}

export const GREETING_MESSAGES = [
  "Hello! Welcome to KPR Homes. How can I help you today?",
];

export const QUICK_REPLIES = [
  "What projects do you have?",
  "What services do you offer?",
  "How can I contact you?",
  "What are your prices?",
  "Where are you located?",
];

const chatResponses: ChatResponse[] = [
  {
    keywords: ["hello", "hi", "hey", "good morning", "good evening", "namaste"],
    response: `Hello! Welcome to KPR Homes. We're a premium construction company based in Tirupati. How can I help you today?`,
    followUp: ["Our Projects", "Our Services", "Contact Info"],
  },
  {
    keywords: ["project", "projects", "what do you build", "portfolio", "work"],
    response: `We have completed 10+ major projects and have several ongoing ones:\n\n**Completed Commercial:** Lucky's 1, Lucky's 2\n**Ongoing Commercial:** KCN, PCR, Anand Mythri\n**Completed Residential:** KPR Pride, KPR Elite, KPR Oakridge, KPR Meridian, Mokshitha Enclave, Mokshitha Towers\n**Ongoing Residential:** KPR Exotica, KPR Grandure, KPR Zenith\n\nWould you like to know more about any specific project?`,
    followUp: ["Commercial Projects", "Residential Projects", "Ongoing Projects"],
  },
  {
    keywords: ["service", "services", "what do you do", "offer", "expertise"],
    response: `We offer comprehensive construction services:\n\n1. **Residential Construction** - Luxury apartments & villas\n2. **Commercial Buildings** - Office complexes, retail spaces\n3. **Interior Design** - Space planning & custom interiors\n4. **Renovation & Remodeling** - Structural updates & modernization\n5. **Project Management** - End-to-end project delivery\n6. **Architecture Planning** - 3D modeling & sustainable design`,
    followUp: ["Residential", "Commercial", "Get Estimate"],
  },
  {
    keywords: ["contact", "phone", "call", "reach", "talk", "number", "email"],
    response: `You can reach us at:\n\n📞 ${SITE_CONFIG.phone}\n📞 ${SITE_CONFIG.phone2}\n📧 ${SITE_CONFIG.email}\n📍 ${SITE_CONFIG.address}\n⏰ ${SITE_CONFIG.workingHours}\n\nOr chat with us on WhatsApp!`,
  },
  {
    keywords: ["price", "cost", "rate", "estimate", "budget", "how much", "pricing", "sqft"],
    response: `Our construction packages start from competitive rates:\n\n- **Standard Package** - Quality construction at affordable prices\n- **Premium Package** - Enhanced finishes & modern amenities\n- **Luxury Package** - Top-tier materials & smart home features\n\nUse our **Cost Estimator** tool on the website for a personalized estimate!`,
    followUp: ["Get Estimate", "Compare Packages"],
  },
  {
    keywords: ["location", "where", "address", "office", "visit", "tirupati"],
    response: `Our office is located at:\n\n📍 ${SITE_CONFIG.address}\n\nWe're near Hotel Taj, beside Vintage INN in the Revenue Colony area of Tirupati.`,
  },
  {
    keywords: ["hours", "timing", "when", "open", "working", "schedule"],
    response: `Our working hours are:\n\n⏰ ${SITE_CONFIG.workingHours}\n\nSundays we are closed. For urgent queries, you can WhatsApp us anytime!`,
  },
  {
    keywords: ["residential", "apartment", "flat", "home", "house", "villa", "bhk"],
    response: `Our residential projects include luxury 2, 3 & 4 BHK apartments with amenities like swimming pools, gyms, clubhouses, and smart home features.\n\n**Completed:** KPR Pride, KPR Elite, KPR Oakridge, KPR Meridian, Mokshitha Enclave, Mokshitha Towers\n**Ongoing:** KPR Exotica, KPR Grandure, KPR Zenith`,
  },
  {
    keywords: ["commercial", "office", "shop", "retail", "business", "complex"],
    response: `Our commercial projects include premium retail and office spaces:\n\n**Completed:** Lucky's 1 (50,000 sq ft), Lucky's 2 (65,000 sq ft)\n**Ongoing:** KCN (75,000 sq ft), PCR (80,000 sq ft), Anand Mythri (90,000 sq ft)`,
  },
  {
    keywords: ["about", "company", "who", "history", "since", "experience", "year"],
    response: `KPR Homes has been building excellence since 2008. With 15+ years of experience, 500+ completed projects, and 200+ happy clients, we are one of Tirupati's most trusted construction companies.\n\nOur tagline: "We create landmarks.."`,
  },
  {
    keywords: ["thank", "thanks", "bye", "goodbye"],
    response: `Thank you for chatting with us! If you need anything else, feel free to ask. You can also reach us at ${SITE_CONFIG.phone}. Have a great day!`,
  },
];

const DEFAULT_RESPONSE = `I'm sorry, I didn't quite understand that. I can help you with:\n\n- Our **Projects** (commercial & residential)\n- Our **Services**\n- **Pricing** information\n- **Contact** details\n- **Location** & working hours\n\nPlease try asking about any of these topics!`;

export function findResponse(message: string): {
  response: string;
  followUp?: string[];
} {
  const lower = message.toLowerCase().trim();

  for (const entry of chatResponses) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return { response: entry.response, followUp: entry.followUp };
    }
  }

  return { response: DEFAULT_RESPONSE, followUp: QUICK_REPLIES.slice(0, 3) };
}
