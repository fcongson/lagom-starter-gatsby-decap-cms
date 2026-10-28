# 🎨 Design Tokens Guide

This project uses [Lagom Tokens 2](https://github.com/fcongson/lagom-tokens) for consistent design across all components. Tokens are plain CSS custom properties — there's no JavaScript token API; use `var(--lagom-...)` directly in CSS.

## What are design tokens?

Design tokens are named entities that store visual design attributes — colors, spacing, typography, and so on — so values stay consistent and automatically follow brand, dark mode, and increased contrast instead of being hardcoded.

## Token layers

- **Core** (`--lagom-core-*`): fonts, the type scale, spacing, radii, and opacity. Use these in your own CSS.
- **Semantic** (`--lagom-semantic-*`): colors named by role (`fg-default`, `bg-secondary`, `accent-default`, `focus-ring`, ...), plus border and focus-ring widths. Values change with brand, mode, and contrast — **always use these for color**, never a palette stop.
- **Component** (`--lagom-component-*`): values for specific Lagom components (`Button`, `PageHeader`, `Hero`, ...), mostly pointing at semantic and core tokens. Override these to change one component (see [Theming](#theming) below); don't read them.
- **Palette** (`--lagom-grey-55`, `--lagom-navy-40`, ...): the brand's raw color ramps. Never use these directly in components — they don't follow brand, mode, or contrast.

## Using tokens

### In CSS

```css
.my-component {
  background-color: var(--lagom-semantic-color-bg-secondary);
  color: var(--lagom-semantic-color-fg-default);
  padding: var(--lagom-core-spacing-md) var(--lagom-core-spacing-lg);
  border-radius: var(--lagom-core-border-radius-md);
  font-family: var(--lagom-core-font-families-body);
}
```

### Inline styles (React)

A handful of components in this starter set a token as an inline style when the value needs to come from JS (see `src/templates/about-page.js`):

```jsx
<PageHeader
  style={{
    backgroundColor: "var(--lagom-semantic-color-accent-bg)",
  }}
>
```

## Common semantic roles

- `--lagom-semantic-color-fg-default` / `-secondary` / `-tertiary`: text, from most to least prominent
- `--lagom-semantic-color-bg-default` / `-secondary` / `-tertiary`: backgrounds, from the page down to the most prominent neutral surface
- `--lagom-semantic-color-border-default` / `-secondary`: dividers and outlines
- `--lagom-semantic-color-accent-default` / `-fg` / `-bg`: the brand mark, accent text/links, and soft accent surfaces
- `--lagom-semantic-color-selection-bg`: text selection highlight
- `--lagom-semantic-color-focus-ring`: keyboard focus indicator

See lagom-ui's **Using Tokens** guide (in its Storybook) for the complete list, including every spacing, typography, and radius token and their values.

## Theming

Three attributes — settable on `<html>` or any element inside it — choose what shows:

- `data-lagom-brand="…"`: the brand (no attribute: **Base**, Lagom's neutral default)
- `data-lagom-theme="dark"`: dark mode (no attribute: light)
- `data-lagom-contrast="more"`: increased contrast (the `prefers-contrast: more` media query also triggers it)

This starter sets `data-lagom-brand` from `site.config.js`'s `brand` field (via `gatsby-ssr.js`) and `data-lagom-theme` from the visitor's OS preference (via `gatsby-ssr.js` and `src/components/layout/index.js`).

To make your own brand, override tokens in `src/styles/brand.css`, scoped to `[data-lagom-brand~="your-brand"]`. The file has a full guide and worked example in its header comment. Run `yarn check-brand` to validate it against the lagom-tokens contract (every role resolves, and light/dark/increased-contrast pairs pass WCAG contrast).

## Best practices

### ✅ Do

- Use `--lagom-semantic-*` tokens for all color
- Use `--lagom-core-*` tokens for spacing, type, radii, and opacity
- Override `--lagom-component-*` tokens, in `brand.css`, to change one component everywhere it's used
- Run `yarn check-brand` after editing `brand.css`

### ❌ Don't

- Hardcode colors, spacing, or font stacks — use a token
- Use a palette color (`--lagom-grey-55`, `--fern-olive-45`) in a component: it won't follow brand, mode, or contrast
- Read `--lagom-component-*` tokens outside the component they belong to — override the semantic role instead for anything else

## Reference

- lagom-ui's **Theming** and **Using Tokens** guides (in its Storybook) for the full token list and theming rules
- `node_modules/@fcongson/lagom-tokens/css/lagom.css` for every token's resolved value
- `src/styles/brand.css` for this project's brand overrides (empty by default)
