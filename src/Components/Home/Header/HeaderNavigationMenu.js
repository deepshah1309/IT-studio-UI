import "./HeaderNavigationMenu.css";
import Logo from "../../../Components/Home/Header/HeaderLogo";
const Menu = ({ open, setOpen }) => {
  const v = () => {
    setOpen(false);
    makesIt(false);
  };
  const makesIt = (check) => {
    if (check) {
      const elements = document.getElementById("menusnav");
      elements.classList.add("showDrawer");
      console.log("add it");
    } else {
      const elements = document.getElementById("menusnav");
      elements.classList.remove("showDrawer");
      console.log("remove it");
    }
  };
  return (
    <div className="MenuNavigation">
      <div className="closeIcon">
        <div></div>
        <div onClick={v}>X</div>
      </div>
      <div className="Heading_title_itstudio">
        <Logo />
      </div>
      <div className="item">About Us</div>
      <div className="item">Contact Us</div>
      <div className="item">Our Work</div>
      <div className="item">Blog</div>
      <div className="item">Grow With Us</div>
      <div className="item">TIS</div>
      <div className="item">FAQ</div>
    </div>
  );
};
export default Menu;
