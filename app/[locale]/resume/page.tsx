import React from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import {
  ProfileArrowStyle,
  ProfileArrowContentStyle,
  ProfileContainerStyle,
  ProfileArrowGridStyle,
  ProfilePictureStyle,
  ProfileArrowGridContainerLeftStyle,
  ProfileArrowGridNameStyle,
  ProfileArrowOccupationStyle,
  CVContainerStyle,
  CVSectionContainerStyle,
  CVSectionBubbleStyle,
  CVSectionBubbleImageStyle,
  CVSectionBubbleTextStyle,
  CVSectionBubbleFillLineStyle,
  CVSectionTableStyle,
  CVSectionTableContainerStyle,
  ProfileQuoteStyle,
  CVSectionContainerTopMarginStyle,
  CVSectionDownloadContainerStyle,
  CVSectionDownloadImageStyle,
  CVSectionDownloadTextStyle,
  InitialContentSpacingStyle,
} from '../../../components/resume/styles';
import { ContactItem, CVRow } from '../../../components/resume/components';
import { LinkUnderlined, LinkUnderlineItalic } from '../../../components/globals/styles';
import phoneIcon from '../../../assets/img/png/phone.png';
import outlookIcon from '../../../assets/img/png/outlook.png';
import linkedinIcon from '../../../assets/img/png/linkedin.png';
import githubIcon from '../../../assets/img/png/github.png';
import downloadIcon from '../../../assets/img/svg/download.svg';
import portfolioIcon from '../../../assets/img/svg/portfolio.svg';
import universityIcon from '../../../assets/img/svg/university.svg';
import groupIcon from '../../../assets/img/svg/group.svg';

export default async function Resume({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: l } = await params;
  setRequestLocale(l);
  const t = await getTranslations({ locale: l, namespace: 'common' });
  const tr = await getTranslations({ locale: l, namespace: 'resume' });

  return (
    <>
      <InitialContentSpacingStyle />
      <ProfileContainerStyle>
        <ProfilePictureStyle />
        <ProfileArrowStyle />
        <ProfileArrowContentStyle>
          <ProfileArrowGridStyle>
            <ProfileArrowGridContainerLeftStyle>
              <ProfileArrowGridNameStyle>Erik Welander</ProfileArrowGridNameStyle>
              <ProfileArrowOccupationStyle>
                {t('OCCUPATION_1')}
                <br />
                {t('OCCUPATION_2')}
              </ProfileArrowOccupationStyle>
              <ProfileQuoteStyle>{t('PERSONAL_QUOTE')}</ProfileQuoteStyle>
            </ProfileArrowGridContainerLeftStyle>
            <div>
              <ContactItem href={'tel:+46737471410'} img={phoneIcon} alt={'Phone'}>
                {t('PHONE_NUMBER')}
              </ContactItem>
              <ContactItem href={'mailto:erik.welander@hotmail.com'} img={outlookIcon} alt={'Outlook'}>
                erik.welander@hotmail.com
              </ContactItem>
              <ContactItem href={'https://www.linkedin.com/in/erikwelander/'} img={linkedinIcon} alt={'Linkedin'}>
                Linkedin
              </ContactItem>
              <ContactItem href={'https://github.com/Kira9204'} img={githubIcon} alt={'Github'}>
                Github
              </ContactItem>
            </div>
          </ProfileArrowGridStyle>
        </ProfileArrowContentStyle>
      </ProfileContainerStyle>

      <CVContainerStyle>
        <CVSectionDownloadContainerStyle>
          <a href={`/pdf/erik-welander-cv-${l.toLowerCase()}.pdf`} target={'_blank'} rel="noreferrer">
            <CVSectionDownloadImageStyle src={downloadIcon} alt={'Download'} width={40} height={40} />
            <CVSectionDownloadTextStyle>{tr('DOWNLOAD_PDF')}</CVSectionDownloadTextStyle>
          </a>
        </CVSectionDownloadContainerStyle>
        <CVSectionContainerStyle>
          <CVSectionBubbleStyle>
            <CVSectionBubbleImageStyle src={portfolioIcon} alt={'Portfolio'} width={48} height={48} />
            <CVSectionBubbleTextStyle>{tr('RESUME_SECTION_WORK_EXPERIENCE')}</CVSectionBubbleTextStyle>
          </CVSectionBubbleStyle>
          <CVSectionBubbleFillLineStyle />
        </CVSectionContainerStyle>
        <CVSectionTableContainerStyle>
          <CVSectionTableStyle>
            <tbody>
              <CVRow
                period={'2022-06 -> '}
                title={tr('RESUME_SECTION_WORK_EXPERIENCE_1_TITLE')}
                companies={[
                  {
                    name: 'Volvo Cars',
                    link: `https://www.volvocars.com/${l === 'en' ? 'intl' : 'se'}`,
                  },
                ]}
                tags={['Javascript', 'Typescript', 'React', 'Java', 'Spring']}
              >
                {tr('RESUME_SECTION_WORK_EXPERIENCE_1_1_TEXT')}
                <LinkUnderlined
                  href={
                    l === 'en'
                      ? 'https://www.volvocars.com/intl/v/buy/fleet-cars'
                      : 'https://www.volvocars.com/se/business/fleet'
                  }
                  target={'_blank'}
                  rel="noreferrer"
                >
                  Fleet Cars/Care by Volvo
                </LinkUnderlined>
                {tr('RESUME_SECTION_WORK_EXPERIENCE_1_2_TEXT')}
              </CVRow>
              <CVRow
                period={'2022-02 -> 2022-06'}
                title={tr('RESUME_SECTION_WORK_EXPERIENCE_2_TITLE')}
                companies={[
                  {
                    name: 'Leeroy Group AB',
                    link: `https://leeroy.se/products/?lang=${l}`,
                  },
                ]}
                tags={['Java', 'Spring', 'Javascript', 'Typescript', 'React']}
              >
                {tr('RESUME_SECTION_WORK_EXPERIENCE_2_TEXT')}
              </CVRow>
              <CVRow
                period={'2018-01 -> 2022-01'}
                title={tr('RESUME_SECTION_WORK_EXPERIENCE_3_TITLE')}
                companies={[
                  {
                    name: 'Riada Development AB',
                    link: 'https://riada.se/',
                  },
                  {
                    name: 'Mindville AB',
                    link: 'https://www.mindville.com/',
                  },
                  {
                    name: 'Atlassian',
                    link: 'https://www.atlassian.com/',
                  },
                ]}
                tags={[
                  'Java',
                  'Kotlin',
                  'Spring',
                  'Micronaut',
                  'Docker',
                  'Kubernetes',
                  'Javascript',
                  'Typescript',
                  'React',
                ]}
              >
                <>
                  <LinkUnderlined
                    href={
                      'https://marketplace.atlassian.com/plugins/com.riadalabs.jira.plugins.insight/server/overview'
                    }
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    &quot;Insight Asset Management for Jira&quot;
                  </LinkUnderlined>
                  &nbsp;{tr('DEVELOPER_AT')}&nbsp;
                  <LinkUnderlineItalic href={'https://www.atlassian.com/'} target={'_blank'} rel="noreferrer">
                    Atlassian.
                  </LinkUnderlineItalic>
                  <br />
                  {tr('RESUME_SECTION_WORK_EXPERIENCE_3_TEXT')}
                </>
              </CVRow>
              <CVRow
                period={'2017-02 -> 2017-12'}
                title={tr('RESUME_SECTION_WORK_EXPERIENCE_4_TITLE')}
                companies={[
                  {
                    name: 'Shopello',
                    link: 'https://www.shopello.se/',
                  },
                  {
                    name: 'Mytaste',
                    link: 'https://www.mytaste.se/',
                  },
                ]}
                tags={['PHP', 'Laravel', 'MySQL', 'Redis', 'Slim', 'Twig', 'DBAL', 'Code Igniter', 'Javascript']}
              >
                {tr('RESUME_SECTION_WORK_EXPERIENCE_4_TEXT')}
              </CVRow>
              <CVRow
                period={'2016-09 -> 2017-01'}
                title={tr('RESUME_SECTION_WORK_EXPERIENCE_5_TITLE')}
                companies={[
                  {
                    name: 'Clinicbuddy',
                    link: 'https://clinicbuddy.com/',
                  },
                ]}
                tags={['PHP', 'MySQL', 'Javascript', 'JQuery']}
              >
                {tr('RESUME_SECTION_WORK_EXPERIENCE_5_TEXT')}
              </CVRow>
              <CVRow
                period={'2015-10 -> 2016-05'}
                title={tr('RESUME_SECTION_WORK_EXPERIENCE_6_TITLE')}
                companies={[
                  {
                    name: 'Scandinavian Technical Solutions AB (STSolutions)',
                    link: 'https://www.stsolutions.se/',
                  },
                ]}
                tags={['Java', 'Android', 'Linux']}
              >
                {tr('RESUME_SECTION_WORK_EXPERIENCE_6_TEXT')}
              </CVRow>
              <CVRow
                period={'2015-08 -> 2015-10'}
                title={tr('RESUME_SECTION_WORK_EXPERIENCE_7_TITLE')}
                companies={[
                  {
                    name: 'Academic Work',
                    link: 'https://www.academicwork.com/',
                  },
                  {
                    name: 'Fujitsu Sweden',
                    link: 'https://www.fujitsu.com/',
                  },
                ]}
                tags={[tr('RESUME_SECTION_WORK_EXPERIENCE_7_TAG')]}
              >
                {tr('RESUME_SECTION_WORK_EXPERIENCE_7_TEXT')}
              </CVRow>
              <CVRow
                period={'2014-06 -> 2014-12'}
                title={tr('RESUME_SECTION_WORK_EXPERIENCE_8_TITLE')}
                companies={[
                  {
                    name: 'Academic Work',
                    link: 'https://www.academicwork.com/',
                  },
                  {
                    name: 'Fujitsu Sweden',
                    link: 'https://www.fujitsu.com/',
                  },
                ]}
                tags={[tr('RESUME_SECTION_WORK_EXPERIENCE_8_TAG')]}
              >
                {tr('RESUME_SECTION_WORK_EXPERIENCE_8_TEXT')}
              </CVRow>
              <CVRow
                period={'2013-09 -> 2013-11'}
                title={tr('RESUME_SECTION_WORK_EXPERIENCE_9_TITLE')}
                companies={[
                  {
                    name: 'Academic Work',
                    link: 'https://www.academicwork.com/',
                  },
                  {
                    name: 'Fujitsu Sweden',
                    link: 'https://www.fujitsu.com/',
                  },
                ]}
                tags={[tr('RESUME_SECTION_WORK_EXPERIENCE_9_TAG')]}
              >
                {tr('RESUME_SECTION_WORK_EXPERIENCE_9_TEXT')}
              </CVRow>
              <CVRow
                period={'2012-12 -> 2013-02'}
                title={tr('RESUME_SECTION_WORK_EXPERIENCE_10_TITLE')}
                companies={[
                  {
                    name: 'Knivkultur Sverige AB',
                    link: 'http://www.knivkultur.se/',
                  },
                ]}
                tags={['PHP']}
              >
                {tr('RESUME_SECTION_WORK_EXPERIENCE_10_TEXT')}
              </CVRow>
            </tbody>
          </CVSectionTableStyle>
        </CVSectionTableContainerStyle>

        <CVSectionContainerTopMarginStyle />
        <CVSectionContainerStyle>
          <CVSectionBubbleStyle>
            <CVSectionBubbleImageStyle src={universityIcon} alt={'University'} width={48} height={48} />
            <CVSectionBubbleTextStyle>{tr('RESUME_SECTION_EDUCATION')}</CVSectionBubbleTextStyle>
          </CVSectionBubbleStyle>
          <CVSectionBubbleFillLineStyle />
        </CVSectionContainerStyle>
        <CVSectionTableContainerStyle>
          <CVSectionTableStyle>
            <tbody>
              <CVRow
                period={'2014-08 -> 2016-05'}
                title={tr('RESUME_SECTION_EDUCATION_1_TITLE')}
                companies={[
                  {
                    name: 'YHC3L (Centrum För Livslångt Lärande)',
                    link: 'https://yhc3l.se/',
                  },
                ]}
                tags={['Java', 'Spring', 'Android', tr('DATABASES'), tr('WEB_DEVELOPMENT'), tr('TESTING'), 'Scrum']}
              >
                {tr('RESUME_SECTION_EDUCATION_1_TEXT')}
              </CVRow>
              <CVRow
                period={'2012-09 -> 2014-08'}
                title={tr('RESUME_SECTION_EDUCATION_2_TITLE')}
                companies={[
                  {
                    name: 'Stockholm university',
                    link: 'http://www.su.se/',
                  },
                ]}
                tags={[
                  'Java',
                  'Python',
                  'C++',
                  'Assembly',
                  tr('ALGORITHMS'),
                  tr('RESUME_SECTION_EDUCATION_2_OS_DESIGN'),
                  'Scrum',
                ]}
              >
                {tr('RESUME_SECTION_EDUCATION_2_TEXT')}
              </CVRow>
              <CVRow
                period={'2008-08 -> 2012-06'}
                title={tr('RESUME_SECTION_EDUCATION_3_TITLE')}
                companies={[
                  {
                    name: 'THG',
                    link: 'https://thorildsplansgymnasium.stockholm.se/',
                  },
                ]}
                tags={['Java', 'C#', 'C++', tr('WEB_DEVELOPMENT'), `${tr('NETWORKS')} CISCO CCNA 1-4`]}
              >
                {tr('RESUME_SECTION_EDUCATION_3_TEXT')}
              </CVRow>
            </tbody>
          </CVSectionTableStyle>
        </CVSectionTableContainerStyle>

        <CVSectionContainerTopMarginStyle />
        <CVSectionContainerStyle>
          <CVSectionBubbleStyle>
            <CVSectionBubbleImageStyle src={groupIcon} alt={'Group'} width={48} height={48} />
            <CVSectionBubbleTextStyle>{tr('RESUME_SECTION_NON_PROFIT')}</CVSectionBubbleTextStyle>
          </CVSectionBubbleStyle>
          <CVSectionBubbleFillLineStyle />
        </CVSectionContainerStyle>
        <CVSectionTableContainerStyle>
          <CVSectionTableStyle>
            <tbody>
              <CVRow
                period={'2012 ->'}
                title={tr('RESUME_SECTION_NON_PROFIT_1_TITLE')}
                companies={[
                  {
                    name: 'IX',
                    link: 'https://ix.ufs.se/',
                  },
                  {
                    name: 'Unga forskare stockholm',
                    link: 'https://ufs.se/',
                  },
                ]}
                tags={[tr('TECHNOLOGY'), 'Linux']}
              >
                {tr('RESUME_SECTION_NON_PROFIT_1_TEXT')}
              </CVRow>
              <CVRow
                period={'2012 - 2015'}
                title={tr('RESUME_SECTION_NON_PROFIT_2_TITLE')}
                companies={[
                  {
                    name: 'Proxxi',
                    link: '',
                  },
                ]}
                tags={[tr('ORGANIZATION'), tr('MEETUP')]}
              >
                {tr('RESUME_SECTION_NON_PROFIT_2_TEXT')}
              </CVRow>
              <CVRow
                period={'2010 - 2015'}
                title={tr('RESUME_SECTION_NON_PROFIT_3_TITLE')}
                companies={[
                  {
                    name: 'Mälarscouterna',
                    link: 'https://malarscouterna.se/',
                  },
                  {
                    name: 'Joti',
                    link: 'https://jota-joti.scout.se/',
                  },
                ]}
                tags={[tr('NETWORKS'), tr('SERVERS')]}
              >
                {tr('RESUME_SECTION_NON_PROFIT_3_TEXT')}
              </CVRow>
            </tbody>
          </CVSectionTableStyle>
        </CVSectionTableContainerStyle>
      </CVContainerStyle>
    </>
  );
}
