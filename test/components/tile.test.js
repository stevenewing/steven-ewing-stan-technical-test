import React from 'react';
import { render, screen } from '@testing-library/react';
import { StaticRouter as Router } from 'react-router-dom';
import { Tile } from 'components/tile';

describe('components/tile.js', () => {
  it('should render a placeholder.', () => {
    const placeholderText = 'Title';

    render(
      <Router>
        <Tile placeholder={placeholderText} />
      </Router>
    );

    expect(screen.getByTitle(placeholderText)).toBeInTheDocument();
  });

  it('should render an image.', () => {
    const imageUrl = 'http://localhost:3000/assets/placeholder.png';
    const titleText = 'Popular Titles';

    render(
      <Router>
        <Tile image={imageUrl} title={titleText} />
      </Router>
    );

    expect(screen.getByTitle(titleText)).toBeInTheDocument();
  });

  it('should render a title.', () => {
    const titleText = 'Popular Titles';

    render(
      <Router>
        <Tile title={titleText} />
      </Router>
    );

    expect(screen.getByText(titleText)).toBeInTheDocument();
  });
});
