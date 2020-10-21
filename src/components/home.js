import React from 'react';
import styled from 'styled-components';
import { Tile } from 'components/tile';
import { Title } from 'components/title';
import { Wrapper } from 'components/wrapper';

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  a {
    color: #fff;
    display: block;
    margin-right: 14px;
    text-decoration: none;
  }
`;

export const Home = () => (
  <>
    <Title>Popular Titles</Title>
    <HomeWrapper>
      <Wrapper>
        <Tile placeholder="Series" title="Popular Series" url="/series" />
        <Tile placeholder="Movies" title="Popular Movies" url="/movies" />
      </Wrapper>
    </HomeWrapper>
  </>
);
