import { ThemeProvider } from "@fcongson/lagom-ui";
import { withPrefix } from "gatsby";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../../style/custom-style.sass";
import useSiteMetadata from "../SiteMetadata";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  const [prefersDark, setPrefersDark] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme:dark)");
    setPrefersDark(media.matches);
    media.onchange = (ev) => {
      ev.matches ? setPrefersDark(true) : setPrefersDark(false);
    };
  }, []);

  return (
    <ThemeProvider>
      <Helmet>
        <html lang="en" data-lagom-theme={prefersDark ? "dark" : "light"} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700|Domine:400,700&display=swap"
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />
        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <Nav />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};
