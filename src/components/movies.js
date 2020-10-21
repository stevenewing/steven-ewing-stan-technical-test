import React from 'react';
import { Tiles } from 'components/tiles';
import { Title } from 'components/title';
import { Wrapper } from 'components/wrapper';
import { useFeed } from 'hooks/use-feed';

export const Movies = () => {
  const { data, error, loading } = useFeed('feeds/sample.json', { programType: 'movie' });

  return (
    <>
      <Title>Popular Movies</Title>
      <Wrapper>
        <Tiles data={data} error={error} loading={loading} />
      </Wrapper>
    </>
  );
};
