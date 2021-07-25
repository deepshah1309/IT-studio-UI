import "./Hexagonal.css";
const Hexagon = ({ id, differ, differText, image, onClick, value, person }) => {
  const mouseOver = (e) => {
    // console.log(e.target.classList[2]);
    // console.log(image);
    // if (e.target.classList[2] !== null) {
    //   var element = document.querySelector("." + e.target.classList[2]);
    //   element.style.backgroundColor = "blue";
    //   element.style.backgroundImage = null;
    //   element.style.color = "white";
    // }
  };
  const mouseOut = (e) => {
    // if (e.target.classList[2] !== null) {
    //   var element = document.querySelector("." + e.target.classList[2]);
    //   element.style.backgroundImage = `url(${image})`;
    // }
  };
  return (
    <div
      onMouseEnter={mouseOver}
      onMouseLeave={mouseOut}
      className={
        differ !== null && differ === true
          ? "hexagonaldifferent " + id
          : "hexagonal " + id + "  value" + value
      }
      style={{
        backgroundImage: `url(${image})`,
        height: "188px",
        width: "220px",
      }}
      onClick={onClick}
    >
      {differ !== null && differ === true ? (
        <div className="titlehex">{differText}</div>
      ) : (
        ""
      )}
      <div className="showInHover">
        <h3>{person}</h3>
        <p>{person}</p>
      </div>
    </div>
  );
};
export default Hexagon;
