import { Link } from "gatsby";
import React from "react";

import facebook from "../../../static/images/facebook.svg";
import instagram from "../../../static/images/instagram.svg";
import logo from "../../../static/images/logo.png";
import twitter from "../../../static/images/twitter.svg";
import vimeo from "../../../static/images/vimeo.svg";
import { Container, Section } from "../core";

import "./Footer.css";

export const Footer = () => {
  return (
    <Section className="footer-section">
      <Container>
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
                className="footer__link"
              >
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{ width: "1em", height: "1em" }}
                />
              </a>
              <a
                title="twitter"
                href="https://twitter.com"
                className="footer__link"
              >
                <img
                  src={twitter}
                  alt="Twitter"
                  style={{ width: "1em", height: "1em" }}
                />
              </a>
              <a
                title="instagram"
                href="https://instagram.com"
                className="footer__link"
              >
                <img
                  src={instagram}
                  alt="Instagram"
                  style={{ width: "1em", height: "1em" }}
                />
              </a>
              <a
                title="vimeo"
                href="https://vimeo.com"
                className="footer__link"
              >
                <img
                  src={vimeo}
                  alt="Vimeo"
                  style={{ width: "1em", height: "1em" }}
                />
              </a>
            </div>
          </div>
        </footer>
      </Container>
    </Section>
  );
};
