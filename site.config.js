/**
 * Site Configuration
 * Centralized configuration for easy customization
 * Uses Lagom Design Tokens for consistent theming
 */

// Import Lagom tokens for default values
const { lagomSemanticColorBrandPrimary, lagomSemanticColorBrandSecondary, lagomSemanticColorBrandTertiary } = require('@fcongson/lagom-tokens/js/variables/semantic');
const { lagomCoreColorsWhite, lagomCoreColorsBlack, lagomCoreColorsHoneyBase } = require('@fcongson/lagom-tokens/js/variables/core');

module.exports = {
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

  // Theme customization using Lagom tokens
  theme: {
    // Use Lagom brand colors by default
    primaryColor: lagomSemanticColorBrandPrimary,   // #626E60 (Olive)
    secondaryColor: lagomSemanticColorBrandSecondary, // #394E6F (Navy)
    tertiaryColor: lagomSemanticColorBrandTertiary,  // #442C45 (Purple)
    accentColor: lagomCoreColorsHoneyBase,           // #DCAE1D (Honey)
    backgroundColor: lagomCoreColorsWhite,           // #ffffff
    textColor: lagomCoreColorsBlack,                 // #111111
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif"
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
