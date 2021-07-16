import "./HeaderSearchBox.css";
import SearchIcon from "../../Assets/searchicon.svg"
const Search=()=>{
    //search component inside header
    return (
        <div className>
            <div className="roundit">
                <div className="part1search"><input type="text" placeholder="Ex. Logo Designing"></input></div>
                <div className="part2search"><img src={SearchIcon} alt="searchicon" ></img></div>
            </div>
        </div>
    )
}
export default Search;