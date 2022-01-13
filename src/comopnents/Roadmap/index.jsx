import React from "react";
import "./style.css";
import Divider from "../../assets/images/divider-back.png";

export default function Roadmap() {
  return (
    <div className="roadmap ">
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center ">
          <div
            className="col-12 col-md-8 text-center roadmap-content"
            id="roadmap"
          >
            <h1 className="heading-1">Roadmap</h1>
            <h2 className="heading-3 mt-5">
              ************** TODAY **************
            </h2>
            <div className="roadmap-item my-5">
              <h2 className="heading-2">01. Minting</h2>
              <div className="roadmap-item-desc"></div>
              <p>
                The starship will release the <strong>5,000 Droids</strong> into
                the decentralized Solana blockchain through NoiaDucks
                partnership.
              </p>
              <p>
                We've a backed devOps and security engineering team to make sure
                the Launch is smooth and safe for everyone.{" "}
                <strong>BIP BOP.</strong> 🤖
              </p>
            </div>
            <div className="roadmap-item my-5">
              <h2 className="heading-2">02. Droid Queen Auction</h2>
              <div className="roadmap-item-desc"></div>
              <p>
                The Droid Queen — which has been{" "}
                <strong>auctioned for 60 $SOL</strong> on Twitter — will be
                transferred to the bid winner after all of the 5,000 droids have
                been minted.
              </p>
            </div>
            <div className="roadmap-item my-5">
              <h2 className="heading-2">03. Charity Donation</h2>
              <div className="roadmap-item-desc"></div>
              <p>
                All of the proceeds of the Droid Queen Auction are going to
                action against <strong>animals mistreatment in Brazil</strong>.
                We will update the community on our Twitter and Discord
                following our over communicate culture.
              </p>
            </div>
            <div className="roadmap-item my-5">
              <h2 className="heading-2">03. Secondary Market</h2>
              <div className="roadmap-item-desc"></div>
              <p>Add our collection to an NFT Marketplace.</p>
            </div>
            <h2 className="heading-3 mt-5">
              ************** LATE NOVEMBER, 2021 **************
            </h2>
            <div className="roadmap-item my-5">
              <h2 className="heading-2">01. We are forming a DAO</h2>
              <div className="roadmap-item-desc"></div>
              <p>
                We'll officially form the DAO based on Brazil laws and make sure
                every decision is decentralized by the community, we believe
                that droids together are stronger. We'll use something like
                https://snapshot.org/ to do the DAOs voting and be very
                transparent and over communicating everything as we've past
                experience managing a huge team or a top tier $SOL collection.
              </p>
            </div>
            <div className="roadmap-item my-5">
              <h2 className="heading-2">02. Community Funds</h2>
              <div className="roadmap-item-desc"></div>
              <p>
                <strong>
                  15% of the secondary marketplace sales royalties
                </strong>{" "}
                , (which are 5%) will be added to the community fund, and soon
                after we have the DAO up and running, we will be able to use
                those funds as a community to build all sorts of stuff together.
              </p>
              <p>
                First things to be focused on are building our next steps
                platforms, as well investing a chunk of it, which is decided by
                the DAO, into $SOL BlueChip NFTs and NFT Ecosystem applications.
              </p>
            </div>
            <h2 className="heading-3 mt-5">
              ************** DECEMBER, 2021 **************
            </h2>
            <div className="roadmap-item my-5">
              <h2 className="heading-2">01. Rarity Tools</h2>
              <div className="roadmap-item-desc"></div>
              <p>
                We'll add our Droids to most used SOL rarity tools like:
                https://howrare.is/, https://moonrank.app/ and etc...
              </p>
            </div>
            <div className="roadmap-item my-5">
              <h2 className="heading-2">02. Analytics Platforms</h2>
              <div className="roadmap-item-desc"></div>
              <p>
                Every Droid holder will start receiving daily $BIP rewards,
                which can be traded by $SOL or used on the ecosystem utilities.
              </p>
            </div>
            <h2 className="heading-3 mt-5">
              ************** Q1, 2022 **************
            </h2>
            <div className="roadmap-item my-5">
              <h2 className="heading-2">1. Droid Drops</h2>
              <div className="roadmap-item-desc"></div>
              <p>
                We will airdrop the{" "}
                <strong>
                  first seasoned limited-edition (Nike or Off-White-style) drops
                  of Droid clothing and accessories
                </strong>
                , like halloween masks, fashioned glasses, fun hats, etc.
              </p>
              <p>
                But Looking cool isn't enough, all these traits will increase
                Droids daily rewards based on rarity and power combinations(more
                details soon), and also will be tradable as usual NFTs.
              </p>
            </div>
          </div>
        </div>
        <div className="divider-bottom">
          <div className="slider">
            <div className="slider-row"></div>
          </div>
          <img src={Divider} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
