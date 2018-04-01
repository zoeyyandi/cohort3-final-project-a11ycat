import { connect } from 'react-redux';
import {
  fetchLocations,
  updateSearchInput,
  textSearch
} from './search-bar.actions';
import { SearchBar } from './search-bar.component';
import { toggleAutoComplete } from '../auto-complete-list/auto-complete-list.actions';

const mapStateToProps = state => ({
  inputValue: state.searchBarReducer.searchInput,
  userLocation: state.appReducer.userLocation
});

const mapDispatchToProps = {
  fetchLocations,
  updateSearchInput,
  textSearch,
  toggleAutoComplete
};

export const SearchBarContainer = connect(mapStateToProps, mapDispatchToProps)(
  SearchBar
);
