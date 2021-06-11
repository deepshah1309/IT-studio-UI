import React from "react";
import "../WeBuildCard/WeBuildCard.css";

const WebuildCard = (props) => {
  const { tittle, icon } = props.data;
  console.log(icon);
  return (
    <div className="card_box">
      <h2>{tittle}</h2>
      <img src={icon} alt="" />
    </div>
  );
};

export default WebuildCard;