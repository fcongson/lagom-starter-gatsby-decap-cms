import { Container, Section } from "@fcongson/lagom-ui";
import { Link } from "gatsby";
import React, { useState } from "react";
import { Icon } from "../Icon";
import logo from "../../../static/images/logo.png";

import "./Nav.css";

export const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Section>
      <Container>
        <nav role="navigation" aria-label="main-navigation" className="nav">
          <div className="nav__primary">
            <Link to="/" title="Logo" className="nav__logo">
              <img src={logo} alt="Lagom" />
            </Link>
            <button
              className={`nav__menu-button ${
                isActive && "nav__menu-button--active"
              }`}
              aria-expanded={isActive}
              aria-label="Toggle navigation menu"
              onClick={() => setIsActive(!isActive)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <ul
            id="navMenu"
            className={`nav__menu ${isActive && "nav__menu--active"}`}
          >
            <li>
              <Link to="/about" className="nav__menu-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/products" className="nav__menu-link">
                Products
              </Link>
            </li>
            <li>
              <Link to="/blog" className="nav__menu-link">
                Blog
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/fcongson/lagom-starter-gatsby-decap-cms"
                target="_blank"
                rel="noopener noreferrer"
                className="nav__menu-link icon-link"
                aria-label="GitHub Repository"
              >
                <Icon type="github" />
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </Section>
  );
};
