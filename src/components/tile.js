import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import placeholderIcon from 'assets/placeholder.png';

const TileWrapper = styled.div`
  margin-bottom: 46px;

  a {
    text-decoration: none;
  }
`;

const Image = styled.div`
  background-image: ${props => `url(${props.url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 200px;
  width: 134px;
`;

const Placeholder = styled.div`
  background-color: #1c1c1c;
  background-image: url(${placeholderIcon});
  background-position: center;
  background-repeat: no-repeat;
  height: 200px;
  width: 134px;

  &::before {
    align-self: stretch;
    color: #fff;
    content: ${props => `'${props.title}'`};
    display: flex;
    font-size: 26px;
    font-weight: bold;
    justify-content: center;
    line-height: 201px;
    text-transform: uppercase;
  }
`;

const Title = styled.h3`
  color: #000;
  font-size: 12px;
  font-weight: normal;
  margin: 10px 0 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 134px;
`;

/**
 *
 * @property {string} image A string with the url of the image to be displayed.
 * @property {string} placeholder A string with the placeholder text (Used for the home page).
 * @property {string} title A string with the title text to be displayed under the tile image.
 * @property {string} url A string containing the url to be directed to when a tile is clicked.
 *
 * @returns {React.ReactNode} The react component to be rendered.
 */

export const Tile = props => {
  const { image, placeholder, title, url } = props;

  return (
    <TileWrapper>
      <Link to={url}>
        {placeholder ? <Placeholder title={placeholder} /> : null}
        {image ? <Image title={title} url={image} /> : null}
        <Title>{title}</Title>
      </Link>
    </TileWrapper>
  );
};

Tile.defaultProps = {
  url: '/'
};
