import React from "react";
import "./BrandWeWorkCard.css";
import Hexagon from "react-hexagon";
import shadow from "../../../Assets/brand_we_build_assets/Polygon 1192.png";
import shadow2 from "../../../Assets/brand_we_build_assets/Polygon 1194.png";

const BrandWeWorkCard = (props) => {
  const { brand1, brand2 } = props.logo;
  return (
    <>
      <div className="box1_hexagon">
        <div>
          <Hexagon
            flatTop
            style={{ stroke: "" }}
            backgroundImage={brand1}
            backgroundScale={1.12}
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
            backgroundImage={brand2}
            backgroundScale={1.12}
          />
        </div>
        <div>
          <img src={shadow2} alt="" />
        </div>
      </div>
    </>
  );
};

export default BrandWeWorkCard;
