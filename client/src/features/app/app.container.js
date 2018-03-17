import React, { Component } from "react";
import { connect } from 'react-redux';
import "../../App.css";
import { App } from './app.component'
import {getLocation} from "./app.actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    getLocation
};

export const AppContainer = connect(null,mapDispatchToProps)(App);
