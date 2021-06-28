import React from "react";
import "./BrandWeWork.css";
import data from "./BrandWeWorkData";
import BrandWeWorkCard from "../BrandWeWorkCard/BrandWeWorkCard";

const BrandWeWork = () => {
  return (
    <section className="brand_we_work_main_box">
      <div className="brand_we_work_contain">
        <h2>Brand We Work With</h2>
        <p>
          Brands Fullfilling There Needs And Flying To The Next Level Of
          Expectation With Us
        </p>
      </div>
      <div>
        <div className="brand_hexagon_box">
          {data.map((logo) => (
            <BrandWeWorkCard logo={logo} key={logo.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandWeWork;
