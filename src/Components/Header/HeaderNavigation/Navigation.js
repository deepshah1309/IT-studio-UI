import "./Navigation.css";
import Logo from "../HeaderLogo";
import Menu from "../HeaderNavigationMenu";
import MenuIcon from "../../../Assets/menu.png";

const Navigation=()=>{
    return (
        <div className="Navigation">
                <div className="part1"><Logo/></div>
                <div className="nav-hamburger"><img src={MenuIcon} alt="hmb" height="45" width="45"></img></div>
                <div className="part2"><Menu/></div>
        </div>
    )
}
export default Navigation;