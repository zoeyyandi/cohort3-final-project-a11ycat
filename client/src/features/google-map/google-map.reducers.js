import { GOOGLE_MAP_TYPES } from './google-map.types';

const INITIAL_STATE = {
  activeMarker: null,
  markers: []
};

export const googleMapReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GOOGLE_MAP_TYPES.updateActiveMarker:
      return { ...state, activeMarker: payload.activeMarker };
    case GOOGLE_MAP_TYPES.updateMarkers:
      return { ...state, markers: payload.markers };
    default:
      return state;
  }
};
