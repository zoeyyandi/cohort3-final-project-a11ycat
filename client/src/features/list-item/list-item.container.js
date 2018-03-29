import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem } from './list-item.component';

const _ListItemContainer = ({ locations }) => <ListItem location={locations} />;

const mapStateToProps = state => ({
  locations: state.listItemReducer.locations
});

const mapDispatchToProps = {};

export const ListItemContainer = connect(mapStateToProps, mapDispatchToProps)(
  _ListItemContainer
);
