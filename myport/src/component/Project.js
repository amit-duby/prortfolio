import React from "react";
import { NavLink } from "react-router-dom";
import img from "./pax.jpg";

import Layout from "./Layout";

const Project = () => {
  return (
    <Layout>
      <div className="proj">
        <h1 className="h">project</h1>
        {/* <div className="container ">
          <div className="row "> */}
        <div className="cord">
          <div className="card m-5" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <NavLink to="#" className="btn btn-danger">
                Go somewhere
              </NavLink>
            </div>
          </div>

          <div className="card m-5" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <NavLink to="#" className="btn btn-secondary">
                Go somewhere
              </NavLink>
            </div>
          </div>
          <div className="card m-5" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <NavLink to="#" className="btn btn-light">
                Go somewhere
              </NavLink>
            </div>
          </div>
          <div className="card m-5" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <NavLink to="#" className="btn btn-primary">
                Go somewhere
              </NavLink>
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* <Footer /> */}
      </div>
    </Layout>
  );
};

export default Project;
