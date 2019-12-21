import React from "react";
import ReactDOM from "react-dom";

const Nav = () => (
  <React.Fragment>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-end">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-grow-0" id="collapsibleNavbar">
              <ul className="navbar-nav text-right">
                  <li className="Home">
                      <a className="nav-link text-white font-weight-bold" href="#"><h5>Home</h5></a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link text-white font-weight-bold" href="#"><h5>Projects</h5></a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link text-white font-weight-bold" href="#"><h5>Blog</h5></a>
                  </li>
              </ul>
          </div>
      </nav>
  </React.Fragment>
);
const wrapper = document.getElementById("nav");
wrapper ? ReactDOM.render(<Nav />, wrapper) : null;