import { LOCATION_RATING_TYPES } from './location-rating.types';
import { apiService } from '../../shared/services/api-service';

export function updateLocationRatingAction(location, feature) {
  return {
    type: LOCATION_RATING_TYPES.toggleFeature,
    payload: {
      location,
      feature
    }
  };
}

export function updateSuccess(bool) {
  return {
    type: LOCATION_RATING_TYPES.saveDbSuccess,
    payload: {
      bool
    }
  };
}

export const saveLocationToDb = (name, lat, lon, features) => {
  return dispatch => {
    apiService
      .post(`/someModels/${name}`, {
        name,
        lat,
        lon,
        rating: {
          accessible_parking: features.includes('Accessible parking'),
          automatic_front_door: features.includes(
            'Front door opens automatically'
          ),
          front_door_ramp: features.includes('Ramp leading to the front door'),
          legible_signage: features.includes('Signage is easily legible'),
          service_animal_welcome: features.includes('Service animal is welcome')
        }
      })
      .then(response => {
        console.log(response);
        dispatch(updateSuccess(true));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
