import React from "react";
import OurServiceData from "./ourServiceData";
import OurServiceCard from "../OurServiceCard/OurServiceCard";
import "../OurService/OurService.css";

const OurService = () => {
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
        {OurServiceData.map((service) => (
          <OurServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default OurService;
