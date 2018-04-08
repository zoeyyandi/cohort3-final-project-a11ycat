import React, { Component } from 'react';
import { Button } from '../../ui-kit/button';
import { Heading } from '../../ui-kit/heading';

import styled from "styled-components";

export const Item = styled.div`
  float: left;
  margin: 10px;
  width: 350px;
  length: 150px;
`;

export const Container = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  vertical-align: top;

  @media  screen and (max-width: 1125px) {
      max-width: 740px;
      margin: 0 auto;
  }
  @media screen and (max-width: 755px) {
    max-width: 370px;
    margin: 0 auto;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

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
  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.handleOnClick(event);
    }
  };
  render() {
    const { savedToDb, location } = this.props;
    return (
      <div>
        <Heading>{location.name}</Heading>
        <div>
        <Container>
          {this.accessibilityFeatures.map((feature, index) => (
            <Item key={index}>
              <label htmlFor={index}>
                <input
                  checked={savedToDb ? false : null}
                  type="checkbox"
                  id={`rate${index}`}
                  onClick={() =>
                    this.props.onClickFeature(this.location, feature)
                  }
                  onKeyPress={this.handleKeyPress}
                />
                {feature}
              </label>
            </Item>
          ))}
        </Container>
        <Button onClick={this.handleOnClick}>Submit</Button>
        </div>
      </div>
    );
  }
}
