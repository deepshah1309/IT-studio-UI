import React from "react";
import "./WeBuildSectionCard.css";

const WeBuildSectionCard = (props) => {
  const { tittle, icon } = props.data;

  return (
    <div className="card_box_section">
      <h2>{tittle}</h2>
      <img src={icon} alt="" />
    </div>
  );
};

export default WeBuildSectionCard;
