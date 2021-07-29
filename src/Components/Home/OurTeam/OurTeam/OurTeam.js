import React from "react";
import HexGrid from "../HexGrid/HexGrid";
import "./OurTeam.css";

const OurTeam = () => {
  return (
    <div>
      <div className="our_team_main">
        <h2>OUR TEAM</h2>
        <p>
          Our wonderful team makes it possible for us to do the things we do.
        </p>
      </div>
      <div style={{ marginBottom: "200px" }}>
        <HexGrid />
      </div>
    </div>
  );
};

export default OurTeam;
