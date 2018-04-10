import { updateListItemLocations } from '../search-bar/search-bar.actions';
import { LIST_ITEM_ACTION_TYPES } from './list-item.types';

export const fetchInitialPlaces = (lat, lng) => {
  const APIkey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&rankby=distance&key=${APIkey}`;

  return dispatch => {
    return fetch(URL)
      .then(res => res.json())
      .then(data => {
        const locations = data.results.slice(0, 3).map(item => ({
          name: item.name,
          lat: item.geometry.location.lat,
          lon: item.geometry.location.lng
        }));
        dispatch(updateListItemLocations(locations));
        dispatch(toggleLoading(false));
      })
      .catch(error => {
        console.log(error);
        dispatch(toggleLoading(false));
      });
  };
};

export const onSelectLocation = location => {
  return {
    type: LIST_ITEM_ACTION_TYPES.onSelectLocation,
    payload: {
      location
    }
  };
};

export const toggleLoading = bool => {
  return {
    type: LIST_ITEM_ACTION_TYPES.onLoading,
    payload: {
      bool
    }
  };
};
