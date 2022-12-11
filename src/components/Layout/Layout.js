import React from "react";
import Navigation from "../Navigation/Navigation";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div style={{ maxWidth: "1150px", margin: "auto", fontFamily: "arial" }}>
        {children}
      </div>
    </>
  );
};

export default Layout;
