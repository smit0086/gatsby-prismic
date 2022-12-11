import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Blog from "../Blog/Blog";

const BlogsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicBlogs {
        nodes {
          data {
            hero {
              document {
                ...hero
              }
            }
          }
          uid
        }
      }
    }
  `);
  const blogs = data.allPrismicBlogs.nodes;
  return (
    <div>
      <h1>Blogs</h1>
      {blogs.map((blog) => (
        <Blog
          key={blog.data.hero.document.id}
          title={blog.data.hero.document.data.hero_title}
          image={blog.data.hero.document.data.hero_image}
          slug={blog.uid}
        />
      ))}
    </div>
  );
};

export default BlogsPage;
