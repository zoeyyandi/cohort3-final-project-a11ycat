import React, { Component } from 'react';
import { apiService } from '../../shared/services/api-service';
import { ListItem } from '../list-item/list-item.component';
import { SearchBarContainer } from '../search-bar/search-bar.container';
import { AutoCompleteListContainer } from '../auto-complete-list/auto-complete-list.container';
import { LocationRatingContainer } from '../location-rating/location-rating.container';
import { GoogleMapContainer } from '../google-map/google-map.container';
import { Header } from '../../ui-kit/header';

export class App extends Component {
  componentDidMount() {
    apiService
      .get('/someModels')
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    this.locationCall();
  }

  locationCall = async () => {
    await this.props.getLocation();
    this.props.fetchInitialPlaces(this.props.lat, this.props.lon);
  };

  render() {
    const { showAutoComplete, listLocations } = this.props;
    return (
      <div className="App">
        <Header headerText={'A11yCatz'} />
        <ul>
          {listLocations.map((location, index) => (
            <ListItem key={index} locationName={location} />
          ))}
        </ul>
        <hr />

        <SearchBarContainer />
        {showAutoComplete && <AutoCompleteListContainer />}
        <GoogleMapContainer />
        <div>
          <br />
          <br />
          -------------------
          <br />
          <br />
          This should be a new page, after clicking on "rate" button:
          <br />
          <br />
          <LocationRatingContainer />
        </div>
      </div>
    );
  }
}
