import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import AllRecipes from "../components/AllRecipes";

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="agges"
            className="hero-img"
            placeholder="tracedSVG"
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
          <h5>
            WELCOME TO 5ART GALLERY COME AND DISCOVER OUR SELECTION OF
            CONTEMPORARY ART FROM ESTABLISHED AND EMERGING ARTISTS
          </h5>

          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque quis nibh vel mi interdum volutpat. Maecenas posuere
            risus pharetra lorem dictum vehicula. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos. Nam
            iaculis laoreet enim, egestas commodo tellus volutpat nec.
          </h6>
          <br />
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque quis nibh vel mi interdum volutpat. Maecenas posuere
            risus pharetra lorem dictum vehicula. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos. Nam
            iaculis laoreet enim, egestas commodo tellus volutpat nec.
          </h6>
        </Wrapper>

        <AllRecipes />
      </main>
    </Layout>
  );
}

const Wrapper = styled.span`
  text-align: center;
`;
