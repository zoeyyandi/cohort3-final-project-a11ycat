import React from 'react';
import { connect } from 'react-redux';
import {
  fetchLocations,
  updateSearchInput,
  textSearch
} from './search-bar.actions';
import { SearchBar } from './search-bar.component';
import { toggleAutoComplete } from '../auto-complete-list/auto-complete-list.actions';

const _SearchBarContainer = ({
  fetchLocations,
  updateSearchInput,
  searchInput,
  textSearch,
  toggleAutoComplete
}) => (
  <SearchBar
    fetchLocations={fetchLocations}
    updateSearchInput={updateSearchInput}
    inputValue={searchInput}
    textSearch={textSearch}
    toggleAutoComplete={toggleAutoComplete}
  />
);

const mapStateToProps = state => ({
  searchInput: state.searchBarReducer.searchInput
});

const mapDispatchToProps = {
  fetchLocations,
  updateSearchInput,
  textSearch,
  toggleAutoComplete
};

export const SearchBarContainer = connect(mapStateToProps, mapDispatchToProps)(
  _SearchBarContainer
);
