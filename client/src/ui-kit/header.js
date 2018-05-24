import React from 'react';
import styled from 'styled-components';
import Logo from './logo.svg';
import HomeIcon from './home.svg';
import MapIcon from './map-location.svg';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { variables } from './variables';
import { Page } from './page-style';

const PageHeaderWrapper = styled.div`
  background-color: ${variables.colour.darkestPurple};
  height: 90px;
`;

const HeaderWrap = Page.extend`
  height: 80px;
  display: flex;
  margin-bottom: 20px;
  padding-top: 10px;
`;

const AppName = styled.h1`
  margin-left: 10px;
`;
export const Icon = styled.img`
  height: 35px;
  margin-right: 10px;
`;
export const IconWrapper = styled.div`
  margin: 25px 25px 10px auto;
`;

const StyledLogo = styled.img`
  height: 70px;
`;

const Label = styled.span`
  color: ${variables.colour.offwhite};
  margin-top: 5px;
`;

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '30px'
};

export const Header = ({ headerText, locationProps }) => (
  <PageHeaderWrapper>
    <HeaderWrap>
      <StyledLogo alt="github cat logo" src={Logo} />
      <AppName>{headerText}</AppName>
      <IconWrapper>
        {locationProps.location.pathname === '/' ? (
          <Link style={style} to="/map">
            <Icon alt="route to map" src={MapIcon} />
            <Label>Map </Label>
          </Link>
        ) : (
          <Link to="/" style={style}>
            <Icon alt="home icon" src={HomeIcon} />
            <Label>Home </Label>
          </Link>
        )}
      </IconWrapper>
    </HeaderWrap>
  </PageHeaderWrapper>
);

export const HeaderWithRouter = withRouter(props => (
  <Header locationProps={props} headerText={'A11yCatz'} />
));
