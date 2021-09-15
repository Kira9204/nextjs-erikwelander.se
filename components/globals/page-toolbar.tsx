import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Link from 'next/link';
import {
  COLOR_BLACK_BACKGROUND,
  COLOR_ORANGE,
  COLOR_WHITE_TEXT_1,
  MARGIN_LAYOUT,
  SIZE_PAD_IPAD_LANDSCAPE,
  SIZE_PAD_IPAD_PRO_LANDSCAPE,
  SIZE_PAD_IPAD_PRO_PORTRAIT,
  SIZE_PC_LANDSCAPE,
  SIZE_PHONE_LANDSCAPE,
  SIZE_PHONE_PORTRAIT,
} from './constants';
import getLang from '../../locales/lang';

const PageTabsContainerStyle = styled.div`
  margin-top: 0;

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px), (min-width: ${SIZE_PHONE_LANDSCAPE}px) {
    margin: 0;
    width: 100%;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PRO_PORTRAIT}px) {
    margin: 0;
    width: 100%;
  }

  @media (min-width: ${SIZE_PAD_IPAD_LANDSCAPE}px),
    (min-width: ${SIZE_PAD_IPAD_PRO_LANDSCAPE}px),
    (min-width: ${SIZE_PC_LANDSCAPE}px) {
    margin-left: ${MARGIN_LAYOUT}px;
    margin-right: ${MARGIN_LAYOUT}px;
    margin-bottom: 50px;
    width: unset;
  }
`;

const PageTabsStyle = styled.div`
  width: 100%;
  background-color: ${COLOR_BLACK_BACKGROUND};
  color: ${COLOR_WHITE_TEXT_1};
  border-radius: 20px;
  font-size: 26px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  z-index: 1;

  justify-content: space-evenly;
`;

const PageTabStyle = styled.div`
  margin: 0;
  font-weight: bold;
  height: 44px;
  width: 90px;
  text-align: center;
`;

const PageTabCurrentStyle = styled.div`
  margin-top: 5px;
  width: 100%;
  height: 4px;
  background-color: ${COLOR_ORANGE};
  border-radius: 20px;
`;

interface iPageTabsProps {
  pageKey: string;
  children: string;
}

const Page = ({ pageKey, children }: iPageTabsProps) => {
  const router = useRouter();

  return (
    <Link href={`/${router.locale}${pageKey}`} locale={false}>
      <a>
        <PageTabStyle>
          {children}
          {router.pathname === pageKey && <PageTabCurrentStyle />}
        </PageTabStyle>
      </a>
    </Link>
  );
};

const PageToolbar = () => {
  const router = useRouter();
  const t = getLang(router);

  return (
    <PageTabsContainerStyle>
      <PageTabsStyle>
        <Page pageKey={'/'}>{t.TOOLBAR_HOME}</Page>
        <Page pageKey={'/resume'}>{t.TOOLBAR_RESUME}</Page>
        <Page pageKey={'/projects'}>{t.TOOLBAR_PROJECTS}</Page>
      </PageTabsStyle>
    </PageTabsContainerStyle>
  );
};

export default PageToolbar;
