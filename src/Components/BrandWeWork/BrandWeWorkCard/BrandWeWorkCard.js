import React from "react";
import "./BrandWeWorkCard.css";
import Hexagon from "react-hexagon";
import shadow from "../../../Assets/brand_we_build_assets/Polygon 1192.png";
import shadow2 from "../../../Assets/brand_we_build_assets/Polygon 1194.png";

const BrandWeWorkCard = (props) => {
  const { brand, className } = props.logo;

  return (
    <>
      {props.i % 2 === 0 ? (
        <div className={`box1_hexagon ${className}`}>
          <div>
            <Hexagon
              flatTop
              style={{
                stroke: "white",
                strokeWidth: "35",
                strokeLinejoin: "round",
              }}
              backgroundImage={brand}
              backgroundScale={1.12}
            />
          </div>
          <div>
            <img src={shadow} alt="" />
          </div>
        </div>
      ) : (
        <div className="box2_hexagon">
          <div>
            <Hexagon
              flatTop
              style={{
                stroke: "white",
                strokeWidth: "35",
                strokeLinejoin: "round",
              }}
              backgroundImage={brand}
              backgroundScale={1.12}
            />
          </div>
          <div>
            <img src={shadow2} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default BrandWeWorkCard;
