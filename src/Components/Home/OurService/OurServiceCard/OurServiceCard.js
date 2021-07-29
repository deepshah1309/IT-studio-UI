import React from "react";
import "./OurServiceCard.css";

const OurServiceCard = (props) => {
  const { tittle, icon, classBox } = props.service;
  return (
    <div className={classBox}>
      <div className="our_service_content_box">
        <h2>{tittle}</h2>
        <img src={icon} alt={tittle} />
      </div>
      <div className="card_box_section_overlay">
        <p>
          No Successful Website Build Is An Accident. From The Technology,
          Assembling Thr Right Team, Every Aspect Of The Effort Requires
          Planing, Communication, And Experience.
        </p>
      </div>
    </div>
  );
};

export default OurServiceCard;
