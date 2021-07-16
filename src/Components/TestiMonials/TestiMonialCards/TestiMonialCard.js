import React,{useEffect} from "react";
import "./TestiMonialCard.css";
import Background from "../../../Assets/Testimonial_assets/peopleblock.svg";
import RightArrow from "../../../Assets/Testimonial_assets/RightArrow.svg";
import Quote from "../../../Assets/Testimonial_assets/quote.png";
import LeftArrow from "../../../Assets/Testimonial_assets/leftarrow.jpeg";

const TestiMonialCards=({step,setStep,data})=>{
  //Development logic
 //Logic behind Testimonial Images
 //We should have minimum  5 objects.
 //if we are currently at step<=n-3 then We can take the images in increasing order
 //for the top right circle we can show the current image
 //if we are step===data.length-3 then show the images in decreasing order ignoring the second circle

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
                
                    <>
                    <img src={step<=data.length-3-1?data[step+1].images.image1:data[step-1].images.image1} alt="people"  className="firstcircle"/>
                    <img src={data[step].images.image1} alt="people"  className="secondcircle"/>
                    <img src={step<=data.length-4?(data[step+2].images.image1):(step===data.length-3?data[step+1].images.image1:
                    (step===data.length-2?
                    data[step+1].images.image1:(step===data.length-1?data[step-2].images.image1:"")))} alt="people"  className="thirdcircle"/>
                    <img src={
                      step<=data.length-4?(
                      data[step+3].images.image1):(step===data.length-3?(
                            data[step-3].images.image1
                      ):(step===data.length-3?(data[step-3].images.image1):(step===data.length-2 || step===data.length-1?(data[step-3].images.image1):(""))))} alt="people"  className="fourthcircle"/>
                </>
              
                
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