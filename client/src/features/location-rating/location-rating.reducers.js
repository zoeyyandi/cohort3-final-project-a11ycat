import { LOCATION_RATING_TYPES } from './location-rating.types';

const INITIAL_STATE = {
  reatedLocations: {
    '3,4': {
      name: 'location of lat 3 and lon 4',
      lat: 3,
      lon: 4,
      features: {
        'Accessible parking': true,
        'Ramp leading to the front door': false,
        'Front door opens automatically': false,
        'Signage is easily legible': false,
        'Service animal is welcome': false
      }
    }
  }
};

export const locationRatingReducer = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case LOCATION_RATING_TYPES.toggleFeature:
      // let key = payload.location.lat + "," + payload.location.lon;
      return 'i need to save/update the data here';
    default:
      return state;
  }
};
