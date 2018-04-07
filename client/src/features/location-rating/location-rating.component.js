import React, { Component } from 'react';
import { Button } from '../../ui-kit/button';
import { Heading } from '../../ui-kit/heading';
export class LocationRating extends Component {
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
    const { savedToDb, location } = this.props;
    return (
      <div>
        <Heading>{location.name}</Heading>
        <div>
          {this.accessibilityFeatures.map((feature, index) => (
            <div key={index}>
              <label htmlFor={`rate${index}`}>
                <input
                  checked={savedToDb ? false : null}
                  type="checkbox"
                  id={`rate${index}`}
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
