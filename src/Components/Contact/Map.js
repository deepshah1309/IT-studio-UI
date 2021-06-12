import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React from "react";
import "./Map.css";

class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 27.08664897938347, lng: 75.70401616229937 }}
      >
        <Marker position={{ lat: 27.08664897938347, lng: 75.70401616229937 }} />
      </Map>
    );
  }
}

const mapStyles = {
  width: "40%",
  height: "50%",
  top: "-15px",
  borderRadius: "25px",
  left: "-25px",
  Zindex: "1",
};

export default GoogleApiWrapper({
  apiKey: "",
})(MapContainer);
