import React, { Component } from 'react';
import { apiService } from '../../shared/services/api-service';
import { ListItemContainer } from '../list-item/list-item.container';
import { SearchBarContainer } from '../search-bar/search-bar.container';
import { AutoCompleteListContainer } from '../auto-complete-list/auto-complete-list.container';
import { Heading } from '../../ui-kit/heading';
import { List } from '../../ui-kit/list';
import { Page } from '../../ui-kit/page-style';
import { LoadingIndicator } from '../list-item/list-loading.component';

export class App extends Component {
  componentDidMount() {
    this.locationCall();
  }

  locationCall = async () => {
    this.props.toggleLoading(true);
    await this.props.getLocation();
    this.props.fetchInitialPlaces(this.props.lat, this.props.lon);
  };

  render() {
    const { showAutoComplete, listLocations, isLoading } = this.props;
    return (
      <Page>
        <SearchBarContainer />
        {showAutoComplete && <AutoCompleteListContainer />}
        {!isLoading && <Heading> Nearby locations </Heading>}
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
