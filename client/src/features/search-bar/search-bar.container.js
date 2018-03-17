import React, { Component } from 'react';
import { connect } from 'react-redux';
import { thisAction, thatAction } from './search-bar.actions';

const mapStateToProps = state => ({
  something: state.something
});

const mapDispatchToProps = {
  thisAction,
  thatAction
};

export const searchBarContainer = connect(mapStateToProps, mapDispatchToProps)(
  SearchBarContainer
);
