import React from "react";
import { Container } from "./Container";
import { Section } from "./Section";

import "./FeaturedSection.css";

export const FeaturedSection = ({ image, backgroundColor, ...restProps }) => {
  if (image) return <ImageBackground image={image} {...restProps} />;
  return <ColorBackground backgroundColor={backgroundColor} {...restProps} />;
};

const ImageBackground = ({ children, image }) => {
  return (
    <div className="lagom-featured-section lagom-featured-section--image-background">
      <div className="lagom-featured-section__image">{image}</div>
      <div className="lagom-featured-section__image-overlay" />
      <Section>
        <Container>
          <div className="lagom-featured-section__content">{children}</div>
        </Container>
      </Section>
    </div>
  );
};

const ColorBackground = ({ children, backgroundColor }) => {
  return (
    <Section
      className="lagom-featured-section lagom-featured-section--color-background"
      style={{ backgroundColor: backgroundColor }}
    >
      <Container>
        <div className="lagom-featured-section__content">{children}</div>
      </Container>
    </Section>
  );
};
