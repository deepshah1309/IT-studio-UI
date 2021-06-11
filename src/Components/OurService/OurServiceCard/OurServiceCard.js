import React from "react";
import "./OurServiceCard.css";

const OurServiceCard = (props) => {
  const { tittle, icon } = props.service;
  return (
    <div className="ourService_card_box">
      <h2>{tittle}</h2>
      <img src={icon} alt="" />
    </div>
  );
};

export default OurServiceCard;
