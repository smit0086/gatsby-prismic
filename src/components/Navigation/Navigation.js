import React from "react";
import { Link } from "gatsby";

const Navigation = () => {
  return (
    <div className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/blogs">Blogs</Link>
    </div>
  );
};

export default Navigation;
