import { searchBarReducer } from './search-bar.reducers'
import { SEARCH_BAR_TYPES } from './search-bar.types';

describe('search-bar reducer', () => {
  // Case 1: state = undefined, type = empty, payload = empty
  it('should return the initial state, when received: state = undefined, type = empty, payload = empty', () => {
    expect(searchBarReducer(undefined, {})).toEqual(
      {
        searchInput: ''
      }
    )
  })
 
  // Case 2: state = undefined, type = UPDATE_SEARCH_INPUT, payload = empty
  it('should return the empty value, when received: state = undefined, type = UPDATE_SEARCH_INPUT, payload = empty', () => {
    let searchString = '';
    expect(
      searchBarReducer(undefined, {
        type: SEARCH_BAR_TYPES.updateSearchInput,
        payload: {
          searchString
        }
      })
    ).toEqual(
      {
        searchInput: searchString
      }
    )
  })
  
  // Case 3: state = undefined, type = empty, payload = searchString
  it('should return the initial state, when received: state = undefined, type = empty, payload = searchString', () => {
    let searchString = 'test';
    expect(
      searchBarReducer(undefined, {
        type: '',
        payload: {
          searchString
        }
      })
    ).toEqual(
      {
        searchInput: ''
      }
    )
  })
 
  // Case 4: state = undefined, type = UPDATE_SEARCH_INPUT, payload = searchString
  it('should return searchString, when received: state = undefined, type = UPDATE_SEARCH_INPUT, payload = searchString', () => {
    let searchString = 'test';
    expect(
      searchBarReducer(undefined, {
        type: SEARCH_BAR_TYPES.updateSearchInput,
        payload: {
          searchString
        }
      })
    ).toEqual(
      {
        searchInput: searchString
      }
    )
  })
  
  // Case 5: state = state, type = empty, payload = searchString
  it('should return state, when received: state = state, type = empty, payload = searchString', () => {
    let state = 'any state';
    let searchString = 'test';
    expect(
      searchBarReducer(state, {
        type: '',
        payload: {
          searchString
        }
      })
    ).toEqual(
      state
    )
  })
  
  // Case 6: state = state, type = not_expected_action, payload = searchString
  it('should return state, when received: state = state, type = not_expected_action, payload = searchString', () => {
    let state = 'any state';
    let searchString = 'test';
    expect(
      searchBarReducer(state, {
        type: 'NOT_EXPECTED',
        payload: {
          searchString
        }
      })
    ).toEqual(
      state
    )
  })
   
  // Case 6: state = state, type = not_expected_action, payload = searchString
  it('should not return searchString, when received: state = state, type = not_expected_action, payload = searchString', () => {
    let state = 'any state';
    let searchString = 'test';
    expect(
      searchBarReducer(state, {
        type: 'NOT_EXPECTED',
        payload: {
          searchString
        }
      })
    ).not.toEqual(
      {
        searchInput: searchString
      }
    )
  })
  
  // Case 7: state = state, type = UPDATE_SEARCH_INPUT, payload = searchString
  it('should return searchString, when received: state = state, type = UPDATE_SEARCH_INPUT, payload = searchString', () => {
    let state = 'any state';
    let searchString = 'test';
    expect(
      searchBarReducer(state, {
        type: SEARCH_BAR_TYPES.updateSearchInput,
        payload: {
          searchString
        }
      })
    ).toEqual(
      {
        searchInput: searchString
      }
    )
  })

  // Case 8: state = state, type = UPDATE_SEARCH_INPUT, payload = empty
  it('should return searchString empty, when received: state = state, type = UPDATE_SEARCH_INPUT, payload = empty', () => {
    let state = 'any state';
    let searchString = '';
    expect(
      searchBarReducer(state, {
        type: SEARCH_BAR_TYPES.updateSearchInput,
        payload: {
          searchString
        }
      })
    ).toEqual(
      {
        searchInput: searchString
      }
    )
  })

  // Case 9: state = empty, type = UPDATE_SEARCH_INPUT, payload = searchString
  it('should return searchString, when received: state = empty, type = UPDATE_SEARCH_INPUT, payload = searchString', () => {
    let state = '';
    let searchString = 'test';
    expect(
      searchBarReducer(state, {
        type: SEARCH_BAR_TYPES.updateSearchInput,
        payload: {
          searchString
        }
      })
    ).toEqual(
      {
        searchInput: searchString
      }
    )
  })
  
  // Case 10: state = empty, type = UPDATE_SEARCH_INPUT, payload = an array
  it('should return searchString as an array, when received: state = empty, type = UPDATE_SEARCH_INPUT, payload = an array', () => {
    let state = '';
    let searchString = ['test'];
    expect(
      searchBarReducer(state, {
        type: SEARCH_BAR_TYPES.updateSearchInput,
        payload: {
          searchString
        }
      })
    ).toEqual(
      {
        searchInput: searchString
      }
    )
  })
  
  // Case 11: state = empty, type = UPDATE_SEARCH_INPUT, payload = undefined
  it('should return searchString as undefined, when received: state = empty, type = UPDATE_SEARCH_INPUT, payload = undefined', () => {
    let state = '';
    let searchString = undefined;
    expect(
      searchBarReducer(state, {
        type: SEARCH_BAR_TYPES.updateSearchInput,
        payload: {
          searchString
        }
      })
    ).toEqual(
      {
        searchInput: searchString
      }
    )
  })

})

