import { SEARCH_BAR_TYPES } from './search-bar.types';
import { toggleAutoComplete } from '../auto-complete-list/auto-complete-list.actions';

// Regular action creator: returns object
export const updateSearchInput = searchString => {
  return {
    type: SEARCH_BAR_TYPES.updateSearchInput,
    payload: {
      searchString
    }
  };
};

export const addLocations = locations => {
  return {
    type: SEARCH_BAR_TYPES.addLocations,
    payload: {
      locations
    }
  };
};

export const fetchLocations = searchString => {
  const lat = 43.639217;
  const lng = -79.400414;
  const APIkey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const URL = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${searchString}&types=establishment&location=${lat},${lng}&radius=500&strictbounds&key=${APIkey}
  `;
  return dispatch => {
    return fetch(URL)
      .then(res => res.json())
      .then(data => {
        const locations = data.predictions
          .slice(0, 5)
          .map(item => item.description);
        if (locations.length > 0) {
          dispatch(toggleAutoComplete(true));
        }
        dispatch(addLocations(locations));
      })
      .catch(error => console.log(error));
  };
};

export const textSearch = inputText => {
  const lat = 43.639217;
  const lng = -79.400414;
  const APIkey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const URL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${inputText}&location=${lat},${lng}&key=${APIkey}`;
  return dispatch => {
    return fetch(URL)
      .then(res => res.json())
      .then(data => {
        const results = data.results.slice(0, 3).map(item => item.name);
      });
  };
};
