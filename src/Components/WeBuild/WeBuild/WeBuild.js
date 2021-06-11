import React from "react";
import brand from "../../../Image-Assets/weBuilt_assets/brand.png";
import design from "../../../Image-Assets/weBuilt_assets/design.png";
import experience from "../../../Image-Assets/weBuilt_assets/experience.png";
import software from "../../../Image-Assets/weBuilt_assets/software.png";
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
