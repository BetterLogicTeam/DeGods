import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="Hero_main">
      <div className="container">
        <div className="Hero_logo">
          <svg
            class="dark:fill-white fill-black Hero_logo"
            width="600"
            height="120"
            viewBox="0 0 156 37"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M126.211 31.5775C126.211 31.8285 126.064 32.0548 125.842 32.1429C125.332 32.3454 124.834 32.4722 124.277 32.4722C121.193 32.4722 119.858 29.2104 119.858 22.6869C119.858 16.6498 121.561 13.5827 123.955 13.5827C124.623 13.5827 125.324 13.76 125.916 14.1146C126.097 14.2231 126.211 14.425 126.211 14.645V31.5775ZM102.46 35.2472C98.6852 35.2472 90.7211 20.5933 90.7211 15.8222C90.7211 14.313 91.4114 13.4367 92.5622 13.4367C96.6137 13.4367 104.347 28.6748 104.347 32.7645C104.347 34.4197 103.703 35.2472 102.46 35.2472ZM41.9759 14.2645C43.9554 14.2645 47.4214 17.1155 47.4211 22.8332C47.4209 25.1525 46.0111 26.7106 43.7546 24.8786C41.6877 23.2004 40.0883 19.7094 40.0883 17.1367C40.0883 15.3355 40.7789 14.2645 41.9759 14.2645ZM14.9615 36.2211H14.7951C14.4803 36.2211 14.225 35.9512 14.225 35.6182V3.32906C14.225 2.99623 14.4803 2.7263 14.7951 2.7263H15.3759C21.4066 2.7263 24.8133 8.42232 24.8133 19.0841C24.8133 29.892 20.9002 36.2211 14.9615 36.2211ZM151.166 21.5671L147.714 19.6196C144.997 18.1104 144.261 16.8933 144.261 15.1893C144.261 13.8261 145.274 12.609 147.299 12.609C147.465 12.609 147.679 12.6344 147.872 12.6851C148.003 12.7194 148.115 12.8059 148.193 12.9224L151.407 17.7576C152.174 18.9103 153.949 18.5971 154.273 17.2521L154.961 14.3925C155.032 14.0865 155.091 13.7344 155.137 13.3876C155.259 12.4876 154.567 11.6841 153.657 11.6841H147.621C141.499 11.6841 137.724 14.8972 137.724 19.8144C137.724 23.5144 139.565 25.8026 143.386 27.9445L146.425 29.6486C148.358 30.7196 149.186 31.5472 149.186 33.0078C149.186 35.0038 147.806 36.1235 145.78 36.1235C145.287 36.1235 144.977 36.0848 144.457 35.9377C144.331 35.9021 144.22 35.8221 144.144 35.7151L140.347 30.3398C139.678 29.3922 138.196 29.7154 137.984 30.8552L137.176 35.1938C137.165 35.2598 137.158 35.3812 137.154 35.5311C137.148 35.7815 137.213 36.0141 137.322 36.2211H135.988C135.673 36.2211 135.418 35.9512 135.418 35.6182V1.7766C135.418 1.36127 135.03 1.07047 134.659 1.20771L132.272 1.1983C132.159 1.18356 132.045 1.17337 131.928 1.17337H122.801C122.441 1.17337 122.149 1.46463 122.149 1.82412V3.15261C122.149 4.9645 123.621 6.43352 125.437 6.43352H125.493C125.818 6.43352 126.087 6.67349 126.139 6.99377C126.179 7.24174 126.211 6.97902 126.211 7.04365V12.4046C126.211 12.867 125.741 13.1534 125.36 12.9276C124.119 12.1927 122.658 11.6841 120.686 11.6841C115.203 11.6841 111.183 15.9908 110.226 22.4262C109.443 15.8102 104.249 11.6841 97.2579 11.6841C90.3527 11.6841 85.4394 16.3852 84.6989 22.5603V20.6609C84.6989 20.3279 84.4436 20.058 84.1287 20.058H72.479C71.9441 20.058 71.7037 20.7672 72.117 21.1265L74.8234 23.4799C74.9551 23.5944 75.0314 23.7652 75.0314 23.9455V32.3211C75.0314 33.7945 73.3539 34.5454 72.3567 33.5164C65.7483 26.6982 60.8524 15.9994 60.8524 8.42248C60.8524 4.13823 62.6478 2.14204 64.9035 2.14204C66.4095 2.14204 68.9894 4.59606 71.5301 7.52155C74.8371 11.3298 80.81 9.80006 82.0717 4.80482L82.4158 3.44293C82.4855 3.16719 82.3644 2.87483 82.1228 2.74778C78.8585 1.03048 75.1092 0 70.4278 0C60.2017 0 54.0151 7.11768 53.3234 16.317C52.8949 15.5627 52.3299 14.8908 51.6549 14.3077C50.2459 12.8306 48.1808 11.8298 45.8412 11.8298C40.6041 11.8298 37.0224 15.1783 35.3884 19.6679C35.3936 19.4575 35.4015 19.2493 35.4015 19.0355C35.4015 7.93547 28.3581 1.9474 16.2506 1.9474H0.570016C0.255138 1.9474 0 2.21733 0 2.55032V4.50776C0 6.33172 1.48195 7.81047 3.31007 7.81047H3.42295C3.79536 7.81047 4.09704 8.11145 4.09704 8.48302V31.2792C4.09704 31.6506 3.79536 31.9518 3.42295 31.9518C1.76131 31.9518 0.414233 33.2958 0.414233 34.9538V36.6106C0.414233 36.8256 0.578979 37 0.7824 37H15.6521C25.2043 37 31.9384 33.0282 34.3847 25.727C34.4337 29.0007 35.8984 31.8848 37.6768 33.8364C37.679 33.8339 37.6814 33.8314 37.6836 33.8287C39.3564 35.829 42.1829 37 45.8693 37H51.9045C52.8149 37 53.5072 36.1965 53.3854 35.2963C53.3385 34.9496 53.2802 34.5976 53.2088 34.2914L52.5208 31.432C52.1971 30.0869 50.4216 29.7736 49.6554 30.9264L46.4409 35.7615C46.3634 35.8782 46.2504 35.9647 46.1196 35.999C45.927 36.0497 45.7131 36.0749 45.5472 36.0749C43.5216 36.0749 42.5088 34.858 42.5088 33.4948C42.5088 31.7907 43.2453 30.5737 45.9614 29.0644L49.4141 27.117C51.548 25.9071 52.9927 24.41 53.7136 22.6436C55.4532 31.1142 62.1081 37 72.0852 37C76.9038 37 81.1941 35.416 84.4812 32.7037C84.6195 32.5895 84.6989 32.4127 84.6989 32.2272V25.8788C85.5005 32.7369 91.1633 37 97.3041 37C104.816 37 109.031 32.7975 110.073 27.109C110.553 33.5447 113.863 37 118.201 37C120.572 37 123.048 35.7012 125.262 33.6222C125.63 33.2766 126.211 33.5502 126.211 34.0706V36.3971C126.211 36.7301 126.466 37 126.781 37H137.351C137.53 37 137.672 36.8624 137.706 36.6836C137.953 36.8786 138.262 37 138.602 37H145.504C151.166 37 156 33.8843 156 28.8209C156 25.8026 154.343 23.3682 151.166 21.5671Z"></path>
          </svg>
        </div>

        <div class="">
          <h2 class=" mt-5">The #1 NFT community on the internet.</h2>
        </div>

        <div className="">
          <div className="buttonRoot w-fit rounded-lg ">
            <button
              className="buttonBase d-flex 
    mt-5 bg-black px-3 gap-1 pt-3
  "
            >
              <p className="text-white text-base sm:text-lg">Buy on</p>
              <img
                alt="buy on blur marketplace"
                loading="lazy"
                width={83}
                height={22}
                decoding="async"
                data-nimg={1}
                className="pt-1 sm:pt-0"
                style={{ color: "transparent" }}
                srcSet="https://powered.by.dustlabs.com/cdn-cgi/image/width=96/https://degods.com/degods/blur_logo.png 1x, https://powered.by.dustlabs.com/cdn-cgi/image/width=256/https://degods.com/degods/blur_logo.png 2x"
                src="https://powered.by.dustlabs.com/cdn-cgi/image/width=256/https://degods.com/degods/blur_logo.png"
              />
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
                <p className="text-white text-xl sm:text-[18px] font-primaryBold">
                  9.29
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
