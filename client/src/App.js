import React, { Component } from "react";
import apiService from "./shared/services/api-service";
import { ListItem } from "./ListItem/ListItem";
import logo from "./logo.svg";
import "./App.css";

require('dotenv').config();
const googleMapsAPIKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
if (!googleMapsAPIKey) throw new Error("googleMapsAPIKey environment variable required");

export const locations = ["park", "coffee shop", "jungle"];
class App extends Component {
  componentDidMount() {
    apiService
      .get("/someModels")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {locations.map((location, index) => <ListItem key={index} locationName={location} />)}
        </ul>

        <iframe
          width="600"
          height="300"
          title="map of Rangle"
          src={`https://www.google.com/maps/embed/v1/place?key=${googleMapsAPIKey}&q=18+York+St, Toronto, Ontario`} allowFullScreen>
        </iframe>
      </div>
    );
  }
}

export default App;
