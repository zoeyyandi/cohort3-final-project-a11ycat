import React from 'react';
import { connect } from 'react-redux';
import { AutoCompleteList } from './auto-complete-list.component';
import { updateSearchInput } from '../search-bar/search-bar.actions';
import { toggleAutoComplete } from './auto-complete-list.actions';

const _AutoCompleteListContainer = ({
  autoCompleteList,
  updateSearchInput,
  toggleAutoComplete
}) => (
  <AutoCompleteList
    autoCompleteList={autoCompleteList}
    updateSearchInput={updateSearchInput}
    toggleAutoComplete={toggleAutoComplete}
  />
);

const mapStateToProps = state => ({
  autoCompleteList: state.autoCompleteListReducer.autoCompleteList
});

const mapDispatchToProps = {
  updateSearchInput,
  toggleAutoComplete
};

export const AutoCompleteListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_AutoCompleteListContainer);
