/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";
import Divider from "../../assets/images/divider.png";
import World from "../../assets/images/world2.png";

export default function Header() {
  return (
    <div className="header">
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-12 " style={{ marginTop: "150px" }}>
            <h1 className="text-center heading">Solana Droid Business</h1>
            <button className="btn-purple">About the Collection</button>
            <p className="text-center my-3">5,000 Droids will be Released.</p>
          </div>
        </div>
      </div>
      <div className="world">
        <img src={World} alt="img-fluid " />
      </div>
      <div className="divider-top">
        <div className="slider">
          <div className="slider-row"></div>
        </div>
        <img src={Divider} alt="" className="img-fluid" />
      </div>
    </div>
  );
}
