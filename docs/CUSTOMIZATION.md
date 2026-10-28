# 📋 Customization Guide

## Quick Customizations (No Code Required)

### 1. Basic Site Information
1. Go to `/admin` on your live site
2. Navigate to "⚙️ Site Settings" → "General Settings"
3. Update:
   - Site Title
   - Site Description
   - Contact Email
   - Phone Number

### 2. Colors & Branding
Override `--lagom-*` tokens in `src/styles/brand.css` (empty by default, with a guide and worked example in its header comment), then set `brand` in `site.config.js` to the same name you used there:
```javascript
// site.config.js
brand: "your-brand",
```
Run `yarn check-brand` after editing `brand.css`. See the README's [Theming](../README.md#theming) section and [`DESIGN_TOKENS.md`](DESIGN_TOKENS.md) for details.

### 3. Logo & Images
1. Upload your logo to `static/images/`
2. Update in CMS: "⚙️ Site Settings" → "General Settings" → "Site Logo"

### 4. Social Media Links
1. Go to `/admin`
2. Navigate to "⚙️ Site Settings" → "Social Media"
3. Add your social media profiles

## Content Management

### Adding Blog Posts
1. Go to `/admin`
2. Click "📝 Blog Posts" → "New Blog Post"
3. Fill in the form and publish

### Editing Pages
1. Go to `/admin`
2. Click "📄 Pages"
3. Select the page you want to edit

### Managing Navigation
1. Go to `/admin`
2. Click "🧭 Navigation" → "Main Menu"
3. Add, remove, or reorder menu items

## Advanced Customizations

### Adding New Page Types
1. Create a new template in `src/templates/`
2. Add the page type to `static/admin/config.yml`
3. Create the GraphQL query in `gatsby-node.js`

### Custom Styling
- Global styles: `src/styles/base.css`, `components.css`, `icons.css`
- Component styles: co-located `.css` files, e.g. `src/components/layout/Nav.css`
- Brand overrides: `src/styles/brand.css` (see [`STYLES.md`](STYLES.md) and [`DESIGN_TOKENS.md`](DESIGN_TOKENS.md))

### Adding Features

#### Contact Form
1. Enable in `site.config.js`: `features.contactForm: true`
2. Configure form provider (Netlify Forms, Formspree, etc.)

#### Newsletter Signup
1. Enable in `site.config.js`: `features.newsletter: true`
2. Configure email provider (Mailchimp, ConvertKit, etc.)

#### Google Analytics
1. Get your GA4 Measurement ID
2. Add to `site.config.js`: `seo.googleAnalyticsId: "G-XXXXXXXXXX"`

## SEO Optimization

### Basic SEO
- Set site title and description in site settings
- Add meta descriptions to all pages and posts
- Upload high-quality featured images

### Advanced SEO
- Edit `gatsby-config.js` for structured data
- Customize `src/components/seo.js`
- Add XML sitemap (already included)

## Performance Tips

### Image Optimization
- Use WebP format when possible
- Keep images under 500KB
- Use Gatsby's image processing (automatic)

### Speed Optimization
- Enable PurgeCSS (already included)
- Minimize plugin usage
- Use CDN for images (Cloudinary integration available)

## Troubleshooting

### Common Issues

#### Build Errors
1. Clear cache: `yarn clean`
2. Reinstall dependencies: `rm -rf node_modules && yarn`
3. Check Node.js version compatibility (20+) and your GitHub Packages token (see the README's [GitHub Packages setup](../README.md#github-packages-setup))

#### CMS Issues
1. Check authentication setup in Netlify
2. Verify Git Gateway is enabled
3. Clear browser cache

#### Local Development
1. Use `yarn cms:proxy` for local CMS access (see the README's [Content with Decap CMS](../README.md#content-with-decap-cms))
2. Ensure port 8000 is available
3. Check for Node.js version compatibility

### Getting Help
- Check [Gatsby documentation](https://www.gatsbyjs.com/docs/)
- Check [Decap CMS documentation](https://decapcms.org/docs/)
- Open an issue on the GitHub repository
