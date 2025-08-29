/**
 * Theme Configuration
 * Simplified theme using Lagom Design Tokens
 */

import * as tokens from "@fcongson/lagom-tokens/js/theme/light";
import { 
  lagomSemanticColorBrandPrimary,
  lagomSemanticColorBrandSecondary,
  lagomSemanticColorBrandTertiary,
} from "@fcongson/lagom-tokens/js/variables/semantic";

// Simplified theme object with most commonly used values
const theme = {
  // Colors - Direct token references
  colors: {
    primary: lagomSemanticColorBrandPrimary,
    secondary: lagomSemanticColorBrandSecondary,
    tertiary: lagomSemanticColorBrandTertiary,
    accent: tokens.lagomCoreColorsHoneyBase,
    
    // Semantic colors
    background: tokens.lagomCoreColorsWhite,
    text: tokens.lagomCoreColorsBlack,
    success: tokens.lagomCoreColorsOliveBase,
    warning: tokens.lagomCoreColorsHoneyBase,
    error: tokens.lagomCoreColorsNavyDarker20,
    info: tokens.lagomCoreColorsNavyBase,
    
    // Neutral colors (simplified)
    white: tokens.lagomCoreColorsWhite,
    black: tokens.lagomCoreColorsBlack,
    gray: tokens.lagomCoreColorsGreyBase,
    grayLight: tokens.lagomCoreColorsGreyLighter20,
    grayDark: tokens.lagomCoreColorsGreyDarker20,
  },

  // Spacing - Using Lagom tokens directly
  spacing: {
    xs: tokens.lagomCoreSpacingXs,
    sm: tokens.lagomCoreSpacingSm,
    md: tokens.lagomCoreSpacingMd,
    lg: tokens.lagomCoreSpacingLg,
    xl: tokens.lagomCoreSpacingXl,
    xxl: tokens.lagomCoreSpacingXxl,
  },

  // Border radius
  borderRadius: {
    sm: tokens.lagomCoreBorderRadiusXs,
    md: tokens.lagomCoreBorderRadiusSm,
    lg: tokens.lagomCoreBorderRadiusLg,
    xl: tokens.lagomCoreBorderRadiusXl,
  },

  // Breakpoints
  breakpoints: {
    mobile: '768px',
    tablet: '992px',
    desktop: '1200px',
  },

  // Transitions
  transitions: {
    fast: '150ms ease',
    normal: '250ms ease',
    slow: '350ms ease',
  },

  // Shadows (simplified)
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
  },
};

export default theme;

module.exports = theme;
