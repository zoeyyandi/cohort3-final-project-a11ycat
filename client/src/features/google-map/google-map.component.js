import React, { Component } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';
import { Ratings } from './map-rating.component';
import { ToastContainer } from '../toast/toast.container';
import { Page } from '../../ui-kit/page-style';

const googleMapsAPIKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
if (!googleMapsAPIKey)
  throw new Error('googleMapsAPIKey environment variable required');

const MapPage = Page.extend`
  margin: 20px;
`;

const Map = withScriptjs(
  withGoogleMap(props => {
    return (
      <MapPage>
        <ToastContainer />
        <GoogleMap
          ref={props.onMapLoad}
          defaultZoom={15}
          defaultCenter={props.coords}
          gridSize={60}
          onClick={props.onMapClicked}
        >
          <Marker title="User" position={props.coords} />
          {props.markers.map(marker => {
            const infoWindow = props.activeMarker === marker.key && (
              <InfoWindow onCloseClick={props.onInfoClose}>
                <div>
                  <h1 style={{ color: 'black' }}>{marker.name}</h1>
                  <Ratings avgRating={marker.avgRating} />
                </div>
              </InfoWindow>
            );
            return (
              <Marker
                {...marker}
                key={marker.key}
                position={marker.position}
                name={marker.name}
                onClick={() => props.onMarkerClick(marker.key)}
              >
                {infoWindow}
              </Marker>
            );
          })}
        </GoogleMap>
      </MapPage>
    );
  })
);

export class GoogleMapsComponent extends Component {
  componentDidMount() {
    this.props.fetchMapLocations();
  }

  onMarkerClick = activeMarker => {
    this.props.updateActiveMarker(activeMarker);
  };
  onMapClicked = () => {
    this.props.updateActiveMarker();
  };
  onInfoClose = () => {
    this.props.updateActiveMarker();
  };

  render() {
    return (
      <div>
        <Map
          googleMapURL={
            'https://maps.googleapis.com/maps/api/js?key=' +
            googleMapsAPIKey +
            '&v=3.exp&libraries=geometry,drawing,places'
          }
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `600px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          coords={this.props.userCoords}
          markers={this.props.markers}
          activeMarker={this.props.activeMarker}
          onMarkerClick={this.onMarkerClick}
          onInfoClose={this.onInfoClose}
          onMapClicked={this.onMapClicked}
        />
      </div>
    );
  }
}
