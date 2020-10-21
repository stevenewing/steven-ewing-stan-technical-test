import React from 'react';
import { render, screen } from '@testing-library/react';
import { StaticRouter as Router } from 'react-router-dom';
import { Tiles } from 'components/tiles';

describe('components/tiles.js', () => {
  it('should render loading text.', () => {
    const loadingText = 'Loading...';

    render(
      <Router>
        <Tiles loading />
      </Router>
    );

    expect(screen.getByText(loadingText)).toBeInTheDocument();
  });

  it('should render error text.', () => {
    const errorText = 'Oops, something went wrong...';

    render(
      <Router>
        <Tiles error />
      </Router>
    );

    expect(screen.getByText(errorText)).toBeInTheDocument();
  });

  it('should render a tile.', () => {
    const titleText = 'Title';

    render(
      <Router>
        <Tiles data={[{ title: titleText }]} />
      </Router>
    );

    expect(screen.getByText(titleText)).toBeInTheDocument();
  });
});
