import React from "react";
import Hexagon from "react-hexagon";

const BrandWeWorkSmallCard = (props) => {
  const { brand } = props.logo;

  return (
    <div style={{ marginRight: "15px" }}>
      <Hexagon
        flatTop
        style={{ stroke: "white", strokeWidth: "33", strokeLinejoin: "round" }}
        backgroundImage={brand}
        backgroundScale={1.12}
      />
    </div>
  );
};

export default BrandWeWorkSmallCard;
