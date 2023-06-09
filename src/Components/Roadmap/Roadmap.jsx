import React from "react";
import "./Roadmap.css";
import circle from "../../assets/circle.svg";

function Roadmap() {
  return (
    <div className="Roadmap_main" id="Roadmap">
      <div className="header-sections">
        <h2 className="Roadmap_heading pb-5">Roadmap</h2>
      </div>
      <div className="container">
        <div className="row">
          <section class="ps-timeline-sec">
            <div class="container">
              <ol class="ps-timeline desktop">
                <li className="first_li">
                  <div className="first_li_div fs-6 fw-bolder">
                    <p>ANOTHER</p>
                    <p>BEGINNING</p>
                  </div>
                </li>
                <li>
                  <div class="img-handler-top fs-6 fw-bolder">
                    <p>BEGIN DEVELOPMENT</p>
                    <p>ON V2 WIDER</p>
                    <p>ECOSYSTEM</p>
                  </div>
                  <span class="ps-sp-top"></span>
                </li>
                <li>
                  <span class="ps-sp-bot"></span>
                  <div class="img-handler-bot fs-6 fw-bolder">
                    <p>LAUNCH ON CEX'S:</p>
                    <p>BINGX, COINMARKET</p>
                    <p>CAP</p>
                  </div>
                  <span class="ps-sp-bot"></span>
                </li>
                <li>
                  <div class="img-handler-top fs-6 fw-bolder mb-5 pb-4">
                    <p>LP LAUNCHED ON</p>
                    <p>DEX'S UNISWAP V3</p>
                  </div>

                  <span class="ps-sp-top"></span>
                </li>
                <li>
                  <div class="img-handler-bot fs-6 fw-bolder">
                    <p>PUBLIC SALE</p>
                    <p>BEGIN TOKEN</p>
                    <p>CAMPAIGN</p>
                  </div>
                  <span class="ps-sp-bot"></span>
                </li>
                <li>
                  <div class="img-handler-top fs-6 fw-bolder">
                    <p>PRE-SALE</p>
                    <p>250 Eth Hard Cap</p>
                    <p>50 Eth Min</p>
                  </div>
                  <span class="ps-sp-top"></span>
                </li>
                <li className="last_li">
                  <div className="last_li_div fs-6 fw-bolder">
                    <p>ERC20</p>
                    <p>CREATED</p>
                  </div>
                </li>
              </ol>

              <ul class="timeline res_mob">
                {/* <!-- Item 1 --> */}
                <li>
                  <div class="direction-r">
                    <div class="flag-wrapper mb-5">
                      <span class="desc fs-6 fw-bolder">ERC20 CREATED</span>
                    </div>
                    <div class="desc fs-6 fw-bolder">
                    <p>PRE-SALE</p>
                    <p>250 Eth Hard Cap</p>
                    <p>50 Eth Min</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="direction-r">
                    
                    <div class="desc fs-6 fw-bolder">
                    <p>PUBLIC SALE</p>
                    <p>BEGIN TOKEN</p>
                    <p>CAMPAIGN</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="direction-r">
                    <div class="desc fs-6 fw-bolder">
                    <p>LP LAUNCHED ON</p>
                    <p>DEX'S UNISWAP V3</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="direction-r">
                    <div class="desc fs-6 fw-bolder">
                    <p>LAUNCH ON CEX'S:</p>
                    <p>BINGX, COINMARKET CAP</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="direction-r">
                    
                    <div class="desc fs-6 fw-bolder">
                    <p>BEGIN DEVELOPMENT</p>
                    <p>ON V2 WIDER</p>
                    <p>ECOSYSTEM</p>
                    </div>

                    <div class="flag-wrapper mt-5">
                    <span class="desc fs-5 ANOTHER fw-bolder">ANOTHER BEGINNING</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
