import axios from "axios";
import {someUrl} from "../constants/urls"

export const ACTION_TYPES = {
  thisAction: 'THIS_ACTION',
  thatAction: 'THAT_ACTION'
};

// Regular action creator: returns object
export function thisAction(something) {
  return {
    type: ACTION_TYPES.thisAction,
    payload: {
      something
    }
  }
}

// Thunk action creator: returns function that returns 
// object depending on ajax request resolution
export function thatAction() {
  return function (dispatch) {
    axios.get(someUrl)
      .then(response => {
        dispatch({
          type: ACTION_TYPES.thatAction,
          payload: {
            something: response.results
          }
        })
      });

  };

}