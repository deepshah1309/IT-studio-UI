import TestiMonialCards  from "./TestiMonialCards/TestiMonialCard";
import "./TestiMonials.css";
import { useState } from "react";
// import Photo1 from "../../Assets/Testimonial_assets/photo1.svg";
// import Photo2 from "../../Assets/Testimonial_assets/people.svg";
const TestiMonials=()=>{
  const [step,setStep]=useState(0);
  const data=[
    {
      name:"Joseph",
      description:"Best Products,Optimized products - The IT Studio not only produce wonderful product - Theyguide you through making the product work for YOU! Responsive layout and responsive staff... Could you ask for more?",
      images:{
        image1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7A9ZMZyKTWWYrL86-6XTMgo5hpGuEDJqUw&usqp=CAU",
        image2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7A9ZMZyKTWWYrL86-6XTMgo5hpGuEDJqUw&usqp=CAU",
        image3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7A9ZMZyKTWWYrL86-6XTMgo5hpGuEDJqUw&usqp=CAU",
        image4:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7A9ZMZyKTWWYrL86-6XTMgo5hpGuEDJqUw&usqp=CAU"
      }
    },
    {
        name:"Jeniferra",
        description:"Unique themes, unique service - The IT Studio not only produce wonderful product - Theyguide you through making the product work for YOU! Responsive layout and responsive staff... Could you ask for more?",
        images:{
          image1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvyDDHeNj5itVe8kefNcofbkWk60EARi5X9g&usqp=CAU",
          image2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvyDDHeNj5itVe8kefNcofbkWk60EARi5X9g&usqp=CAU",
          image3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7A9ZMZyKTWWYrL86-6XTMgo5hpGuEDJqUw&usqp=CAU",
          image4:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7A9ZMZyKTWWYrL86-6XTMgo5hpGuEDJqUw&usqp=CAU"
        }
      },
      {
          name:"joe phorbe",
          description:"Unique themes, unique service - The IT Studio not only produce wonderful product - Theyguide you through making the product work for YOU! Responsive layout and responsive staff... Could you ask for more?",
          images:{
            image1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdkMz9jfh6lCIJOBZ-LUtU_OpQXTNE8T51Bg&usqp=CAU",
            image2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdkMz9jfh6lCIJOBZ-LUtU_OpQXTNE8T51Bg&usqp=CAU",
            image3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdkMz9jfh6lCIJOBZ-LUtU_OpQXTNE8T51Bg&usqp=CAU",
            image4:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7A9ZMZyKTWWYrL86-6XTMgo5hpGuEDJqUw&usqp=CAU"
          }
        }
      
  ]
  return (
    <div className="testimonial_section">
      <div className="testimonial_Titles">
        <div className="tst_title">
          TestiMonials
        </div>
        <div className="tst_subtitle">
        here what people see through us ,people satisfied there need only with our candy hand
        </div>
        
      </div>
      <div>
      <TestiMonialCards step={step} setStep={setStep} data={data}/>
      
      </div>
      <div className="stepSide">
        <div className="stepInside">
          <div className={step==0?"circles_1_differ":"circles_1"} onClick={()=>setStep(0)}></div>
          <div className={step==1?"circles_1_differ":"circles_1"} onClick={()=>setStep(1)}></div>
          <div className={step==2?"circles_1_differ":"circles_1"} onClick={()=>setStep(2)}></div>
          
        </div>
      </div>
      
      
    </div>
  )
}
export default TestiMonials;