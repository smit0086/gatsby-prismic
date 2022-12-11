import React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import BlogsPage from "../components/BlogsPage/BlogsPage";

const Index = ({ data }) => {
  const { hero } = data.prismicHomepage.data;
  return (
    <Layout>
      <Hero data={hero.document} />
      <BlogsPage />
    </Layout>
  );
};

export default Index;
export const query = graphql`
  {
    prismicHomepage {
      data {
        hero {
          document {
            ...hero
          }
        }
      }
    }
  }
`;
