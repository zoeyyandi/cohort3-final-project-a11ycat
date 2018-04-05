import { LIST_ITEM_ACTION_TYPES } from './list-item.types';

const INITIAL_STATE = {
  locations: [],
  selectedLocation: {
    name: '',
    lat: 0,
    lon: 0
  }
};

export const listItemReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case LIST_ITEM_ACTION_TYPES.updateLocations:
      return { ...state, locations: payload.locations };
    case LIST_ITEM_ACTION_TYPES.onSelectLocation:
      return {...state, selectedLocation: payload.location }
    default:
      return state;
  }
};
