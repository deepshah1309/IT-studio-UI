import React from "react";
import "./OurServiceCard.css";

const OurServiceCard = (props) => {
  const { tittle, icon, classBox } = props.service;
  return (
    <div className={classBox}>
      <h2>{tittle}</h2>
      <img src={icon} alt="" />
    </div>
  );
};

export default OurServiceCard;
