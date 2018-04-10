import { GOOGLE_MAP_TYPES } from './google-map.types';

const INITIAL_STATE = {
  ratedPlaces: []
};

export const googleMapReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GOOGLE_MAP_TYPES.updateRatedPlaces:
      return { ...state, ratedPlaces: payload.ratedPlaces };
    default:
      return state;
  }
};
