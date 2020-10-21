import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Wrapper } from 'components/wrapper';
import { Social } from 'components/social';
import { Store } from 'components/store';

const FooterWrapper = styled.footer`
  align-items: center;
  background-color: #1c1c1c;
  display: flex;
  flex-direction: column;
  margin-top: 34px;
  min-height: 210px;
  padding: 22px 22px 0 22px;

  @media (min-width: 1140px) {
    padding: 44px 0;
  }
`;

const Content = styled.div`
  width: 100%;
`;

const TextLinks = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: #ccc;
    font-size: 13px;
    line-height: 22px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 1140px) {
    flex-direction: row;

    a {
      padding: 0;

      &:not(:last-child):after {
        content: '|';
        display: inline-block;
        padding: 0 10px;
      }
    }
  }
`;

const Copyright = styled.div`
  color: #888;
  font-size: 12px;
  margin: 18px 0 46px 0;
`;

const ImageLinks = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Footer = () => (
  <FooterWrapper>
    <Wrapper>
      <Content>
        <TextLinks>
          <Link to="/">Home</Link>
          <Link to="/">Terms and Conditions</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Collection Statement</Link>
          <Link to="/">Help</Link>
          <Link to="/">Manage Account</Link>
        </TextLinks>
        <Copyright>Copyright &copy; 2020 DEMO Streaming. All Rights Reserved.</Copyright>
        <ImageLinks>
          <Social />
          <Store />
        </ImageLinks>
      </Content>
    </Wrapper>
  </FooterWrapper>
);
