module.exports = {
  siteMetadata: {
    title: "Lagom Starter - Gatsby + Decap CMS",
    description:
      "This repo contains an example website that is built with Gatsby, and Decap CMS.",
  },
  // React 19 only needs the automatic JSX runtime, so components don't
  // need to import React just to use JSX.
  jsxRuntime: "automatic",
  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/images`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/images`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/posts`,
        name: "posts",
      },
    },
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-decap-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        printRejected: true,
        purgeCSSOptions: {
          safelist: {
            // @fcongson/lagom-ui ships its own static CSS (previously styled-components,
            // which injected at runtime and never went through this plugin at all).
            // By default this plugin only scans this repo's own src/**/*.{ts,js,jsx,tsx}
            // for class usage, so it can't see lagom-ui's classNames rendered from its
            // compiled JS in node_modules and strips all of them. Safelist by prefix
            // instead of trying to get content-scanning to reach into node_modules.
            standard: [/^lagom-/],
            // @fcongson/lagom-tokens defines every token on `:where(:root)`,
            // `:where([data-lagom-theme~="dark"])`, etc. (zero-specificity
            // selectors with no class name), which PurgeCSS's content scan
            // can never see as "used" and strips by default. PurgeCSS's
            // greedy safelist matches against the bare pseudo-class name
            // (":where", not ":where(...)"), so match on that.
            greedy: [/^:where/],
          },
        },
      },
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
