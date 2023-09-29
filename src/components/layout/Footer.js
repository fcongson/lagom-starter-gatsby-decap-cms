import { Link } from "gatsby";
import React from "react";

import { Container, Section } from "@fcongson/lagom-ui";
import facebook from "../../../static/images/facebook.svg";
import instagram from "../../../static/images/instagram.svg";
import logo from "../../../static/images/logo.svg";
import twitter from "../../../static/images/twitter.svg";
import vimeo from "../../../static/images/vimeo.svg";

export const Footer = () => {
  return (
    <footer>
      <Section>
        <Container>
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: "14em", height: "10em" }}
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact/examples">Form Examples</Link>
            </li>
            <li>
              <a href="/admin/" target="_blank" rel="noopener noreferrer">
                Admin
              </a>
            </li>
          </ul>
        </Container>
      </Section>
      <Section>
        <Container>
          <ul>
            <li>
              <Link to="/blog">Latest Stories</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </Container>
      </Section>
      <Section>
        <Container>
          <a title="facebook" href="https://facebook.com">
            <img
              src={facebook}
              alt="Facebook"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
          <a title="twitter" href="https://twitter.com">
            <img
              className="fas fa-lg"
              src={twitter}
              alt="Twitter"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
          <a title="instagram" href="https://instagram.com">
            <img
              src={instagram}
              alt="Instagram"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
          <a title="vimeo" href="https://vimeo.com">
            <img
              src={vimeo}
              alt="Vimeo"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
        </Container>
      </Section>
    </footer>
  );
};
