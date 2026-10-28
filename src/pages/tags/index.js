import { Container, PageHeader, Section } from "@fcongson/lagom-ui";
import { Link, graphql } from "gatsby";
import { Layout } from "../../components/layout";
import { Seo } from "../../components/Seo";
import { kebabCase } from "../../utils/kebabCase";

export default function TagsPage({
  data: {
    allMarkdownRemark: { group },
  },
}) {
  return (
    <Layout>
      <Section>
        <Container>
          <PageHeader>Tags</PageHeader>
          <ul>
            {group.map((tag) => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </Layout>
  );
}

export const Head = () => <Seo title="Tags" />;

export const tagPageQuery = graphql`
  query TagsQuery {
    allMarkdownRemark(limit: 1000) {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`;
