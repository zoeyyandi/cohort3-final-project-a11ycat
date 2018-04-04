import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleMapContainer } from '../google-map/google-map.container';

export const MapPageContainer = () => {
    return (
      <div>
          <Link to="/">Home</Link>
          <GoogleMapContainer />
      </div>
    );
  }