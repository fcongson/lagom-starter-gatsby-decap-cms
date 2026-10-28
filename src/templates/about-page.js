import { Container, PageHeader, Section } from "@fcongson/lagom-ui";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { Content, HTMLContent } from "../components/Content";
import { Layout } from "../components/layout";
import { Seo } from "../components/Seo";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <Section>
      <Container>
        <PageHeader
          style={{
            boxShadow:
              "0.5rem 0 0 var(--lagom-semantic-color-accent-bg), -0.5rem 0 0 var(--lagom-semantic-color-accent-bg)",
            backgroundColor: "var(--lagom-semantic-color-accent-bg)",
          }}
        >
          {title}
        </PageHeader>
        <PageContent content={content} />
      </Container>
    </Section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const Head = ({ data }) => <Seo title={data.markdownRemark.frontmatter.title} />;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
