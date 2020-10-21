import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Content } from 'components/content';
import { Footer } from 'components/footer';
import { Header } from 'components/header';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  main {
    height: 100%;
  }

  body {
    font-family: 'Raleway', sans-serif;
    margin: 0;
  }
`;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

/**
 * @typedef LayoutProps
 * @type {object}
 * @property {React.ReactNode} children Any react child components to be rendered within.
 */

/**
 *
 * @param {LayoutProps} props properties for the <Layout /> component.
 *
 * @returns {React.ReactNode} The react component to be rendered.
 */
export const Layout = props => {
  const { children } = props;

  return (
    <LayoutWrapper>
      <GlobalStyles />
      <Header />
      <Content>{children}</Content>
      <Footer />
    </LayoutWrapper>
  );
};
