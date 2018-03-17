import React, { Component } from 'react';
import { connect } from 'react-redux';
import { thisAction, thatAction } from './auto-complete-list.actions';

const mapStateToProps = state => ({
  something: state.something
});

const mapDispatchToProps = {
  thisAction,
  thatAction
};

export const AutoCompleteListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AutoCompleteListContainer);
