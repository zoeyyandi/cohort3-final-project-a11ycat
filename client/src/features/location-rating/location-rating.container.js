import { connect } from 'react-redux';
import { LocationRating } from './location-rating.component';
import {
  updateLocationRatingAction,
  saveLocationToDb
} from './location-rating.actions';
import { listItemReducer } from "../list-item/list-item.reducers";

const mapStateToProps = state => ({
  features: state.locationRatingReducer.features,
  savedToDb: state.locationRatingReducer.savedToDb,
  name: 'Bridge',
  lat: 5,
  lon: 5,
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
