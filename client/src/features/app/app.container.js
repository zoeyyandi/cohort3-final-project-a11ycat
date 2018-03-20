import React from 'react';
import { connect } from 'react-redux';
import { App } from './app.component';
import { getLocation } from './app.actions';
import '../../App.css';

const _AppContainer = ({ showAutoComplete, listLocations }) => (
  <App showAutoComplete={showAutoComplete} listLocations={listLocations} />
);

const mapStateToProps = state => ({
  showAutoComplete: state.autoCompleteListReducer.showAutoComplete,
  listLocations: state.listItemReducer.locations
});

const mapDispatchToProps = {
  getLocation
};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(
  _AppContainer
);
