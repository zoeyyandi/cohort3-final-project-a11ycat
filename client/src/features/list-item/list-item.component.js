import React from 'react';
import { Button } from '../../ui-kit/button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { variables } from '../../ui-kit/variables'

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
  border: 2px solid ${variables.colour.darkestPurple};
  background-color: ${variables.colour.mediumPurple};
  height: 44px;
  align-items: center;
  padding-left: 15px;
`;

const StyledButton = Button.extend`
  padding: 10px;
`

export const ListItem = ({ location, onSelectLocation }) => (
  <Item>
    {location.name}
    <Link to={'/RateLocation'}>
      <StyledButton onClick={() => onSelectLocation(location)}>Rate This</StyledButton>
    </Link>
  </Item>
);
