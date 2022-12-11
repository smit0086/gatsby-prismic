const path = require(`path`);
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    {
      allPrismicBlogs {
        nodes {
          uid
        }
      }
    }
  `);

  data.allPrismicBlogs.nodes.forEach(({ uid }) => {
    createPage({
      path: `blogs/${uid}`,
      component: path.resolve(`src/templates/Blog.js`),
      context: { slug: uid },
    });
  });
};
