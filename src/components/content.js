import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

/**
 * @typedef ContentProps
 * @type {object}
 * @property {React.ReactNode} children Any react child components to be rendered within.
 */

/**
 *
 * @param {ContentProps} props properties for the <Layout /> component.
 *
 * @returns {React.ReactNode} The react component to be rendered.
 */
export const Content = props => {
  const { children } = props;

  return <Wrapper>{children}</Wrapper>;
};
