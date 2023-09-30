import { Container, PageHeader, Section } from "@fcongson/lagom-ui";
import React from "react";
import { BlogRoll } from "../../components/BlogRoll";
import { Layout } from "../../components/layout";

export default function BlogIndexPage() {
  return (
    <Layout>
      <div
        className="full-width-image-container"
        style={{
          backgroundImage: `url('/images/kym-ellis-Ye6rupMjAWk-unsplash.jpg')`,
        }}
      >
        <PageHeader
          style={{
            boxShadow:
              "0.5rem 0 0 var(--lagom-core-colors-honey-base), -0.5rem 0 0 var(--lagom-core-colors-honey-base)",
            backgroundColor: "var(--lagom-core-colors-honey-base)",
          }}
        >
          Latest Stories
        </PageHeader>
      </div>
      <Section>
        <Container>
          <BlogRoll />
        </Container>
      </Section>
    </Layout>
  );
}
