import React from "react";
import { BlogRoll } from "../../components/BlogRoll";
import { Layout } from "../../components/layout";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/images/kym-ellis-Ye6rupMjAWk-unsplash.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow:
                "0.5rem 0 0 var(--lagom-core-colors-honey-base), -0.5rem 0 0 var(--lagom-core-colors-honey-base)",
              backgroundColor: "var(--lagom-core-colors-honey-base)",
              color: "white",
              padding: "1rem",
            }}
          >
            Latest Stories
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
