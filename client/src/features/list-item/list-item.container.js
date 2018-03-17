import React, { Component } from "react";
import { connect } from 'react-redux';
import {thisAction, thatAction} from "./list-item.actions";
import { ListItem } from './list-item.component'

const mapStateToProps = state => ({
  something: state.something,
});

const mapDispatchToProps = {
  thisAction,
  thatAction
};

export const ListItemContainer = connect(mapStateToProps,mapDispatchToProps)(ListItemContainer);