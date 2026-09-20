'use client';

import React, { ReactNode } from 'react';
import styled from 'styled-components';
import PageToolbar from './page-toolbar';
import PageMain from './page-main';

const CopyrightNotice = styled.p`
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
`;

// Renders the locale-dependent app chrome (nav toolbar, language switcher, page frame).
// This lives inside app/[locale] so it always reflects the current locale's translations
// and links, and is expected to re-render whenever the locale changes.
const PageLocaleChrome = ({ children }: { children: ReactNode }): React.JSX.Element => {
  return (
    <>
      <PageToolbar />
      <PageMain>
        {children}
        <CopyrightNotice>&copy; Erik Welander</CopyrightNotice>
      </PageMain>
    </>
  );
};

export default PageLocaleChrome;
