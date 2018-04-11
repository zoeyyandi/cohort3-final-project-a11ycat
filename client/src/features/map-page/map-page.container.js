import React from 'react';
import { GoogleMapContainer } from '../google-map/google-map.container';
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
