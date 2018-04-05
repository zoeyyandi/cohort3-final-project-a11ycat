import * as actions from './search-bar.actions'
import { SEARCH_BAR_TYPES } from './search-bar.types';
import { LIST_ITEM_ACTION_TYPES } from '../list-item/list-item.types';


// this action is called for each character the user type in the search bar
describe('action: updateSearchInput', () => {
  it('should return the search input with letters', () => {
    const searchString = 'Fairview';
    const expectedAction = {
      type: SEARCH_BAR_TYPES.updateSearchInput,
      payload: {
        searchString
      }
    }
    expect(actions.updateSearchInput(searchString)).toEqual(expectedAction)
  });

  it('should return the search input with numbers', () => {
    const searchString = '1234';
    const expectedAction = {
      type: SEARCH_BAR_TYPES.updateSearchInput,
      payload: {
        searchString
      }
    }
    expect(actions.updateSearchInput(searchString)).toEqual(expectedAction)
  });

  it('should return the search input with spaces', () => {
    const searchString = '  ';
    const expectedAction = {
      type: SEARCH_BAR_TYPES.updateSearchInput,
      payload: {
        searchString
      }
    }
    expect(actions.updateSearchInput(searchString)).toEqual(expectedAction)
  });

  it('should do nothing with empty search input', () => {
    const searchString = '';
    const expectedAction = {
      type: SEARCH_BAR_TYPES.updateSearchInput,
      payload: {
        searchString
      }
    }
    expect(actions.updateSearchInput(searchString)).toEqual(expectedAction)
  });
})

// this action is called for each character the user type in the search bar
describe('action: addLocations', () => {
  it('should return a list of 5 locations', () => {
    const locations = ['Fairview Mall, Sheppard Avenue East, North York, ON, Canada', 'Fairview Library, Fairview Mall Drive, North York, ON, Canada', 'Cineplex SilverCity Fairview Mall Cinemas, Sheppard Avenue East, North York, ON, Canada', 'Fairview Mall Apartments, Fairview Mall Drive, North York, ON, Canada', 'Sushi Shop Fairview Mall, Sheppard Avenue East, North York, ON, Canada'];
    const expectedAction = {
      type: SEARCH_BAR_TYPES.addLocations,
      payload: {
        locations
      }
    }
    expect(actions.addLocations(locations)).toEqual(expectedAction)
  });

  it('should return an empty list', () => {
    const locations = [];
    const expectedAction = {
      type: SEARCH_BAR_TYPES.addLocations,
      payload: {
        locations
      }
    }
    expect(actions.addLocations(locations)).toEqual(expectedAction)
  });
})

// this action is called when user click on search bar
describe('action: updateListItemLocations', () => {
  it('should return the location in the search bar', () => {
    const locations = ['CF Fairview Mall'];
    const expectedAction = {
      type: LIST_ITEM_ACTION_TYPES.updateLocations,
      payload: {
        locations
      }
    }
    expect(actions.updateListItemLocations(locations)).toEqual(expectedAction)
  });

  it('should return empty location', () => {
    const locations = [];
    const expectedAction = {
      type: LIST_ITEM_ACTION_TYPES.updateLocations,
      payload: {
        locations
      }
    }
    expect(actions.updateListItemLocations(locations)).toEqual(expectedAction)
  });
})

// fetchLocations
// textSearch
