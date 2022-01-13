import React from "react";
import "./style.css";

export default function Collection() {
  return (
    <div className="collection" id="collection">
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-12 col-md-8">
            <h2 className="text-center">Discover Solana’s Latest NFT World</h2>
            <h1 className="heading-1 text-center">The SDB NFT Collection</h1>
            <p className="text-center">
              SDB is a collection of 5,000 uniquely generated 24-bit droids
              living on the Solana blockchain. <br /> Owning a Droid will grant
              you make your wallet prettier and access to the exclusive world of
              droids, with <strong>members-only </strong>benefits that will be
              coming in the future of the Solana Droid Business World.
            </p>
            <p className="detail text-center">
              We partnered with NoiaDucks to fairly distribute the Droids on the
              Solana blockchain.
            </p>
            <button className="btn-purple text-light my-5">
              Read Our Roadmap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
