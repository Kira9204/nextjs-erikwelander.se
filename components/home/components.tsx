import React from 'react';
import { ContactItemImageStyle, ContactItemStyle, ContactItemTextStyle } from './styles';

export interface IContactItem {
  href: string;
  img: string;
  children: any;
}

export const ContactItem = ({ href, img, children }: IContactItem) => {
  return (
    <ContactItemStyle>
      <a href={href} target={'_blank'} rel={'noreferrer'}>
        <ContactItemImageStyle src={img} alt={img} />
        <ContactItemTextStyle>{children}</ContactItemTextStyle>
      </a>
    </ContactItemStyle>
  );
};
