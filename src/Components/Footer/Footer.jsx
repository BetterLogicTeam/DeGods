import React from "react";
import { BsDiscord, BsTwitter, BsInstagram } from "react-icons/bs";
import { SiGitbook } from "react-icons/si";
import "./Footer.css";
import meGods from "../../assets/meRem.png"


function Footer() {
  return (
    <div className="Footer_main px-10 py-5 border-[#D1D1D1] border-t-1 border">
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-4">
            <div className="min-w-md mt-10 md:mt-10">
              <a
                className="d-flex justify-content-center items-center text-2xl gap-2"
                href="/"
              >
                <img src={meGods} width="100" alt="" />
              </a>
              <div className="footer_txxt">
              <div className="max-w-xs lg:max-w-sm  text-gray-500 mt-5 mb-10">
                DeGods is a digital art collection and global community of
                creators, developers, entrepreneurs, athletes, artists,
                experimenters and innovators.
              </div>
              </div>
            </div>
          </div> */}

          <div className=" follow_main">
            <div className="flex flex-col justify-center items-center  lg:w-1/4">
              {/* <h4 className="text-2xl mb-4">Follow Us</h4> */}
              <div className="flex flex-row gap-4 content-start">
                <a
                  href="https://discord.gg/dexyz"
                  target="_blank"
                  rel="noreferrer"
                  className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 text-black"
                >
                  <BsDiscord className="fs-2 ms-3" />
                </a>
                <a
                  href="https://twitter.com/DeGodsNFT"
                  target="_blank"
                  rel="noreferrer"
                  className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 text-black"
                >
                  <BsTwitter className="fs-2 ms-3" />
                </a>
                <a
                  href="https://www.instagram.com/thedegods/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 text-black"
                >
                  <SiGitbook className="fs-2 ms-3" />
                </a>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Footer;
