import React from 'react';
import { getTranslations } from 'next-intl/server';
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
  CVSectionDownloadImageStyle,
  CVSectionDownloadTextStyle,
  InitialContentSpacingStyle,
  CVSectionBubbleTransparentStyle,
} from '../../../components/resume/styles';
import { ContactItem, CVRow } from '../../../components/resume/components';
import { SkillsListContainer, UnstyledCommaList } from '../../../components/globals/styles';
import { MarkdownText } from '../../../components/globals/markdown-text';
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
                {t('OCCUPATION_TITLE')}
                <br />
                {t('OCCUPATION_SUBTITLE')}
              </ProfileArrowOccupationStyle>
              <ProfileQuoteStyle>{t('PERSONAL_QUOTE')}</ProfileQuoteStyle>
              <SkillsListContainer>
                {t('LANGUAGES')}:
                <UnstyledCommaList>
                  <li>Javascript</li>
                  <li>Typescript</li>
                  <li>Java</li>
                  <li>Kotlin</li>
                  <li>React</li>
                  <li>NextJS</li>
                  <li>Angular</li>
                  <li>Express</li>
                  <li>Spring Boot</li>
                  <li>{t('AND_MANY_MORE')}</li>
                </UnstyledCommaList>
              </SkillsListContainer>
              <SkillsListContainer>
                {t('SYSTEMS')}:
                <UnstyledCommaList>
                  <li>Fedora</li>
                  <li>Red Hat</li>
                  <li>Debian</li>
                  <li>Ubuntu</li>
                  <li>Arch</li>
                  <li>Docker</li>
                  <li>Podman</li>
                </UnstyledCommaList>
              </SkillsListContainer>
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
        <br />
        <br />
        <CVSectionBubbleTransparentStyle>
          <a href={`/pdf/erik-welander-cv-${l.toLowerCase()}.pdf`} target={'_blank'} rel="noreferrer">
            <CVSectionDownloadImageStyle src={downloadIcon} alt={'Download'} />
            <CVSectionDownloadTextStyle>{t('DOWNLOAD_PDF')}</CVSectionDownloadTextStyle>
          </a>
        </CVSectionBubbleTransparentStyle>
        <br />
        <br />
        <CVSectionContainerStyle>
          <CVSectionBubbleStyle>
            <CVSectionBubbleImageStyle src={portfolioIcon} alt={'Portfolio'} />
            <CVSectionBubbleTextStyle>{tr('RESUME_SECTION_WORK_EXPERIENCE')}</CVSectionBubbleTextStyle>
          </CVSectionBubbleStyle>
          <CVSectionBubbleFillLineStyle />
        </CVSectionContainerStyle>
        <CVSectionTableContainerStyle>
          <CVSectionTableStyle>
            <tbody>
              <CVRow
                period={'2022-06 -> 2027-03'}
                title={tr('RESUME_SECTION_WORK_EXPERIENCE_VOLVO_CARS_TITLE')}
                companies={[
                  {
                    name: 'Volvo Cars',
                    link: `https://www.volvocars.com/${l === 'en' ? 'intl' : 'se'}`,
                  },
                ]}
                tags={['Javascript', 'Typescript', 'React', 'Angular', 'Java', 'Spring', 'Docker']}
              >
                <MarkdownText>{tr.raw('RESUME_SECTION_WORK_EXPERIENCE_VOLVO_CARS_TEXT')}</MarkdownText>
              </CVRow>
              <CVRow
                period={'2022-02 -> 2022-06'}
                title={tr('RESUME_SECTION_WORK_EXPERIENCE_LEEROY_TITLE')}
                companies={[
                  {
                    name: 'Leeroy Group AB',
                    link: `https://leeroy.se/products/?lang=${l}`,
                  },
                ]}
                tags={['Java', 'Spring', 'Javascript', 'Typescript', 'React']}
              >
                <MarkdownText>{tr.raw('RESUME_SECTION_WORK_EXPERIENCE_LEEROY_TEXT')}</MarkdownText>
              </CVRow>
              <CVRow
                period={'2018-01 -> 2022-01'}
                title={tr('RESUME_SECTION_WORK_EXPERIENCE_ATLASSIAN_INSIGHT_TITLE')}
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
                <MarkdownText>{tr.raw('RESUME_SECTION_WORK_EXPERIENCE_ATLASSIAN_INSIGHT_TEXT')}</MarkdownText>
              </CVRow>
              <CVRow
                period={'2017-02 -> 2017-12'}
                title={tr('RESUME_SECTION_WORK_EXPERIENCE_SHOPELLO_TITLE')}
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
                <MarkdownText>{tr.raw('RESUME_SECTION_WORK_EXPERIENCE_SHOPELLO_TEXT')}</MarkdownText>
              </CVRow>
              <CVRow
                period={'2016-09 -> 2017-01'}
                title={tr('RESUME_SECTION_WORK_EXPERIENCE_CLINICBUDDY_TITLE')}
                companies={[
                  {
                    name: 'Clinicbuddy',
                    link: 'https://clinicbuddy.com/',
                  },
                ]}
                tags={['PHP', 'MySQL', 'Javascript', 'JQuery']}
              >
                <MarkdownText>{tr.raw('RESUME_SECTION_WORK_EXPERIENCE_CLINICBUDDY_TEXT')}</MarkdownText>
              </CVRow>
              <CVRow
                period={'2015-10 -> 2016-05'}
                title={tr('RESUME_SECTION_WORK_EXPERIENCE_STSOLUTIONS_TITLE')}
                companies={[
                  {
                    name: 'Scandinavian Technical Solutions AB (STSolutions)',
                    link: 'https://www.stsolutions.se/',
                  },
                ]}
                tags={['Java', 'Android', 'Linux']}
              >
                <MarkdownText>{tr.raw('RESUME_SECTION_WORK_EXPERIENCE_STSOLUTIONS_TEXT')}</MarkdownText>
              </CVRow>
              <CVRow
                period={'2015-08 -> 2015-10'}
                title={tr('RESUME_SECTION_WORK_EXPERIENCE_FUJITSU_2015_TITLE')}
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
                tags={[tr('RESUME_SECTION_WORK_EXPERIENCE_FUJITSU_2015_TAG')]}
              >
                <MarkdownText>{tr.raw('RESUME_SECTION_WORK_EXPERIENCE_FUJITSU_2015_TEXT')}</MarkdownText>
              </CVRow>
              <CVRow
                period={'2014-06 -> 2014-12'}
                title={tr('RESUME_SECTION_WORK_EXPERIENCE_FUJITSU_2014_TITLE')}
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
                tags={[tr('RESUME_SECTION_WORK_EXPERIENCE_FUJITSU_2014_TAG')]}
              >
                <MarkdownText>{tr.raw('RESUME_SECTION_WORK_EXPERIENCE_FUJITSU_2014_TEXT')}</MarkdownText>
              </CVRow>
              <CVRow
                period={'2013-09 -> 2013-11'}
                title={tr('RESUME_SECTION_WORK_EXPERIENCE_FUJITSU_2013_TITLE')}
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
                tags={[tr('RESUME_SECTION_WORK_EXPERIENCE_FUJITSU_2013_TAG')]}
              >
                <MarkdownText>{tr.raw('RESUME_SECTION_WORK_EXPERIENCE_FUJITSU_2013_TEXT')}</MarkdownText>
              </CVRow>
              <CVRow
                period={'2012-12 -> 2013-02'}
                title={tr('RESUME_SECTION_WORK_EXPERIENCE_KNIVKULTUR_TITLE')}
                companies={[
                  {
                    name: 'Knivkultur Sverige AB',
                    link: 'http://www.knivkultur.se/',
                  },
                ]}
                tags={['PHP']}
              >
                <MarkdownText>{tr.raw('RESUME_SECTION_WORK_EXPERIENCE_KNIVKULTUR_TEXT')}</MarkdownText>
              </CVRow>
            </tbody>
          </CVSectionTableStyle>
        </CVSectionTableContainerStyle>

        <CVSectionContainerTopMarginStyle />
        <CVSectionContainerStyle>
          <CVSectionBubbleStyle>
            <CVSectionBubbleImageStyle src={universityIcon} alt={'University'} />
            <CVSectionBubbleTextStyle>{tr('RESUME_SECTION_EDUCATION')}</CVSectionBubbleTextStyle>
          </CVSectionBubbleStyle>
          <CVSectionBubbleFillLineStyle />
        </CVSectionContainerStyle>
        <CVSectionTableContainerStyle>
          <CVSectionTableStyle>
            <tbody>
              <CVRow
                period={'2014-08 -> 2016-05'}
                title={tr('RESUME_SECTION_EDUCATION_SYSTEMS_ENGINEER_TITLE')}
                companies={[
                  {
                    name: 'YHC3L (Centrum För Livslångt Lärande)',
                    link: 'https://yhc3l.se/',
                  },
                ]}
                tags={['Java', 'Spring', 'Android', tr('DATABASES'), tr('WEB_DEVELOPMENT'), tr('TESTING'), 'Scrum']}
              >
                <MarkdownText>{tr.raw('RESUME_SECTION_EDUCATION_SYSTEMS_ENGINEER_TEXT')}</MarkdownText>
              </CVRow>
              <CVRow
                period={'2012-09 -> 2014-08'}
                title={tr('RESUME_SECTION_EDUCATION_COMPUTER_SCIENCE_TITLE')}
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
                  tr('RESUME_SECTION_EDUCATION_COMPUTER_SCIENCE_OS_DESIGN'),
                  'Scrum',
                ]}
              >
                <MarkdownText>{tr.raw('RESUME_SECTION_EDUCATION_COMPUTER_SCIENCE_TEXT')}</MarkdownText>
              </CVRow>
              <CVRow
                period={'2008-08 -> 2012-06'}
                title={tr('RESUME_SECTION_EDUCATION_TECHNOLOGY_PROGRAMMING_NETWORKS_TITLE')}
                companies={[
                  {
                    name: 'THG',
                    link: 'https://thorildsplansgymnasium.stockholm.se/',
                  },
                ]}
                tags={['Java', 'C#', 'C++', tr('WEB_DEVELOPMENT'), `${tr('NETWORKS')} CISCO CCNA 1-4`]}
              >
                <MarkdownText>{tr.raw('RESUME_SECTION_EDUCATION_TECHNOLOGY_PROGRAMMING_NETWORKS_TEXT')}</MarkdownText>
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
                period={'2012 - 2022'}
                title={tr('RESUME_SECTION_NON_PROFIT_IX_BOARD_MEMBER_TITLE')}
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
                <MarkdownText>{tr.raw('RESUME_SECTION_NON_PROFIT_IX_BOARD_MEMBER_TEXT')}</MarkdownText>
              </CVRow>
              <CVRow
                period={'2012 - 2015'}
                title={tr('RESUME_SECTION_NON_PROFIT_PROXXI_KEYHOLDER_TITLE')}
                companies={[
                  {
                    name: 'Proxxi',
                    link: '',
                  },
                ]}
                tags={[tr('ORGANIZATION'), tr('MEETUP')]}
              >
                <MarkdownText>{tr.raw('RESUME_SECTION_NON_PROFIT_PROXXI_KEYHOLDER_TEXT')}</MarkdownText>
              </CVRow>
              <CVRow
                period={'2010 - 2015'}
                title={tr('RESUME_SECTION_NON_PROFIT_JOTI_NETWORK_OPERATOR_TITLE')}
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
                <MarkdownText>{tr.raw('RESUME_SECTION_NON_PROFIT_JOTI_NETWORK_OPERATOR_TEXT')}</MarkdownText>
              </CVRow>
            </tbody>
          </CVSectionTableStyle>
        </CVSectionTableContainerStyle>
      </CVContainerStyle>
    </>
  );
}
