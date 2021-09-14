import React, { ReactNode, Fragment } from 'react';
import {
  ProfileArrowContactStyle,
  ProfileArrowContactImageStyle,
  ProfileArrowContactTextStyle,
  CVSectionRowContentStyle,
  CVSectionColumnPeriodStyle,
  CVSectionColumnContentStyle,
  CVSectionPositionStyle,
  CVSectionCompanyStyle,
  CVSectionCompanyLinkStyle,
  CVSectionPositionTags,
  CVSectionPositionText,
} from './styles';

export interface IContactItem {
  href: string;
  img: string;
  children: any;
}

export const ContactItem = ({ href, img, children }: IContactItem) => {
  return (
    <ProfileArrowContactStyle>
      <a href={href} target={'_blank'} rel={'noreferrer'}>
        <ProfileArrowContactImageStyle src={img} alt={img} />
        <ProfileArrowContactTextStyle>{children}</ProfileArrowContactTextStyle>
      </a>
    </ProfileArrowContactStyle>
  );
};

export interface ICVRowCompany {
  name: string;
  link: string;
}

export interface ICVRow {
  period: string;
  title: string;
  tags: string[];
  companies: ICVRowCompany[];
  children: ReactNode;
}

export const CVRow = ({ period, title, tags, companies, children }: ICVRow) => {
  const companiesRendered = companies.map((company, index) => {
    const shouldAddSeparator = companies.length !== 0 && index !== companies.length - 1;
    return (
      <Fragment key={company.name}>
        <CVSectionCompanyLinkStyle href={company.link} target={'_blank'}>
          {company.name}
        </CVSectionCompanyLinkStyle>
        {shouldAddSeparator && <>&nbsp;&nbsp;/&nbsp;&nbsp;</>}
      </Fragment>
    );
  });
  const tagsStr = tags.join(', ');

  return (
    <CVSectionRowContentStyle>
      <CVSectionColumnPeriodStyle>{period}</CVSectionColumnPeriodStyle>
      <CVSectionColumnContentStyle>
        <CVSectionPositionStyle>{title}</CVSectionPositionStyle>
        <CVSectionCompanyStyle>{companiesRendered}</CVSectionCompanyStyle>
        <CVSectionPositionTags>{tagsStr}</CVSectionPositionTags>
        <CVSectionPositionText>{children}</CVSectionPositionText>
      </CVSectionColumnContentStyle>
    </CVSectionRowContentStyle>
  );
};
