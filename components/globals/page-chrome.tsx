'use client';

import React, { ReactNode } from 'react';
import { createGlobalStyle } from 'styled-components';

import { COLOR_PAGE_BACKGROUND, COLOR_TEXT } from './constants';

import PageParticles from './page-particles';

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

// Renders the locale-independent app shell (global reset styles and the particle background
// animation). This must stay outside of app/[locale] so it keeps its mounted state (and the
// animation keeps running) when the user switches locale, instead of remounting.
const PageChrome = ({ children, isDesktop }: { children: ReactNode; isDesktop: boolean }): React.JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <PageParticles isDesktop={isDesktop} />
      {children}
    </>
  );
};

export default PageChrome;
