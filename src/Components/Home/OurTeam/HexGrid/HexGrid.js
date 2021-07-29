import Hexagonal from "../Hexagonal/Hexagonal";
import "./HexGrid.css";

// import CoreTeanImg1 from "../../assets/coreteam/core1.svg";
// import CoreTeamImg2 from "../../assets/coreteam/core2.png";
// import CoreTeamImg3 from "../../assets/coreteam/core3.png";
// import CoreTeamImg4 from "../../assets/coreteam/core4.svg";
import CoreTeamImg5 from "./Core5.svg";
const HexGrid = () => {
  const person = "hello everyone";
  const handleCoreTeamClick = (event) => {
    if (event.target.classList[2] === "core") {
      var juniorBackground = document.querySelector(".junior");
      var coreBackground = document.querySelector(".core");
      var seniorBackground = document.querySelector(".seniors");
      var internBackground = document.querySelector(".intern");

      coreBackground.style.backgroundColor = "#00c1fe";
      seniorBackground.style.backgroundColor = "";
      juniorBackground.style.backgroundColor = "";
      internBackground.style.backgroundColor = "";
    }
    if (event.target.classList[1]) {
      var coreContainer = document.querySelectorAll(".coreContainer");
      var seniorContainer = document.querySelectorAll(".seniorContainer");
      var juniorContainer = document.querySelectorAll(".juniorContainer");
      var internContainer = document.querySelectorAll(".internContainer");

      for (let index = 0; index < internContainer.length; index++) {
        const element = internContainer[index];
        element.style.opacity = "0.20";
      }
      for (let i = 0; i < seniorContainer.length; i++) {
        const element = seniorContainer[i];

        element.style.opacity = "0.20";
      }
      for (let index = 0; index < juniorContainer.length; index++) {
        const element = juniorContainer[index];
        element.style.opacity = "0.20";
      }
      //       console.log(seniorContainer.children.length);
      for (let index = 0; index < coreContainer.length; index++) {
        const element = coreContainer[index];
        element.style.opacity = "1";
      }
    }
  };
  const handleSeniorTeamClick = (event) => {
    if (event.target.classList[2] === "seniors") {
      var juniorBackground = document.querySelector(".junior");
      var seniorBackground = document.querySelector(".seniors");
      var coreBackground = document.querySelector(".core");
      var internBackground = document.querySelector(".intern");

      seniorBackground.style.backgroundColor = "#00c1fe";
      coreBackground.style.backgroundColor = "";
      juniorBackground.style.backgroundColor = "";
      internBackground.style.backgroundColor = "";
    }
    if (event.target.classList[1]) {
      var juniorContainer = document.querySelectorAll(".juniorContainer");
      var seniorContainer = document.querySelectorAll(".seniorContainer");
      var coreContainer = document.querySelectorAll(".coreContainer");
      var internContainer = document.querySelectorAll(".internContainer");

      for (let index = 0; index < internContainer.length; index++) {
        const element = internContainer[index];
        element.style.opacity = "0.2";
      }

      for (let index = 0; index < juniorContainer.length; index++) {
        const element = juniorContainer[index];
        element.style.opacity = "0.2";
      }
      for (let index = 0; index < coreContainer.length; index++) {
        const element = coreContainer[index];
        element.style.opacity = "0.2";
      }
      //       console.log(seniorContainer.children.length);
      for (let index = 0; index < seniorContainer.length; index++) {
        const element = seniorContainer[index];
        element.style.opacity = "1";
      }
    }
  };
  const handleJuniorTeamClick = (event) => {
    if (event.target.classList[2] === "junior") {
      var juniorBackground = document.querySelector(".junior");
      var seniorBackground = document.querySelector(".seniors");
      var coreBackground = document.querySelector(".core");
      var internBackground = document.querySelector(".intern");

      juniorBackground.style.backgroundColor = "#00c1fe";
      seniorBackground.style.backgroundColor = "";
      coreBackground.style.backgroundColor = "";
      internBackground.style.backgroundColor = "";
    }
    if (event.target.classList[1]) {
      var juniorContainer = document.querySelectorAll(".juniorContainer");
      var seniorContainer = document.querySelectorAll(".seniorContainer");
      var coreContainer = document.querySelectorAll(".coreContainer");
      var internContainer = document.querySelectorAll(".internContainer");

      for (let index = 0; index < internContainer.length; index++) {
        const element = internContainer[index];
        element.style.opacity = "0.2";
      }

      for (let index = 0; index < juniorContainer.length; index++) {
        const element = juniorContainer[index];
        element.style.opacity = "1";
      }
      for (let index = 0; index < coreContainer.length; index++) {
        const element = coreContainer[index];
        element.style.opacity = "0.2";
      }
      //       console.log(seniorContainer.children.length);
      for (let index = 0; index < seniorContainer.length; index++) {
        const element = seniorContainer[index];
        element.style.opacity = "0.2";
      }
    }
  };
  const handleInternTeamClick = (event) => {
    if (event.target.classList[2] === "intern") {
      var internBackground = document.querySelector(".intern");
      var juniorBackground = document.querySelector(".junior");
      var seniorBackground = document.querySelector(".seniors");
      var coreBackground = document.querySelector(".core");

      internBackground.style.backgroundColor = "#00c1fe";
      juniorBackground.style.backgroundColor = "";
      seniorBackground.style.backgroundColor = "";
      coreBackground.style.backgroundColor = "";
    }
    if (event.target.classList[1]) {
      var internContainer = document.querySelectorAll(".internContainer");
      var juniorContainer = document.querySelectorAll(".juniorContainer");
      var seniorContainer = document.querySelectorAll(".seniorContainer");
      var coreContainer = document.querySelectorAll(".coreContainer");

      for (let index = 0; index < internContainer.length; index++) {
        const element = internContainer[index];
        element.style.opacity = "1";
      }
      for (let index = 0; index < juniorContainer.length; index++) {
        const element = juniorContainer[index];
        element.style.opacity = "0.2";
      }
      for (let index = 0; index < coreContainer.length; index++) {
        const element = coreContainer[index];
        element.style.opacity = "0.2";
      }
      //       console.log(seniorContainer.children.length);
      for (let index = 0; index < seniorContainer.length; index++) {
        const element = seniorContainer[index];
        element.style.opacity = "0.2";
      }
    }
  };
  return (
    <div className="hex-container">
      <div className="hex-grid-row">
        <Hexagonal id="internContainer" image={CoreTeamImg5} />
        <Hexagonal id="internContainer" image={CoreTeamImg5} />
        <Hexagonal id="internContainer" image={CoreTeamImg5} />
        <Hexagonal id="internContainer" image={CoreTeamImg5} />
        <Hexagonal id="internContainer" image={CoreTeamImg5} />
        <Hexagonal id="internContainer" image={CoreTeamImg5} />
        <Hexagonal />
      </div>
      <div className="hex-grid-row box2">
        <Hexagonal id="internContainer" image={CoreTeamImg5} />
        <Hexagonal id="juniorContainer" image={CoreTeamImg5} />
        <Hexagonal id="juniorContainer" image={CoreTeamImg5} />
        <Hexagonal id="juniorContainer" image={CoreTeamImg5} />
        <Hexagonal id="juniorContainer" image={CoreTeamImg5} />
        <Hexagonal id="internContainer" image={CoreTeamImg5} />
        <Hexagonal />
      </div>
      <div className="hex-grid-row box1">
        <Hexagonal id="internContainer" image={CoreTeamImg5} />
        <Hexagonal id="juniorContainer" image={CoreTeamImg5} />
        <Hexagonal id="seniorContainer" image={CoreTeamImg5} />
        <Hexagonal id="seniorContainer" image={CoreTeamImg5} />
        <Hexagonal id="seniorContainer" image={CoreTeamImg5} />
        <Hexagonal id="juniorContainer" image={CoreTeamImg5} />
      </div>
      <div className="hex-grid-row box2">
        <Hexagonal id="juniorContainer" image={CoreTeamImg5} />
        <Hexagonal id="seniorContainer" image={CoreTeamImg5} />
        <Hexagonal id="coreContainer" image={CoreTeamImg5} />
        <Hexagonal id="coreContainer" image={CoreTeamImg5} />
        <Hexagonal id="seniorContainer" image={CoreTeamImg5} />
        <Hexagonal id="juniorContainer" image={CoreTeamImg5} />
      </div>
      <div className="hex-grid-row box1">
        <Hexagonal id="juniorContainer" image={CoreTeamImg5} />
        <Hexagonal id="seniorContainer" image={CoreTeamImg5} />
        <Hexagonal id="coreContainer" image={CoreTeamImg5} />
        <Hexagonal
          id="container junior"
          differ={true}
          onClick={handleJuniorTeamClick}
          differText="Junior Developer"
        />
        <Hexagonal id="coreContainer" image={CoreTeamImg5} />
        <Hexagonal id="seniorContainer" image={CoreTeamImg5} />
      </div>
      <div className="hex-grid-row box2">
        <Hexagonal id="seniorContainer" image={CoreTeamImg5} />
        <Hexagonal id="coreContainer" image={CoreTeamImg5} />
        <Hexagonal
          id="container core"
          onClick={handleCoreTeamClick}
          differ={true}
          differText="Core Team"
        />
        <Hexagonal
          id="container intern"
          differ={true}
          onClick={handleInternTeamClick}
          differText="Intern"
        />
        <Hexagonal id="coreContainer" image={CoreTeamImg5} />
        <Hexagonal
          id="seniorContainer"
          image={CoreTeamImg5}
          value={3}
          person={person}
        />
      </div>
      <div className="hex-grid-row box1">
        <Hexagonal id="juniorContainer" image={CoreTeamImg5} />
        <Hexagonal id="seniorContainer" image={CoreTeamImg5} />
        <Hexagonal id="coreContainer" image={CoreTeamImg5} />
        <Hexagonal
          id="container seniors"
          onClick={handleSeniorTeamClick}
          differ={true}
          differText="Seniors developer"
        />
        <Hexagonal id="coreContainer" image={CoreTeamImg5} />
        <Hexagonal id="seniorContainer" image={CoreTeamImg5} />
      </div>
      <div className="hex-grid-row box2">
        <Hexagonal id="juniorContainer" image={CoreTeamImg5} />
        <Hexagonal id="seniorContainer" image={CoreTeamImg5} />
        <Hexagonal id="coreContainer" image={CoreTeamImg5} />
        <Hexagonal id="coreContainer" image={CoreTeamImg5} />
        <Hexagonal id="seniorContainer" image={CoreTeamImg5} />
        <Hexagonal id="juniorContainer" image={CoreTeamImg5} />
      </div>
      <div className="hex-grid-row box1">
        <Hexagonal image={CoreTeamImg5} />
        <Hexagonal id="juniorContainer" image={CoreTeamImg5} />
        <Hexagonal id="seniorContainer" image={CoreTeamImg5} />
        <Hexagonal id="seniorContainer" image={CoreTeamImg5} />
        <Hexagonal id="seniorContainer" image={CoreTeamImg5} />
        <Hexagonal id="juniorContainer" image={CoreTeamImg5} />
      </div>
      <div className="hex-grid-row box2">
        <Hexagonal id="internContainer" image={CoreTeamImg5} />
        <Hexagonal id="juniorContainer" image={CoreTeamImg5} />
        <Hexagonal id="juniorContainer" image={CoreTeamImg5} />
        <Hexagonal id="juniorContainer" image={CoreTeamImg5} />
        <Hexagonal id="juniorContainer" image={CoreTeamImg5} />
        <Hexagonal id="internContainer" image={CoreTeamImg5} />
      </div>
      <div className="hex-grid-row box1">
        <Hexagonal id="internContainer" image={CoreTeamImg5} />
        <Hexagonal id="internContainer" image={CoreTeamImg5} />
        <Hexagonal id="internContainer" image={CoreTeamImg5} />
        <Hexagonal id="internContainer" image={CoreTeamImg5} />
        <Hexagonal id="internContainer" image={CoreTeamImg5} />
        <Hexagonal id="internContainer" image={CoreTeamImg5} />
      </div>
    </div>
  );
};
export default HexGrid;
