import { SEARCH_BAR_TYPES } from './search-bar.types';
import { toggleAutoComplete } from '../auto-complete-list/auto-complete-list.actions';
import { LIST_ITEM_ACTION_TYPES } from '../list-item/list-item.types';

// Regular action creator: returns object
export const updateSearchInput = searchString => {
  return {
    type: SEARCH_BAR_TYPES.updateSearchInput,
    payload: {
      searchString
    }
  };
};

export const errorHandler = error => ({
  type: SEARCH_BAR_TYPES.error,
  payload: error
});

export const addLocations = locations => {
  return {
    type: SEARCH_BAR_TYPES.addLocations,
    payload: {
      locations
    }
  };
};

export const updateListItemLocations = locations => {
  return {
    type: LIST_ITEM_ACTION_TYPES.updateLocations,
    payload: {
      locations
    }
  };
};

export const fetchLocations = (searchString, lat, lng) => {
  const APIkey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const URL = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${searchString}&location=${lat},${lng}&radius=500&types=establishment&key=${APIkey}
  `;
  return dispatch => {
    return fetch(URL)
      .then(res => res.json())
      .then(
        data => {
          const locations = data.predictions
            .slice(0, 5)
            .map(item => item.description);
          if (locations.length > 0) {
            dispatch(toggleAutoComplete(true));
          }
          dispatch(addLocations(locations));
        },
        err => {
          console.log('err');
          return err;
        }
      );
    // .catch(error => console.log(error));
  };
};

export const textSearch = (inputText, lat, lng) => {
  const APIkey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const URL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${inputText}&location=${lat},${lng}&key=${APIkey}`;
  return dispatch => {
    return fetch(URL)
      .then(res => res.json())
      .then(data => {
        const results = data.results.slice(0, 3).map(item => ({
          name: item.name,
          lat: item.geometry.location.lat,
          lon: item.geometry.location.lng
        }));
        dispatch(updateListItemLocations(results));
      })
      .catch(error => console.log(error));
  };
};

export const errorNoInput = () => {
  return {
    type: SEARCH_BAR_TYPES.error,
    payload: {
      message: 'Ops... Please, enter a location name to search the place!'
    }
  };
};
