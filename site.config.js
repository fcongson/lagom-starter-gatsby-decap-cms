/**
 * Site Configuration
 * Centralized configuration for easy customization
 */

module.exports = {
  // The lagom-ui brand to use, set as `data-lagom-brand` on <html> by
  // gatsby-ssr.js. Empty renders Base, Lagom's neutral default brand. See
  // src/styles/brand.css for how to make your own.
  brand: "",

  // Basic site information
  site: {
    title: "Lagom Starter - Gatsby + Decap CMS",
    description: "This repo contains an example website that is built with Gatsby, and Decap CMS.",
    author: "Frank Congson",
    siteUrl: "https://lagom-starter-gatsby-decap-cms.netlify.app",
    email: "hello@example.com",
    phone: "+1 (555) 123-4567",
  },

  // Social media links
  social: {
    twitter: "@example",
    facebook: "example",
    instagram: "example",
    linkedin: "company/example",
    github: "example"
  },

  // Business information
  business: {
    name: "Your Business Name",
    address: {
      street: "123 Main Street",
      city: "Your City",
      state: "ST",
      zip: "12345",
      country: "USA"
    },
    hours: {
      monday: "9:00 AM - 5:00 PM",
      tuesday: "9:00 AM - 5:00 PM",
      wednesday: "9:00 AM - 5:00 PM",
      thursday: "9:00 AM - 5:00 PM",
      friday: "9:00 AM - 5:00 PM",
      saturday: "Closed",
      sunday: "Closed"
    }
  },

  // Features toggle
  features: {
    blog: true,
    portfolio: false,
    ecommerce: false,
    newsletter: true,
    darkMode: true,
    multiLanguage: false,
    search: true,
    comments: false
  },

  // SEO & Analytics
  seo: {
    googleAnalyticsId: "", // GA4 Measurement ID
    googleTagManagerId: "", // GTM Container ID
    facebookPixelId: "",
    enableSitemap: true,
    enableRobotsTxt: true
  },

  // Content management
  cms: {
    enablePreview: true,
    mediaFolder: "static/images",
    publicFolder: "/images",
    enableLocalBackend: true
  }
};
