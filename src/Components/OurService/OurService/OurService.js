import React from "react";
import OurServiceData from "./ourServiceData";
import OurServiceCard from "../OurServiceCard/OurServiceCard";
import "../OurService/OurService.css";

const OurService = () => {
  const leftSide = OurServiceData.slice(0, 2);
  const midOne = OurServiceData.slice(2, 5);
  const midTwo = OurServiceData.slice(5, 8);
  const rightSide = OurServiceData.slice(8, 10);
  return (
    <section className="ourService_container">
      <div className="ourService_content_box">
        <h2>OUR SERVICE</h2>
        <p>
          here what people see through us ,people satisfied there need only with
          our candy hand
        </p>
      </div>
      <div className="ourService_card_main_box">
        <div className="ourService_card_main_box_left">
          {leftSide.map((service) => (
            <OurServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="ourService_card_main_box_midOne">
          {midOne.map((service) => (
            <OurServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="ourService_card_main_box_midTwo">
          {midTwo.map((service) => (
            <OurServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="ourService_card_main_box_rightSide">
          {rightSide.map((service) => (
            <OurServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
