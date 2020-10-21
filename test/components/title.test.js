import React from 'react';
import { render, screen } from '@testing-library/react';
import { Title } from 'components/title';

describe('components/content.js', () => {
  it('should render a child component.', () => {
    const text = 'title test';

    render(<Title>{text}</Title>);

    expect(screen.getByText(text)).toHaveTextContent(text);
  });
});
