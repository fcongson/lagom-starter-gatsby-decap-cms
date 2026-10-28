# Lagom Starter - Gatsby + Decap CMS

A [Gatsby](https://www.gatsbyjs.com/) starter styled with [Lagom UI](https://github.com/fcongson/lagom-ui) and [Lagom Tokens](https://github.com/fcongson/lagom-tokens), content-managed with [Decap CMS](https://decapcms.org/). It ships as Base, Lagom's neutral default brand — see [Theming](#theming) to make it your own.

## Requirements

- Node.js 22 or later
- [Yarn](https://classic.yarnpkg.com/) (classic)
- A GitHub account with read access to `@fcongson/lagom-ui` and `@fcongson/lagom-tokens`, both published to GitHub Packages rather than npm

## GitHub Packages setup

`@fcongson/lagom-ui` and `@fcongson/lagom-tokens` are installed from GitHub Packages. The project's `.npmrc` already points the `@fcongson` scope there:

```ini
@fcongson:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${TOKEN}
```

You still need to authenticate. Create a GitHub token with the `read:packages` scope, then:

- **Locally:** put the token in your **user-level** `~/.npmrc` (not the project's):
  ```ini
  //npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
  ```
- **On Netlify (or another host):** set a `TOKEN` environment variable on the site to the same token. The project's committed `.npmrc` reads it via `${TOKEN}`, so no extra build configuration is needed.
- **In GitHub Actions:** use `actions/setup-node` with `registry-url: "https://npm.pkg.github.com"` and `scope: "@fcongson"`, and set `NODE_AUTH_TOKEN` to a token with read access.

If `yarn` fails with a 401 or 403, the token is missing, expired, or lacks `read:packages`.

## Getting started

```sh
$ git clone https://github.com/fcongson/lagom-starter-gatsby-decap-cms
$ cd lagom-starter-gatsby-decap-cms
$ yarn
$ yarn develop
```

Visit `http://localhost:8000` for the site and `http://localhost:8000/admin` for the CMS.

Optionally, run `yarn setup` for an interactive script that fills in your site's name, description, and author in `gatsby-config.js` and `package.json`.

## Content with Decap CMS

Content lives as Markdown under `content/`, edited through Decap CMS at `/admin`. `static/admin/config.yml` defines the collections (blog posts and pages); `static/admin/config-enhanced.yml` is a richer alternative config with SEO fields and site settings — run `yarn setup-cms` to switch to it.

In production, the CMS backend is `git-gateway` (`static/admin/config.yml`), which on Netlify is backed by Netlify Identity. See [`docs/SETUP_GUIDE.md`](docs/SETUP_GUIDE.md) for enabling Identity and Git Gateway, and [`docs/USER_MANAGEMENT.md`](docs/USER_MANAGEMENT.md) for inviting editors.

To edit content locally without deploying first, run the CMS's local proxy in a second terminal:

```sh
$ yarn develop
$ yarn cms:proxy   # in another terminal; runs `npx decap-server`
```

`static/admin/config.yml` has `local_backend: true`, so `/admin` connects to the proxy automatically and commits land as regular filesystem writes instead of GitHub commits.

Two optional media libraries (Cloudinary and Uploadcare) are registered but commented out in `src/cms/cms.js`. Uncomment the one you want, or remove both along with their packages (`decap-cms-media-library-cloudinary`, `decap-cms-media-library-uploadcare`) if you don't need either.

> **Note:** `decap-cms-app` is pinned to `~3.6.0` rather than latest. Newer releases (3.7.0+) require React 19, but also bundle their own copy of `react-dom` 19 internally while `gatsby-plugin-decap-cms` still externalizes `react`/`react-dom` as classic UMD globals (a build React 19 no longer ships) — the combination currently crashes `/admin` on load. 3.6.0 predates that change and works with React 18's UMD builds. Revisit this pin once `gatsby-plugin-decap-cms` is updated for the new `decap-cms-app` bundling.

## Theming

The site uses [Lagom UI 2](https://github.com/fcongson/lagom-ui) and [Lagom Tokens 2](https://github.com/fcongson/lagom-tokens). Out of the box, with no brand set, you get **Base**: Lagom's neutral default brand (grey and navy, Lexend/Source Serif 4/DM Mono), loaded from `@fcongson/lagom-ui/style.css` and `@fcongson/lagom-tokens/css/lagom.css` in `src/components/layout/index.js`.

### Making your own brand

1. Override `--lagom-*` tokens in `src/styles/brand.css`, scoped to a `[data-lagom-brand~="your-brand"]` selector. The file has a commented guide and a complete worked example at the top.
2. Set `brand: "your-brand"` in `site.config.js`. `gatsby-ssr.js` puts it on `<html>` as `data-lagom-brand` for every page.
3. Run `yarn check-brand` (checks `src/styles/brand.css` against the lagom-tokens contract: every role resolves, and light/dark/increased-contrast pairs pass WCAG AA/AAA).

See lagom-ui's Theming guide (in its Storybook) for the full list of overridable tokens.

### Fonts

Base's fonts are loaded from [Fontsource](https://fontsource.org/) packages, imported once in `src/components/layout/index.js` — no Google Fonts request is made:

- `@fontsource/lexend` (headings and body)
- `@fontsource/source-serif-4` (quotes)
- `@fontsource/dm-mono` (code)

If your brand uses different fonts, add the matching Fontsource packages (or your own `@font-face` rules) and update those imports, plus the `--lagom-core-font-families-*` tokens in `brand.css`.

### Dark mode and increased contrast

Dark mode follows the visitor's OS preference (`prefers-color-scheme`): `gatsby-ssr.js` sets `data-lagom-theme` on `<html>` before first paint to avoid a flash, and `Layout` keeps it in sync if the OS theme changes while the page is open. Increased contrast (`prefers-contrast: more`) is handled entirely by `lagom.css` — no app code is involved.

## Available scripts

| Script | Description |
| --- | --- |
| `yarn develop` / `yarn dev` / `yarn start` | Run the Gatsby development server |
| `yarn build` | Build the production site into `public/` |
| `yarn serve` | Serve the production build locally |
| `yarn clean` | Clear Gatsby's cache (`gatsby clean`) |
| `yarn lint` | Lint `src/` and the Gatsby config files with ESLint |
| `yarn test` / `yarn test:watch` | Run the Jest test suite |
| `yarn check-brand` | Validate `src/styles/brand.css` against the lagom-tokens contract |
| `yarn format` | Format code with Prettier |
| `yarn cms:proxy` | Run Decap CMS's local backend proxy (`npx decap-server`) |
| `yarn setup` | Interactive script to set your site's name, description, and author |
| `yarn setup-cms` | Switch between the basic and enhanced CMS configs |
| `yarn analyze` | Build and open a webpack bundle analyzer |

## Deploying

The included `netlify.toml` builds the site on [Netlify](https://www.netlify.com/) (`yarn build`, publishing `public/`). Set the `TOKEN` environment variable described in [GitHub Packages setup](#github-packages-setup) on the Netlify site before the first build, and enable Identity + Git Gateway if you want to use Decap CMS in production (see [`docs/SETUP_GUIDE.md`](docs/SETUP_GUIDE.md)).

## 📚 Documentation

Further documentation is available in the [`docs/`](docs/) directory:

- **[📋 Documentation Index](docs/README.md)** - Complete overview of all documentation
- **[🚀 Setup Guide](docs/SETUP_GUIDE.md)** - Detailed setup and installation instructions
- **[👥 User Management](docs/USER_MANAGEMENT.md)** - Managing CMS users and permissions
- **[🎨 Design & Styling](docs/STYLES.md)** - CSS architecture and design system usage
- **[⚙️ CMS Configuration](docs/CMS_CONFIGURATION.md)** - Choosing and configuring CMS options
- **[🔧 Customization](docs/CUSTOMIZATION.md)** - Advanced customization and extension guide

### Quick links

- [Design Tokens Guide](docs/DESIGN_TOKENS.md)
- [User Quick Reference](docs/USER_QUICK_REFERENCE.md)

# CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing,
please read the [code of conduct](CODE_OF_CONDUCT.md) and [contributing guide](CONTRIBUTING.md).
