import { connect } from 'react-redux';
import { App } from './app.component';
import { getLocation } from './app.actions';
import {
  fetchInitialPlaces,
  toggleLoading
} from '../list-item/list-item.actions';
import '../../App.css';

const mapStateToProps = state => ({
  showAutoComplete: state.autoCompleteListReducer.showAutoComplete,
  listLocations: state.listItemReducer.locations,
  lat: state.appReducer.userLocation.lat,
  lon: state.appReducer.userLocation.lon,
  isLoading: state.listItemReducer.isLoading,
  geolocationError: state.appReducer.geolocationError
});

const mapDispatchToProps = {
  getLocation,
  fetchInitialPlaces,
  toggleLoading
};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
