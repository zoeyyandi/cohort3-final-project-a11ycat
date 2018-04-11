import { GOOGLE_MAP_TYPES } from './google-map.types';
import { apiService } from '../../shared/services/api-service';

export const updateMarkers = markers => {
  return {
    type: GOOGLE_MAP_TYPES.updateMarkers,
    payload: {
      markers
    }
  };
};

export const updateActiveMarker = activeMarker => {
  return {
    type: GOOGLE_MAP_TYPES.updateActiveMarker,
    payload: {
      activeMarker
    }
  };
};

export const fetchMapLocations = () => {
  return dispatch => {
    return apiService
      .get('/someModels')
      .then(response => {
        const markers = response.data.map(place => {
          return {
            name: place.name,
            key: place.key,
            position: {
              lat: place.lat,
              lng: place.lon
            },
            avgRating: Math.round(
              place.ratings.reduce(
                (acc, cur) =>
                  Object.keys(cur).filter(key => key !== '_id' && cur[key])
                    .length + acc,
                0
              ) / place.ratings.length
            )
          };
        });
        dispatch(updateMarkers(markers));
      })
      .catch(error => console.log(error));
  };
};
