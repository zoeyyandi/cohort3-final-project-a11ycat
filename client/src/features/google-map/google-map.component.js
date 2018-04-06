import React, { Component } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

var googleMapsAPIKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
if (!googleMapsAPIKey)
  throw new Error('googleMapsAPIKey environment variable required');

const Map = withScriptjs(
  withGoogleMap(props => {
    return (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={15}
      defaultCenter={props.coords}
      gridSize={60}
      onClick={props.onMapClick}
    >
    <Marker title="User"
      position={props.coords}
    />
    {props.markers.map((marker, index) => (
      <Marker
          {...marker}
          onRightClick={() => props.onMarkerRightClick(marker)}
          key={index}
        position={marker.position}
        onClick={() => props.onMarkerClick(marker)}
      />
    ))}
    </GoogleMap>);
  }
));

export class GoogleMapsComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      markers:[{
        position:{
          lat: 43.6399,
          lng: -79.3782,
        }
      }, {
        position:{
          lat: 43.639217,
          lng: -79.400414,
        }
      }]
    }
  }
  render() {
    return (
      <Map
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?key=" +
          googleMapsAPIKey +
          "&v=3.exp&libraries=geometry,drawing,places"
        }
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `600px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        coords={this.props.userCoords}
        markers={this.state.markers}
      />
    );
  }
}
