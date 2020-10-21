import React from 'react';
import styled from 'styled-components';
import { Tile } from 'components/tile';

const TilesWrapper = styled.div`
  align-content: start;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 20px;
  width: 100%;

  @media (min-width: 1140px) {
    margin: 0;
    width: 1020px;
  }
`;

/**
 * @typedef TilesProps
 * @type {object}
 * @property {Array} data an array containing the data to be rendered.
 * @property {boolean} error A boolean value used to show or hide the error text.
 * @property {boolean} loading A boolean value used to show or hide the loading text.
 */

/**
 *
 * @param {TilesProps} props properties for the <Tiles /> component.
 *
 * @returns {React.ReactNode} The react component to be rendered.
 */

export const Tiles = props => {
  const { data, error, loading } = props;

  return (
    <TilesWrapper>
      {loading ? 'Loading...' : null}
      {error ? 'Oops, something went wrong...' : null}
      {data.length > 0 ? data.map(item => <Tile image={item.image} key={item.title} title={item.title} />) : null}
    </TilesWrapper>
  );
};

Tiles.defaultProps = {
  data: [],
  error: false,
  loading: false
};
