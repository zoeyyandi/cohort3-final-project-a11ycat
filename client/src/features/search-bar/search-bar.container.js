import { connect } from 'react-redux';
import {
  fetchLocations,
  updateSearchInput,
  textSearch,
  errorNoInput,
  errorHandler
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
  toggleAutoComplete,
  errorNoInput,
  errorHandler
};

export const SearchBarContainer = connect(mapStateToProps, mapDispatchToProps)(
  SearchBar
);
