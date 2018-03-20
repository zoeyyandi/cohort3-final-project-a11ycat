import React from 'react';
import { connect } from 'react-redux';
import { App } from './app.component';
import { getLocation } from './app.actions';
import '../../App.css';

const _AppContainer = ({ showAutoComplete }) => (
  <App showAutoComplete={showAutoComplete} />
);

const mapStateToProps = state => ({
  showAutoComplete: state.autoCompleteListReducer.showAutoComplete
});

const mapDispatchToProps = {
  getLocation
};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(
  _AppContainer
);
