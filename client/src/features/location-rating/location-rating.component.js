import React, { Component } from 'react';
import { Button } from '../../ui-kit/button';

export class LocationRating extends Component {
  location = { name: 'Place name', lat: 1, lon: 2 };
  accessibilityFeatures = [
    'Accessible parking',
    'Ramp leading to the front door',
    'Front door opens automatically',
    'Signage is easily legible',
    'Service animal is welcome'
  ];

  handleOnClick = event => {
    event.preventDefault();
    const { features, name, lat, lon, saveLocationToDb } = this.props;
    saveLocationToDb(name, lat, lon, features);
  };
  render() {
    const { savedToDb } = this.props;
    return (
      <div>
        <h1>{this.location.name}</h1>
        <div>
          {this.accessibilityFeatures.map((feature, index) => (
            <div key={index}>
              <label htmlFor={index}>
                <input
                  checked={savedToDb ? false : null}
                  type="checkbox"
                  onClick={() =>
                    this.props.onClickFeature(this.location, feature)
                  }
                />
                {feature}
              </label>
            </div>
          ))}
        </div>
        <div>
          <Button onClick={this.handleOnClick}>Submit</Button>
        </div>
      </div>
    );
  }
}
