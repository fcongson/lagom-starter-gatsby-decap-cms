import { Container, PageHeader, Section } from "@fcongson/lagom-ui";
import { Link, graphql } from "gatsby";
import PropTypes from "prop-types";
import { Content, HTMLContent } from "../components/Content";
import { Layout } from "../components/layout";
import { Seo } from "../components/Seo";
import { kebabCase } from "../utils/kebabCase";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <Section>
      <Container>
        <PageHeader>{title}</PageHeader>
        <p>{description}</p>
        <PostContent content={content} />
        {tags && tags.length ? (
          <div style={{ marginTop: `4rem` }}>
            <h4>Tags</h4>
            <ul>
              {tags.map((tag) => (
                <li key={tag + `tag`}>
                  <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>
    </Section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const Head = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Seo
      title={frontmatter.title}
      description={frontmatter.description}
      titleSuffix="Blog"
    />
  );
};

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
