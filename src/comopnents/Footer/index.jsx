/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./style.css";
import Discord from "../../assets/images/icon--discord.svg";
import Twitter from "../../assets/images/icon--twitter.svg";
import Divider from "../../assets/images/divider.png";
import Banner from "../../assets/images/sdb-banner.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-banner">
        <img src={Banner} alt="" className="img-fluid" />
      </div>
      <div className="divider">
        <img src={Divider} alt="" className="img-fluid" />
      </div>
      <div className="footer-container container">
        <div className="row pt-5 text-center social">
          <div className="col-md-4">BIP BOP. BZZZZZZZZZ BEEEEEEEP.</div>
          <div className="col-md-4 ">
            <img src={Discord} alt="" /> <img src={Twitter} alt="" />
          </div>
          <div className="col-md-4 ">© 2021 All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}
