# 🎯 Template Variants

This starter includes configurations for different business types. Choose the one that best fits your needs:

## Available Variants

### 1. Business/Corporate
**Perfect for:** Service companies, consultancies, agencies
- Professional design
- Service pages
- Team member profiles
- Case studies
- Contact forms

**Setup:** `npm run setup:business`

### 2. Blog/Content Site
**Perfect for:** Bloggers, content creators, journalists
- Optimized for content
- Author profiles
- Category/tag organization
- Newsletter signup
- Social sharing

**Setup:** `npm run setup:blog`

### 3. Portfolio
**Perfect for:** Designers, developers, creatives
- Project showcases
- Skills sections
- Resume/CV integration
- Image galleries
- Contact forms

**Setup:** `npm run setup:portfolio`

### 4. Restaurant/Local Business
**Perfect for:** Restaurants, cafes, local services
- Menu management
- Location/hours
- Online ordering integration
- Event management
- Reviews section

**Setup:** `npm run setup:restaurant`

### 5. Non-Profit
**Perfect for:** Charities, NGOs, community organizations
- Donation integration
- Volunteer management
- Event management
- Impact stories
- Newsletter signup

**Setup:** `npm run setup:nonprofit`

## Switching Variants

You can switch between variants at any time:

```bash
npm run variant:switch
```

This will:
1. Backup your current configuration
2. Show available variants
3. Apply the selected variant
4. Update CMS configuration
5. Provide next steps

## Custom Variant

Create your own variant by:
1. Copying `variants/base/` to `variants/custom/`
2. Modifying the configuration files
3. Running `npm run variant:apply custom`
