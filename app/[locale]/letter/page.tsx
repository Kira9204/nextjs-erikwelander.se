import { getTranslations } from 'next-intl/server';
import { DownloadPDFImage, DownloadPDFText, LetterHeader, LetterText } from '../../../components/letter/styles';
import {
  ProfileArrowContentStyle,
  ProfileArrowStyle,
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
import {
  LinkUnderlined,
  LinkUnderlineItalic,
  SkillsListContainer,
  UnstyledCommaList,
} from '../../../components/globals/styles';
import { RICH_TEXT_TAGS } from '../../../components/globals/rich-text';
import phoneIcon from '../../../assets/img/png/phone.png';
import outlookIcon from '../../../assets/img/png/outlook.png';
import linkedinIcon from '../../../assets/img/png/linkedin.png';
import githubIcon from '../../../assets/img/png/github.png';
import downloadIcon from '../../../assets/img/svg/download.svg';
import portfolioIcon from '../../../assets/img/svg/portfolio.svg';
import universityIcon from '../../../assets/img/svg/university.svg';
import groupIcon from '../../../assets/img/svg/group.svg';

export default async function Letter({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: l } = await params;
  const t = await getTranslations({ locale: l, namespace: 'common' });
  const tr = await getTranslations({ locale: l, namespace: 'letter' });

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
      <br />
      <br />
      <a href={`/pdf/erik-welander-letter-${l.toLowerCase()}.pdf`} target={'_blank'} rel="noreferrer">
        <DownloadPDFImage src={downloadIcon} alt={'Download'} />
        <DownloadPDFText>{t('DOWNLOAD_PDF')}</DownloadPDFText>
      </a>
      <br />
      <br />
      <LetterHeader>{t('HI')}!</LetterHeader>
      <LetterText>{tr('LETTER_TEXT_1')}</LetterText>
      <LetterText>{tr('LETTER_TEXT_2')}</LetterText>
      <LetterText>{tr('LETTER_TEXT_3')}</LetterText>
      <LetterText>{tr('LETTER_TEXT_4')}</LetterText>
      <LetterText>{tr('LETTER_TEXT_5')}</LetterText>
      <LetterText>{tr('LETTER_TEXT_6')}</LetterText>
      <LetterText>{tr('LETTER_TEXT_7')}</LetterText>
      <LetterText>{tr('LETTER_TEXT_8')}</LetterText>
    </>
  );
}
