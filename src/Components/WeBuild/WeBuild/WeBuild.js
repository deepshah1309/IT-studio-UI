import React from "react";
import brand from "../../../Assets/weBuilt_assests/brand.png";
import design from "../../../Assets/weBuilt_assests/design.png";
import experience from "../../../Assets/weBuilt_assests/experience.png";
import software from "../../../Assets/weBuilt_assests/software.png";
import WebuildCard from "../WeBuildCard/WebuildCard";

import "./WeBuild.css";
const WeBuildData = [
  {
    id: "1",
    tittle: "Brand Interface",
    icon: brand,
  },
  {
    id: "2",
    tittle: "Software Development",
    icon: software,
  },
  {
    id: "3",
    tittle: "Digital Design",
    icon: design,
  },
  {
    id: "4",
    tittle: "Experience Design",
    icon: experience,
  },
];
const WeBuild = () => {
  return (
    <section className="weBuild_container">
      <div className="weBuild_header_box">
        <h2>We Build</h2>
      </div>
      <div className="weBuild_main_box">
        {WeBuildData.map((data) => (
          <WebuildCard key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
};

export default WeBuild;
