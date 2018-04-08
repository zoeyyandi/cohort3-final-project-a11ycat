import React, { Component } from 'react';
import { Button } from '../../ui-kit/button';
import { Heading } from '../../ui-kit/heading';
<<<<<<< HEAD
import { device } from '../../ui-kit/device-breakpoints';
import { Page } from '../../ui-kit/page-style';

import styled from 'styled-components';

export const Item = styled.div`
  float: left;
  margin: 10px;
  width: 350px;
`;

export const InputWrapper = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: left;
  justify-content: left;
  flex-flow: column wrap;
  align-content: left;
  margin-bottom: 30px;

  @media ${device.tablet} {
    flex-direction: row;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const CenteredButton = Button.extend`
  margin-left: 20px;
  display: block;
  align-items: center;
`;

=======
import { ToastContainer } from '../toast/toast.container';
>>>>>>> Toast seems to be working just fine. Need to clean up before PR
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
      <Page>
        <Heading>{location.name}</Heading>
        <div>
          <InputWrapper>
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
                  />
                  {feature}
                </label>
              </Item>
            ))}
          </InputWrapper>
          <CenteredButton onClick={this.handleOnClick}>Submit</CenteredButton>
        </div>
      </Page>
    );
  }
}
