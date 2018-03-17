import { SEARCH_BAR_TYPES } from './search-bar.types';

// Regular action creator: returns object
export function updateSearchInput(searchString) {
  return {
    type: SEARCH_BAR_TYPES.updateSearchInput,
    payload: {
      searchString
    }
  };
}
