import "./Heading.css";
import Typewriter from 'typewriter-effect';
import Search from "./HeaderSearchBox";

import Circle from "./HeaderCircle";
import SmallCircle from "./SmallCircle";
import Rectangle  from "./Rectangle";
const Heading=()=>{
    //url at right side
   console.log(process.env.PUBLIC_URL);
    
    return (
        <div className="Heading">
                <div className="textcontent">
                        <div className="content">
                        <div className="UpperText">
                        
                        --Best service
                        <div  className="bigcircle"><Circle/></div>
                        </div>
                    
                        <div className="typingtext">
                        <div className="rectanglepart"><Rectangle/></div>
                        <Typewriter
                          
                          options={{
                              strings: ["Perfect place to have optimized IT products"],
                              autoStart: true,
                              loop: true,
                          }}
                      />
                          
                        
                        </div>
                        <div className="text1">
                        <div className="smallcircle"><SmallCircle/></div>growth and success are never mere by chance.</div>
                        <div className="text2">its the result of the forces working together.</div>
                        
                        <div className="SearchPart">
                        <div className="search_services">Search for services</div>
                                <div className="searchboxarea"><Search/></div>
                        </div>
                        </div>
                       
                </div>
                <div className="imagepart" >
                </div>
        </div>
    )
}
export default Heading;