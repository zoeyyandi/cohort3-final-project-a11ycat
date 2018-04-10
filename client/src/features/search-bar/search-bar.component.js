import React from 'react';
import { Button } from '../../ui-kit/button';
import styled from 'styled-components';
import { variables } from '../../ui-kit/variables';
import { ToastContainer } from '../toast/toast.container';

const Input = styled.input`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 30px;
  border: none;
  padding-left: 10px;
  font-size: 1em;
  &:focus {
    outline: none;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  max-height: 36px;
  border-radius: 5px;
  border: 2px solid ${variables.colour.darkGrey};
`;

const SearchButton = Button.extend`
  border-radius: 0 4px 4px 0;
  min-height: 36px;
`;

export const SearchBar = ({
  fetchLocations,
  updateSearchInput,
  inputValue,
  textSearch,
  toggleAutoComplete,
  userLocation,
  errorNoInput
}) => {
  const handleChange = event => {
    let input = event.target.value;
    updateSearchInput(input);
    fetchLocations(input, userLocation.lat, userLocation.lon);
  };

  const handleClick = event => {
    if (!inputValue.trim()) {
      errorNoInput();
    } else {
      textSearch(inputValue, userLocation.lat, userLocation.lon);
      updateSearchInput('');
      toggleAutoComplete(false);
    }
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleClick(event);
    }
  };

  return (
    <div>
      <ToastContainer />
      <SearchContainer>
        <Input
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="Location Name"
          value={inputValue}
        />
        <SearchButton onClick={handleClick}>Search</SearchButton>
      </SearchContainer>
    </div>
  );
};
