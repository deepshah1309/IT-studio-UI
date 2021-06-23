import React from "react";
import "./BrandWeWork.css";
import Hexagon from "react-hexagon";
import shadow from "../../../Assets/brand_we_build_assets/Polygon 119.png";
import company from "../../../Assets/brand_we_build_assets/Polygon 109.png";

const BrandWeWork = () => {
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
          <div className="box1_hexagon">
            <div>
              <Hexagon
                flatTop
                style={{ stroke: "" }}
                backgroundImage={company}
              />
            </div>
            <div>
              <img src={shadow} alt="" />
            </div>
          </div>
          <div className="box2_hexagon">
            <div>
              <Hexagon
                flatTop
                style={{ stroke: "" }}
                backgroundImage={company}
              />
            </div>
            <div>
              <img src={shadow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandWeWork;
