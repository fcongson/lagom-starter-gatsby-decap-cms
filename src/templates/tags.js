import { Container, Section } from "@fcongson/lagom-ui";
import { Link, graphql } from "gatsby";
import { Layout } from "../components/layout";
import { Seo } from "../components/Seo";

const TagRoute = (props) => {
  const posts = props.data.allMarkdownRemark.edges;

  const postLinks = posts.map((post) => (
    <li key={post.node.fields.slug}>
      <Link to={post.node.fields.slug}>
        <h2>{post.node.frontmatter.title}</h2>
      </Link>
    </li>
  ));

  const { tag } = props.pageContext;
  const { totalCount } = props.data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with “${tag}”`;

  return (
    <Layout>
      <Section>
        <Container>
          <h3>{tagHeader}</h3>
          <ul>{postLinks}</ul>
          <p>
            <Link to="/tags/">Browse all tags</Link>
          </p>
        </Container>
      </Section>
    </Layout>
  );
};

export default TagRoute;

export const Head = ({ pageContext }) => <Seo title={pageContext.tag} />;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
