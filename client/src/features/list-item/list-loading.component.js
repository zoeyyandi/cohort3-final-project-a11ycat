import React from 'react';
import styled from 'styled-components';
import MDSpinner from 'react-md-spinner';

export const Loader = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  align-items: center;
`;

export const LoadingIndicator = () => (
  <Loader>
    <MDSpinner
      size={70}
      color1="#75efb4"
      color2="#62cc99"
      color3="#4a9e75"
      color4="#2e694d"
    />
    <p>LOADING...</p>
  </Loader>
);
