import React from "react";
import paf from "./pax.jpg";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import Layout from "./Layout";

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <div className="ms">
          <img className="imge" src={paf} alt=" if not show " />
        </div>
        <div className="text">
          <p>Hi,I am devloper</p>
          <h1>React Devloper</h1>

          <div>
            <button Link to="/project" className="bat">
              <NavLink to="/project" className="lnk">
                Project
              </NavLink>
            </button>
            <button Link to="/contact" className="tat">
              Contact
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
