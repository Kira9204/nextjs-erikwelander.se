import React, { ReactNode } from 'react';
import type { StaticImageData } from 'next/image';
import { ContactItemImageStyle, ContactItemStyle, ContactItemTextStyle } from './styles';

export interface IContactItem {
  href: string;
  img: StaticImageData;
  alt: string;
  children: ReactNode;
}

export const ContactItem = ({ href, img, alt, children }: IContactItem) => {
  return (
    <ContactItemStyle>
      <a href={href} target={'_blank'} rel={'noreferrer'}>
        <ContactItemImageStyle src={img} alt={alt} width={64} height={64} />
        <ContactItemTextStyle>{children}</ContactItemTextStyle>
      </a>
    </ContactItemStyle>
  );
};
