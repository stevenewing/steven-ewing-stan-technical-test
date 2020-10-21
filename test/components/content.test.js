import React from 'react';
import { render, screen } from '@testing-library/react';
import { Content } from 'components/content';

describe('components/content.js', () => {
  it('should render a child component.', () => {
    const text = 'content test';

    render(<Content>{text}</Content>);

    expect(screen.getByText(text)).toHaveTextContent(text);
  });
});
