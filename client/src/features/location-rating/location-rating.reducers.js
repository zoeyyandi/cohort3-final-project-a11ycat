import { LOCATION_RATING_TYPES } from './location-rating.types';

const INITIAL_STATE = {
  features: [],
  savedToDb: false
};

export const locationRatingReducer = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case LOCATION_RATING_TYPES.toggleFeature:
      const { feature } = payload;
      return {
        ...state,
        features: state.features.includes(feature)
          ? state.features.filter(f => f !== feature)
          : [...state.features, feature]
      };
    case LOCATION_RATING_TYPES.saveDbSuccess:
      return {
        ...state,
        savedToDb: payload.bool,
        features: []
      };
    default:
      return state;
  }
};
