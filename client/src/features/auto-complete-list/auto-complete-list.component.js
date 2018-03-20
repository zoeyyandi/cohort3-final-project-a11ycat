import React, { Component } from 'react';
import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 10px 30px;
`;

export const Anchor = styled.a`
  color: black;
  text-decoration: none;
`;

export class AutoCompleteList extends Component {
  handleClick = (e, index) => {
    const { updateSearchInput, toggleAutoComplete } = this.props;
    e.preventDefault();
    let value = this[index].props.value;
    updateSearchInput(value);
    toggleAutoComplete(false);
  };

  render() {
    return this.props.autoCompleteList.map((item, index) => (
      <Anchor href="#!" key={index}>
        <Item
          ref={item => (this[index] = item)}
          onClick={e => this.handleClick(e, index)}
          value={item}
          key={index}
        >
          {item}
        </Item>
      </Anchor>
    ));
  }
}
