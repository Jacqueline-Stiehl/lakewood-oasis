import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map(){
  const defaultProps = {
    center: {
      lat: 33.3275743,
      lng: -112.0201419
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
        {/* <a href="https://www.google.com/maps/d/edit?mid=1gVEizNNN21pg0W-RnTJ1n9cy-fH_fck&ll=33.32015105192812%2C-112.0255193866457&z=14"></a> */}
        {/* <img src="https://www.google.com/maps/d/edit?mid=1gVEizNNN21pg0W-RnTJ1n9cy-fH_fck&ll=33.32014432358842%2C-112.0255193866457&z=14"></img> */}
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={33.3275743}
          lng={-112.0201419}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}