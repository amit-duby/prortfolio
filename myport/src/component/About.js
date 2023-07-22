import React from "react";
import Layout from "./Layout";
import photo from "./purepng.png";
const About = () => {
  return (
    <Layout>
      <div className="about">
        <div className="container d-flex mt-20">
          <div className="row ">
            <div className="col-md-4">
              <h3 style={{ marginTop: "120px ", color: "white" }}>
                About me,{" "}
              </h3>
              <p style={{ color: "white" }}>
                An "About Me" page is one of the most important parts of your
                portfolio, website, or blog. This page is where prospective
                employers, potential clients, website users, and other
                professional and personal connections go to learn about who you
                are and what you do. It's an ideal resource for promoting your
                professional brand.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img
                src={photo}
                style={{
                  width: "200px",
                  marginTop: "80px",
                  marginLeft: "10px",
                }}
                alt="this photo"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
