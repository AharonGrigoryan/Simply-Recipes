import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import RecipesList from "../components/RecipesList";
import Seo from "../components/Seo";

const TagTamplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulRecipes.nodes;

  return (
    <Layout>
      <Seo title={pageContext.tag} />
      <main className="page">
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query ($tag: String) {
    allContentfulRecipes(
      sort: { title: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;
export default TagTamplate;
