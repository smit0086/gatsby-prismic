import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Blog = ({ image, title, slug }) => {
  return (
    <div
      style={{
        width: "300px",
        borderRadius: "10px",
        border: "2px solid black",
        padding: "15px",
      }}
    >
      <Link to={`/blogs/${slug}`} style={{ textDecoration: "none" }}>
        <GatsbyImage image={image.gatsbyImageData} alt={image.alt} />
        <h3 style={{ textAlign: "center", textDecoration: "none" }}>
          {title.text}
        </h3>
      </Link>
    </div>
  );
};

export default Blog;
