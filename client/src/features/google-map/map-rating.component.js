import React from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
import { variables } from '../../ui-kit/variables';

export const Stars = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px;
  width: 180px;
  justify-content: center;
  align-items: center;
`;

const allratings = new Array(5).fill(0);

export const Ratings = ({ avgRating }) => (
  <Stars>
    {allratings.map(
      (_, i) =>
        i < avgRating ? (
          <i
            key={i}
            style={{ color: '#ffb023', fontSize: '1.5em', margin: '2px' }}
            className="fa fa-star"
          />
        ) : (
          <i
            key={i}
            style={{
              color: variables.colour.lightGrey,
              fontSize: '1.5em',
              margin: '2px'
            }}
            className="fa fa-star"
          />
        )
    )}
  </Stars>
);
