import "@fcongson/lagom-ui/style.css";
import "@fcongson/lagom-tokens/css/lagom.css";
import "../../styles/brand.css";
import "@fontsource/lexend/400.css";
import "@fontsource/lexend/600.css";
import "@fontsource/lexend/700.css";
import "@fontsource/source-serif-4/400.css";
import "@fontsource/source-serif-4/400-italic.css";
import "@fontsource/source-serif-4/700.css";
import "@fontsource/dm-mono/400.css";
import { ThemeProvider } from "@fcongson/lagom-ui";
import { useEffect } from "react";
import "../../styles/main.css";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

// gatsby-ssr.js sets the initial data-lagom-theme attribute (synchronously,
// before paint, to avoid a flash). This effect just keeps it in sync if the
// user changes their OS theme while the page is open.
const useFollowSystemTheme = () => {
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = (matches) => {
      document.documentElement.setAttribute(
        "data-lagom-theme",
        matches ? "dark" : "light",
      );
    };
    applyTheme(media.matches);

    const handleChange = (event) => applyTheme(event.matches);
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);
};

export const Layout = ({ children }) => {
  useFollowSystemTheme();

  return (
    <ThemeProvider>
      <Nav />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};
