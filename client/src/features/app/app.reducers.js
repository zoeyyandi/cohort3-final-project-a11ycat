import { APP_TYPES } from './app.types';

const INITIAL_STATE = {
  userLocation: {
    lat: 43.6532,
    lon: -79.3832
  },
  geolocationError: null
};

export const appReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case APP_TYPES.getUserLocationSuccess:
      return {
        ...state,
        ...{
          userLocation: { lat: payload['latitude'], lon: payload['longitude'] }
        }
      };
    case APP_TYPES.getUserLocationFailure:
      return {
        ...state,
        geolocationError: payload
      };
    default:
      return state;
  }
};
