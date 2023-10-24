import React from "react";
import { Container } from "./Container";
import { Section } from "./Section";

import "./ImageCaption.css";

export const ImageCaption = ({
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
  <Section className="lagom-image-caption">
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
);

const FullWidth = ({ image, caption }) => (
  <figure className="lagom-image-caption lagom-image-caption__block-img lagom-image-caption--full-width">
    <div>{image}</div>
    {caption && caption !== "" ? (
      <figcaption className="lagom-image-caption__image-label">
        {caption}
      </figcaption>
    ) : null}
  </figure>
);

const Default = ({ image, caption }) => (
  <Section className="lagom-image-caption lagom-image-caption--emphaiszed">
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
);
