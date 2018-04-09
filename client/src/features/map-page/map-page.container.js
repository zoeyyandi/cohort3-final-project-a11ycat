import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleMapContainer } from '../google-map/google-map.container';
import HomeIcon from '../../ui-kit/home-icon.png';
import styled from 'styled-components';

export const Icon = styled.img`
  height: 40px;
`;

export const MapPageContainer = () => {
  return (
    <div>
      <GoogleMapContainer />
    </div>
  );
};
