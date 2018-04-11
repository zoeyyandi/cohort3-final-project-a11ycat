import { connect } from 'react-redux';
import { GoogleMapsComponent } from './google-map.component';
import { getLocation } from '../app/app.actions';
import { fetchMapLocations, updateActiveMarker } from './google-map.actions';

const mapStateToProps = state => ({
  userCoords: {
    lat: state.appReducer.userLocation.lat,
    lng: state.appReducer.userLocation.lon
  },
  activeMarker: state.googleMapReducer.activeMarker,
  markers: state.googleMapReducer.markers
});

const mapDispatchToProps = {
  getLocation,
  fetchMapLocations,
  updateActiveMarker
};

export const GoogleMapContainer = connect(mapStateToProps, mapDispatchToProps)(
  GoogleMapsComponent
);
