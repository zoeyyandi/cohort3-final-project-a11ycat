import React from "react";
import styled from "styled-components";
import GithubCat from "./github-logo.png";
import HomeIcon from "./home-icon.png";
import MapIcon from "./map-icon.png";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const PageHeader = styled.div`
  display: flex;
  margin: 0px 50px 0px 30px;
  padding: 20px 0px;
`;
const AppName = styled.h1`
  margin-left: 10px;
`;
export const Icon = styled.img`
  height: 30px;
`;
export const IconWrapper = styled.div`
  margin-left: auto;
  padding-top: 20px;
`;

export const Header = ({ headerText, locationProps }) => (
  <PageHeader>
    <img alt="github cat logo" src={GithubCat} />
    <AppName>{headerText}</AppName>
    <IconWrapper>
      {locationProps.location.pathname === "/" ? (
        <Link to="/map">
          {" "}
          <Icon alt="route to map" src={MapIcon} />{" "}
        </Link>
      ) : (
        <Link to="/">
          {" "}
          <Icon alt="home icon" src={HomeIcon} />{" "}
        </Link>
      )}
    </IconWrapper>
  </PageHeader>
);

export const HeaderWithRouter = withRouter(props => (
  <Header locationProps={props} headerText={"A11yCatz"} />
));
