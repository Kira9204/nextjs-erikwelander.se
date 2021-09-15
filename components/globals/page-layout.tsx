import React, { ReactNode } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { COLOR_PAGE_BACKGROUND, COLOR_TEXT } from './constants';

import PageHead from './page-head';
import PageParticles from './page-particles';
import PageToolbar from './page-toolbar';
import PageMain from './page-main';
import { NextPageContext } from 'next';

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

/*
#__next {
  width: 100%;
  height: 100%;
}
*/

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

const Layout = ({ children, uaString }: { children: ReactNode; uaString: string }): JSX.Element => {
  return (
    <>
      <PageHead />
      <GlobalStyle />
      <PageParticles uaString={uaString} />
      <PageToolbar />
      <PageMain>
        {children}
        <CopyrightNotice>&copy; Erik Welander</CopyrightNotice>
      </PageMain>
    </>
  );
};

export default Layout;
