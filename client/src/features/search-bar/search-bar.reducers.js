import { SEARCH_BAR_TYPES } from './search-bar.types';

const INITIAL_STATE = {
  searchInput: ''
};

export const searchBarReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SEARCH_BAR_TYPES.updateSearchInput:
      return { searchInput: payload.searchString };
    default:
      return state;
  }
};
