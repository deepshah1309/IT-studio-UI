import React from "react";
import Hexagon from "react-hexagon";

const BrandWeWorkSmallCard = (props) => {
  const { brand } = props.logo;

  return (
    <div>
      <Hexagon
        flatTop
        style={{ stroke: "" }}
        backgroundImage={brand}
        backgroundScale={1.12}
      />
    </div>
  );
};

export default BrandWeWorkSmallCard;
