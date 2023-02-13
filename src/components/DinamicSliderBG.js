import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const query = graphql`
  query MyBgSlider($title: String) {
    allContentfulBackgroundSlider(filter: { title: { eq: $title } }) {
      nodes {
        description
        title
        image {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
        }
        id
      }
    }
  }
`;

const DinamicSliderBG = () => {
  const data = useStaticQuery(query);
  const bgInfo = data.allContentfulBackgroundSlider.nodes;

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    speed: 1000,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "10px",
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
          padding: "10px",
        }}
      >
        <ul
          style={{
            marginBottom: "40px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          height: "8px",
          width: "8px",
          backgroundColor: "#645cff",
          borderRadius: "50%",
        }}
      ></div>
    ),
  };

  return (
    <Slider {...settings}>
      {bgInfo.map((info) => {
        const { id, title, description, image } = info;
        const pathImage = getImage(image);
        return (
          <header className="hero" key={id}>
            <GatsbyImage image={pathImage} className="hero-img" alt="food" />
            <div className="hero-container">
              <div className="hero-text">
                <h1>{title}</h1>
                <h2>{description}</h2>
              </div>
            </div>
          </header>
        );
      })}
    </Slider>
  );
};

export default DinamicSliderBG;
