import React from "react";
import { Container } from "./Container";
import { Section } from "./Section";

import "./ImageCaption.css";

export const ImageCaption = ({
  children,
  emphasized,
  fullwidth,
  image,
  caption,
  ...restProps
}) => {
  if (emphasized)
    return <Emphasized {...restProps} image={image} caption={caption} />;
  if (fullwidth)
    return <FullWidth {...restProps} image={image} caption={caption} />;
  return <Default {...restProps} image={image} caption={caption} />;
};

const Emphasized = ({ image, caption }) => (
  <div className="lagom-image-caption">
    <Section>
      <Container>
        <figure className="lagom-image-caption__block-img lagom-image-caption--emphasized">
          {image}
          {caption && caption !== "" ? (
            <figcaption className="lagom-image-caption__image-label">
              {caption}
            </figcaption>
          ) : null}
        </figure>
      </Container>
    </Section>
  </div>
);

const FullWidth = ({ image, caption }) => (
  <div className="lagom-image-caption">
    <figure className="lagom-image-caption__block-img lagom-image-caption--full-width">
      <div>{image}</div>
      {caption && caption !== "" ? (
        <figcaption className="lagom-image-caption__image-label">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  </div>
);

const Default = ({ image, caption }) => (
  <div className="lagom-image-caption lagom-image-caption--emphaiszed">
    <Section>
      <Container>
        <figure className="lagom-image-caption__block-img">
          {image}
          {caption && caption !== "" ? (
            <figcaption className="lagom-image-caption__image-label">
              {caption}
            </figcaption>
          ) : null}
        </figure>
      </Container>
    </Section>
  </div>
);
