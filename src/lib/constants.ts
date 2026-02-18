export const SITE_CONFIG = {
  name: "KPR Homes",
  tagline: "Building Dreams Into Reality",
  description:
    "KPR Homes is a premium construction contractor specializing in commercial and residential projects. Building excellence, delivering trust.",
  phone: "+91 98765 43210",
  email: "info@kprhomes.com",
  address: "123 Builder Avenue, Hyderabad, Telangana 500032",
  workingHours: "Mon - Sat: 9:00 AM - 6:00 PM",
  socialLinks: {
    facebook: "https://facebook.com/kprhomes",
    instagram: "https://instagram.com/kprhomes",
    linkedin: "https://linkedin.com/company/kprhomes",
    youtube: "https://youtube.com/@kprhomes",
    whatsapp: "https://wa.me/919876543210",
  },
};

export const MOTION = {
  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  },
  staggerContainer: {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  },
  staggerContainerFast: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
  },
} as const;
