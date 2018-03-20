import { AUTO_COMPLETE_LIST_TYPES } from './auto-complete-list.types';
import { SEARCH_BAR_TYPES } from '../search-bar/search-bar.types';

const INITIAL_STATE = {
  showAutoComplete: false,
  autoCompleteList: []
};

export const autoCompleteListReducer = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case AUTO_COMPLETE_LIST_TYPES.toggleAutoComplete:
      return { ...state, showAutoComplete: payload.bool };
    case SEARCH_BAR_TYPES.addLocations:
      return { ...state, autoCompleteList: payload.locations };
    default:
      return state;
  }
};
