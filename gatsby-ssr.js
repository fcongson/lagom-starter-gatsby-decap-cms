const React = require("react");
const { withPrefix } = require("gatsby");
const siteConfig = require("./site.config");

// Sets data-lagom-theme before first paint, so the page never flashes the
// wrong mode. Layout (src/components/layout/index.js) keeps it in sync if
// the user changes their OS theme while the page is open.
const themeInitScript = `
(function () {
  try {
    var isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.setAttribute("data-lagom-theme", isDark ? "dark" : "light");
  } catch (e) {}
})();
`;

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({
    lang: "en",
    ...(siteConfig.brand ? { "data-lagom-brand": siteConfig.brand } : {}),
  });

  setHeadComponents([
    React.createElement("script", {
      key: "lagom-theme-init",
      dangerouslySetInnerHTML: { __html: themeInitScript },
    }),
    React.createElement("meta", {
      key: "viewport",
      name: "viewport",
      content:
        "width=device-width,minimum-scale=1.0,initial-scale=1.0,viewport-fit=cover",
    }),
    React.createElement("link", {
      key: "favicon",
      rel: "icon",
      type: "image/png",
      href: `${withPrefix("/")}images/favicon.png`,
      sizes: "32x32",
    }),
  ]);
};
