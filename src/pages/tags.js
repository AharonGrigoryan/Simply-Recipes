import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import setupTags from "../utils/setupTags";
import slugify from "slugify";

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulRecipes.nodes);

  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            const slugTag = slugify(text, { lower: true });
            return (
              <Link to={`/tags/${slugTag}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulRecipes {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default Tags;
