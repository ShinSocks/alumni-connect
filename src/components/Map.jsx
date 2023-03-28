import React from 'react'
import GoogleMapReact from 'google-map-react';



export default function Map() {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
  return (
    <div className = "h-[100vh] w-[100%]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      </GoogleMapReact>
    </div>
  )
}
