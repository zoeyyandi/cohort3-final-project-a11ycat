import { autoCompleteListReducer } from './auto-complete-list.reducers';
import { AUTO_COMPLETE_LIST_TYPES } from './auto-complete-list.types';
import { SEARCH_BAR_TYPES } from '../search-bar/search-bar.types';

describe('auto-complete list reducer', () => {
  // Case 1: state = undefined, type = empty, payload = empty
  it('should return the initial state, when received: state = undefined, type = empty, payload = empty', () => {
    expect(autoCompleteListReducer(undefined, {})).toEqual(
      {
        showAutoComplete: false,
        autoCompleteList: []
      }
    )
  })

  // Case 2: state = expected value, type = empty, payload = empty
  it('should return the state received, when received: state = expected value, type = empty, payload = empty (default option)', () => {
    const state = {
      showAutoComplete: true,
      autoCompleteList: ['place 1', 'place 2', 'place 3', 'place 4', 'place 5']
    }
    expect(autoCompleteListReducer(state, {})).toEqual(
      state
    )
  })

  // Case 3: state = expected value, type = undefined, payload = empty
  it('should return the state received, when received: state = expected value, type = undefined, payload = empty (default option)', () => {
    const state = {
      showAutoComplete: true,
      autoCompleteList: ['place 1', 'place 2', 'place 3', 'place 4', 'place 5']
    };
    const payload = '';
    expect(autoCompleteListReducer(state, {undefined, payload})).toEqual(
      state
    )
  })

  // Case 4: state = expected value, type = toggleAutoComplete, payload = with bool
  it('should return the new state, when received: state = expected value, type = toggleAutoComplete, payload = with bool (default toggleAutoComplete)', () => {
    const state = {
      showAutoComplete: true,
      autoCompleteList: ['place 1', 'place 2', 'place 3', 'place 4', 'place 5']
    };
    const type = AUTO_COMPLETE_LIST_TYPES.toggleAutoComplete;
    const payload = {
      bool: true
    };
    expect(autoCompleteListReducer(state, {type, payload})).toEqual(
      { ...state, showAutoComplete: payload.bool }
    )
  })

  // Case 5: state = expected value, type = toggleAutoComplete, payload = without bool
  it('should return a new state without the payload received, when received: state = expected value, type = toggleAutoComplete, payload = without bool (default toggleAutoComplete)', () => {
    const state = {
      showAutoComplete: true,
      autoCompleteList: ['place 1', 'place 2', 'place 3', 'place 4', 'place 5']
    };
    const type = AUTO_COMPLETE_LIST_TYPES.toggleAutoComplete;
    const payload = {
      notBool: true
    };
    expect(autoCompleteListReducer(state, {type, payload})).not.toEqual(
      { ...state, showAutoComplete: payload.notBool }
    )
  })

  // Case 6: state = expected value, type = addLocations, payload = with locations
  it('should return the new state, when received: state = expected value, type = addLocations, payload = with locations (default addLocations)', () => {
    const state = {
      showAutoComplete: true,
      autoCompleteList: ['place 1', 'place 2', 'place 3', 'place 4', 'place 5']
    };
    const type = SEARCH_BAR_TYPES.addLocations;
    const payload = {
      locations: ['place 1', 'place 2', 'place 3', 'place 4', 'place 5', 'place6']
    };
    expect(autoCompleteListReducer(state, {type, payload})).toEqual(
      { ...state, autoCompleteList: payload.locations }
    )
  })

  // Case 7: state = expected value, type = addLocations, payload = without locations
  it('should return a new state without the payload received, when received: state = expected value, type = addLocations, payload = without locations (default addLocations)', () => {
    const state = {
      showAutoComplete: true,
      autoCompleteList: ['place 1', 'place 2', 'place 3', 'place 4', 'place 5']
    };
    const type = SEARCH_BAR_TYPES.addLocations;
    const payload = {
      notLocations: ['place 1', 'place 2', 'place 3', 'place 4', 'place 5', 'place6']
    };
    expect(autoCompleteListReducer(state, {type, payload})).not.toEqual(
      { ...state, autoCompleteList: payload.notLocations }
    )
  })

  // Case 8: state = not expected value, type = addLocations, payload = without locations
  it('should return a state different than expected, when received: state = not expected value, type = addLocations, payload = with locations (default addLocations)', () => {
    const state = 'any string';
    const type = SEARCH_BAR_TYPES.addLocations;
    const payload = {
      locations: ['place 1', 'place 2', 'place 3', 'place 4', 'place 5', 'place6']
    };
    expect(autoCompleteListReducer(state, {type, payload})).not.toEqual(
      { 
        showAutoComplete: true,
        autoCompleteList: payload.locations 
      }
    )
  })

})

