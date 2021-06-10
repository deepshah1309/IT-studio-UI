import React from "react";
import brand from "../../Image-Assets/weBuilt_assests/brand.png";
import design from "../../Image-Assets/weBuilt_assests/design.png";
import experience from "../../Image-Assets/weBuilt_assests/experience.png";
import software from "../../Image-Assets/weBuilt_assests/software.png";
import "./WeBuild.css";

const WeBuild = () => {
  return (
    <section className="weBuild_container">
      <div className="weBuild_header_box">
        <h2>We Build</h2>
      </div>
      <div className="weBuild_main_box">
        <div className="card_box">
          <h2>Brand Interface</h2>
          <img src={brand} alt="" />
        </div>
        <div className="card_box">
          <h2>Software Development</h2>
          <img src={software} alt="" />
        </div>
        <div className="card_box">
          <h2>Digital Design</h2>
          <img src={design} alt="" />
        </div>
        <div className="card_box">
          <h2>Experience Design</h2>
          <img src={experience} alt="" />
        </div>
      </div>
    </section>
  );
};

export default WeBuild;
