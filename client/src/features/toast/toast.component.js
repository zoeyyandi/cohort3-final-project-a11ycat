import React from 'react';
import styled, { css } from 'styled-components';
import { variables } from '../../ui-kit/variables';

export const ToastComponent = props => {
  if (props.showToast) {
    return (
      <StyledToast onClick={props.hideToast} level={props.level}>
        {props.message}
      </StyledToast>
    );
  } else return null;
};

const StyledToast = styled.div`
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 600px;
  min-width: 320px;
  padding: 25px 20px 25px 70px;
  line-height: 1.5;
  background: ${variables.colour.lightPurple};
  color: ${variables.colour.offwhite};
  box-shadow: 4px 4px 12px ${variables.colour.offBlack};
  text-align: center;
  cursor: pointer;

  &:before {
    color: white;
    height: 50px;
    width: 50px;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 30px;
    padding: 2px 3px 2px 3px;
    border-radius: ${variables.circle};
  }

  ${props =>
    props.level === 'success' &&
    css`
      &:before {
        background: #6cd577;
        content: '✔';
      }
    `} ${props =>
    props.level === 'error' &&
    css`
      &:before {
        background: #cb180b;
        content: '✘';
      }
    `};
`;
