import {LOCATION_RATING_TYPES} from "./location-rating.types";

export function updateLocationRatingAction(location, feature) {
    return {
      type: LOCATION_RATING_TYPES.toggleFeature,
      payload: {
        location,
        feature
      }
    }
  }
  