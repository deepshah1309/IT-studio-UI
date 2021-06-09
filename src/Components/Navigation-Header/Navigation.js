import "./Navigation.css";
import Logo from "../Logo/Logo";
import Menu from "../Navigation-menu/Menu";
const Navigation=()=>{
    return (
        <div className="Navigation">
                <div className="part1"><Logo/></div>
                <div className="part2">
                   <Menu/>
                </div>
        </div>
    )
}
export default Navigation;