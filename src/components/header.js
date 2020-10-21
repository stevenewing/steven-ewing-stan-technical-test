import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Wrapper } from 'components/wrapper';

const HeaderWrapper = styled.header`
  background-image: linear-gradient(to bottom, #0099ff 0%, #0070ff 81%, #0166fc 100%);
  display: flex;
  height: 60px;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 60px;
  width: 100%;
`;

const Title = styled.h1`
  margin: 0;

  a {
    color: #fff;
    text-decoration: none;
    text-shadow: 2px 2px 2px #006cc9;
  }
`;

const Navigation = styled.div`
  display: none;

  a {
    color: #fff;
    display: inline-block;
    line-height: 34px;
    margin-right: 20px;
    padding: 0 12px;
    text-decoration: none;
    text-shadow: 2px 2px 2px #006cc9;

    &:hover {
      text-decoration: underline;
    }

    &:last-child {
      background-image: linear-gradient(16deg, #444 0%, #333 100%);
      border: 1px solid #454442;
      margin-right: 0;
      text-shadow: 2px 2px 2px #3f3b32;

      &:hover {
        text-decoration: none;
      }
    }
  }

  @media (min-width: 1140px) {
    display: block;
  }
`;

export const Header = () => (
  <HeaderWrapper>
    <Wrapper>
      <Content>
        <Title>
          <Link to="/">DEMO Streaming</Link>
        </Title>
        <Navigation>
          <Link to="/">Log in</Link>
          <Link to="/">Start your free trial</Link>
        </Navigation>
      </Content>
    </Wrapper>
  </HeaderWrapper>
);
