import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import RichTextRenderer from "../RichTextRenderer/RichTextRenderer";

const Hero = ({ data }) => {
  const { hero_title, body, hero_image } = data.data;
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "50%" }}>
        <h1>{hero_title.text}</h1>
        <RichTextRenderer richText={body.richText} />
      </div>
      <div style={{ width: "50%" }}>
        <GatsbyImage image={hero_image.gatsbyImageData} alt={hero_image.alt} />
      </div>
    </div>
  );
};

export default Hero;
