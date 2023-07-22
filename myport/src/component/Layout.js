import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import Home from "./Home";
// import Project from "./Project";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "80vh" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
