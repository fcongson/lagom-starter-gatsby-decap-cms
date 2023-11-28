import {
  Container,
  FeaturedSection,
  Hero,
  ImageCaption,
  LinkButton,
  PageHeader,
  Quote,
  Section,
} from "@fcongson/lagom-ui";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { Layout } from "../components/layout";

export const query = graphql`
  query {
    file(relativePath: { eq: "hans-m-q4Gmk6X_z7o-unsplash.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
      }
    }
  }
`;

export default function StyleGuide({ data }) {
  return (
    <Layout>
      {/* Typography */}
      <Section>
        <Container id="typography">
          <h1>H1 Lorem Ipsum</h1>
          <h2>H2 Lorem Ipsum</h2>
          <h3>H3 Lorem Ipsum</h3>
          <h4>H4 Lorem Ipsum</h4>
          <h5>H5 Lorem Ipsum</h5>
          <h6>H6 Lorem Ipsum</h6>
          <p>
            Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Paragraph.{" "}
            <a href="style-guide/#typography">Lorem ipsum dolor sit amet</a>,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p>
            <strong>Bold. Lorem ipsum dolor sit amet</strong>
          </p>
          <p>
            <em>Italic. Lorem ipsum dolor sit amet</em>
          </p>
          <p>
            <code>Code. Lorem ipsum dolor sit amet</code>
          </p>
          <p>
            <pre>Preformatted. Lorem ipsum dolor sit amet</pre>
          </p>
        </Container>
      </Section>

      {/* Page Header */}
      <Section>
        <Container id="page-header">
          <PageHeader>Lorem Ipsum</PageHeader>
        </Container>
      </Section>

      {/* Quote */}
      <Section>
        <Container id="quote">
          <Quote>
            <p>Short quote.</p>
          </Quote>
          <p>
            Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Quote>
            <p>
              Medium quote. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
          </Quote>
          <p>
            Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Quote>
            <p>
              Long quote. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </Quote>
          <p>
            Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Quote>
            <h2>Multi-line quote.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </Quote>
        </Container>
      </Section>

      {/* Image Caption */}
      <ImageCaption
        image={
          <GatsbyImage
            image={data?.file?.childImageSharp?.gatsbyImageData}
            alt={""}
            style={{ height: "100%" }}
            objectPosition="center center"
          />
        }
        caption="Default. Lorem ipsum dolor sit amet"
      />
      <ImageCaption
        image={
          <GatsbyImage
            image={data?.file?.childImageSharp?.gatsbyImageData}
            alt={""}
            style={{ height: "100%" }}
            objectPosition="center center"
          />
        }
        caption="Emphasized. Lorem ipsum dolor sit amet"
        emphasized
      />
      <ImageCaption
        image={
          <GatsbyImage
            image={data?.file?.childImageSharp?.gatsbyImageData}
            alt={""}
            style={{ height: "100%" }}
            objectPosition="center center"
          />
        }
        caption="Fullwidth. Lorem ipsum dolor sit amet"
        fullwidth
      />

      {/* Featured Section */}
      <FeaturedSection
        image={
          <GatsbyImage
            image={data?.file?.childImageSharp?.gatsbyImageData}
            alt={""}
            style={{ height: "100%" }}
            objectPosition="center center"
          />
        }
        imageAsBackground
      >
        <p>
          Image Background. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
      </FeaturedSection>
      <FeaturedSection
        image={
          <GatsbyImage
            image={data?.file?.childImageSharp?.gatsbyImageData}
            alt={""}
            style={{ height: "100%" }}
            objectPosition="center center"
          />
        }
        imageAsBackground
        framed
      >
        <p>
          Image Background Framed. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
      </FeaturedSection>
      <FeaturedSection>
        <p>
          Color Background. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
      </FeaturedSection>
      <FeaturedSection backgroundColor="var(--lagom-semantic-color-accent-bg)">
        <GatsbyImage
          image={data?.file?.childImageSharp?.gatsbyImageData}
          alt={""}
        />
        <p>
          Color Background with Image. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
      </FeaturedSection>
      <FeaturedSection
        backgroundColor="var(--lagom-semantic-color-accent-bg)"
        framed
      >
        <p>
          Color Background Framed. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
      </FeaturedSection>

      {/* Hero */}
      <Hero
        image={
          <GatsbyImage
            image={data?.file.childImageSharp?.gatsbyImageData}
            alt={"Alt text"}
            style={{ height: "100%" }}
          />
        }
      >
        <PageHeader>Lorem Ipsum</PageHeader>
      </Hero>

      {/* Link Button */}
      <LinkButton to="#link-button">Link button</LinkButton>
    </Layout>
  );
}
