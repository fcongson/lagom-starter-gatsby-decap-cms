# CMS Configuration Comparison

## When to Use Each Configuration

### Use `config.yml` (Basic) When:
- 🚀 **Quick setup** - You want to get started fast
- 👨‍💻 **Developer-focused** - Technical users will manage content
- 🎯 **Simple content needs** - Basic blog + pages are sufficient
- 📝 **Minimal fields** - You don't need SEO, author, or advanced features
- 🔧 **Custom implementation** - You plan to heavily customize the CMS

### Use `config-enhanced.yml` (Enhanced) When:
- 👥 **Business/client use** - Non-technical users will manage content
- 🎨 **Better UX needed** - You want helpful hints and clear labeling
- 🔍 **SEO requirements** - You need meta titles, descriptions, etc.
- ⚙️ **Site settings** - You want to manage social links, contact info via CMS
- 🧭 **Dynamic navigation** - You need to manage menus through the CMS
- 📊 **Content organization** - You want structured, well-organized content editing

## Key Feature Differences

| Feature | Basic Config | Enhanced Config |
|---------|-------------|-----------------|
| **Blog Posts** | ✅ Basic fields | ✅ + Author, SEO, hints |
| **Pages** | ✅ Basic pages | ✅ + Better organization |
| **Site Settings** | ❌ None | ✅ General + Social |
| **Navigation** | ❌ Hardcoded | ✅ CMS-managed |
| **SEO Fields** | ❌ None | ✅ Meta titles/descriptions |
| **Field Hints** | ❌ Minimal | ✅ Extensive help text |
| **Preview Paths** | ❌ No | ✅ Live preview URLs |
| **Organization** | 📁 Basic | 🎨 Emojis + categories |
| **Validation** | ❌ Minimal | ✅ Email patterns, required fields |

## Current Status

The project ships both configurations, but only `config.yml` (Basic) is active: it's the file `/admin` loads. `config-enhanced.yml` is an alternative you opt into.

- The CMS is configured through `gatsby-plugin-decap-cms` in `gatsby-config.js`, which auto-generates `/admin/index.html` at build time — there's no `index.html` to maintain in `static/admin/`.
- Decap CMS loads `/static/admin/config.yml` by default.
- Run `yarn setup-cms` to switch to the enhanced config (it backs up the basic one first).
