import { connect } from 'react-redux';
import { App } from './app.component';
import { getLocation } from './app.actions';
import { fetchInitialPlaces } from '../list-item/list-item.actions';
import '../../App.css';

const mapStateToProps = state => ({
  showAutoComplete: state.autoCompleteListReducer.showAutoComplete,
  listLocations: state.listItemReducer.locations,
  lat: state.appReducer.userLocation.lat,
  lon: state.appReducer.userLocation.lon
});

const mapDispatchToProps = {
  getLocation,
  fetchInitialPlaces
};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
