import { getUserLocation } from './../../utils/geoLocation';
import { APP_TYPES } from './app.types';

export const getLocation = () => getUserLocation();

export const updateGeolocationError = error => {
  return {
    type: APP_TYPES.getUserLocationFailure,
    payload: error
  };
};
