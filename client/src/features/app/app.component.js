import React, {Component} from 'react';
import { ListItem } from "../list-item/list-item.component";
import logo from "../../logo.svg";
import apiService from "../../shared/services/api-service";


const googleMapsAPIKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
if (!googleMapsAPIKey) throw new Error("googleMapsAPIKey environment variable required");
export const locations = ["park", "coffee shop", "jungle"];


export class App extends Component {
    componentDidMount() {
      apiService
        .get("/someModels")
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      this.props.getLocation();
    }
  
    render() {
    const {thisAction,thatAction} = this.props;
  
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">House of A11yCats</h1>
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