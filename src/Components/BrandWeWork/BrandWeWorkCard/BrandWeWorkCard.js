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
            backgroundImage={
              "https://png.pngtree.com/element_pic/00/16/09/2057e0eecf792fb.jpg"
            }
            backgroundScale={1.35}
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
            backgroundImage={
              "https://png.pngtree.com/element_pic/00/16/07/06577d261edb9ec.jpg"
            }
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
