import React, { Component } from "react";
import { connect } from 'react-redux';
import "../../App.css";
import {thisAction, thatAction} from "./app.actions";
import { App } from './app.component'

const mapStateToProps = state => ({
  something: state.something,
});

const mapDispatchToProps = {
  thisAction,
  thatAction
};

export const AppContainer = connect(mapStateToProps,mapDispatchToProps)(App);
