import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import RecipesList from "../components/RecipesList";

const TagTamplate = ({ data }) => {
  const recipes = data.allContentfulRecipes.nodes;

  return (
    <Layout>
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
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`;
export default TagTamplate;
