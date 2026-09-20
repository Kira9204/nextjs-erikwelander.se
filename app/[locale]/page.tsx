import React from 'react';
import { getTranslations } from 'next-intl/server';
import {
  ContactItemsStyle,
  ContactItemsSpacingStyle,
  InitialContentSpacingStyle,
  ProfileContainerStyle,
  ProfilePictureStyle,
  ProfilePictureNameStyle,
  ProfilePictureOccupationStyle,
  ProfilePictureQuoteStyle,
  IntroductionStyle,
  IntroductionFirstWordStyle,
} from '../../components/home/styles';
import { ContactItem } from '../../components/home/components';
import discordIcon from '../../assets/img/png/discord.png';
import phoneIcon from '../../assets/img/png/phone.png';
import googleChatIcon from '../../assets/img/png/google-chat.png';
import facebookIcon from '../../assets/img/png/facebook.png';
import githubIcon from '../../assets/img/png/github.png';
import linkedinIcon from '../../assets/img/png/linkedin.png';
import outlookIcon from '../../assets/img/png/outlook.png';
import twitterIcon from '../../assets/img/png/twitter.png';
import { SkillsListContainer, UnstyledCommaList } from '../../components/globals/styles';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  const tHome = await getTranslations({ locale, namespace: 'home' });

  return (
    <>
      <InitialContentSpacingStyle />
      <ProfileContainerStyle>
        <ProfilePictureStyle />
        <ProfilePictureNameStyle>
          Erik
          <br />
          Welander
        </ProfilePictureNameStyle>
        <ProfilePictureOccupationStyle>
          {t('OCCUPATION_TITLE')}
          <br />
          {t('OCCUPATION_SUBTITLE')}
        </ProfilePictureOccupationStyle>
        <ProfilePictureQuoteStyle>{t('PERSONAL_QUOTE')}</ProfilePictureQuoteStyle>
        <div style={{ height: '10px' }} />
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
      </ProfileContainerStyle>
      <ContactItemsSpacingStyle />
      <ContactItemsStyle>
        <ContactItem href={'https://discordapp.com/users/165204009303539712'} img={discordIcon} alt={'Discord'}>
          Discord
          <br />
          kira9204
        </ContactItem>
        <ContactItem href={'tel:+46737471410'} img={phoneIcon} alt={'Phone'}>
          {t('PHONE_NUMBER')}
        </ContactItem>
        <ContactItem href={'https://chat.google.com/'} img={googleChatIcon} alt={'Google Chat'}>
          Google Chat
          <br />
          erik.welander25@gmail.com
        </ContactItem>
        <ContactItem href={'https://www.facebook.com/erik.welander'} img={facebookIcon} alt={'Facebook'}>
          Facebook
        </ContactItem>
        <ContactItem href={'https://github.com/Kira9204'} img={githubIcon} alt={'Github'}>
          Github
        </ContactItem>
        <ContactItem href={'https://www.linkedin.com/in/erikwelander/'} img={linkedinIcon} alt={'Linkedin'}>
          Linkedin
        </ContactItem>
        <ContactItem href={'mailto:erik.welander@hotmail.com'} img={outlookIcon} alt={'Outlook'}>
          Outlook
          <br />
          erik.welander@hotmail.com
        </ContactItem>
        <ContactItem href={'https://twitter.com/kira9204'} img={twitterIcon} alt={'Twitter'}>
          Twitter
        </ContactItem>
      </ContactItemsStyle>
      <IntroductionStyle>
        <IntroductionFirstWordStyle>{tHome('GREETING')}</IntroductionFirstWordStyle>
        <p>{tHome('INTRODUCTION_BIO_TEXT')}</p>
        {tHome('INTRODUCTION_HOBBIES_INTRO')}
        <ul>
          <li>{tHome('INTRODUCTION_HOBBY_ANIME')}</li>
          <li>{tHome('INTRODUCTION_HOBBY_STORY_GAMES')}</li>
          <li>{tHome('INTRODUCTION_HOBBY_DIGITAL_ART')}</li>
          <li>{tHome('INTRODUCTION_HOBBY_MECHS')}</li>
          <li>{tHome('INTRODUCTION_HOBBY_ANIMALS')}</li>
          <li>{tHome('INTRODUCTION_HOBBY_WALKS')}</li>
        </ul>
        <p>
          {tHome('INTRODUCTION_CONTACT_INVITATION')}
          <br />
          {tHome('INTRODUCTION_CONTACT_RESUME_PROMPT_PREFIX')}&nbsp;<strong>{tHome('PROFESSIONAL')}</strong>&nbsp;
          {tHome('INTRODUCTION_CONTACT_RESUME_PROMPT_SUFFIX')}
        </p>
        <p>
          <i>Kira Kira</i>
        </p>
      </IntroductionStyle>
    </>
  );
}
