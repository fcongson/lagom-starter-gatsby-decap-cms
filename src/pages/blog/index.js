import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { BlogRoll } from "../../components/BlogRoll";
import { Container, PageHeader, Section } from "../../components/core";
import { FeaturedSection } from "../../components/core/FeaturedSection";
import { Layout } from "../../components/layout";

export const query = graphql`
  query {
    file(relativePath: { eq: "kym-ellis-Ye6rupMjAWk-unsplash.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
      }
    }
  }
`;

export default function BlogIndexPage({ data }) {
  return (
    <Layout>
      <FeaturedSection
        image={
          <GatsbyImage
            image={data?.file?.childImageSharp?.gatsbyImageData}
            style={{
              height: "600px",
            }}
            objectFit="cover"
            objectPosition="top"
          />
        }
      >
        <PageHeader
          style={{
            boxShadow:
              "0.5rem 0 0 var(--lagom-semantic-color-accent-bg), -0.5rem 0 0 var(--lagom-semantic-color-accent-bg)",
            backgroundColor: "var(--lagom-semantic-color-accent-bg)",
          }}
        >
          Stories
        </PageHeader>
      </FeaturedSection>
      <Section>
        <Container>
          <BlogRoll />
        </Container>
      </Section>
    </Layout>
  );
}
