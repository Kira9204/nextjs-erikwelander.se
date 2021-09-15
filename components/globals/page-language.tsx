import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

const LanguagesContainerStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 10px;
`;
const LanguageStyle = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const Language = ({ imgSrc, lang }: { imgSrc: string; lang: string }) => {
  const router = useRouter();
  return (
    <Link href={`/${lang}${router.asPath}`} locale={false}>
      <a style={{ textDecoration: 'underline' }}>
        <LanguageStyle src={imgSrc} alt={imgSrc} />
      </a>
    </Link>
  );
};

const PageLanguage = () => {
  return (
    <LanguagesContainerStyle>
      <Language imgSrc={'/img/png/american-flag.png'} lang={'en'} />
      <Language imgSrc={'/img/png/swedish-flag.png'} lang={'sv'} />
    </LanguagesContainerStyle>
  );
};

export default PageLanguage;
