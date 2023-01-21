import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import AllRecipes from "../components/AllRecipes";
import Layout from "../components/Layout";

const Resipes = () => {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/microsoft-edge-4QAbnbkB2Mk-unsplash.jpg"
            alt="agges"
            className="hero-img"
            placeholder="DOMINANT_COLOR"
            layout="fullWidth"
          ></StaticImage>

          <div className="hero-container">
            <div className="hero-text">
              <h1>Simply Recipes</h1>
              <h4>No Fluff, Just Recipes</h4>
            </div>
          </div>
        </header>
        <Wrapper>
          <p>
            This site has a wide variety of recipes, user reviews, and ratings
            to help you find the perfect recipe.
          </p>
        </Wrapper>
        <AllRecipes />
      </main>
    </Layout>
  );
};

const Wrapper = styled.span`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export default Resipes;
