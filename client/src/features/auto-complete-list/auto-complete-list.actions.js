import { AUTO_COMPLETE_LIST_TYPES } from './auto-complete-list.types';

// Regular action creator: returns object
export const toggleAutoComplete = bool => {
  return {
    type: AUTO_COMPLETE_LIST_TYPES.toggleAutoComplete,
    payload: {
      bool
    }
  };
};
