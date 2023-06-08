import React from "react";
import "./Token_info.css";

function Token_info() {
  return (
    <div className="Token_main" id="Token Info">
      <div className="header-sections pt-5">
        <h2>Token Info</h2>
      </div>
      <div className="container">
        <div className="token_main_box px-5">
          <div className="row token">
            <div className="col-lg-3 col-md-12">
              <div
                id="w-node-aeb712cf-3303-4a96-abe8-07e3ae0c200c-8b81b32c"
                class="token-info"
              >
                <h3 class="head-3">1 Billion</h3>
                <div class="text-block">Max Supply</div>
              </div>
            </div>

            <div className="col-lg-3 col-md-12">
              <div
                id="w-node-aeb712cf-3303-4a96-abe8-07e3ae0c200c-8b81b32c"
                class="token-info"
              >
                <h3 class="head-3">Binance Smart Chain</h3>
                <div class="text-block">Token Network</div>
              </div>
            </div>

            <div className="col-lg-3 col-md-12">
              <div
                id="w-node-aeb712cf-3303-4a96-abe8-07e3ae0c200c-8b81b32c"
                class="token-info"
              >
                <h3 class="head-3">meGods</h3>
                <div class="text-block">Token Name</div>
              </div>
            </div>

            <div className="col-lg-3 col-md-12">
              <div
                id="w-node-aeb712cf-3303-4a96-abe8-07e3ae0c200c-8b81b32c"
                class="token-info_last"
              >
                <h3 class="head-3">RedFlokiCEO</h3>
                <div class="text-block">Token Symbol</div>
              </div>
            </div>
          </div>
        </div>

        <div className="token_circle mt-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="frst_circle">
                <div
                  id="w-node-_46b33ea3-d5c8-6ade-8165-d9660e525fde-8b81b32c"
                  class="token-info-circle green"
                >
                  <h3 class="head-h3">0%</h3>
                  <div class="text-block-percent">Buy</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="frst_circle">
                <div
                  id="w-node-_64e9a1c9-f7ef-e757-de67-bc5abc586ee0-8b81b32c"
                  class="token-info-circle"
                >
                  <h3 class="head-h3">5%</h3>
                  <div class="text-block-percent">Rewards</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="frst_circle">
                <div
                  id="w-node-_64e9a1c9-f7ef-e757-de67-bc5abc586ee0-8b81b32c"
                  class="token-info-circle"
                >
                  <h3 class="head-h3">5%</h3>
                  <div class="text-block-percent">Rewards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Token_info;
