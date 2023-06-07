import React from "react";
import "./Roadmap.css";

function Roadmap() {
  return (
    <div className="Roadmap_main" id="Roadmap">
      <div className="header-sections">
        <h2 className="Roadmap_heading pb-5">Roadmap</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div
              data-wf-pbl="layout-grid-2x2-centered"
              id="w-node-_24ab223e-c1c1-b11a-2056-1123316ed9d3-8b81b32c"
              className="road-cell"
            >
              <img
                src="https://zkpiggy.icoexperts.tech/images/1.svg"
                loading="lazy"
                alt=""
                className="roadicon"
              />
              <ul role="list" className="road-item">
                <li className="roadmap-items">New Website and Branding</li>
                <li className="roadmap-items">Social Media Channels</li>
                <li className="roadmap-items">Fair Launch</li>
                <li className="roadmap-items">Social Media Marketing</li>
                <li className="roadmap-items">
                  Launch of our Official Whitepaper
                </li>
                <li className="roadmap-items">
                  Audit Applications and Reviews
                </li>
                <li className="roadmap-items">Listing on CoinGecko</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4">
            <div
              data-wf-pbl="layout-grid-2x2-centered"
              id="w-node-_24ab223e-c1c1-b11a-2056-1123316ed9d3-8b81b32c"
              className="road-cell cell_agin"
            >
              <img
                src="https://zkpiggy.icoexperts.tech/images/2.svg"
                loading="lazy"
                alt=""
                className="roadicon"
              />
              <ul role="list" className="road-item">
                <li className="roadmap-items">Charity Donations</li>
                <li className="roadmap-items">Community / Team Building</li>
                <li className="roadmap-items">AMA's</li>
                <li className="roadmap-items">Giveaways</li>
                <li className="roadmap-items">30k Twitter Followers</li>
                <li className="roadmap-items">30k Instagram Followers</li>
                <li className="roadmap-items">30k Telegram Group Members</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4">
            <div
              data-wf-pbl="layout-grid-2x2-centered"
              id="w-node-_24ab223e-c1c1-b11a-2056-1123316ed9d3-8b81b32c"
              className="road-cell cell_agin"
            >
              <img
                src="https://zkpiggy.icoexperts.tech/images/3.svg"
                loading="lazy"
                alt=""
                className="roadicon"
              />
              <ul role="list" className="road-item">
                <li className="roadmap-items">zkPiggy Swap</li>
                <li className="roadmap-items">Listing on Major Exchanges</li>
                <li className="roadmap-items">Influencer Marketing Push</li>
                <li className="roadmap-items">Launch of Merchandise</li>
                <li className="roadmap-items">Further Partnerships</li>
                <li className="roadmap-items">NFT and Games</li>
                <li className="roadmap-items">Further Ecosystem Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
