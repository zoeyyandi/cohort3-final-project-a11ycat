import { APP_TYPES } from '../features/app/app.types';
import { LIST_ITEM_ACTION_TYPES } from '../features/list-item/list-item.types';

export function getUserLocation() {
  return function(dispatch) {
    const geolocation = navigator.geolocation;
    return new Promise((res, rej) => {
      geolocation.getCurrentPosition(
        position => {
          dispatch({
            type: APP_TYPES.getUserLocationSuccess,
            payload: position.coords
          });
          res('done');
        },
        error => {
          dispatch({
            type: APP_TYPES.getUserLocationFailure,
            payload: error
          });
          dispatch({
            type: LIST_ITEM_ACTION_TYPES.onLoading,
            payload: false
          });
          res('error');
        }
      );
    });
  };
}
