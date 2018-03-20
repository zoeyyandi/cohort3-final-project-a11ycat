import React from 'react';
import { connect } from 'react-redux';
import { fetchLocations, updateSearchInput } from './search-bar.actions';
import { SearchBar } from './search-bar.component';

const _SearchBarContainer = ({
  fetchLocations,
  updateSearchInput,
  searchInput
}) => (
  <SearchBar
    fetchLocations={fetchLocations}
    updateSearchInput={updateSearchInput}
    inputValue={searchInput}
  />
);

const mapStateToProps = state => ({
  searchInput: state.searchBarReducer.searchInput
});

const mapDispatchToProps = {
  fetchLocations,
  updateSearchInput
};

export const SearchBarContainer = connect(mapStateToProps, mapDispatchToProps)(
  _SearchBarContainer
);
