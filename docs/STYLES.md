# 🎨 Styles Directory

This directory contains all CSS stylesheets organized by concern and responsibility.

## File Structure

```
src/styles/
├── main.css         # Entry point - imports the files below, in order
├── brand.css         # Brand overrides (empty by default; see Theming below)
├── base.css          # Global styles, resets, and typography
├── components.css    # Component-specific styles
├── icons.css         # Theme-aware icon styles
└── responsive.css    # Media queries for this starter's own Nav/Footer layout
```

`tokens.css` (also in this directory) holds plain CSS custom properties for the Nav and Footer's own responsive layout — not Lagom tokens.

## CSS import order

`src/components/layout/index.js` imports, in this order:

1. `@fcongson/lagom-ui/style.css` — Lagom UI's component styles
2. `@fcongson/lagom-tokens/css/lagom.css` — every Lagom token, for light, dark, and increased contrast
3. `./brand.css` — this project's brand overrides (empty by default — see [Theming](#theming))
4. the Fontsource font packages (Lexend, Source Serif 4, DM Mono)
5. `./main.css`, which in turn imports `tokens.css`, `base.css`, `components.css`, `icons.css`, and `responsive.css`

## Design system integration

All stylesheets use [Lagom Tokens](https://github.com/fcongson/lagom-tokens) for consistency — see [`DESIGN_TOKENS.md`](DESIGN_TOKENS.md) for the full guide. In brief:

- **Color tokens**: `var(--lagom-semantic-color-*)`
- **Typography tokens**: `var(--lagom-core-font-*)`
- **Spacing tokens**: `var(--lagom-core-spacing-*)`
- **Border radius tokens**: `var(--lagom-core-border-radius-*)`

## Icon system

The project includes a theme-aware icon system:

### Icon component (`src/components/Icon.js`)
```jsx
import { Icon } from "../components/Icon";

// Usage
<Icon type="github" className="custom-class" />
<Icon type="facebook" />
<Icon type="twitter" />
<Icon type="instagram" />
<Icon type="vimeo" />
```

### Icon features
- **Automatic theme adaptation**: icons use `--lagom-semantic-color-*` roles, which follow light/dark mode on their own
- **Hover effects**: social icons show their own brand colors on hover
- **Accessibility**: proper `aria-label`s and semantic markup
- **Scalable**: uses CSS `currentColor` and `1em` sizing

## File descriptions

### `main.css`
Entry point that imports `tokens.css`, `base.css`, `components.css`, `icons.css`, and `responsive.css`, in that order, to keep the cascade predictable.

### `brand.css`
This project's brand overrides. Empty by default, so the site renders as Base. See [Theming](#theming).

### `tokens.css`
Plain CSS custom properties for this starter's own Nav and Footer components (flex direction, gaps, the mobile menu button's display) — not Lagom tokens. Flipped by breakpoint in `responsive.css`.

### `base.css`
Global styles and base elements: `::selection`, the `html`/`body` background and text color, heading sizes, and print styles.

### `components.css`
Component-specific styles for this starter's own markup (the featured blog list item, the pricing list).

### `icons.css`
Theme-aware icon styles — see [Icon system](#icon-system) above.

### `responsive.css`
Breakpoint-specific overrides for the Nav/Footer layout variables in `tokens.css`.

## Theming

To make your own brand, override `--lagom-*` tokens in `brand.css`, scoped to `[data-lagom-brand~="your-brand"]`, and set `brand` in `site.config.js` to the same name. The file has a full guide and a worked example in its header comment; run `yarn check-brand` to validate it. See [`DESIGN_TOKENS.md`](DESIGN_TOKENS.md) for the token reference.

## Best practices

### ✅ Do
- Use Lagom tokens (`var(--lagom-*)`) for all design values
- Put brand overrides in `brand.css`, not scattered across other files
- Keep component-specific styles close to the component (co-located `.css` files, like `src/components/layout/Nav.css`)

### ❌ Don't
- Hardcode colors/spacing — use tokens instead
- Use a palette color (`--lagom-grey-55`) in a component — it won't follow brand, mode, or contrast; use a semantic role
- Modify `node_modules/@fcongson/lagom-tokens` directly
- Use `!important` unless absolutely necessary
