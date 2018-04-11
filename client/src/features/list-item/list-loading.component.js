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
      color1="#D4A865"
      color2="#CA9544"
      color3="#B38032"
      color4="#93692A"
    />
    <p>LOADING...</p>
  </Loader>
);
