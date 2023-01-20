import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import RecipesList from "./RecipesList";
import TagsList from "./TagsList";

const query = graphql`
  {
    allContentfulRecipes(sort: { title: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: TRACED_SVG
            backgroundColor: "red"
          )
        }
      }
    }
  }
`;

const AllRecipes = () => {
  const data = useStaticQuery(query);
  const recipes = data.allContentfulRecipes.nodes;
  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  );
};

export default AllRecipes;
