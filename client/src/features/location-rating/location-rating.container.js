import { connect } from 'react-redux';
import { LocationRating } from './location-rating.component';
import {
  updateLocationRatingAction,
  saveLocationToDb
} from './location-rating.actions';

const mapStateToProps = state => ({
  features: state.locationRatingReducer.features,
  savedToDb: state.locationRatingReducer.savedToDb,
  name: state.listItemReducer.selectedLocation.name,
  lat: state.listItemReducer.selectedLocation.lat,
  lon: state.listItemReducer.selectedLocation.lon,
  location: state.listItemReducer.selectedLocation
});

const mapDispatchToProps = {
  onClickFeature: updateLocationRatingAction,
  saveLocationToDb: saveLocationToDb
};

export const LocationRatingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationRating);
