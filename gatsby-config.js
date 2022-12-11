/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env`,
});

const routes = [
  {
    type: "blogs",
    path: "/blogs/:uid",
  },
  {
    type: "homepage",
    path: "/",
  },
];
module.exports = {
  siteMetadata: {
    title: `prismic`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        routes,
      },
    },
  ],
};
