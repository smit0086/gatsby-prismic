import { graphql } from "gatsby";

export const heroFramgent = graphql`
  fragment hero on PrismicHerocomponent {
    id
    data {
      hero_title {
        text
      }
      body {
        richText
      }
      hero_image {
        gatsbyImageData
        alt
      }
    }
  }
`;
