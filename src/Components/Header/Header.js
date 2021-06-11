import Navigation from "./HeaderNavigation/Navigation";
import Heading from "./Heading";
const Header=()=>{
    return (
        <div className="HeaderPart">
                {/* Navigation section */}
                <Navigation/>
                {/* content and Image */}
                <Heading/>
        </div>
    )
}
export default Header;