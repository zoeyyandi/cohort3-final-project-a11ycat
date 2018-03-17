import { AUTO_COMPLETE_LIST_TYPES } from './app.types';
import { someUrl } from '../../constants/urls';

// Regular action creator: returns object
export function thisAction(something) {
  return {
    type: APP_TYPES.thisAction,
    payload: {
      something
    }
  };
}

// Thunk action creator: returns function that returns
// object depending on ajax request resolution
export function thatAction() {
  return function(dispatch) {
    fetch(someUrl).then(response => {
      dispatch({
        type: APP_TYPES.thatAction,
        payload: {
          something: response.results
        }
      });
    });
  };
}
