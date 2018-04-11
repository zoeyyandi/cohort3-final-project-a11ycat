import { GOOGLE_MAP_TYPES } from './google-map.types';

const INITIAL_STATE = {
<<<<<<< HEAD
  ratedPlaces: [],
  activeMarker: null
=======
  markers: []
>>>>>>> restructure data from db to markers, migrate markers from react state to redux
};

export const googleMapReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
<<<<<<< HEAD
    case GOOGLE_MAP_TYPES.updateRatedPlaces:
      return { ...state, ratedPlaces: payload.ratedPlaces };
    case GOOGLE_MAP_TYPES.updateActiveMarker:
      return { ...state, activeMarker: payload.activeMarker };
=======
    case GOOGLE_MAP_TYPES.updateMarkers:
      return { ...state, markers: payload.markers };
>>>>>>> restructure data from db to markers, migrate markers from react state to redux
    default:
      return state;
  }
};
