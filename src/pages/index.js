import * as React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import AllRecipes from "../components/AllRecipes";
import DinamicSliderBG from "../components/DinamicSliderBG";

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <DinamicSliderBG />
        <Wrapper>
          <h5>WELCOME TO SIMPLY RECIPES! COME AND DISCOVER MODERN RECIPES!</h5>

          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque quis nibh vel mi interdum volutpat. Maecenas posuere
            risus pharetra lorem dictum vehicula. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos. Nam
            iaculis laoreet enim, egestas commodo tellus volutpat nec.
          </h6>

          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque quis nibh vel mi interdum volutpat. Maecenas posuere
            risus pharetra lorem dictum vehicula. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos. Nam
            iaculis laoreet enim, egestas commodo tellus volutpat nec.
          </h6>
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
