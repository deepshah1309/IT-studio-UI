import "./Heading.css";
import Typewriter from 'typewriter-effect';
import Search from "../SearchBox/Search";
import RightImg from "../../Image-Assets/people.jpg";
import Circle from "../Circle/Circle";
import SmallCircle from "../SmallCircle/SmallCircle";
const Heading=()=>{
    return (
        <div className="Heading">
                <div className="textcontent">
                        <div className="content">
                        <div className="UpperText">
                        
                        --The Best Service
                        <div style={{position:"absolute",zIndex:"-3",top:"11rem",left:"5rem"}}><Circle/></div>
                        </div>
                        <div className="typingtext">
                        <Typewriter
                          
                          options={{
                              strings: ["We give the best service for you"],
                              autoStart: true,
                              loop: true,
                          }}
                      />
                      
                        <div style={{position:"absolute",zIndex:"-3",top:"55%",left:"40%"}}><SmallCircle/></div>
                        </div>
                        <div className="text1">growth and success are never mere by chance.</div>
                        <div className="text2">its the result of the forces working together.</div>
                        
                        <div className="SearchPart">
                        <div style={{fontWeight:"bolder",fontSize:"1rem",margin:"1rem 0rem"}}>Search for services</div>
                                <div><Search/></div>
                        </div>
                        </div>
                       
                </div>
                <div className="imagepart">
                   {/* <img src={RightImg} ></img> */}
                           
                </div>
        </div>
    )
}
export default Heading;