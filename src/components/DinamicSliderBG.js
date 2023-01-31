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
      }
    }
  }
`;

const DinamicSliderBG = () => {
  const data = useStaticQuery(query);
  const bgInfo = data.allContentfulBackgroundSlider.nodes;
  console.log(bgInfo);

  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    speed: 900,
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
                <h4>{description}</h4>
              </div>
            </div>
          </header>
        );
      })}
    </Slider>
  );
};

export default DinamicSliderBG;
