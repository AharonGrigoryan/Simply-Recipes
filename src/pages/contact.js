import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import Seo from "../components/Seo";

const Contact = ({
  data: {
    allContentfulRecipes: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <Seo title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article>
            <h3>Want To Get In Touch?</h3>
            <p>
              Four dollar toast biodiesel plaid salvia actually pickled banjo
              bespoke mlkshk intelligentsia edison bulb synth.
            </p>
            <p>Cardigan prism bicycle rights put a bird on it deep v.</p>
            <p>
              Hashtag swag health goth air plant, raclette listicle fingerstache
              cold-pressed fanny pack bicycle rights cardigan poke.
            </p>
          </article>
          <article>
            <form action="https://formspree.io/f/xeqwonzy" method="POST">
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <div className="error" id="nameError"></div>
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <div className="error" id="emailError"></div>
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <div className="error" id="messageError"></div>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRecipes(
      sort: { title: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      totalCount
    }
  }
`;

export default Contact;
