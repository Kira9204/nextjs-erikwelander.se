'use client';

import React from 'react';
import styled from 'styled-components';
import Image, { type StaticImageData } from 'next/image';
import { Link, usePathname } from '../../i18n/navigation';
import americanFlag from '../../assets/img/png/american-flag.png';
import swedishFlag from '../../assets/img/png/swedish-flag.png';
import type { AppLocale } from '../../i18n/routing';

const LanguagesContainerStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 10px;
`;
const LanguageImageStyle = styled(Image)`
  display: block;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const Language = ({ img, locale, label }: { img: StaticImageData; locale: AppLocale; label: string }) => {
  const pathname = usePathname();
  return (
    <Link href={pathname} locale={locale} style={{ textDecoration: 'underline' }}>
      <LanguageImageStyle src={img} alt={label} width={40} height={40} />
    </Link>
  );
};

const PageLanguage = () => {
  return (
    <LanguagesContainerStyle>
      <Language img={americanFlag} locale={'en'} label={'English'} />
      <Language img={swedishFlag} locale={'sv'} label={'Svenska'} />
    </LanguagesContainerStyle>
  );
};

export default PageLanguage;
