import React, { Component } from 'react';
import { ListItemContainer } from '../list-item/list-item.container';
import { SearchBarContainer } from '../search-bar/search-bar.container';
import { AutoCompleteListContainer } from '../auto-complete-list/auto-complete-list.container';
import { Heading } from '../../ui-kit/heading';
import { List } from '../../ui-kit/list';
import { Page } from '../../ui-kit/page-style';
import { LoadingIndicator } from '../list-item/list-loading.component';
import { variables } from '../../ui-kit/variables';

export class App extends Component {
  componentDidMount() {
    this.locationCall();
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
  }

  locationCall = async () => {
    this.props.toggleLoading(true);
    await this.props.getLocation();
    if (!this.props.geolocationError) {
      this.props.fetchInitialPlaces(this.props.lat, this.props.lon);
    }
  };

  render() {
    const {
      showAutoComplete,
      listLocations,
      isLoading,
      geolocationError
    } = this.props;
    return (
      <Page>
        <SearchBarContainer />
        {showAutoComplete && <AutoCompleteListContainer />}
        {!isLoading &&
          !geolocationError && <Heading> Nearby locations </Heading>}
        {!isLoading &&
          geolocationError && (
            <div
              style={{
                backgroundColor: variables.colour.darkestPurple,
                padding: '10px 0',
                margin: '20px 0',
                textAlign: 'center'
              }}
            >
              Please turn on your location services!
            </div>
          )}
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <List>
            {listLocations.map((location, index) => (
              <ListItemContainer key={index} location={location} />
            ))}
          </List>
        )}
      </Page>
    );
  }
}
