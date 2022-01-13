/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";

export default function Navbar() {
  return (
    <nav className="fixed-top my-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p style={{ fontSize: "2rem" }}>Droid Bussines</p>
          </div>
          <div className="col-md-6 nav-list">
            <a href="#collection">The Collection</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#faq">Faq</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
