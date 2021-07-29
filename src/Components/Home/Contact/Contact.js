import React from "react";
import "./Contact.css";
import Map from "./Maps";
import Email from "./envelope.svg";
import Address from "./map.svg";
import Call from "./smartphone.svg";

import Instagram from "../../../Assets/instagram.svg";
import Facebook from "../../../Assets/facebook.svg";
import Twitter from "../../../Assets/twitter.svg";
import LinkedIn from "../../../Assets/linkedin.svg";
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap,
} from "react-google-maps";

import mapStyles from "./mapStyles";

function Contact() {
  const MyMapComponent = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 26.98879295673546, lng: 75.78092062320722 }}
      >
        {props.isMarkerShown && (
          <Marker
            position={{ lat: 26.98879295673546, lng: 75.78092062320722 }}
          />
        )}
      </GoogleMap>
    ))
  );

  return (
    <div className="contact-main">
      <div className="contact-header">Contact Us</div>
      <div className="contact">
        <div className="contact-middle">
          <div className="contact-center">
            <div className="contact-text">Get In Touch</div>
            <div className="contact-bottom">Feel free to drop a line below</div>
            <form className="contact-form">
              <input
                type="text"
                name="form-name"
                className="form-name inp"
                placeholder="Name"
              />
              <input
                type="email"
                name="form-email"
                className="form-email inp"
                placeholder="E-mail Address"
              />
              <textarea
                name="text-area"
                placeholder="Type Your Message"
                className="form-textarea inp"
              ></textarea>
              <button className="form-btn">Send</button>
            </form>
          </div>
        </div>
        <div className="contact-map">
          <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div
                style={
                  {
                    // opacity: "0.6",
                  }
                }
                className="map"
              />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>

      <div className="contact-info">
        <div className="info">
          <img src={Address} alt="" className="info-svg" />
          <div>
            <div className="info-text">
              <div className="info-header">Address</div>
              <div className="info-t">
                115 Salasar Vatika 9th,Nangal
                Road,Jhotwara,Jaipur,Rajasthan,India-302012
              </div>
            </div>
          </div>
        </div>
        <div className="info">
          <img src={Call} alt="" className="info-svg" />
          <div className="info-arr">
            <div className="info-header">Call For Updates</div>
            <div>+91-9413666423</div>
          </div>
        </div>
        <div className="info">
          <img src={Email} alt="" className="info-svg" />
          <div className="info-arr">
            <div className="info-header">Email Us</div>
            <div>
              TheITstudio@redpositive.in <br />
              hr@itstudio.in
            </div>
          </div>
        </div>
      </div>

      <div className="social-handles">
        <img src={LinkedIn} alt="" className="sh" />
        <img src={Facebook} alt="" className="sh" />
        <img src={Twitter} alt="" className="sh" />
        <img src={Instagram} alt="" className="sh" />
      </div>
    </div>
  );
}

export default Contact;
