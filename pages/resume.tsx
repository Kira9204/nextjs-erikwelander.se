import React from 'react';
import type { NextPage } from 'next';
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
} from '../components/resume/styles';
import { ContactItem, CVRow } from '../components/resume/components';
import { useRouter } from 'next/router';
import Link from 'next/link';
import getLang from '../locales/lang';
import { LinkUnderlined, LinkUnderlineItalic } from '../components/globals/styles';

const Resume: NextPage = () => {
  const router = useRouter();
  const t = getLang(router);
  const l = router.locale || 'en';

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
                {t.OCCUPATION_1}
                <br />
                {t.OCCUPATION_2}
              </ProfileArrowOccupationStyle>
              <ProfileQuoteStyle>{t.PERSONAL_QUOTE}</ProfileQuoteStyle>
            </ProfileArrowGridContainerLeftStyle>
            <div>
              <ContactItem href={'tel:+46737471410'} img={'/img/png/phone.png'}>
                +46737471410
              </ContactItem>
              <ContactItem href={'mailto:erik.welander@hotmail.com'} img={'/img/png/outlook.png'}>
                erik.welander@hotmail.com
              </ContactItem>
              <ContactItem href={'https://www.linkedin.com/in/erikwelander/'} img={'/img/png/linkedin.png'}>
                Linkedin
              </ContactItem>
              <ContactItem href={'https://github.com/Kira9204'} img={'/img/png/github.png'}>
                Github
              </ContactItem>
            </div>
          </ProfileArrowGridStyle>
        </ProfileArrowContentStyle>
      </ProfileContainerStyle>

      <CVContainerStyle>
        <CVSectionDownloadContainerStyle>
          <Link href={`/pdf/erik-welander-cv-${l.toLowerCase()}.pdf`}>
            <a target={'_blank'}>
              <CVSectionDownloadImageStyle src={'/img/svg/download.svg'} alt={'/img/svg/download.svg'} />
              <CVSectionDownloadTextStyle>{t.DOWNLOAD_PDF}</CVSectionDownloadTextStyle>
            </a>
          </Link>
        </CVSectionDownloadContainerStyle>
        <CVSectionContainerStyle>
          <CVSectionBubbleStyle>
            <CVSectionBubbleImageStyle src={'/img/svg/portfolio.svg'} alt={'/img/svg/portfolio.svg'} />
            <CVSectionBubbleTextStyle>{t.RESUME_SECTION_WORK_EXPERIENCE}</CVSectionBubbleTextStyle>
          </CVSectionBubbleStyle>
          <CVSectionBubbleFillLineStyle />
        </CVSectionContainerStyle>
        <CVSectionTableContainerStyle>
          <CVSectionTableStyle>
            <tbody>
              <CVRow
                period={'2022-02 -> '}
                title={t.RESUME_SECTION_WORK_EXPERIENCE_1_TITLE}
                companies={[
                  {
                    name: 'Leeroy Group AB',
                    link: `https://leeroy.se/products/?lang=${l}`,
                  },
                ]}
                tags={['Java', 'Spring', 'Javascript', 'Typescript', 'React']}
              >
                {t.RESUME_SECTION_WORK_EXPERIENCE_1_TEXT}
              </CVRow>
              <CVRow
                period={'2018-01 -> 2022-01'}
                title={t.RESUME_SECTION_WORK_EXPERIENCE_2_TITLE}
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
                  &nbsp;{t.DEVELOPER_AT}&nbsp;
                  <LinkUnderlineItalic href={'https://www.atlassian.com/'} target={'_blank'} rel="noreferrer">
                    Atlassian.
                  </LinkUnderlineItalic>
                  <br />
                  {t.RESUME_SECTION_WORK_EXPERIENCE_2_TEXT}
                </>
              </CVRow>
              <CVRow
                period={'2017-02 -> 2017-12'}
                title={t.RESUME_SECTION_WORK_EXPERIENCE_3_TITLE}
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
                {t.RESUME_SECTION_WORK_EXPERIENCE_3_TEXT}
              </CVRow>
              <CVRow
                period={'2016-09 -> 2017-01'}
                title={t.RESUME_SECTION_WORK_EXPERIENCE_4_TITLE}
                companies={[
                  {
                    name: 'Clinicbuddy',
                    link: 'https://clinicbuddy.com/',
                  },
                ]}
                tags={['PHP', 'MySQL', 'Javascript', 'JQuery']}
              >
                {t.RESUME_SECTION_WORK_EXPERIENCE_4_TEXT}
              </CVRow>
              <CVRow
                period={'2015-10 -> 2016-05'}
                title={t.RESUME_SECTION_WORK_EXPERIENCE_5_TITLE}
                companies={[
                  {
                    name: 'Scandinavian Technical Solutions AB (STSolutions)',
                    link: 'https://www.stsolutions.se/',
                  },
                ]}
                tags={['Java', 'Android', 'Linux']}
              >
                {t.RESUME_SECTION_WORK_EXPERIENCE_5_TEXT}
              </CVRow>
              <CVRow
                period={'2015-08 -> 2015-10'}
                title={t.RESUME_SECTION_WORK_EXPERIENCE_6_TITLE}
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
                tags={[t.RESUME_SECTION_WORK_EXPERIENCE_6_TAG]}
              >
                {t.RESUME_SECTION_WORK_EXPERIENCE_5_TEXT}
              </CVRow>
              <CVRow
                period={'2014-06 -> 2014-12'}
                title={t.RESUME_SECTION_WORK_EXPERIENCE_7_TITLE}
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
                tags={[t.RESUME_SECTION_WORK_EXPERIENCE_7_TAG]}
              >
                {t.RESUME_SECTION_WORK_EXPERIENCE_7_TEXT}
              </CVRow>
              <CVRow
                period={'2013-09 -> 2013-11'}
                title={t.RESUME_SECTION_WORK_EXPERIENCE_8_TITLE}
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
                tags={[t.RESUME_SECTION_WORK_EXPERIENCE_8_TAG]}
              >
                {t.RESUME_SECTION_WORK_EXPERIENCE_8_TEXT}
              </CVRow>
              <CVRow
                period={'2012-12 -> 2013-02'}
                title={t.RESUME_SECTION_WORK_EXPERIENCE_9_TITLE}
                companies={[
                  {
                    name: 'Knivkultur Sverige AB',
                    link: 'http://www.knivkultur.se/',
                  },
                ]}
                tags={['PHP']}
              >
                {t.RESUME_SECTION_WORK_EXPERIENCE_9_TEXT}
              </CVRow>
            </tbody>
          </CVSectionTableStyle>
        </CVSectionTableContainerStyle>

        <CVSectionContainerTopMarginStyle />
        <CVSectionContainerStyle>
          <CVSectionBubbleStyle>
            <CVSectionBubbleImageStyle src={'/img/svg/university.svg'} alt={'/img/svg/university.svg'} />
            <CVSectionBubbleTextStyle>{t.RESUME_SECTION_EDUCATION}</CVSectionBubbleTextStyle>
          </CVSectionBubbleStyle>
          <CVSectionBubbleFillLineStyle />
        </CVSectionContainerStyle>
        <CVSectionTableContainerStyle>
          <CVSectionTableStyle>
            <tbody>
              <CVRow
                period={'2014-08 -> 2016-05'}
                title={t.RESUME_SECTION_EDUCATION_1_TITLE}
                companies={[
                  {
                    name: 'YHC3L (Centrum För Livslångt Lärande)',
                    link: 'https://yhc3l.se/',
                  },
                ]}
                tags={['Java', 'Spring', 'Android', t.DATABASES, t.WEB_DEVELOPMENT, t.TESTING, 'Scrum']}
              >
                {t.RESUME_SECTION_EDUCATION_1_TEXT}
              </CVRow>
              <CVRow
                period={'2012-09 -> 2014-08'}
                title={t.RESUME_SECTION_EDUCATION_2_TITLE}
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
                  t.ALGORITHMS,
                  t.RESUME_SECTION_EDUCATION_2_OS_DESIGN,
                  'Scrum',
                ]}
              >
                {t.RESUME_SECTION_EDUCATION_2_TEXT}
              </CVRow>
              <CVRow
                period={'2008-08 -> 2012-06'}
                title={t.RESUME_SECTION_EDUCATION_3_TITLE}
                companies={[
                  {
                    name: 'THG',
                    link: 'https://thorildsplansgymnasium.stockholm.se/',
                  },
                ]}
                tags={['Java', 'C#', 'C++', t.WEB_DEVELOPMENT, `${t.NETWORKS} CISCO CCNA 1-4`]}
              >
                {t.RESUME_SECTION_EDUCATION_3_TEXT}
              </CVRow>
            </tbody>
          </CVSectionTableStyle>
        </CVSectionTableContainerStyle>

        <CVSectionContainerTopMarginStyle />
        <CVSectionContainerStyle>
          <CVSectionBubbleStyle>
            <CVSectionBubbleImageStyle src={'/img/svg/group.svg'} alt={'/img/svg/group.svg'} />
            <CVSectionBubbleTextStyle>{t.RESUME_SECTION_NON_PROFIT}</CVSectionBubbleTextStyle>
          </CVSectionBubbleStyle>
          <CVSectionBubbleFillLineStyle />
        </CVSectionContainerStyle>
        <CVSectionTableContainerStyle>
          <CVSectionTableStyle>
            <tbody>
              <CVRow
                period={'2012 ->'}
                title={t.RESUME_SECTION_NON_PROFIT_1_TITLE}
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
                tags={[t.TECHNOLOGY, 'Linux']}
              >
                {t.RESUME_SECTION_NON_PROFIT_1_TEXT}
              </CVRow>
              <CVRow
                period={'2012 - 2015'}
                title={t.RESUME_SECTION_NON_PROFIT_2_TITLE}
                companies={[
                  {
                    name: 'Proxxi',
                    link: '',
                  },
                ]}
                tags={[t.ORGANIZATION, t.MEETUP]}
              >
                {t.RESUME_SECTION_NON_PROFIT_2_TEXT}
              </CVRow>
              <CVRow
                period={'2010 - 2015'}
                title={t.RESUME_SECTION_NON_PROFIT_3_TITLE}
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
                tags={[t.NETWORKS, t.SERVERS]}
              >
                {t.RESUME_SECTION_NON_PROFIT_3_TEXT}
              </CVRow>
            </tbody>
          </CVSectionTableStyle>
        </CVSectionTableContainerStyle>
      </CVContainerStyle>
    </>
  );
};

export default Resume;

//
// Render the page on the server before sending it to the client
//
// This function gets called at build time
export async function getStaticProps() {
  return {
    props: {},
  };
}
