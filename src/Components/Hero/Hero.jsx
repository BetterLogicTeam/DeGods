import React from "react";
import "./Hero.css";
import memeGods from "../../assets/memeGods_2.jpg"

function Hero() {
  return (
    <div className="Hero_main">
      <div className="container">
        <div className="Hero_logo">
          <img src={memeGods} width={600} alt="" />
        </div>

        <div className="">
          <h2 className="hero_para mt-5">The #1 Meme community on the internet.</h2>
        </div>

        <div className="">
          <div className="buttonRoot w-fit rounded-lg ">
            <button
              className="buttonBase d-flex 
    mt-5 bg-black px-3 gap-1 pt-3
  "
            >
              <p className="text-white text-base sm:text-lg">Buy</p>
              <h5 className="text-white ps-2"> $MeGods</h5>
              <div className="w-[1px] mx-1 h-full bg-[#484848] rounded-full" />
              <div className="d-flex items-center gap-2">
                <svg
                  width={20}
                  height={28}
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0 784.37 1277.39"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <g id="_1421394342400">
                      <g>
                        <polygon
                          fill="#343434"
                          fillRule="nonzero"
                          points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "
                        />
                        <polygon
                          fill="#8C8C8C"
                          fillRule="nonzero"
                          points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "
                        />
                        <polygon
                          fill="#3C3C3B"
                          fillRule="nonzero"
                          points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "
                        />
                        <polygon
                          fill="#8C8C8C"
                          fillRule="nonzero"
                          points="392.07,1277.38 392.07,956.52 -0,724.89 "
                        />
                        <polygon
                          fill="#141414"
                          fillRule="nonzero"
                          points="392.07,882.29 784.13,650.54 392.07,472.33 "
                        />
                        <polygon
                          fill="#393939"
                          fillRule="nonzero"
                          points="0,650.54 392.07,882.29 392.07,472.33 "
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
