import React from "react";
import "./Token_info.css";

function Token_info() {
  return (
    <div className="Token_main" id="Token Info">
      <div className="header-sections pt-5">
        <h2>Token Info</h2>
      </div>
      <div className="container">
        <div className="token_main_box pt-5 px-5">
          <div className="row token">
            <div className="col-lg-3 col-md-12">
              <div
                id="w-node-aeb712cf-3303-4a96-abe8-07e3ae0c200c-8b81b32c"
                class="token-info"
              >
                <h3 class="head-3">500 Billion</h3>
                <div class="text-block">Max Supply</div>
              </div>
            </div>

            <div className="col-lg-3 col-md-12">
              <div
                id="w-node-aeb712cf-3303-4a96-abe8-07e3ae0c200c-8b81b32c"
                class="token-info"
              >
                <h3 class="head-3">Etherium Smart Chain</h3>
                <div class="text-block">Token Network</div>
              </div>
            </div>

            <div className="col-lg-3 col-md-12">
              <div
                id="w-node-aeb712cf-3303-4a96-abe8-07e3ae0c200c-8b81b32c"
                class="token-info"
              >
                <h3 class="head-3">MemeGods</h3>
                <div class="text-block">Token Name</div>
              </div>
            </div>

            <div className="col-lg-3 col-md-12">
              <div
                id="w-node-aeb712cf-3303-4a96-abe8-07e3ae0c200c-8b81b32c"
                class="token-info_last"
              >
                <h3 class="head-3">$MeGods</h3>
                <div class="text-block">Token Symbol</div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Token_info;
