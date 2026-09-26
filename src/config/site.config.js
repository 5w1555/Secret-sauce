// ── THE ONE FILE YOU EDIT PER NEW SITE ──────────────────────────────
// Clone this repo, change these values + add content, and you have a new site.

export const siteConfig = {
  name: "My Web Asset",
  tagline: "Short, keyword-relevant tagline for this niche",
  description: "1-2 sentence meta description for the homepage. Used in <meta name='description'> and social previews.",
  url: "https://your-domain.com", // no trailing slash — must match your live domain

  nav: [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
  ],

  theme: {
    primary: "#2563eb",   // Tailwind blue-600 — swap per niche
    accent: "#f59e0b",
  },

  // Optional monetization hooks — fill in when you're ready
  monetization: {
    affiliateDisclosure: "This site may earn a commission from links on this page.",
    adsenseClientId: "", // e.g. "ca-pub-XXXXXXXXXXXXXXXX"
  },

  social: {
    twitter: "",
    // add more as needed
  },
};
