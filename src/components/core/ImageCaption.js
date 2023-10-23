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
  if (emphasized) return <Emphasized {...restProps} image={image} />;
  if (fullwidth) return <FullWidth {...restProps} image={image} />;
  return <Default {...restProps} image={image} />;
};

const Emphasized = ({ image, caption }) => (
  <div className="image-caption">
    <Section>
      <Container>
        <figure className="image-caption__block-img image-caption--emphaiszed">
          {image}
          {caption && caption !== "" ? (
            <figcaption className="image-caption__image-label">
              {caption}
            </figcaption>
          ) : null}
        </figure>
      </Container>
    </Section>
  </div>
);

const FullWidth = ({ image, caption }) => (
  <div className="image-caption">
    <figure className="image-caption__block-img image-caption--full-width">
      <div>{image}</div>
      {caption && caption !== "" ? (
        <figcaption className="image-caption__image-label">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  </div>
);

const Default = ({ image, caption }) => (
  <div className="image-caption image-caption--emphaiszed">
    <Section>
      <Container>
        <figure className="image-caption__block-img">
          {image}
          {caption && caption !== "" ? (
            <figcaption className="image-caption__image-label">
              {caption}
            </figcaption>
          ) : null}
        </figure>
      </Container>
    </Section>
  </div>
);
