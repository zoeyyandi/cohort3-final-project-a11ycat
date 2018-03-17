import React from 'react';
import { Button } from '../../ui-kit/components/Button';
import styled from 'styled-components';

export const Input = styled.input`
  display: flex;
  justify-content: space-between;
  margin: 10px 5px;
`;

export const SearchBar = () => (
  <div>
    <Input />
    <Button>Search</Button>
  </div>
);
