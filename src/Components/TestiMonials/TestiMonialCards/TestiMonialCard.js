import React,{useEffect} from "react";
import "./TestiMonialCard.css";
import Background from "../../../Assets/Testimonial_assets/peopleblock.svg";
import RightArrow from "../../../Assets/Testimonial_assets/RightArrow.svg";
import Quote from "../../../Assets/Testimonial_assets/quote.png";
import LeftArrow from "../../../Assets/Testimonial_assets/leftarrow.jpeg";
// import Image2 from "../../../Assets/Testimonial_assets/image2.svg";
const TestiMonialCards=({step,setStep,data})=>{
  console.log(data);
  console.log(data[step]);
  console.log(data[step].images.image1);
  console.log(data.length);
  console.log(step+1);
  var element=document.getElementsByClassName("testimonialcard");
  window.keypress=()=>{
    console.log("keypress")
  }
  
  // useEffect(() => {
  //   const interval = setInterval(() => {
      
       
  //           setStep(step+1);
         
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div className="testimonialcard" >
           {step-1<0?(""):(<div className="left_arrow_test" onClick={()=>{setStep(step-1)}}>
           <img src={LeftArrow} alt="right_arrow" height="100%" width="100%"/>
         
            </div>)}
          <div className="testimonial_imagepart_mobileView">
              <div className="image_testimonial_mobileview">
              <img src={data[step].images.image1} alt="people" className="mobileview_testimonial_circle"/>
              </div>
          </div>
            <div className="testimonials_imagepart">
                <div className="test_image">
                
                    <img src={data[step].images.image1} alt="people"  className="firstcircle"/>
                    <img src={data[step].images.image2} alt="people"  className="secondcircle"/>
                    <img src={data[step].images.image3} alt="people"  className="thirdcircle"/>
                    <img src={data[step].images.image4} alt="people"  className="fourthcircle"/>
                
                 
                
                </div>

                <div className="back_test">
                  <img src={Background} alt="back" />
                </div>
                <div class="mixit-green"></div>
                    <div className="quote">
                        <img src={Quote} />  
                    </div>    
                    <div className="color_container">

                    </div>
             

            </div>
            <div className="testimonials_contentpart">
              <div className="testimonialcontent_head">
                {data[step].name}
              </div>
              <div className="testimonialcontent_text">
              {data[step].description}
              </div>
            </div>
          {step+1>=data.length?(""):(<div className="right_arrow_test" onClick={()=>{setStep(step+1)}}>
              <img src={RightArrow} alt="right_arrow" height="100%" width="100%"/>
            </div>)}
            
    </div>
  )
}
export default TestiMonialCards;