import React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import RichTextRenderer from "../components/RichTextRenderer/RichTextRenderer";

const Blog = ({ data }) => {
  console.log({ data });
  const { hero, blog_contect } = data.prismicBlogs.data;
  return (
    <Layout>
      <Hero data={hero.document} />
      <RichTextRenderer richText={blog_contect.richText} />
    </Layout>
  );
};

export default Blog;
export const query = graphql`
  query ($slug: String) {
    prismicBlogs(uid: { eq: $slug }) {
      data {
        hero {
          document {
            ...hero
          }
        }
        blog_contect {
          richText
        }
      }
    }
  }
`;
