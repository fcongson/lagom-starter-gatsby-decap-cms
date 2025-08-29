# 🎨 Design Tokens Guide

This project uses **Lagom Design Tokens** to maintain consistent design across all components. Instead of hardcoded values, we use a centralized token system.

## What are Design Tokens?

Design tokens are named entities that store visual design attributes. They're the building blocks of your design system - colors, spacing, typography, etc.

## Available Token Categories

### 1. Colors

#### Brand Colors (Semantic)
```javascript
import { colors } from '../utils/tokens';

// Primary brand color (Olive)
colors.brand.primary // #626E60

// Secondary brand color (Navy)  
colors.brand.secondary // #394E6F

// Tertiary brand color (Purple)
colors.brand.tertiary // #442C45
```

#### Core Colors
```javascript
// Base colors
colors.core.black // #111111
colors.core.white // #ffffff
colors.core.transparent // hsla(0, 0%, 100%, 0)

// Grey scale
colors.grey.darker40 // #222222
colors.grey.base // #878787
colors.grey.lighter40 // #ededed
```

#### Color Families
```javascript
// Honey (Warning/Accent colors)
colors.honey.base // #DCAE1D
colors.honey.lighter20 // #EDCF73

// Olive (Success/Nature colors) 
colors.olive.base // #626E60
colors.olive.lighter40 // #CACFC9

// Navy (Info/Professional colors)
colors.navy.base // #394E6F
colors.navy.lighter20 // #7A8FB8
```

### 2. Spacing

```javascript
import { spacing } from '../utils/tokens';

spacing.xs  // 2px
spacing.sm  // 4px  
spacing.md  // 8px
spacing.lg  // 16px
spacing.xl  // 32px
spacing.xxl // 64px
```

### 3. Border Radius

```javascript
import { borderRadius } from '../utils/tokens';

borderRadius.xs  // 4px
borderRadius.sm  // 8px
borderRadius.md  // 12px
borderRadius.lg  // 16px
borderRadius.xl  // 20px
borderRadius.xxl // 24px
```

### 4. Typography

```javascript
import { typography } from '../utils/tokens';

typography.body // "400 16px/1.7 Montserrat, sans-serif"
```

## Usage Examples

### In React Components

```javascript
import React from 'react';
import { colors, spacing, borderRadius } from '../utils/tokens';

const Button = ({ children, variant = 'primary' }) => {
  const buttonStyle = {
    backgroundColor: variant === 'primary' ? colors.brand.primary : colors.grey.base,
    color: colors.core.white,
    padding: `${spacing.md} ${spacing.lg}`,
    borderRadius: borderRadius.md,
    border: 'none',
    cursor: 'pointer'
  };

  return <button style={buttonStyle}>{children}</button>;
};
```

### In CSS Modules

```css
/* Use CSS custom properties generated from tokens */
.button {
  background-color: var(--lagom-semantic-color-brand-primary);
  padding: var(--lagom-core-spacing-md) var(--lagom-core-spacing-lg);
  border-radius: var(--lagom-core-border-radius-md);
}
```

### With CSS-in-JS Libraries (Styled Components, Emotion)

```javascript
import styled from 'styled-components';
import { colors, spacing, borderRadius } from '../utils/tokens';

const StyledButton = styled.button`
  background-color: ${colors.brand.primary};
  color: ${colors.core.white};
  padding: ${spacing.md} ${spacing.lg};
  border-radius: ${borderRadius.md};
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: ${colors.olive.darker10};
  }
`;
```

### Using the Theme Object

The centralized theme object combines tokens with additional customizations:

```javascript
import theme from '../styles/theme';

const Component = () => (
  <div style={{
    color: theme.colors.primary,
    padding: theme.spacing[4],
    borderRadius: theme.borderRadius.md,
    fontSize: theme.fontSizes.lg
  }}>
    Content with consistent theming
  </div>
);
```

## Advanced Usage

### Getting Tokens Dynamically

```javascript
import { getToken } from '../utils/tokens';

// Safe access to nested token values
const primaryColor = getToken('light.lagomSemanticColorBrandPrimary', '#000000');
const spacing = getToken('core.lagomCoreSpacingLg', '16px');
```

### Theme Switching (Light/Dark)

```javascript
import { getTokens } from '../utils/tokens';

const ThemeProvider = ({ theme = 'light', children }) => {
  const tokens = getTokens(theme);
  
  return (
    <div style={{ 
      backgroundColor: tokens.lagomCoreColorsWhite,
      color: tokens.lagomCoreColorsBlack 
    }}>
      {children}
    </div>
  );
};
```

### CSS Custom Properties Generation

```javascript
import { createCSSVariables } from '../utils/tokens';

// Generate CSS variables for the entire document
const cssVars = createCSSVariables('light');

// Apply to document root
Object.entries(cssVars).forEach(([property, value]) => {
  document.documentElement.style.setProperty(property, value);
});
```

## Best Practices

### ✅ Do

- **Use tokens for all design values**: Colors, spacing, typography, etc.
- **Use semantic tokens**: Prefer `colors.brand.primary` over `colors.olive.base`
- **Be consistent**: Use the same token for similar design elements
- **Document custom additions**: If you add new tokens, document them

### ❌ Don't

- **Hardcode values**: Avoid `color: '#626E60'`, use `color: colors.brand.primary`
- **Mix units inconsistently**: Stick to the token spacing system
- **Override without reason**: Use tokens as the source of truth
- **Create duplicate tokens**: Check if a token already exists before creating new ones

## Customizing Tokens

### Extending the Theme

To add custom values while keeping tokens:

```javascript
// In your component or theme file
import { colors, spacing } from '../utils/tokens';

const customTheme = {
  colors: {
    ...colors,
    // Add custom colors that complement the token system
    custom: {
      gradient: `linear-gradient(45deg, ${colors.brand.primary}, ${colors.honey.base})`
    }
  },
  spacing: {
    ...spacing,
    // Add custom spacing that follows the scale
    custom: '12px' // Between md (8px) and lg (16px)
  }
};
```

### Overriding for Specific Use Cases

```javascript
// When you need to deviate from tokens (rarely)
const SpecialComponent = () => (
  <div style={{
    // Use token as base
    backgroundColor: colors.brand.primary,
    // Override with calculated value when needed
    opacity: 0.8,
    // Custom property that doesn't exist in tokens
    backdropFilter: 'blur(10px)'
  }}>
    Special styling
  </div>
);
```

## Token Reference

For a complete list of available tokens, check:
- `node_modules/@fcongson/lagom-tokens/js/` - All token files
- `src/utils/tokens.js` - Organized token exports
- `src/styles/theme.js` - Applied theme configuration
- `src/styles/` - All styling files and documentation

## Updating Tokens

Tokens are managed in the `@fcongson/lagom-tokens` package. To update:

1. **Update the package**: `npm update @fcongson/lagom-tokens`
2. **Check for breaking changes**: Review the changelog
3. **Test your components**: Ensure all designs still look correct
4. **Update custom themes**: Adjust any custom overrides if needed
