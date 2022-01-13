import React from "react";
import "./style.css";

export default function Faq() {
  return (
    <div className="faq mt-5" id="faq">
      <div className="container ">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-8">
            <h1 className="heading-1 text-center">FAQ</h1>
            <div className="" id="accordion">
              <div className="card ">
                <div className="card-header">
                  <h4 className="card-header">
                    <a
                      className="accordion-toggle"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseOne"
                    >
                      Is account registration required?
                    </a>
                  </h4>
                </div>
                <div id="collapseOne" className="panel-collapse collapse in">
                  <div className="card-block">
                    <p>
                      Account registration at <strong>PrepBootstrap</strong> is
                      only required if you will be selling or buying themes.
                      This ensures a valid communication channel for all parties
                      involved in any transactions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card ">
                <div className="card-header">
                  <h4 className="card-header">
                    <a
                      className="accordion-toggle collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseTen"
                    >
                      Can I submit my own Bootstrap templates or themes?
                    </a>
                  </h4>
                </div>
                <div id="collapseTen" className="panel-collapse collapse">
                  <div className="card-block">
                    <p>
                      A lot of the content of the site has been submitted by the
                      community. Whether it is a commercial
                      element/template/theme or a free one, you are encouraged
                      to contribute. All credits are published along with the
                      resources.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card ">
                <div className="card-header">
                  <h4 className="card-header">
                    <a
                      className="accordion-toggle collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseEleven"
                    >
                      What is the currency used for all transactions?
                    </a>
                  </h4>
                </div>
                <div id="collapseEleven" className="panel-collapse collapse">
                  <div className="card-block">
                    <p>
                      All prices for themes, templates and other items,
                      including each seller's or buyer's account balance are in{" "}
                      <strong>USD</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
