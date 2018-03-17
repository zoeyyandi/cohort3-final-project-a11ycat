import {APP_TYPES} from "./app.types";

export function getUserLocation(){
  return dispatch => {
    const geolocation = navigator.geolocation;
    geolocation.getCurrentPosition((position) => {
        dispatch({
            type: APP_TYPES.getUserLocation,
            payload: position
    })
  })
}}
