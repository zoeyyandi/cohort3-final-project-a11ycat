import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs';
import { LOCATION_RATING_TYPES } from '../location-rating/location-rating.types';
import { createShowToastAction, createHideToastAction } from './toast.actions';
import { SHOW_TOAST } from './toast.types';
import { SEARCH_BAR_TYPES } from '../search-bar/search-bar.types';
import { updateSuccess } from '../location-rating/location-rating.actions';

export const successToastEpic = (action$, store) =>
  action$
    .ofType(LOCATION_RATING_TYPES.saveDbSuccess)
    .filter(action => action.payload.bool === true)
    .map(() =>
      createShowToastAction({
        level: 'success',
        message: `Thank you for submitting a review for ${
          store.getState().listItemReducer.selectedLocation.name
        }!`
      })
    );

export const hideToastEpic = action$ =>
  action$
    .ofType(SHOW_TOAST)
    .delay(3000)
    .flatMap(() =>
      Observable.concat(
        Observable.of(updateSuccess(false)),
        Observable.of(createHideToastAction())
      )
    );

export const emptyInputToastEpic = action$ =>
  action$.ofType(SEARCH_BAR_TYPES.error).map(() =>
    createShowToastAction({
      level: 'error',
      message: 'Ops... Please, enter a location name to search the place!'
    })
  );
