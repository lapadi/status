/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
`;

const Logo = styled.img``;

const Header = styled.div`
  text-align: left;
  margin-bottom: 16px;
`;

export default () =>
  process.env.REACT_APP_LOGO || process.env.REACT_APP_NAME ? (
    <Header>
      {process.env.REACT_APP_LOGO ? (
        <Logo
          src={'https://lapadi.com/images/logo/lapadi-logo-w.svg'}
          alt={process.env.REACT_APP_NAME}
          style={{ height: "35px" }}
        />
      ) : (
        <Title>{process.env.REACT_APP_NAME}</Title>
      )}
    </Header>
  ) : null;
