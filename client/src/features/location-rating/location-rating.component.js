import React, { Component } from 'react';
import { Button } from '../../ui-kit/button';
import { Heading } from '../../ui-kit/heading';
import { Page } from '../../ui-kit/page-style';
import { variables } from '../../ui-kit/variables';

import styled from 'styled-components';

export const Item = styled.div`
  width: 100%;
  border: 2px solid ${variables.colour.darkestPurple};
  background-color: ${variables.colour.mediumPurple};
  height: 44px;
  align-items: center;
  padding-left: 15px;
  line-height: 2.3;
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 20px;
  align-items: left;
  justify-content: left;
  align-content: center;
  margin-bottom: 30px;
  width: 90%;
  max-width: 500px;
`;

export const CenteredButton = Button.extend`
  align-items: center;
`;

const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled.input`
  margin-right: 12px;
`;

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
  checkedBox = savedToDb => (savedToDb ? null : 'checked');
  render() {
    const { location } = this.props;
    return (
      <Page>
        <Heading>{location.name}</Heading>
        <PageWrapper>
          <InputWrapper>
            {this.accessibilityFeatures.map((feature, index) => (
              <label key={index} htmlFor={`rate${index}`}>
                <Item key={index}>
                  <StyledInput
                    checkedBox
                    type="checkbox"
                    id={`rate${index}`}
                    onClick={() =>
                      this.props.onClickFeature(this.location, feature)
                    }
                  />
                  {feature}
                </Item>
              </label>
            ))}
          </InputWrapper>
          <CenteredButton onClick={this.handleOnClick}>Submit</CenteredButton>
        </PageWrapper>
      </Page>
    );
  }
}
