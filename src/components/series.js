import React from 'react';
import { Tiles } from 'components/tiles';
import { Title } from 'components/title';
import { Wrapper } from 'components/wrapper';
import { useFeed } from 'hooks/use-feed';

export const Series = () => {
  const { data, error, loading } = useFeed('feeds/sample.json', { programType: 'series' });

  return (
    <>
      <Title>Popular Series</Title>
      <Wrapper>
        <Tiles data={data} error={error} loading={loading} />
      </Wrapper>
    </>
  );
};
