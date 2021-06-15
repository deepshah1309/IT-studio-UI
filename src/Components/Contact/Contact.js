import React from "react";
import "./Contact.css";
import Map from "./Map";
import Email from "./envelope.svg";
import Address from "./map.svg";
import Call from "./smartphone.svg";

import Instagram from "../../Assets/instagram.svg";
import Facebook from "../../Assets/facebook.svg";
import Twitter from "../../Assets/twitter.svg";
import LinkedIn from "../../Assets/linkedin.svg";

function Contact() {
  return (
    <div className="contact-main">
      <div className="contact-header">My Contact Page</div>
      <div className="contact">
        <div className="contact-middle">
          Get In Touch
          <form className="contact-form">
            <input
              type="text"
              name="form-name"
              className="form-name inp"
              placeholder="Enter your Name ..."
            />
            <input
              type="email"
              name="form-email"
              className="form-email inp"
              placeholder="Enter your Email ..."
            />
            <textarea
              name="text-area"
              placeholder="Enter Text here ..."
              className="form-textarea inp"
              r
            ></textarea>
            <button className="form-btn">Send</button>
          </form>
        </div>
        <div className="contact-map">
          <Map />
        </div>
      </div>

      <div className="contact-info">
        <div className="info">
          <img src={Address} className="info-svg" />
          <div>
            <div className="info-text">
              <div className="info-header">Address</div>
              <div>
                115 Salasar Vatika 9th,Nangal
                Road,Jhotwara,Jaipur,Rajasthan,India-302012
              </div>
            </div>
          </div>
        </div>
        <div className="info">
          <img src={Call} className="info-svg" />
          <div>
            <div className="info-header">Call For Updates</div>
            <div>+91-9413666423</div>
          </div>
        </div>
        <div className="info">
          <img src={Email} className="info-svg" />
          <div>
            <div className="info-header">Email Us</div>
            <div>
              TheITstudio@redpositive.in <br />
              hr@itstudio.in
            </div>
          </div>
        </div>
      </div>

      <div className="social-handles">
        <img src={LinkedIn} className="sh" />
        <img src={Facebook} className="sh" />
        <img src={Twitter} className="sh" />
        <img src={Instagram} className="sh" />
      </div>
    </div>
  );
}

export default Contact;
