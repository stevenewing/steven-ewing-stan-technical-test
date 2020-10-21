import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import googleIcon from 'assets/store/play-store.svg';
import microsoftIcon from 'assets/store/windows-store.svg';
import appleIcon from 'assets/store/app-store.svg';

const StoreWrapper = styled.div`
  display: flex;
  flex-direction: column;

  a {
    display: block;
    margin: 0 0 20px 0;
  }

  @media (min-width: 1140px) {
    flex-direction: row;

    a {
      margin: 0 20px 0 0;
    }
  }
`;

const Icon = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  height: 40px;
  width: 135px;
`;

const AppleIcon = styled(Icon)`
  background-image: url(${appleIcon});
`;

const GoogleIcon = styled(Icon)`
  background-image: url(${googleIcon});
`;

const MicrosoftIcon = styled(Icon)`
  background-image: url(${microsoftIcon});
  width: 110px;
`;

export const Store = () => (
  <StoreWrapper>
    <Link to="/">
      <AppleIcon />
    </Link>
    <Link to="/">
      <GoogleIcon />
    </Link>
    <Link to="/">
      <MicrosoftIcon />
    </Link>
  </StoreWrapper>
);
