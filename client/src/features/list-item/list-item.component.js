import React from 'react';
import { Button } from '../../ui-kit/button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
`;

export const ListItem = ({ location, onSelectLocation }) => (
  <Item>
    {location.name}
    <Link to={'/RateLocation'}>
      <Button onClick={() => onSelectLocation(location)}>Rate This</Button>
    </Link>
  </Item>
);
