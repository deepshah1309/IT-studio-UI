import Navigation from "../Navigation-Header/Navigation";
import Heading from "../Header-HeadingText/Heading";
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