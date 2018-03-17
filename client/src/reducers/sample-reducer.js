import {ACTION_TYPES} from "../constants/action-types";

const INITIAL_STATE = {
  sampleKey1: [],
  sampleKey2: "something"
};

export const sampleReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case ACTION_TYPES.thisAction:
      return {...state, ...{sampleKey1: payload}};

    case ACTION_TYPES.thatAction:
      return {...state, ...{list: payload}};

    default:
      return state;
  }
};