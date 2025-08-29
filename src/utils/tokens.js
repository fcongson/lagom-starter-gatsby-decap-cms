/**
 * Design Token Utilities
 * Helper functions and constants for using Lagom tokens throughout the application
 */

// Import all Lagom tokens
import * as lagomLight from "@fcongson/lagom-tokens/js/theme/light";
import * as lagomDark from "@fcongson/lagom-tokens/js/theme/dark";
import * as lagomCore from "@fcongson/lagom-tokens/js/variables/core";
import * as lagomSemantic from "@fcongson/lagom-tokens/js/variables/semantic";
import * as lagomSemanticLight from "@fcongson/lagom-tokens/js/variables/semantic.light";
import * as lagomSemanticDark from "@fcongson/lagom-tokens/js/variables/semantic.dark";
import * as lagomComponent from "@fcongson/lagom-tokens/js/variables/component";

// Export organized token collections
export const tokens = {
  // Core design tokens (theme-agnostic)
  core: lagomCore,

  // Semantic tokens (theme-agnostic)
  semantic: lagomSemantic,

  // Component-specific tokens
  component: lagomComponent,

  // Theme-specific tokens
  light: {
    ...lagomLight,
    semantic: lagomSemanticLight,
  },
  dark: {
    ...lagomDark,
    semantic: lagomSemanticDark,
  },
};

// Helper function to get tokens by theme
export const getTokens = (theme = "light") => {
  return theme === "dark" ? tokens.dark : tokens.light;
};

// CSS Custom Properties generator for easier CSS-in-JS usage
export const createCSSVariables = (theme = "light") => {
  const themeTokens = getTokens(theme);
  const cssVars = {};

  Object.entries(themeTokens).forEach(([key, value]) => {
    // Convert camelCase to kebab-case and add CSS variable prefix
    const cssVarName = `--${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
    cssVars[cssVarName] = value;
  });

  return cssVars;
};

// Common token shortcuts for frequently used values
export const spacing = {
  xs: lagomCore.lagomCoreSpacingXs,
  sm: lagomCore.lagomCoreSpacingSm,
  md: lagomCore.lagomCoreSpacingMd,
  lg: lagomCore.lagomCoreSpacingLg,
  xl: lagomCore.lagomCoreSpacingXl,
  xxl: lagomCore.lagomCoreSpacingXxl,
};

export const borderRadius = {
  xs: lagomCore.lagomCoreBorderRadiusXs,
  sm: lagomCore.lagomCoreBorderRadiusSm,
  md: lagomCore.lagomCoreBorderRadiusMd,
  lg: lagomCore.lagomCoreBorderRadiusLg,
  xl: lagomCore.lagomCoreBorderRadiusXl,
  xxl: lagomCore.lagomCoreBorderRadiusXxl,
};

export const colors = {
  // Brand colors
  brand: {
    primary: lagomSemantic.lagomSemanticColorBrandPrimary,
    secondary: lagomSemantic.lagomSemanticColorBrandSecondary,
    tertiary: lagomSemantic.lagomSemanticColorBrandTertiary,
  },

  // Core colors
  core: {
    black: lagomCore.lagomCoreColorsBlack,
    white: lagomCore.lagomCoreColorsWhite,
    transparent: lagomCore.lagomCoreColorsTransparent,
  },

  // Grey scale
  grey: {
    darker40: lagomCore.lagomCoreColorsGreyDarker40,
    darker35: lagomCore.lagomCoreColorsGreyDarker35,
    darker30: lagomCore.lagomCoreColorsGreyDarker30,
    darker20: lagomCore.lagomCoreColorsGreyDarker20,
    base: lagomCore.lagomCoreColorsGreyBase,
    lighter20: lagomCore.lagomCoreColorsGreyLighter20,
    lighter40: lagomCore.lagomCoreColorsGreyLighter40,
  },

  // Color families
  honey: {
    darker20: lagomCore.lagomCoreColorsHoneyDarker20,
    darker10: lagomCore.lagomCoreColorsHoneyDarker10,
    base: lagomCore.lagomCoreColorsHoneyBase,
    lighter20: lagomCore.lagomCoreColorsHoneyLighter20,
    lighter40: lagomCore.lagomCoreColorsHoneyLighter40,
  },

  olive: {
    darker20: lagomCore.lagomCoreColorsOliveDarker20,
    darker10: lagomCore.lagomCoreColorsOliveDarker10,
    base: lagomCore.lagomCoreColorsOliveBase,
    lighter20: lagomCore.lagomCoreColorsOliveLighter20,
    lighter40: lagomCore.lagomCoreColorsOliveLighter40,
  },

  navy: {
    darker20: lagomCore.lagomCoreColorsNavyDarker20,
    darker10: lagomCore.lagomCoreColorsNavyDarker10,
    base: lagomCore.lagomCoreColorsNavyBase,
    lighter20: lagomCore.lagomCoreColorsNavyLighter20,
    lighter40: lagomCore.lagomCoreColorsNavyLighter40,
  },
};

// Typography token helper
export const typography = {
  body: lagomSemantic.lagomSemanticTypographyBody,
};

// Utility function to access nested token values safely
export const getToken = (path, fallback = null) => {
  const pathArray = path.split(".");
  let current = tokens;

  for (const key of pathArray) {
    if (current && typeof current === "object" && key in current) {
      current = current[key];
    } else {
      return fallback;
    }
  }

  return current;
};

// Example usage:
// getToken('core.lagomCoreColorsBlack') // returns '#111111'
// getToken('light.lagomCoreColorsWhite') // returns '#ffffff'
// getToken('spacing.lg') // returns '16px'

export default tokens;
