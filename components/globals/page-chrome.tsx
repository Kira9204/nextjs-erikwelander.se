'use client';

import React, { ReactNode } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { COLOR_PAGE_BACKGROUND, COLOR_TEXT } from './constants';

import PageParticles from './page-particles';
import PageToolbar from './page-toolbar';
import PageMain from './page-main';

const GlobalStyle = createGlobalStyle`
html,
body,
#app,
#__next {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: ${COLOR_PAGE_BACKGROUND};

    margin: 0 !important;
    padding: 0 !important;
    height: 100% !important;
    width: 100% !important;

    font-size: 16px;
    color: ${COLOR_TEXT};
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
    padding: 0;
}
`;

const CopyrightNotice = styled.p`
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
`;

const PageChrome = ({ children, isDesktop }: { children: ReactNode; isDesktop: boolean }): React.JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <PageParticles isDesktop={isDesktop} />
      <PageToolbar />
      <PageMain>
        {children}
        <CopyrightNotice>&copy; Erik Welander</CopyrightNotice>
      </PageMain>
    </>
  );
};

export default PageChrome;
