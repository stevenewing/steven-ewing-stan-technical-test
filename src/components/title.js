import React from 'react';
import styled from 'styled-components';
import { Wrapper } from 'components/wrapper';

export const TitleWrapper = styled.div`
  background-image: linear-gradient(to top, rgb(66, 66, 66) 0%, rgb(47, 46, 44) 100%);
  box-shadow: 0 4px 10px -2px #a7a7a7;
  display: flex;
  justify-content: center;
  line-height: 55px;
  margin-bottom: 34px;
`;

export const Content = styled.h2`
  color: #fff;
  font-weight: normal;
  margin: 0;
  text-shadow: 2px 2px 2px #3f3b32;
`;

/**
 * @typedef TitleProps
 * @type {object}
 * @property {React.ReactNode} children Any react child components to be rendered within.
 */

/**
 *
 * @param {TitleProps} props properties for the <Title /> component.
 *
 * @returns {React.ReactNode} The react component to be rendered.
 */
export const Title = props => {
  const { children } = props;

  return (
    <TitleWrapper>
      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
    </TitleWrapper>
  );
};
