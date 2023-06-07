import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="position-relative" id="About">
      <div className="header-sections pt-5">
        <h2>About Us</h2>
      </div>
        <img
          alt="Paper Top"
          loading="lazy"
          decoding="async"
          data-nimg={1}
          className="w-100 -mb-1"
          srcSet="https://powered.by.dustlabs.com/cdn-cgi/image/width=3840/https://degods.com/degods/paper_top_light.png 1x"
          src="https://powered.by.dustlabs.com/cdn-cgi/image/width=3840/https://degods.com/degods/paper_top_light.png"
          style={{ color: "transparent" }}
        />
      </div>
      <div className="About_main">
        <div className="container">
          <div className="row">
            <h2 className="about_heading">
              We f*cked up and made original art <br className="about_br"/> instead of another
              derivative.
            </h2>

            <div className="position-relative  pt-4 overflow-x-hidden">
              <div className="position-absolute more right-8 top-4">
                <svg
                  className="fill-[#6100FF] dark:fill-[#A771FF]"
                  width={81}
                  height={13}
                  viewBox="0 0 81 13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.94195 3.86418C1.94195 3.75218 1.94195 3.64018 1.95795 3.49618C2.22995 4.20018 2.62995 5.33618 2.90195 5.91218C3.18995 6.53618 3.47795 7.32018 3.78195 7.91218C3.97395 8.24818 4.14995 8.60018 4.37395 8.98418C4.56595 9.30418 4.74195 9.70418 4.94995 10.0562C4.98195 10.1202 5.10995 10.6002 5.60595 10.7602C6.34195 11.0002 6.67795 10.2642 6.74195 9.83218C6.85395 9.33618 6.86995 9.14418 6.94995 8.47218C7.06195 7.41618 7.26995 6.48818 7.50995 5.54418C7.65395 4.92018 7.81395 4.31218 7.98995 3.68818C8.13395 5.20818 8.32595 6.85618 8.42195 8.39218C8.45395 9.14418 8.58195 9.92818 8.58195 10.6162C8.58195 10.7122 8.59795 10.8242 8.59795 10.9042V11.6242C8.59795 11.9922 8.86995 12.3442 9.30195 12.3442C9.68595 12.3442 10.022 12.0082 10.022 11.6242V10.9042C10.022 10.7922 10.006 10.6962 9.98995 10.5522C9.98995 10.4722 9.98995 10.3122 9.97395 10.2162C9.87795 9.35218 9.87795 8.52018 9.76595 7.54418C9.62195 5.35218 9.38195 3.19218 9.09395 1.08018C9.06195 0.69618 8.75795 0.44018 8.56595 0.32818C7.98995 0.00818022 7.65395 0.68018 7.57395 0.80818C7.47795 0.96818 7.41395 1.12818 7.38195 1.24018C7.15795 1.65618 7.01395 2.08818 6.86995 2.60018C6.69395 3.11218 6.53395 3.62418 6.37395 4.21618C6.05395 5.51218 5.73395 6.71218 5.55795 8.18418C5.50995 8.08818 5.42995 7.97618 5.38195 7.84818L5.04595 7.22418C4.93395 7.03218 4.82195 6.79218 4.69395 6.45618C4.32595 5.56018 3.97395 4.90418 3.62195 3.92818C3.30195 3.00018 3.09395 2.56818 2.83795 1.84818C2.74195 1.56018 2.67795 1.17618 2.32595 0.872181C1.78195 0.424181 1.07795 0.82418 0.901953 1.35218C0.613953 2.31218 0.501953 3.40018 0.501953 4.60018V11.0802C0.501953 11.4802 0.805953 11.8002 1.20595 11.8002C1.60595 11.8002 1.92595 11.4802 1.92595 11.0802V4.60018C1.92595 4.34418 1.94195 4.10418 1.94195 3.86418Z" />
                  <path d="M15.4548 4.36018C15.7268 4.42418 16.0308 4.52018 16.2388 4.61618C16.9428 5.00018 17.4868 5.60818 17.5988 6.60018C17.6308 7.04818 17.6788 7.27218 17.5988 7.59218C17.3268 8.52018 16.8948 9.36818 16.2228 9.70418C15.7908 9.94418 15.0068 10.0082 14.1908 10.0082C13.9828 10.0082 13.7268 9.97618 13.4388 9.89618C12.6388 9.67218 12.2068 9.16018 12.2068 8.05618C12.2068 7.86418 12.2228 7.67218 12.2548 7.51218C12.3828 6.79218 12.6068 6.12018 12.9428 5.65618C13.2148 5.24018 13.4388 4.96818 13.8068 4.76018C14.2868 4.55218 14.6548 4.40818 15.2148 4.37618L15.4548 4.36018ZM16.4628 2.93618H15.6628C15.6148 2.93618 15.6308 2.92018 15.5508 2.93618C15.3908 2.88818 15.0708 2.79218 14.7508 2.98418C14.6868 3.00018 14.5908 3.01618 14.4948 3.03218C13.6948 3.20818 12.9108 3.51218 12.3348 4.12018C11.9188 4.56818 11.5508 5.09618 11.2788 5.73618C11.0228 6.44018 10.7828 7.11218 10.7828 8.07218C10.7828 10.1362 12.1428 11.4482 14.1908 11.4482C14.8308 11.4482 15.4868 11.3842 16.0148 11.2722C17.6948 10.9362 18.6388 9.46418 18.9748 7.92818C19.1028 7.40018 19.0548 6.95218 19.0068 6.45618C18.8308 5.08018 18.1748 4.10418 17.1668 3.51218C17.0868 3.19218 16.8148 2.93618 16.4628 2.93618Z" />
                  <path d="M19.877 9.46418V10.8402C19.877 11.5762 20.581 11.2402 20.581 11.2402C20.581 11.2402 21.301 11.5762 21.301 10.8402V10.5522C21.301 9.52818 21.349 8.56818 21.429 7.54418L21.461 7.36818C21.493 7.16018 21.493 6.96818 21.525 6.74418C21.621 6.02418 21.701 5.16018 21.893 4.58418C22.021 4.23218 22.101 3.96018 22.325 3.84818C22.325 3.84818 22.341 3.84818 22.357 3.84818C22.357 3.84818 22.453 3.89618 22.517 3.91218C22.917 4.05618 23.285 4.44018 23.701 4.82418L23.717 4.84018L23.861 4.95218C24.533 5.59218 25.541 4.50418 24.789 3.88018L24.645 3.76818C24.453 3.57618 24.197 3.32018 23.941 3.11218C23.573 2.84018 22.965 2.34418 22.133 2.44018C21.829 2.45618 21.589 2.61618 21.381 2.77618C21.285 2.58418 21.045 2.37618 20.757 2.37618C20.373 2.37618 20.037 2.66418 20.037 3.08018V5.22418C20.037 6.64818 19.877 8.05618 19.877 9.46418Z" />
                  <path d="M28.2937 6.10418C28.5977 5.00018 29.0937 4.24818 30.0057 3.89618C30.6617 3.64018 31.8137 3.59218 32.7417 3.73618C32.8857 3.75218 32.9337 3.76818 33.0137 3.78418C33.0937 4.15218 33.0937 4.24818 33.0457 4.71218C32.9177 5.72018 32.4377 6.12018 31.1897 6.15218C30.1977 6.18418 29.2377 6.16818 28.2937 6.10418ZM28.0057 7.51218C28.1497 7.51218 28.3737 7.52818 28.5817 7.52818C29.4617 7.57618 30.2777 7.60818 31.2377 7.56018C32.6937 7.51218 33.6537 7.01618 34.1657 5.89618C34.5017 5.17618 34.8217 3.52818 34.0057 2.76018C33.5097 2.24818 32.4377 2.24818 31.7817 2.23218C30.9177 2.23218 30.1657 2.28018 29.4777 2.56818C28.6457 2.90418 28.0217 3.44818 27.5417 4.20018C27.2377 4.71218 27.0457 5.28818 26.8857 5.88018C26.1817 5.49618 25.4137 6.50418 26.1017 7.08018C26.2297 7.17618 26.3737 7.25618 26.5977 7.33618C26.5177 7.97618 26.5817 8.42418 26.6937 9.11218C26.7737 9.56018 26.9337 9.96018 27.1897 10.2962C27.7657 11.0482 28.9657 11.3362 30.1817 11.0322C31.1737 10.7602 32.0857 10.5522 32.9177 10.0562L33.4137 9.75218C34.2297 9.24018 33.4457 8.07218 32.6777 8.52018L32.1817 8.82418C31.5257 9.20818 30.7737 9.40018 29.8137 9.64018C29.3817 9.76818 29.0617 9.76818 28.8057 9.68818C28.2937 9.52818 28.2137 9.43218 28.0857 8.85618C27.9897 8.23218 27.9417 8.02418 28.0057 7.51218Z" />
                  <path d="M74.2048 6.27751C72.9674 5.5072 72.0231 4.91197 71.1113 4.35174C70.7857 4.14166 70.4601 3.9666 70.167 3.7215C69.7437 3.40637 69.1576 3.05623 69.4832 2.39096C69.8088 1.76071 70.4275 2.04083 70.8834 2.2159C71.3718 2.35595 71.8603 2.63607 72.3162 2.88116C74.4327 3.96659 76.5493 5.08704 78.6333 6.20748C79.1869 6.52261 79.773 6.80272 80.2614 7.22289C81.3034 8.06322 81.2383 8.90355 80.0986 9.5338C78.5682 10.3741 77.0052 11.1444 75.4422 11.9147C74.7909 12.2649 74.1071 12.615 73.4233 12.8601C73.0325 13.0002 72.5767 12.9652 72.1534 13.0002C72.0231 12.0198 72.5441 11.8097 73 11.5646C74.1397 10.8993 75.3119 10.2691 76.4516 9.60383C76.8424 9.35873 77.2657 9.11364 77.6564 8.55341C77.0703 8.48338 76.5167 8.37835 75.9306 8.34333C71.5347 8.09823 67.1713 7.85313 62.7753 7.60804C56.3931 7.2579 50.0434 6.90776 43.6611 6.52261C43.1401 6.48759 42.6191 6.27751 42.0004 6.10244C42.5865 5.15706 43.2703 5.36715 43.8239 5.40216C46.9499 5.47219 50.1085 5.61225 53.2345 5.71729C59.9749 5.96239 66.7154 6.20748 73.4558 6.45258C73.6187 6.41756 73.7163 6.38255 74.2048 6.27751Z" />
                </svg>
              </div>
              <div
                className="d-flex hero_slide overflow-x-scroll gap-3 lg:gap-6 mb-4 lg:ml-10 xl:ml-20 py-5 px-5 lg:px-0
    scrollbar-none pb-8"
              >
                <div className="d-flex flex-column flex-shrink-0 justify-content-center align-items-center items-center border-2 border-black shadow-sm ">
                  <img
                    alt="original-art-0"
                    fetchpriority="high"
                    width={200}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className=""
                    srcSet="https://powered.by.dustlabs.com/cdn-cgi/image/width=256/https://degods.com/degods/fire/FTQLS7xXoAIbpbk.jpeg 1x, https://powered.by.dustlabs.com/cdn-cgi/image/width=640/https://degods.com/degods/fire/FTQLS7xXoAIbpbk.jpeg 2x"
                    src="https://powered.by.dustlabs.com/cdn-cgi/image/width=640/https://degods.com/degods/fire/FTQLS7xXoAIbpbk.jpeg"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="d-flex flex-column flex-shrink-0 justify-content-center align-items-center items-center border-2 border-black shadow-sm">
                  <img
                    alt="original-art-1"
                    fetchpriority="high"
                    width={200}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className=""
                    srcSet="https://powered.by.dustlabs.com/cdn-cgi/image/width=256/https://degods.com/degods/fire/3491-dead.png 1x, https://powered.by.dustlabs.com/cdn-cgi/image/width=640/https://degods.com/degods/fire/3491-dead.png 2x"
                    src="https://powered.by.dustlabs.com/cdn-cgi/image/width=640/https://degods.com/degods/fire/3491-dead.png"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="d-flex flex-column flex-shrink-0 justify-content-center align-items-center items-center border-2 border-black shadow-sm">
                  <img
                    alt="original-art-2"
                    fetchpriority="high"
                    width={200}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className=""
                    srcSet="https://powered.by.dustlabs.com/cdn-cgi/image/width=256/https://degods.com/degods/fire/4644-dead.png 1x, https://powered.by.dustlabs.com/cdn-cgi/image/width=640/https://degods.com/degods/fire/4644-dead.png 2x"
                    src="https://powered.by.dustlabs.com/cdn-cgi/image/width=640/https://degods.com/degods/fire/4644-dead.png"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="d-flex flex-column flex-shrink-0 justify-content-center align-items-center items-center border-2 border-black shadow-sm">
                  <img
                    alt="original-art-3"
                    fetchpriority="high"
                    width={200}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className=""
                    srcSet="https://powered.by.dustlabs.com/cdn-cgi/image/width=256/https://degods.com/degods/fire/7526-dead.png 1x, https://powered.by.dustlabs.com/cdn-cgi/image/width=640/https://degods.com/degods/fire/7526-dead.png 2x"
                    src="https://powered.by.dustlabs.com/cdn-cgi/image/width=640/https://degods.com/degods/fire/7526-dead.png"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="d-flex flex-column flex-shrink-0 justify-content-center align-items-center items-center border-2 border-black shadow-sm">
                  <img
                    alt="original-art-4"
                    fetchpriority="high"
                    width={200}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className=""
                    srcSet="https://powered.by.dustlabs.com/cdn-cgi/image/width=256/https://degods.com/degods/fire/2115-dead.png 1x, https://powered.by.dustlabs.com/cdn-cgi/image/width=640/https://degods.com/degods/fire/2115-dead.png 2x"
                    src="https://powered.by.dustlabs.com/cdn-cgi/image/width=640/https://degods.com/degods/fire/2115-dead.png"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="d-flex flex-column flex-shrink-0 justify-content-center align-items-center items-center border-2 border-black shadow-sm">
                  <img
                    alt="original-art-5"
                    fetchpriority="high"
                    width={200}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className=""
                    srcSet="https://powered.by.dustlabs.com/cdn-cgi/image/width=256/https://degods.com/degods/fire/1596-dead.png 1x, https://powered.by.dustlabs.com/cdn-cgi/image/width=640/https://degods.com/degods/fire/1596-dead.png 2x"
                    src="https://powered.by.dustlabs.com/cdn-cgi/image/width=640/https://degods.com/degods/fire/1596-dead.png"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="d-flex flex-column flex-shrink-0 justify-content-center align-items-center items-center border-2 border-black shadow-sm">
                  <img
                    alt="original-art-6"
                    fetchpriority="high"
                    width={200}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className=""
                    srcSet="https://powered.by.dustlabs.com/cdn-cgi/image/width=256/https://degods.com/degods/fire/1597-dead.png 1x, https://powered.by.dustlabs.com/cdn-cgi/image/width=640/https://degods.com/degods/fire/1597-dead.png 2x"
                    src="https://powered.by.dustlabs.com/cdn-cgi/image/width=640/https://degods.com/degods/fire/1597-dead.png"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="d-flex flex-column flex-shrink-0 justify-content-center align-items-center items-center border-2 border-black shadow-sm">
                  <img
                    alt="original-art-7"
                    fetchpriority="high"
                    width={200}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className=""
                    srcSet="https://powered.by.dustlabs.com/cdn-cgi/image/width=256/https://degods.com/degods/fire/808-dead.png 1x, https://powered.by.dustlabs.com/cdn-cgi/image/width=640/https://degods.com/degods/fire/808-dead.png 2x"
                    src="https://powered.by.dustlabs.com/cdn-cgi/image/width=640/https://degods.com/degods/fire/808-dead.png"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="d-flex flex-column flex-shrink-0 justify-content-center align-items-center items-center border-2 border-black shadow-sm">
                  <img
                    alt="original-art-8"
                    fetchpriority="high"
                    width={200}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className=""
                    srcSet="https://powered.by.dustlabs.com/cdn-cgi/image/width=256/https://degods.com/degods/fire/6475-dead.png 1x, https://powered.by.dustlabs.com/cdn-cgi/image/width=640/https://degods.com/degods/fire/6475-dead.png 2x"
                    src="https://powered.by.dustlabs.com/cdn-cgi/image/width=640/https://degods.com/degods/fire/6475-dead.png"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-relative">
        <img
          alt="Paper Top"
          loading="lazy"
          decoding="async"
          data-nimg={1}
          className="w-100 -mb-1"
          srcSet="https://powered.by.dustlabs.com/cdn-cgi/image/width=3840/https://degods.com/degods/paper_bottom_light.png 1x"
          src="https://powered.by.dustlabs.com/cdn-cgi/image/width=3840/https://degods.com/degods/paper_bottom_light.png"
          style={{ color: "transparent" }}
        />
      </div>
    </>
  );
}

export default About;
