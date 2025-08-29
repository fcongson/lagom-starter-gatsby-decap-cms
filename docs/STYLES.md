# 🎨 Styles Directory

This directory contains all CSS stylesheets organized by concern and responsibility.

## File Structure

```
src/styles/
├── main.css         # Main entry point - imports all other stylesheets
├── tokens.css       # Design tokens & CSS custom properties
├── base.css         # Global styles, resets, and typography
├── components.css   # Component-specific styles
├── icons.css        # Theme-aware icon styles
├── responsive.css   # Media queries and responsive behavior
├── theme.js         # JavaScript theme configuration for Lagom components
├── index.js         # JavaScript utilities for theming
└── README.md        # This file
```

## CSS Import Order

The stylesheets are imported in a specific order to ensure proper CSS cascade:

1. **tokens.css** - CSS custom properties and design tokens
2. **base.css** - Global styles, resets, and base typography
3. **components.css** - Component-specific styling
4. **icons.css** - Theme-aware icon styles
5. **responsive.css** - Media queries and responsive overrides

## Design System Integration

All stylesheets use the [Lagom Design System](https://github.com/fcongson/lagom) tokens for consistency:

- **Color tokens**: `var(--lagom-semantic-color-*)`
- **Typography tokens**: `var(--lagom-core-font-*)`
- **Spacing tokens**: `var(--lagom-core-spacing-*)`
- **Border radius tokens**: `var(--lagom-core-border-radius-*)`

## Icon System

The project includes a theme-aware icon system:

### Icon Component (`src/components/Icon.js`)
```jsx
import { Icon } from "../components/Icon";

// Usage
<Icon type="github" className="custom-class" />
<Icon type="facebook" />
<Icon type="twitter" />
<Icon type="instagram" />
<Icon type="vimeo" />
```

### Icon Features
- **Automatic theme adaptation**: Icons change color based on light/dark mode
- **Hover effects**: Social icons show brand colors on hover
- **Accessibility**: Proper ARIA labels and semantic markup
- **Scalable**: Uses CSS `currentColor` and `1em` sizing

## File Descriptions

### `main.css`
- **Main entry point** that imports all other stylesheets
- Used by Layout component to load all styles
- Ensures proper CSS cascade order

### `tokens.css`
- **Design tokens and CSS custom properties**
- Layout variables (navigation, footer)
- Typography scales and component overrides
- Central place for all token definitions

### `base.css`
- **Global styles and base elements**
- HTML element resets and base styling
- Typography rules for headings
- Print styles and global utilities

### `components.css`
- **Component-specific styles**
- Blog list items and featured posts
- Price lists and product components
- Organized by component type

### `icons.css`
- **Theme-aware icon styles**
- Icons that automatically adapt to light/dark mode
- Social media icons with brand colors on hover
- Uses CSS custom properties for theming

### `responsive.css`
- **Media queries and responsive behavior**
- Breakpoint-specific styling
- Mobile-first responsive design
- Typography scaling across devices

### `theme.js`
- **JavaScript theme object** using Lagom Design Tokens
- **Used for CSS-in-JS**, styled-components, etc.
- **Centralized theme configuration** for components
- **Token-based values** for consistency

```javascript
import theme from '../styles/theme';
// Access: theme.colors.primary, theme.spacing[4], etc.
```

### `custom-style.css`
- **Main stylesheet** that imports all other CSS files
- **Component-specific styles** and layout
- **Imported in Layout component**

### `global-style.css`
- **Global element styles** (body, h1-h6, etc.)
- **Base typography** and text selection
- **CSS reset/normalize** styles

### `variables.css`
- **CSS custom properties** for responsive design
- **Lagom token overrides** and customizations
- **Media queries** for responsive behavior

### `index.js`
- **Central export point** for all styling utilities
- **Convenience imports** for JavaScript usage
- **Re-exports theme and tokens**

## Usage Examples

### In React Components

```javascript
// Method 1: Import theme object
import theme from '../styles/theme';

const Button = () => (
  <button style={{ 
    backgroundColor: theme.colors.primary,
    padding: theme.spacing[3]
  }}>
    Click me
  </button>
);

// Method 2: Import tokens directly
import { colors, spacing } from '../styles';

const Card = () => (
  <div style={{
    backgroundColor: colors.brand.primary,
    padding: spacing.lg
  }}>
    Content
  </div>
);
```

### In CSS Files

```css
/* Use CSS custom properties from variables.css */
.my-component {
  background-color: var(--lagom-semantic-color-brand-primary);
  padding: var(--lagom-core-spacing-lg);
  border-radius: var(--lagom-core-border-radius-md);
}

/* Use custom variables for responsive design */
.responsive-grid {
  grid-template-columns: repeat(var(--grid-columns), 1fr);
}
```

### CSS Modules

```css
/* component.module.css */
.button {
  composes: button from '../styles/custom-style.css';
  background-color: var(--lagom-semantic-color-brand-primary);
}
```

## Customization

### Adding New Styles
1. **Global styles** → Add to `global-style.css`
2. **Component styles** → Create CSS module in component directory
3. **Custom variables** → Add to `variables.css`
4. **Theme values** → Extend `theme.js`

### Overriding Lagom Tokens
```css
/* In variables.css */
:root {
  /* Override token values */
  --lagom-core-colors-brand-primary: #your-color;
  
  /* Add custom properties */
  --your-custom-spacing: 20px;
}
```

### Responsive Design
- Use CSS custom properties in `variables.css`
- Define breakpoint-specific values
- Lagom tokens provide responsive typography scales

## Best Practices

### ✅ Do
- **Use Lagom tokens** for consistency
- **Import from index.js** for convenience
- **Use CSS custom properties** for theming
- **Keep component styles** in component directories

### ❌ Don't
- **Hardcode colors/spacing** - use tokens instead
- **Put component styles** in global files
- **Modify Lagom token files** directly
- **Use !important** unless absolutely necessary

## File Organization Tips

### Global vs Component Styles
- **Global**: Base elements, resets, utilities
- **Component**: Specific to one component, use CSS modules

### CSS Custom Properties vs Theme Object
- **CSS Properties**: Better for theming, CSS-only solutions
- **Theme Object**: Better for JavaScript/React, programmatic access

### Performance Considerations
- **CSS files** are included in main bundle
- **Theme.js** only loaded when imported
- **Tree shaking** works with named exports from index.js
