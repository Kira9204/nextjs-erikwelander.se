import React, { ReactNode } from 'react';
import styled from 'styled-components';
import {
  COLOR_GRAY_BACKGROUND,
  COLOR_WHITE_BACKGROUND,
  SIZE_PAD_IPAD_LANDSCAPE,
  SIZE_PAD_IPAD_PORTRAIT,
  SIZE_PAD_IPAD_PRO_LANDSCAPE,
  SIZE_PAD_IPAD_PRO_PORTRAIT,
  SIZE_PHONE_LANDSCAPE,
  SIZE_PHONE_PORTRAIT,
} from './constants';
import PageLanguage from './page-language';

const PageContainerStyle = styled.div`
  @media (min-width: ${SIZE_PHONE_PORTRAIT}px), (min-width: ${SIZE_PAD_IPAD_PRO_PORTRAIT}px) {
    margin: 0;
  }

  @media (min-width: ${SIZE_PAD_IPAD_LANDSCAPE}px), (min-width: ${SIZE_PAD_IPAD_PRO_LANDSCAPE}px) {
    margin-top: 0;
    margin-left: 80px;
    margin-right: 80px;
    margin-bottom: 80px;
  }
`;

const PageLetterStyle = styled.div`
  width: 100%;
  border: 4px solid ${COLOR_GRAY_BACKGROUND};
  border-radius: 20px;
  background-color: ${COLOR_WHITE_BACKGROUND};
  position: relative;
  z-index: 1;
  margin: 0 auto;
  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    padding: 0 10px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    padding: 0 20px;
  }
`;

const PageMain = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <>
      <PageContainerStyle>
        <PageLetterStyle>
          <PageLanguage />
          {children}
        </PageLetterStyle>
      </PageContainerStyle>
    </>
  );
};

export default PageMain;
