import React, { useEffect, useState } from "react";

import "react-multi-carousel/lib/styles.css";
import "./BrandWeWork.css";
import data from "./BrandWeWorkData";
import BrandWeWorkCard from "../BrandWeWorkCard/BrandWeWorkCard";
import BrandWeWorkSmallCard from "../BrandWeWorkCard/BrandWeWorkSmallCard";
import polygon from "../../../Assets/brand_we_build_assets/Path 15562.png";
import polygon2 from "../../../Assets/brand_we_build_assets/Path 15563.png";
import polygon3 from "../../../Assets/brand_we_build_assets/Path 15564.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const BrandWeWork = () => {
  const [mobileView, setMobileView] = useState({ width: window.innerWidth });

  const handleWindowSizeChange = () => {
    setMobileView({ width: window.innerWidth });
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
  }, []);

  let isTrue = mobileView.width <= 768;

  return (
    <section className="brand_we_work_main_box">
      <div className="brand_we_work_contain">
        <h2>Brand We Work With</h2>
        <p>
          Brands Fullfilling There Needs And Flying To The Next Level Of
          Expectation With Us
        </p>
      </div>
      <div>
        <div className="brand_hexagon_box">
          {data.map((logo, i) => (
            <BrandWeWorkCard logo={logo} i={i} key={logo.id} />
          ))}
        </div>

        {isTrue && (
          <div className="brand_hexagon_box_small">
            <div className="small_box_1">
              <img src={polygon} alt="" />
            </div>
            <div className="small_box_2">
              <img src={polygon} alt="" />
            </div>
            <div className="small_box_3">
              <img src={polygon2} alt="" />
            </div>
            <div className="small_box_4">
              <img src={polygon2} alt="" />
            </div>
            <div className="small_box_5">
              <img src={polygon3} alt="" />
            </div>
            <div className="small_box_6">
              <img src={polygon3} alt="" />
            </div>
            <div className="small_box_7">
              <Carousel
                showArrows={false}
                autoPlay={true}
                showStatus={false}
                showIndicators={false}
                swipeAble={true}
                stopOnHover={true}
              >
                {data.map((logo, i) => (
                  <BrandWeWorkSmallCard logo={logo} i={i} key={logo.id} />
                ))}
              </Carousel>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BrandWeWork;
