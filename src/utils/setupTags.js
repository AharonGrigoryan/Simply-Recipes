const setupTags = (recipes) => {
  const allTags = {};

  recipes.forEach((recipe) => {
    recipe.content.tags.forEach((tag) => {
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1;
      } else {
        allTags[tag] = 1;
      }
    });
  });
  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a;
    const [secondTag] = b;
    return firstTag.localeCompare(secondTag);
  });

  return newTags;
};

export default setupTags;

// import React from "react";
// import { Helmet } from "react-helmet";
// import { useStaticQuery, graphql } from "gatsby";

// const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//         description
//       }
//     }
//   }
// `;

// const Seo = ({ title, description }) => {
//   const { site } = useStaticQuery(query);
//   const metaDescription = description || site.siteMetadata.description;
//   return (
//     <Helmet
//       htmlAttributes={{ lang: "en" }}
//       title={`${title} | ${site.siteMetadata.title}`}
//       meta={[{ name: "description", content: metaDescription }]}
//     ></Helmet>
//   );
// };

// export default Seo;
