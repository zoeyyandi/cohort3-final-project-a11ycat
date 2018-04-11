import styled from "styled-components";
import { variables } from "./variables";

export const Button = styled.button`
  height: ${variables.button.height};
  min-width: 100px;
  padding: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  appearance: none;
  font-family: 'Open Sans', sans-serif;
  background: ${variables.colour.gold};
  color: ${variables.colour.darkestPurple};
  border: 1px solid ${variables.colour.darkGrey};
  > * {
    vertical-align: middle;
  }
`;
