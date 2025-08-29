import { Link } from "gatsby";
import React from "react";
import { Container, Section } from "@fcongson/lagom-ui";
import { Icon } from "../Icon";
import logo from "../../../static/images/logo.png";

import "./Footer.css";

export const Footer = () => {
  return (
    <Section className="footer-section">
      <Container marginNone>
        <footer className="footer">
          <Link to="/" title="Logo" className="footer__logo">
            <img src={logo} alt="Lagom" />
          </Link>
          <div className="footer__content">
            <ul className="footer__links">
              <li>
                <Link to="/" className="footer__link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer__link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="footer__link">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/blog" className="footer__link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/style-guide" className="footer__link">
                  Style guide
                </Link>
              </li>
              <li>
                <a
                  href="/admin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  Admin
                </a>
              </li>
            </ul>
            <div className="footer__social_links">
              <a
                title="facebook"
                href="https://facebook.com"
                className="footer__link icon-link"
                aria-label="Facebook"
              >
                <Icon type="facebook" />
              </a>
              <a
                title="twitter"
                href="https://twitter.com"
                className="footer__link icon-link"
                aria-label="Twitter"
              >
                <Icon type="twitter" />
              </a>
              <a
                title="instagram"
                href="https://instagram.com"
                className="footer__link icon-link"
                aria-label="Instagram"
              >
                <Icon type="instagram" />
              </a>
              <a
                title="vimeo"
                href="https://vimeo.com"
                className="footer__link icon-link"
                aria-label="Vimeo"
              >
                <Icon type="vimeo" />
              </a>
            </div>
          </div>
        </footer>
      </Container>
    </Section>
  );
};
